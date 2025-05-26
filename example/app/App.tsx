import { useState } from 'react'
import { VideoScroll } from '../../src/components/VideoScroll'
import { SourceVideo } from '../../src/types/video'
import styles from './App.module.scss'
import { CenteredCase } from '../cases/Centered/CenteredCase'
import { BackgroundCase } from '../cases/Background/backgroundCase'
import { InteractiveTimeline } from '../cases/InteractiveTimeline/InteractiveTimeline'

const fullPageSources: SourceVideo[] = [
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      type: "video/mp4"
    },
]


const App = () => {
  const [phase, setPhase] = useState<'full' | 'center' | 'background' | 'timeline'>('full')

  const renderContent = {
    'full': <VideoScroll sources={fullPageSources} />,
    'center': <CenteredCase />,
    'background': <BackgroundCase />,
    'timeline': <InteractiveTimeline />,
  }
  return (
    <div className={styles.Container}>
      <div className={styles.TopBar}>
        <button onClick={() => setPhase('full')}>Full-Page (Hero effetc)</button>
        <button onClick={() => setPhase('center')}>Center Page</button>
        <button onClick={() => setPhase('background')}>Background</button>
        <button onClick={() => setPhase('timeline')}>Interactive Timeline</button>
      </div>
      {renderContent[phase]}
    </div>
  )
}

export default App