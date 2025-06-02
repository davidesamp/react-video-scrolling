import { useState } from 'react'
import { VideoScroll } from '../../src/components/VideoScroll'
import { SourceVideo } from '../../src/types/video'
import styles from './App.module.scss'
import cx from 'classnames'
import { CenteredCase } from '../cases/Centered/CenteredCase'
import { BackgroundCase } from '../cases/Background/BackgroundCase'
import { InteractiveTimeline } from '../cases/InteractiveTimeline/InteractiveTimeline'

const fullPageSources: SourceVideo[] = [
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      type: "video/mp4"
    },
]

enum Phase {
  Full = 'full',
  Center = 'center',
  Background = 'background',
  Timeline = 'timeline'
}


const App = () => {
  const [phase, setPhase] = useState<Phase>(Phase.Full)

  const renderContent = {
    'full': <VideoScroll sources={fullPageSources} />,
    'center': <CenteredCase />,
    'background': <BackgroundCase />,
    'timeline': <InteractiveTimeline />,
  }

  const renderAction = (label: string, passedPhase: Phase) => (
    <div className={cx(styles.Action, {[styles.Selected] : phase === passedPhase})} onClick={() => setPhase(passedPhase)}>{label}</div>
  )

  return (
    <div className={styles.Container}>
      <div className={styles.TopBar}>
        {renderAction('Full-Page (Hero effect)', Phase.Full)}
        {renderAction('Center Page', Phase.Center)}
        {renderAction('Background', Phase.Background)}
        {renderAction('Interactive Timeline', Phase.Timeline)}
      </div>
      {renderContent[phase]}
    </div>
  )
}

export default App