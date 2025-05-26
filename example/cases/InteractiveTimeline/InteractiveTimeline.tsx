import styles from './InteractiveTimeline.module.scss';
import { VideoScroll } from '../../../src/components/VideoScroll';
import { timelineEvents } from './timelineData';

const videoSources = [
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    type: 'video/mp4',
  },
];

export const InteractiveTimeline = () => {

  const handleClick = (time: number) => {

    // Optionally scroll video into view:
    const videoElement = document.querySelector('video');
    if (videoElement) {
      window.scrollTo({
        top: videoElement.getBoundingClientRect().top + window.scrollY - 50 + time * 100, // Adjust for playback rate
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.TimelineWrapper}>
      <div className={styles.TimelineContent}>
        <div className={styles.Timeline}>
          {timelineEvents.map((event, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(event.time)}
              className={styles.TimelineButton}
            >
              {event.label}
            </button>
          ))}
        </div>

        <VideoScroll
          sources={videoSources}
          playbackRate={500}
          className={styles.VideoScrollCustom}
        />
      </div>
    </div>
  );
};
