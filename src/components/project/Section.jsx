/* A titled block on a project page: title on the left, text on the right. */
export default function Section({ title, children }) {
  return (
    <section className="mt-14 grid gap-4 border-t border-line pt-8 md:grid-cols-[200px_1fr] md:gap-12">
      <h2 className="m-0 font-display text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
      <div className="max-w-[62ch] text-[17px] leading-relaxed">{children}</div>
    </section>
  );
}
