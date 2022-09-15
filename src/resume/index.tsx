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
      label: '籍贯',
      content: '四川南充'
    }
  ],
  [
    {
      label: '工作',
      content: '前端，4年'
    },
    {
      label: '目前',
      content: '成都，蚂蚁'
    },
    {
      label: '意向',
      content: '成都，国企前端 20k+'
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
              <li><a target="_blank" href="https://xueyan.site/sdin/zh?doc=0005">前端脚手架：sdin</a></li>
              <li><a target="_blank" href="https://xueyan.site">作品集：https://xueyan.site</a></li>
            </ol>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            <span className={styles.titletxt}>工作经历</span>
          </div>
          <div className={styles.block}>
            <div>
              <strong>蚂蚁金服 ・ 前端 ・ 2019-08 ~ 至今</strong>
            </div>
            <ol>
              <li>负责 WorldFirst 商家门户和入驻；</li>
            </ol>
          </div>
          <div className={styles.block}>
            <div>
              <strong>拼多多 ・ 前端 ・ 3年3月（2019-02 ~ 2022-04）</strong>
            </div>
            <ol>
              <li>负责装修业务，类似于淘宝的旺铺、京东的通天塔；</li>
              <li>参与批发市场，类似于淘宝的1688；</li>
              <li>负责平台治理，给商家提供查询、申诉或减免各种违规处罚的平台；</li>
              <li>负责店铺业务，帮助商家入驻、退店、管理账号、填报各种经营相关资料、协议；</li>
            </ol>
          </div>
          <div className={styles.block}>
            <div>
              <strong>小红书 ・ 前端 ・ 7个月（2018-07 ~ 2019-02）</strong>
            </div>
            <ol>
              <li>负责小红书 App 手机端，电商业务；</li>
            </ol>
          </div>
          <div className={styles.block}>
            <div>
              <strong>小红书 ・ 前端（实习） ・ 11个月（2017-07 ~ 2018-06）</strong>
            </div>
            <ol>
              <li>负责电商运营后台系统，和装修编辑器；</li>
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
              <li>独立负责商家装修前端工作，从零建立起店铺首页、专题页、模版市场等装修业务；</li>
              <li>期间自研的装修框架，被服务于商家端所有装修和类装修业务，包括商详装修、平台协议等；</li>
              <li>技术：React、Typescript、内部组件库、自研装修框架；</li>
            </ol>
          </div>
          <div className={styles.block}>
            <div>
              <strong>
                拼多多 ・ <a href="https://pifa.pinduoduo.com/">批发市场</a> ・ 2020年下半年 ～ 2021年下半年
              </strong>
            </div>
            <ol>
              <li>负责批发首页和商详页；</li>
              <li>实现批发的SKU多选算法，解决用户批量选品时，SKU单选选品慢的痛点；</li>
              <li>技术：React、Typescript、内部组件库、HTML构建时渲染骨架屏；</li>
            </ol>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            <span className={styles.titletxt}>教育经历</span>
          </div>
          <div className={styles.block}>
            <ol>
              <li><strong>东华理工大学</strong> ・ 软件工程 ・ 本科学士 ・ 2014年9月 ~ 2018年7月</li>
            </ol>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            <span className={styles.titletxt}>专业技能</span>
          </div>
          <div className={styles.block}>
            <ol>
              <li>常用工具：React、Sass、Typescript、Git、Charles；</li>
              <li>接触过的业务类型：移动端页面、微信小程序、服务端渲染、微服务架构、构建预渲染、直接渲染；</li>
              <li>知识储备：常见数据结构与算法；DNS、TCP、HTTP、SSL等网络知识；进程、线程、渲染帧、合成层、微宏任务、会话、缓存、跨域等浏览器知识；</li>
            </ol>
          </div>
        </div>

      </div>
    </WideScreen>
  )
}
