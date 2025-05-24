import { createRoot } from "react-dom/client";
import { VideoScroll } from "../src/components/VideoScroll";

// Replace the div with id "app" in index.html
const container = document.getElementById("app");
if (container) {
    const root = createRoot(container);
    root.render(<VideoScroll />);
}