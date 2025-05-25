import { createRoot } from "react-dom/client";
import { VideoScroll } from "../src/components/VideoScroll";
import { SourceVideo } from "../src/types/video";

const sources: SourceVideo[] = [
    {
        src: "https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4",
        type: "video/mp4"
    },
]

// Replace the div with id "app" in index.html
const container = document.getElementById("app");
if (container) {
    const root = createRoot(container);
    root.render(
    <VideoScroll 
        sources={sources}
    />
);
}