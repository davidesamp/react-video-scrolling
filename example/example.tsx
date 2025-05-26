import { createRoot } from "react-dom/client";
import App from "./app/App";

// Replace the div with id "app" in index.html
const container = document.getElementById("app");
if (container) {
    const root = createRoot(container);
    root.render(
        <App />
    );
}