import Reveal from './Reveal';
import TextBlock from './blocks/TextBlock';
import ImageBlock from './blocks/ImageBlock';
import ImagesBlock from './blocks/ImagesBlock';
import GalleryBlock from './blocks/GalleryBlock';
import StatsBlock from './blocks/StatsBlock';
import VideoBlock from './blocks/VideoBlock';
import EmbedBlock from './blocks/EmbedBlock';

/* To add a new kind of block: create a component and register it here. */
const BLOCKS = {
  text: TextBlock,
  image: ImageBlock,
  images: ImagesBlock,
  gallery: GalleryBlock,
  stats: StatsBlock,
  video: VideoBlock,
  embed: EmbedBlock,
};

export default function BlockRenderer({ blocks = [] }) {
  return blocks.map((block, i) => {
    const Component = BLOCKS[block.type];
    if (!Component) {
      console.warn(`[portfolio] unknown block type: ${block.type}`);
      return null;
    }
    return (
      <Reveal key={i}>
        <Component {...block} />
      </Reveal>
    );
  });
}
