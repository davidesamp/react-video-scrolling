import { useRef, useEffect } from 'react';
import styles from './VideoScroll.module.scss';
import { SourceVideo } from '../types/video';
import cx from 'classnames';

interface VideoScrollProps {
    sources: SourceVideo[];
    /** Playback constant: pixels per second of video (default: 500) */
    playbackRate?: number;
    /** Optional class name for the wrapper */
    className?: string;
    /** Optional video height override (default: 100vh) */
    height?: string | number;
}

export const VideoScroll = ({ sources, playbackRate, className, height }: VideoScrollProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const playbackConst = playbackRate ||500;

    useEffect(() => {
        const video = videoRef.current;
        let targetTime = 0;

        const handleScroll = () => {
            if (video && video.duration > 0) {
                targetTime = Math.min(window.scrollY / playbackConst, video.duration);
            }
        };

        const updateVideoTime = () => {
            if (video && video.duration > 0) {
                const diff = targetTime - video.currentTime;
                video.currentTime += diff * 0.1; // Easing
            }
            requestAnimationFrame(updateVideoTime);
        };

        window.addEventListener("scroll", handleScroll);
        requestAnimationFrame(updateVideoTime);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    useEffect(() => {
        const video = videoRef.current;
        const scrollContainer = scrollContainerRef.current;

        const setContainerHeight = () => {
            if (video && scrollContainer) {
                scrollContainer.style.height = `${(video.duration || 1) * playbackConst}px`;
            }
        };

        if (video) {
            video.addEventListener("loadedmetadata", setContainerHeight);
        }

        return () => {
            if (video) {
                video.removeEventListener("loadedmetadata", setContainerHeight);
            }
        };
    }, []);

    return (
        <div className={cx(styles.VideoScrollWrapper, className)}>
            <div className={styles.VideoContainer}>
                <video
                    style={{ height: height ? height : '100vh' }}
                    className={styles.Video}
                    ref={videoRef}
                    preload="auto"
                    muted
                    playsInline
                    aria-hidden="true"
                    disablePictureInPicture
                    controls={false}
                    poster='../icons/no-video.png'
                >
                    {sources.map((source, index) => (
                        <source
                            key={index}
                            type={source.type}
                            src={source.src}
                        />
                    ))}
                    
                    Your browser does not support the video tag.
                </video>
            </div>
            <div ref={scrollContainerRef} className={styles.ScrollContainer} />
        </div>
    );
};
