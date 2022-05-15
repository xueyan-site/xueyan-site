import React from 'react'
import { SwitchTheme } from 'xueyan-react-style'
import { NarrowScreen } from 'com/narrow-screen'
import { Header } from './header'
import { ReactComponents } from './react-components'
import styles from './index.scss'

export default function Index() {
  return (
    <NarrowScreen>
      <Header/>
      <SwitchTheme className={styles.theme} />
      <div className={styles.lists}>
        <ReactComponents/>
      </div>
    </NarrowScreen>
  )
}
