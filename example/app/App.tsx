import { useState } from 'react'
import { VideoScroll } from '../../src/components/VideoScroll'
import { SourceVideo } from '../../src/types/video'
import styles from './App.module.scss'
import { CenteredCase } from '../cases/Centered/CenteredCase'
import { BackgroundCase } from '../cases/Background/backgroundCase'

const fullPageSources: SourceVideo[] = [
    {
        src: "https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4",
        type: "video/mp4"
    },
]


const App = () => {
  const [phase, setPhase] = useState<'full' | 'center'| 'background'>('full')

  const renderContent = {
    'full': <VideoScroll sources={fullPageSources} />,
    'center': <CenteredCase />,
    'background': <BackgroundCase />,
  }
  return (
    <div className={styles.Container}>
      <div className={styles.TopBar}>
        <button onClick={() => setPhase('full')}>Full-Page (Hero effetc)</button>
        <button onClick={() => setPhase('center')}>Center Page</button>
        <button onClick={() => setPhase('background')}>Background</button>
      </div>
      {renderContent[phase]}
    </div>
  )
}

export default App