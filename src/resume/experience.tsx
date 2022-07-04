import React from 'react'
import styles from './experience.scss'
import XHS_LOGO from './xhs.webp'
import PDD_LOGO from './pdd.webp'
import ECUT_LOGO from './ecut.webp'
import { Table, TableOption } from './table'

const EXPERIENCE_OPTIONS: TableOption[] = [
  {
    key: 'name',
    align: 'center',
    width: '100px',
    render: (value, item) => (
      <a href={item.href} target="_blank">
        <img className={styles.logo} src={value}/>
      </a>
    )
  },
  {
    key: 'duration',
    align: 'center',
    width: '74px',
  },
  {
    key: 'desc',
    align: 'center',
    width: '200px'
  },
  {
    key: 'timeslot',
    align: 'center',
    width: '199px',
    render: (_value, item) => `${item.start} ~ ${item.end}`
  }
]

const EXPERIENCE_LIST = [
  {
    name: PDD_LOGO,
    href: 'https://mobile.yangkeduo.com',
    duration: '3年3月',
    start: '19-02-15',
    end: '22-04-27',
    desc: <div>商家店铺，前端（React）</div>
  },
  {
    name: XHS_LOGO,
    href: 'https://www.xiaohongshu.com',
    duration: '7月',
    start: '18-07-02',
    end: '19-02-12',
    desc: <div>电商，前端（Vue）</div>
  },
  {
    name: XHS_LOGO,
    href: 'https://www.xiaohongshu.com',
    duration: '11月',
    start: '17-07-03',
    end: '18-06-03',
    desc: <div>电商，前端实习（Vue）</div>
  },
  {
    name: ECUT_LOGO,
    href: 'https://www.ecut.edu.cn',
    duration: '4年',
    start: '14-09-01',
    end: '18-07-01',
    desc: '软件工程，本科'
  }
]

export function Experience() {
  return <Table options={EXPERIENCE_OPTIONS} data={EXPERIENCE_LIST}/>
}