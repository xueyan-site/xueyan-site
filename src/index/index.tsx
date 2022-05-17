import React from 'react'
import { SwitchTheme } from 'xueyan-react-style'
import { NarrowScreen } from 'com/narrow-screen'
import { Header } from './header'
import { Bottom } from 'com/bottom'
import { Projects } from './projects'
import styles from './index.scss'

export default function Index() {
  return (
    <NarrowScreen>
      <Header/>
      <SwitchTheme className={styles.theme} />
      <div className={styles.lists}>
        <Projects />
      </div>
      <Bottom style={{ height: '60px' }} />
    </NarrowScreen>
  )
}
