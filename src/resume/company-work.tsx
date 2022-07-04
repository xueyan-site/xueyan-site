import React from 'react'
import styles from './company-work.scss'
import { Table } from './table'
import type { TableOption } from './table'

const WORK_OPTIONS: TableOption[] = [
  {
    key: 'works',
    width: '573px'
  }
]

const COMPANY_WORK_LIST = [
  {
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
