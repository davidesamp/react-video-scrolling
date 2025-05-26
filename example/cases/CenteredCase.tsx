
import { VideoScroll } from '../../src/components/VideoScroll';
import { SourceVideo } from '../../src/types/video';
import styles from './CenteredCase.module.scss';

const videoSources: SourceVideo[] = [
  {
    src: 'https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4',
    type: 'video/mp4'
  }
];

export const CenteredCase = () => {
  return (
    <div className={styles.DemoWrapper}>
      <section className={styles.Placeholder}>
        <h2>🧭 Scroll Down to Trigger Video</h2>
      </section>

      <div className={styles.VideoSection}>
        <VideoScroll sources={videoSources} playbackRate={400} />
      </div>

      <section className={styles.Placeholder}>
        <h2>📄 More Content Below</h2>
      </section>
    </div>
  );
};
