# 🎞️ React VideoScroll Component

A React component that syncs a video’s playback with the user's scroll position, enabling scroll-driven storytelling and immersive animations.

## 🚀 Features

- 🔄 Scroll-synced video playback
- 🔧 Customizable scroll speed (`playbackRate`)
- 🎥 Supports multiple video sources
- 🧵 Extendable for timelines, parallax, or background animations

## 🔧 Usage

```
import { VideoScroll } from '@your-scope/video-scroll';

const videoSources = [
  {
    type: 'video/mp4',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
];

export const MyPage = () => (
  <VideoScroll sources={videoSources} />
);
```

## 🎛️ Props

| Prop Name    | Type | Default | Description |
| :---         |:---: |  :---:  | :---        |
| `sources`   | `SourceVideo[]`  | Required  | Array of video sources `{ type, src }` |
| `playbackRate` | `number`      | `500`      | Scroll pixels per second of video playback. |
| `className` | `string`     | `undefined`    |  Custom class name for the wrapper element. |
| `height` | `string` or `number`      |   `'100vh'`      | 	Height of the video container. Accepts units or number (assumes px). |

## 💡 Example Use Cases

Explore real-world patterns in the examples folder:

1. Fullscreen Scroll Video – Covers entire viewport

2. Centered Scroll Region – Video appears partway down a long page

3. Background Scroll Animation – Video behind content layers

4. Interactive Timeline – Jump to scenes with clickable markers

## 🛠️ Local Development

```
git clone https://github.com/davidesamp/react-video-scrolling.git
cd video-scroll
yarn install
yarn start
```

## 🤝 Contributing
Pull requests are welcome! Please open an issue first for major changes. All contributions must include tests and storybook examples if applicable.


