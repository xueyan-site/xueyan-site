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
          <div>
            从事电商五年；从事装修工作五年；曾管理拼多多批发、店铺业务线；
          </div>
        </div>
        <div className={styles.section}>
          <CompanyWorks/>
        </div>
        <div className={styles.section}>
          <div className={styles.block}>
            <strong>2019年初～2020年上半年</strong>，独立负责商家装修前端工作，从零开发店铺首页、专题页、模版市场等装修业务。
            期间自研的装修框架，被服务于商家端所有装修和类装修业务。
          </div>
          <div className={styles.block}>
            <strong>2020年下半年</strong>，参与商家小程序的建设，后参与研发并管理批发平台（成员2～4人）。
          </div>
          <div className={styles.block}>
            <strong>2021年初至今</strong>，管理商家店铺前端业务线（包括装修、店铺、平台治理三个板块，成员3～6人），负责部分项目的 SSR 改造，附带管理批发平台。
          </div>
          <hr/>
          <div>
            了解：React调度、协调过程；操作系统进程、线程；浏览器进程、线程；浏览器渲染帧；
            DNS解析；TCP连接；SSL连接和CA校验；Cookie、Session、JWT；网络缓存；CORS跨域；
            复合图层；JS作用域（闭包）、原型链和this；task与jobs；
          </div>
        </div>
        <div className={styles.section}>
          <PersonalWorks/>
        </div>
        <div className={styles.section}>
          <div>上表所列，是我近期为应聘开发的作品，以供您了解我的编程能力。其中有代表性的是：</div>
          {[
            {
              name: 'xueyan-react-transition',
              desc: 'React 过渡动画组件'
            },
            {
              name: 'xueyan-react-style',
              desc: 'React 样式主题'
            },
            {
              name: 'xueyan-typescript-cli',
              desc: <span>TS 脚手架，可在一分钟内搭建出 <strong>多项目 HTTPS 整站</strong></span>,
              href: 'https://xueyan.site/xueyan-typescript-cli/zh?doc=0005'
            }
          ].map(item => (
            <div key={item.name}>
              <a 
                className={styles.plabel}
                target="_blank"
                href={item.href || `https://xueyan.site/${item.name}`}
              >{item.name}</a>
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
          <div className={styles.footer}>
            <div className={styles.footerItem}>
              <div>微信：xueyan-site</div>
              <div>
                手机：<a href='tel://15070836209' target="_blank">150-7083-6209</a>
                （<a href='sms://15070836209' target="_blank">短信</a>）
              </div>
              <div>
                邮箱：<a href='mailto://xueyan@xueyan.site' target="_blank">xueyan@xueyan.site</a>
              </div>
            </div>
            <div className={styles.footerItem}>
              <div>
                网页：<a href='https://xueyan.site/resume' target="_blank">https://xueyan.site/resume</a>
              </div>
              <div>
                照片：<a href='https://xueyan.site/ast/avatar.webp' target="_blank">https://xueyan.site/ast/avatar.webp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WideScreen>
  )
}
