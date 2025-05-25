import { useRef, useEffect } from 'react';
import styles from './VideoScroll.module.scss';

export const VideoScroll = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const playbackConst = 500;

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
        <div className={styles.VideoScrollWrapper}>
            <div className={styles.VideoContainer}>
                <video
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
                    <source
                        type='video/mp4'
                        src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div ref={scrollContainerRef} className={styles.ScrollContainer} />
        </div>
    );
};
