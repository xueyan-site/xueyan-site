import React from 'react'
import styles from './index.scss'
import { WideScreen } from 'com/wide-screen'
import { Experience, PersonalWorks, CompanyWorks } from './tables'

export default function Index() {
  return (
    <WideScreen>
      <div className={styles.page}>
        <div className={styles.section}>
          <div className={styles.title}>
            杨凡
          </div>
        </div>
        <div className={styles.section}>
          <div>
            男，25岁，四川人，软件工程学士，<strong>4年前端</strong> 开发经验。
          </div>
          <div>
            曾就职于 <strong>拼多多</strong>、<strong>小红书</strong> ，从事电商领域前端研发工作。
          </div>
        </div>
        <div className={styles.section}>
          <div>
            从事电商五年，了解电商相关业务，做过批发市场，参与过多多买菜初期建设，能触类旁通；
          </div>
          <div>
            负责装修工作五年，熟悉 “后台编辑页面至前台动态渲染” 相关业务模式；
          </div>
          <div>
            曾管理批发和店铺业务线，主导建立过批发和店铺许多重要业务，负责过相关项目 SSR 迁移工作；
          </div>
          <div>
            有前端审美能力，为商家端开发过许多组件和工具库，对代码独立、易扩展的重要性有深刻认识；
          </div>
        </div>
        <div className={styles.section}>
          <CompanyWorks/>
        </div>
        <div className={styles.section}>
          <div className={styles.block}>
            <strong>2019年初至2020年上半年</strong>，独立负责商家装修前端工作，开发了店铺首页、店铺专题页、装修模版市场等装修业务。
            期间研发的装修框架，被服务于商家端所有装修和类装修模式的业务。
          </div>
          <div className={styles.block}>
            <strong>2020年下半年</strong>，参与商家小程序的建设，后参与研发并管理批发平台（成员人数在2～4人间）。
          </div>
          <div className={styles.block}>
            <strong>2021年初至今</strong>，管理商家店铺前端业务线（包括装修、店铺、平台治理三个板块，成员人数在3～6人间），并负责部分项目的 SSR 改造，附带管理批发平台（后期交给其他组负责）。
          </div>
        </div>
        <div className={styles.section}>
          <PersonalWorks/>
        </div>
        <div className={styles.section}>
          <div>上表所列，是我近期开发的个人作品。其中有代表性的是：</div>
          {[
            {
              name: 'xueyan-react-store',
              desc: 'React 状态管理器'
            },
            {
              name: 'xueyan-react-transition',
              desc: 'React 过渡动画组件'
            },
            {
              name: 'xueyan-typescript-cli',
              desc: 'TS 脚手架，支持低成本开发 React 项目/组件、Node/Web 模块'
            }
          ].map(item => (
            <div key={item.name}>
              <a className={styles.plabel} href={`https://xueyan.site/${item.name}`} target="_blank">
                {item.name}
              </a>
              （<a href={`https://github.com/xueyan-site/${item.name}`} target="_blank">
                源码
              </a>）
              {item.desc}
            </div>
          ))}
        </div>
        <div className={styles.section}>
          <Experience/>
        </div>
        <div className={styles.section}>
          <div>微信：xueyan-site</div>
          <div>
            手机：<a href='tel://15070836209' target="_blank">150-7083-6209</a>
            （<a href='sms://15070836209' target="_blank">短信</a>）
          </div>
          <div>
            邮箱：<a href='mailto://xueyan@xueyan.site' target="_blank">xueyan@xueyan.site</a>
          </div>
          <div>
            网页：<a href='https://xueyan.site/resume' target="_blank">https://xueyan.site/resume</a>
          </div>
          <div>
            照片：<a href='https://xueyan.site/ast/avatar.webp' target="_blank">https://xueyan.site/ast/avatar.webp</a>
          </div>
        </div>
      </div>
    </WideScreen>
  )
}
