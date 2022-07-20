import React from 'react'
import { WideScreen } from 'com/wide-screen'
import styles from './index.scss'

const ATTRS_LIST = [
  [
    {
      label: '性别',
      content: '男'
    },
    {
      label: '年龄',
      content: '25岁'
    },
    {
      label: '工作',
      content: '4年，前端'
    },
    {
      label: '籍贯',
      content: '四川，南充'
    },
    {
      label: '学历',
      content: '软件工程，本科，学士'
    }
  ],
  [
    {
      label: '目前',
      content: '在成都，已离职'
    },
    {
      label: '意向',
      content: '成都，前端开发'
    },
    {
      label: '到岗',
      content: '随时'
    }
  ],
  [
    {
      label: '手机',
      content: <a href='tel://15070836209' target="_blank">150-7083-6209</a>
    },
    {
      label: '邮箱',
      content: <a href='mailto://xueyan@xueyan.site' target="_blank">xueyan@xueyan.site</a>
    },
    {
      label: '微信',
      content: 'xueyan-site'
    }
  ]
]

export default function Index() {
  return (
    <WideScreen>
      <div className={styles.page}>

        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.name}>
              杨凡
            </div>
          </div>
          <div className={styles.right}>
            {ATTRS_LIST.map((attrs, i) => (
              <div key={i} className={styles.attrs}>
                {attrs.map((attr, j) => (
                  <div key={j} className={styles.attr}>
                    <span className={styles.label}>{attr.label}</span>
                    {attr.content}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            <span className={styles.titletxt}>个人作品</span>
          </div>
          <div className={styles.block}>
            <ol>
              <li>作品集：<a target="_blank" href="https://xueyan.site">https://xueyan.site</a></li>
              <li>Typescript 脚手架：<a target="_blank" href="https://xueyan.site/xueyan-typescript-cli/zh?doc=0005">xueyan-typescript-cli</a></li>
            </ol>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            <span className={styles.titletxt}>项目经历</span>
          </div>
          <div className={styles.block}>
            <div>
              <strong>拼多多 ・ 店铺装修 ・ 2019年初 ～ 2022年4月</strong>
            </div>
            <ol>
              <li>目的：帮助商家搭建自己的店铺页、活动页、商品介绍页；</li>
              <li>技术：React、Typescript、内部组件库、自研装修框架；</li>
              <li>独立负责商家装修前端工作，从零建立起店铺首页、专题页、模版市场等装修业务；</li>
              <li>期间自研的装修框架，被服务于商家端所有装修和类装修业务，包括商详装修、平台协议等；</li>
            </ol>
          </div>
          <div className={styles.block}>
            <div>
              <strong>拼多多 ・ 批发市场 ・ 2020年下半年 ～ 2021年下半年</strong>
            </div>
            <ol>
              <li>目的：帮助有销售渠道的商家与生产厂家对接，也为C端用户提供购买批发商品的能力；</li>
              <li>技术：React、Typescript、内部组件库、HTML构建时渲染+骨架屏；</li>
              <li>负责批发首页和商详页；</li>
              <li>实现批发的SKU多选算法，解决用户批量选品时，SKU单选选品慢的痛点；</li>
            </ol>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            <span className={styles.titletxt}>工作经历</span>
          </div>
          <div className={styles.block}>
            <div>
              <strong>拼多多（胡桃街（上海）信息技术有限公司） ・ 3年3月 ・ 前端开发 ・ 2019-02 ~ 2022-04</strong>
            </div>
            <ol>
              <li>负责商家装修业务，类似于淘宝的旺铺、京东的通天塔；</li>
              <li>负责批发市场，类似于淘宝的1688；</li>
              <li>负责平台治理，给商家提供查询、申诉或减免各种违规处罚的平台；</li>
              <li>负责店铺相关业务，帮助商家入驻、退店、管理账号、填报各种经营相关资料、协议；</li>
            </ol>
          </div>
          <div className={styles.block}>
            <div>
              <strong>小红书（行吟信息科技（上海）有限公司） ・ 7个月 ・ 前端开发 ・ 2018-07 ~ 2019-02</strong>
            </div>
            <div>
              <strong>小红书（行吟信息科技（上海）有限公司） ・ 11个月 ・ 前端实习 ・ 2017-07 ~ 2018-06</strong>
            </div>
            <ol>
              <li>实习期间，主要负责运营后台系统，和装修编辑器；</li>
              <li>转正后，负责小红书 App 电商，部分前端页面；</li>
            </ol>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            <span className={styles.titletxt}>教育经历</span>
          </div>
          <div className={styles.block}>
            <ol>
              <li><strong>东华理工大学</strong> ・ 软件工程 ・ 本科 ・ 2014年9月 ~ 2018年7月</li>
            </ol>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            <span className={styles.titletxt}>专业技能</span>
          </div>
          <div className={styles.block}>
            <ol>
              <li>熟悉 React、Typescript、Git、Charles 等前端常用工具；</li>
              <li>知道常见的数据结构与算法；</li>
              <li>了解 DNS、TCP、HTTP、SSL 等网络知识；</li>
              <li>了解进程、线程、渲染帧、合成层、微宏任务、会话、缓存、跨域等浏览器知识；</li>
            </ol>
          </div>
        </div>

      </div>
    </WideScreen>
  )
}
