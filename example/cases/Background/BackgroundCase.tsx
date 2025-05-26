import { VideoScroll } from '../../../src/components/VideoScroll';
import { SourceVideo } from '../../../src/types/video';
import styles from './BackgroundCase.module.scss';

const videoSources: SourceVideo[] = [
  {
    src: 'https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4',
    type: 'video/mp4'
  }
];

export const BackgroundCase = () => {
  return (
    <div className={styles.BackgroundVideoPage}>
      {/* Scroll-synced video in the background */}
      <div className={styles.BackgroundVideo}>
        <VideoScroll sources={videoSources} playbackRate={400} />
      </div>

      {/* Foreground content over the video */}
      <div className={styles.ContentOverlay}>
        <section className={styles.Section}>
          <h1>🌄 Welcome to the Future</h1>
          <p>Scroll down to reveal the story.</p>
        </section>

        <section className={styles.Section}>
          <h2>🚀 Power Unleashed</h2>
          <p>Watch how this product comes to life as you scroll.</p>
        </section>

        <section className={styles.Section}>
          <h2>🔍 Explore More</h2>
          <p>Seamlessly blended storytelling with scroll-based motion.</p>
        </section>
      </div>
    </div>
  );
};
