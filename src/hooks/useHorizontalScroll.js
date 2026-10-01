import { useCallback, useEffect, useRef, useState } from 'react';
import { TOTAL_PANELS } from '../constants/panels';

/*
  Turns vertical wheel / trackpad scrolling into smooth horizontal travel
  across a row of full-width panels.

  Returns:
    scrollerRef  attach to the overflow-x container
    active       index of the panel currently centered
    goTo(i)      smooth-scroll to panel i

  Side effects while scrolling:
    --p  on <html>        overall progress 0..1
    --o  on each panel    its offset from the viewport, in screens (parallax)
*/
export function useHorizontalScroll() {
  const scrollerRef = useRef(null);
  const goRef = useRef(() => {});
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;

    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const panels = Array.from(el.querySelectorAll('[data-panel]'));

    let target = el.scrollLeft;
    let last = el.scrollLeft;
    let raf = 0;
    const max = () => el.scrollWidth - el.clientWidth;

    const update = () => {
      const w = el.clientWidth;
      const left = el.scrollLeft;
      const m = max();
      root.style.setProperty('--p', m > 0 ? (left / m).toFixed(4) : '0');
      panels.forEach((p, i) => p.style.setProperty('--o', ((i * w - left) / w).toFixed(3)));
      setActive(Math.round(left / w));
    };

    // ease scrollLeft toward `target`
    const tick = () => {
      const diff = target - el.scrollLeft;
      if (Math.abs(diff) < 0.5) {
        el.scrollLeft = target;
        last = el.scrollLeft;
        raf = 0;
        return;
      }
      let step = diff * 0.11;
      if (Math.abs(step) < 1) step = Math.sign(diff) * Math.min(1, Math.abs(diff));
      el.scrollLeft += step;
      last = el.scrollLeft;
      raf = requestAnimationFrame(tick);
    };

    const moveTo = (x) => {
      target = Math.max(0, Math.min(max(), x));
      if (reduce) {
        el.scrollLeft = target;
        return;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };
    goRef.current = (i) => moveTo(i * el.clientWidth);

    const onWheel = (e) => {
      if (e.ctrlKey) return; // let pinch-zoom through
      e.preventDefault();
      const d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      moveTo(target + d * (e.deltaMode === 1 ? 32 : 1));
    };

    // touch drags, scrollbar, focus jumps: keep our target in sync
    const onScroll = () => {
      if (!raf && Math.abs(el.scrollLeft - last) > 1) target = el.scrollLeft;
      last = el.scrollLeft;
      update();
    };

    const onKey = (e) => {
      const cur = Math.round(target / el.clientWidth);
      if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        goRef.current(Math.min(TOTAL_PANELS - 1, cur + 1));
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        goRef.current(Math.max(0, cur - 1));
      } else if (e.key === 'Home') {
        e.preventDefault();
        goRef.current(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goRef.current(TOTAL_PANELS - 1);
      }
    };

    const onResize = () => {
      target = Math.min(target, max());
      update();
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    el.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = useCallback((i) => goRef.current(i), []);

  return { scrollerRef, active, goTo };
}
