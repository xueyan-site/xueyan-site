import React from 'react'
import styles from './experience.scss'
import { Table, TableOption } from './table'

const EXPERIENCE_OPTIONS: TableOption[] = [
  {
    key: 'logo',
    align: 'center',
    width: '120px',
    render: (value, item) => (
      <a href={item.href} target="_blank">
        {value ? <img className={styles.logo} src={value}/> : item.name}
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
    width: '179px',
    render: (_value, item) => `${item.start} ~ ${item.end}`
  }
]

const EXPERIENCE_LIST = [
  {
    name: '拼多多',
    href: 'https://mobile.yangkeduo.com',
    duration: '3年3月',
    start: '2019年2月',
    end: '2022年4月',
    desc: <div>商家店铺，前端（React）</div>
  },
  {
    name: '小红书',
    href: 'https://www.xiaohongshu.com',
    duration: '7月',
    start: '2018年7月',
    end: '2019年2月',
    desc: <div>电商，前端（Vue）</div>
  },
  {
    name: '小红书',
    href: 'https://www.xiaohongshu.com',
    duration: '11月',
    start: '2017年7月',
    end: '2018年6月',
    desc: <div>电商，前端实习（Vue）</div>
  },
  {
    name: '东华理工大学',
    href: 'https://www.ecut.edu.cn',
    duration: '4年',
    start: '2014年9月',
    end: '2018年7月',
    desc: '软件工程，本科'
  }
]

export function Experience({
  style
}: {
  style?: React.CSSProperties
}) {
  return <Table style={style} options={EXPERIENCE_OPTIONS} data={EXPERIENCE_LIST}/>
}