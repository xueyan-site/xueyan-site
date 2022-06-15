import React from 'react'
import styles from './tables.scss'
import XHS_LOGO from './xhs.webp'
import PDD_LOGO from './pdd.webp'
import ECUT_LOGO from './ecut.webp'
import { Table, TableOption } from './table'

const EXPERIENCE_OPTIONS: TableOption[] = [
  {
    key: 'name',
    align: 'center',
    width: '120px',
    render: (value, item) => (
      <a href={item.href} target="_blank">
        <img className={styles.logo} src={value}/>
      </a>
    )
  },
  {
    key: 'duration',
    align: 'center',
    width: '100px',
  },
  {
    key: 'desc',
    align: 'center',
    width: '200px'
  },
  {
    key: 'timeslot',
    align: 'center',
    width: '240px',
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
    desc: '商家店铺，前端'
  },
  {
    name: XHS_LOGO,
    href: 'https://www.xiaohongshu.com',
    duration: '7月',
    start: '18-07-02',
    end: '19-02-12',
    desc: '电商，前端'
  },
  {
    name: XHS_LOGO,
    href: 'https://www.xiaohongshu.com',
    duration: '11月',
    start: '17-07-03',
    end: '18-06-03',
    desc: '电商，前端实习'
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

const WORK_OPTIONS: TableOption[] = [
  {
    key: 'name',
    align: 'center',
    width: '120px',
  },
  {
    key: 'works',
    width: '540px'
  }
]

const PERSONAL_WORK_LIST = [
  {
    name: (
      <div>
        个人作品
        <br/>
        <a 
          target="_blank"
          className={styles.main}
          href="https://xueyan.site"
        >xueyan.site</a>
      </div>
    ),
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

const COMPANY_WORK_LIST = [
  {
    name: (
      <div>
        拼多多业务
      </div>
    ),
    works: (
      <div className={styles.cw}>
        <div className={styles.row}>
          <div className={styles.label}>批发</div>
          <div className={styles.cont}>
            <a href="https://pifa.pinduoduo.com" target="_blank">
              电脑端
            </a>
            （<a href="https://pifa.pinduoduo.com/goods/detail/?gid=276588921155" target="_blank">
              商详页
            </a>）、
            <a href="https://mms.pinduoduo.com/mobile-wholesale-ssr/activity-main" target="_blank">
              移动端
            </a>
            （<a href="https://mms.pinduoduo.com/mobile-wholesale-ssr/goods-detail?goodsId=276588921155&hideNaviBar=1" target="_blank">
              商详页
            </a>）            
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>装修</div>
          <div className={styles.cont}>
            <a href="https://mms.pinduoduo.com/daxue/detail?courseId=4762" target="_blank">
              店铺首页
            </a>、
            <a href="https://mms.pinduoduo.com/decoration/topics" target="_blank">
              店铺专题页
            </a>、
            <a href="https://mms.pinduoduo.com/daxue/detail?courseId=3036" target="_blank">
              商详页
            </a>、
            <a href="https://mms.pinduoduo.com/daxue/detail?courseId=3369" target="_blank">
              拼内购
            </a>、
            <a href="https://mms.pinduoduo.com/brand-decoration" target="_blank">
              品牌方
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>店铺</div>
          <div className={styles.cont}>
            <a href="https://ims.pinduoduo.com/entryflow" target="_blank">
              入驻流程
            </a>、
            <a href="https://ims.pinduoduo.com/qualifications" target="_blank">
              经营资质相关
            </a>、
            <a href="https://mms.pinduoduo.com/daxue/detail?courseId=2077" target="_blank">
              子账号相关
            </a>、
            <a href="https://mms.pinduoduo.com/mallcenter/close/index" target="_blank">
              退店流程
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>平台治理</div>
          <div className={styles.cont}>
            <a href="https://mms.pinduoduo.com/pg/violation_list/mall_manage" target="_blank">
              店铺违规
            </a>、
            <a href="https://mms.pinduoduo.com/pg/violation_list/mallgoods" target="_blank">
              商品违规
            </a>、
            <a href="https://mms.pinduoduo.com/pg/violation_list/live" target="_blank">
              直播违规
            </a>
          </div>
        </div>
      </div>
    )
  }
]

export function CompanyWorks() {
  return <Table options={WORK_OPTIONS} data={COMPANY_WORK_LIST}/>
}
