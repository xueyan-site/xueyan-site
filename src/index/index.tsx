import React from 'react'
import { SwitchTheme } from 'solor'
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
      <Bottom className={styles.bottom}>
        <a href="https://beian.miit.gov.cn">蜀ICP备2021030705号-1</a>
      </Bottom>
    </NarrowScreen>
  )
}
