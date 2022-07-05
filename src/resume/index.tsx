import React from 'react'
import cn from 'classnames'
import styles from './index.scss'
import { WideScreen } from 'com/wide-screen'
import { Section } from './section'
import { Experience } from './experience'
import { PersonalWorks } from './personal-work'

export default function Index() {
  return (
    <WideScreen>
      <div className={styles.page}>
        <Section
          labelType='title'
          label="杨凡"
        >
          <div>
            男，25岁，四川人，软件工程学士。
          </div>
          <div>
            <strong>4年前端</strong> 开发经验，曾就职于 <strong>拼多多</strong>、<strong>小红书</strong>。
          </div>
          <div>
            从事电商五年；从事装修五年；曾负责拼多多批发、店铺业务线；
          </div>
          <Experience style={{ marginTop: '24px' }}/>
        </Section>

        <hr/>

        <Section
          labelType='subtitle'
          label="项目经历"
        >
          <div className={styles.block}>
            <strong>【多多店铺装修】：2019年初～至今</strong>
            <br/>
            独立负责商家装修前端工作，从零开发店铺首页、专题页、模版市场等装修业务。
            <br/>
            帮助数百万商家，向八亿用户更好的展示自家店铺和商品。
            <br/>
            期间自研的装修框架，被服务于商家端所有装修和类装修业务。
          </div>

          <div className={styles.block}>
            <strong>【多多批发业务线】：2020年下半年～2021年下半年</strong>
            <br/>
            参与开发了批发的首页和商详页，并于后期负责批发平台前端（成员2～4人）。
            <br/>
            帮助数百万商家和众多线下商家对接，降低批发门槛，实现一件代发，促进货物分销速度。
          </div>

          <div className={styles.block}>
            <strong>【多多店铺业务线】：2021年上半年～至今</strong>
            <br/>
            负责商家店铺前端业务线，包括店铺、平台治理两个板块（成员3～6人）。
            <br/>
            帮助商家入驻、退店、管理子账号、提交经营资质、申请减免处罚。
          </div>
        </Section>

        <hr/>

        <Section
          labelType='subtitle'
          label="工作技能"
        >
          <div className={cn(styles.block, styles.records)}>
            <div className={styles.label}>常用：</div>
            <div className={styles.content}>
              typescript、react
            </div>
          </div>
          <div className={cn(styles.block, styles.records)}>
            <div className={styles.label}>了解：</div>
            <div className={styles.content}>
              React调度、协调过程；
              DNS、TCP、HTTP、SSL等网络知识；
              操作系统与浏览器进程、线程，浏览器渲染帧、复合图层、task与jobs、Cookie、Session、JWT、网络缓存、CORS跨域等浏览器知识；
              作用域、原型链、this等JS基础；
            </div>
          </div>
        </Section>

        <Section
          labelType='subtitle'
          label="个人作品"
        >
          <PersonalWorks/>
          <div style={{ marginTop: '16px' }}>
            上表所列，是我近期为应聘开发的作品，以供您了解我的编程能力。其中有代表性的是：
          </div>
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
              desc: 'TS 脚手架，可在一分钟内搭建出 多项目 HTTPS 整站',
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
        </Section>

        <hr/>

        <Section
          labelType='subtitle'
          label="联系方式"
        >
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
        </Section>

      </div>
    </WideScreen>
  )
}
