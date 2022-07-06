import React from 'react'
import styles from './personal-work.scss'
import { Table } from './table'
import type { TableOption } from './table'

const WORK_OPTIONS: TableOption[] = [
  {
    key: 'works',
    width: '573px'
  }
]

const PERSONAL_WORK_LIST = [
  {
    works: (
      <div className={styles.pw}>
        <div className={styles.row}>
          <div className={styles.label}>命令行工具</div>
          <div className={styles.cont}>
            {['xueyan-typescript-cli'].map((item: any) => (
              <a key={item} href={`https://xueyan.site/${item}`} target="_blank">
                <img className={styles.icon} src={`https://xueyan.site/${item}/ast/project.png`} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>React 工具</div>
          <div className={styles.cont}>
            {[
              'xueyan-react',
              'xueyan-react-style',
              'xueyan-react-store',
              'xueyan-react-executor',
              'xueyan-react-clone',
              'xueyan-react-portal',
              'xueyan-react-transition'
            ].map((item: any) => (
              <a key={item} href={`https://xueyan.site/${item}`} target="_blank">
                <img className={styles.icon} src={`https://xueyan.site/${item}/ast/project.png`} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>React 组件</div>
          <div className={styles.cont}>
            {[
              'xueyan-react-doc',
              'xueyan-react-icon',
              'xueyan-react-markdown',
              'xueyan-react-popover',
              'xueyan-react-contents',
              'xueyan-react-ellipsis',
              'xueyan-react-playground',
              'xueyan-react-list',
              'xueyan-react-link',
              'xueyan-react-button',
              'xueyan-react-select',
              'xueyan-react-input',
              'xueyan-react-drawer'
            ].map((item: any) => (
              <a key={item} href={`https://xueyan.site/${item}`} target="_blank">
                <img className={styles.icon} src={`https://xueyan.site/${item}/ast/project.png`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
]

export function PersonalWorks() {
  return <Table options={WORK_OPTIONS} data={PERSONAL_WORK_LIST}/>
}
