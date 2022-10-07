import React from 'react'
import styles from './index.scss'
import ICON01 from './icon01.webp'
import ICON02 from './icon02.webp'
import ICON03 from './icon03.webp'
import ICON04 from './icon04.webp'
import AVATAR from './avatar.png'

const ATTRS_LIST: {
  label: string
  content: React.ReactNode
}[][] = [
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
      content: '四川，南充'
    }
  ],
  [
    {
      label: '工作',
      content: '前端，四年'
    },
    {
      label: '目前',
      content: '成都，蚂蚁集团'
    },
    {
      label: '意向',
      content: '成都，前端'
    }
  ],
  [
    {
      label: '微信',
      content: 'xueyan-site'
    },
    {
      label: '手机',
      content: <a href='tel://15070836209' target="_blank">150-7083-6209</a>
    },
    {
      label: '邮箱',
      content: <a href='mailto://xueyan@xueyan.site' target="_blank">xueyan@xueyan.site</a>
    }
  ]
]

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>

        <div className={styles.header}>
          <img className={styles.avatar} src={AVATAR}/>
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.name}>杨凡</div>
              <div className={styles.attrss}>
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
          </div>
        </div>

        <div className={styles.intro}>
          曾就业于上海小红书和拼多多，有四年前端从业经历。
          接触过微信小程序、服务端渲染程序、微前端程序、构建预渲染程序等常见前端项目类型。
          参与、独立负责和管理过大型项目，如拼多多店铺业务线，批发业务线，有从零构建和维护大型项目的经验。
        </div>

        <div className={styles.section}>
          <div className={styles.flex}>
            <div className={styles.block}>
              <div className={styles.work}>
                <img className={styles.icon} src={ICON04}/>
                <div className={styles.main}>
                  <div className={styles.name}>东华理工大学</div>
                  <div className={styles.desc}>2014.09 ~ 2018.07 ｜ 软件工程 ｜ 本科学士</div>
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.label}>作品集：</div>
                  <div className={styles.cell}>
                    <a target="_blank" href="https://xueyan.site">https://xueyan.site</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.label}>前端脚手架：</div>
                  <div className={styles.cell}>
                    <a target="_blank" href="https://xueyan.site/sdin/zh?doc=0005">https://xueyan.site/sdin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>工作经历</div>
          <div className={styles.block}>
            <div className={styles.work}>
              <img className={styles.icon} src={ICON01}/>
              <div className={styles.main}>
                <div className={styles.name}>蚂蚁集团</div>
                <div className={styles.desc}>2022.08 ~ 至今 ｜ 成都 体验技术部 ｜ 高级前端工程师</div>
                <div className={styles.content}>
                  负责 WorldFirst 平台的注册、入驻、完善资料、开通服务等基础功能；
                </div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.work}>
              <img className={styles.icon} src={ICON02}/>
              <div className={styles.main}>
                <div className={styles.name}>拼多多</div>
                <div className={styles.desc}>2019.02 ~ 2022.04（3年3月）｜ 上海 商家前端 ｜高级前端工程师</div>
                <div className={styles.content}>
                  前期：独立负责 <strong>店铺装修</strong>，包括商家店铺首页、商品详情页等装修场景；
                  <br/>
                  中期：负责 <a href="https://pifa.pinduoduo.com/">批发业务线</a>，包括移动端和 PC 端；
                  <br/>
                  后期：负责 <strong>店铺业务线</strong>，包括店铺装修、店铺基础功能（入驻、退店、填报资料、管理账号等）、平台治理（违规处罚相关功能）等业务；
                </div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.work}>
              <img className={styles.icon} src={ICON03}/>
              <div className={styles.main}>
                <div className={styles.name}>小红书</div>
                <div className={styles.desc}>
                  2018.07 ~ 2019.02（正职7个月）2017.07 ~ 2018.06（实习11个月）｜ 上海 电商 ｜ 前端工程师
                </div>
                <div className={styles.desc}></div>
                <div className={styles.content}>
                  前期：在电商B端，负责电商运营系统，和商家页面装修编辑器；
                  <br/>
                  后期：在电商C端，负责小红书 App 部分电商页面，参与建设小程序平台；
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>重要项目经历</div>
          <div className={styles.block}>
            <div className={styles.name}>
              拼多多 店铺装修
            </div>
            <div className={styles.desc}>
              2019年初 ～ 2022年4月
            </div>
            <div className={styles.content}>
              <div>独立负责搭建、维护店铺首页、专题页、品牌装修、小程序装修、模版市场等装修业务；</div>
              <div>自我调研实现，页面装修框架，推广服务于商家端所有装修和类装修业务，包括商详装修、平台协议等；</div>
              <div>技术：React、Typescript、内部组件库、自研装修框架、微前端架构（PC）、客户端组件包（移动端）；</div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.name}>
              拼多多 <a href="https://pifa.pinduoduo.com/">批发市场</a>
            </div>
            <div className={styles.desc}>
              2020年下半年 ～ 2021年下半年
            </div>
            <div className={styles.content}>
              <div>参与从零搭建批发 PC 及移动端整个过程，负责首页、商品详情页的实现、维护，和批发的业务分配工作；</div>
              <div>自我调研实现，商品 SKU 单选和多选工具包，推广服务于商家端所有选品场景；</div>
              <div>技术：React、Typescript、内部组件库、HTML构建时渲染骨架屏（PC）、服务端渲染（移动端）；</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
