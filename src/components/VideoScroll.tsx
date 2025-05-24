import { useRef, useEffect } from 'react';
import './VideoScroll.css';

export const VideoScroll = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const playbackConst = 500;

    useEffect(() => {
        const video = videoRef.current;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (video) {
                        const frameNumber = window.scrollY / playbackConst;
                        video.currentTime = Math.min(frameNumber, video.duration || 1);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
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

    const videoStyles: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "auto",
        zIndex: -1,
        pointerEvents: "none",
    };

    return (
        <div className="video-scroll-wrapper">
            <div className="video-container">
                <video
                    style={videoStyles}
                    ref={videoRef}
                    className="scroll-video"
                    preload="auto"
                    muted
                    playsInline
                    aria-hidden="true"
                >
                    <source
                        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
                    />
                </video>
            </div>
            <div ref={scrollContainerRef} className="scroll-container" />
        </div>
    );
};
