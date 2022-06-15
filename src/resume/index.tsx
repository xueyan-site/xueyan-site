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
            男，25岁，四川人，软件工程学士，<strong>4年前端</strong> 开发经验
          </div>
          <div>
            曾就职于 <strong>拼多多</strong>、<strong>小红书</strong> ，从事电子商务方面，前端研发，或其管理类工作
          </div>
          <div>
            寻求 <strong>成都地区</strong>，以 <strong>React</strong> 或 <strong>Vue</strong> 为主要技术栈的，前端研发，或其管理类岗位
          </div>
        </div>
        <div className={styles.section}>
          <Experience/>
        </div>
        <div className={styles.section}>
          <CompanyWorks/>
        </div>
        <div className={styles.section}>
          <div className={styles.block}>
            <strong>2019年初至2020年上半年</strong>，独立负责商家装修工作，开发了店铺首页、店铺专题页、装修模版市场等装修业务。
            期间，制作了装修框架，拼多多后台所有装修或者类似装修形式的业务，都是用它搭建的。
          </div>
          <div className={styles.block}>
            <strong>2020年下半年</strong>，转战低代码平台和商家小程序，后加入商家批发项目并成为负责人。
          </div>
          <div className={styles.block}>
            <strong>2021年初至今</strong>，负责商家店铺业务线，包括装修、店铺和平台治理三个板块，附带管理批发项目（后交给其他组负责）。
            团队人数最多的时候有6人，最少的时候有3人。
          </div>
        </div>
        <div className={styles.section}>
          <PersonalWorks/>
        </div>
        <div className={styles.section}>
          <div className={styles.block}>
            <div>上表所列，是我近期开发的个人作品。你可通过它们，了解我的前端开发能力。</div>
            <div>以下项目，是比较有代表性的：</div>
            {[
              {
                name: 'xueyan-react-store',
                desc: 'React 状态管理器'
              },
              {
                name: 'xueyan-react-transition',
                desc: '类似 Vue Transition 的 React 过渡组件'
              },
              {
                name: 'xueyan-typescript-cli',
                desc: '开发 React 项目/组件、Node/Web 模块的 TS 脚手架'
              }
            ].map(item => (
              <div key={item.name}>
                <a className={styles.plabel} href={`https://xueyan.site/${item.name}`} target="_blank">
                  {item.name}
                </a>
                (<a href={`https://github.com/xueyan-site/${item.name}`} target="_blank">
                  源码
                </a>) {item.desc}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.footerline}/>
          <div>
            微信：xueyan-site
          </div>
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
        </div>
      </div>
    </WideScreen>
  )
}