import React from 'react'
import { WideScreen } from 'com/wide-screen'
import styles from './index.scss'

export default function Index() {
  return (
    <WideScreen>
      <div className={styles.page}>

        <h1>杨凡</h1>
        <div>
          <div>
            男，25岁，四川人，软件工程专业（本科）学士；
          </div>
          <div>
            <strong>4年前端</strong> 开发经验，曾就职于 <strong>拼多多</strong>、<strong>小红书</strong>；
          </div>
        </div>

        <h2>项目经历</h2>
        <section>
          <div>
            <strong>拼多多 店铺装修</strong> ・ 2019年初 ～ 2022年4月
          </div>
          <ol>
            <li>目的：帮助商家搭建自己的店铺首页和商品介绍页；</li>
            <li>技术：React、Typescript、内部组件库、自研装修框架；</li>
            <li>业绩1：独立负责商家装修前端工作，从零建立起店铺首页、专题页、模版市场等装修业务；</li>
            <li>业绩2：期间自研的装修框架，被服务于商家端所有装修和类装修业务，包括商详装修、平台协议等；</li>
          </ol>
        </section>
        <section>
          <div>
            <strong>拼多多 批发业务</strong> ・ 2020年下半年 ～ 2021年下半年
          </div>
          <ol>
            <li>目的：帮助有销售渠道的商家，与生产厂家直接对接，也为C端用户提供直接购买批发商品的能力；</li>
            <li>技术：React、Typescript、内部组件库、HTML构建时预渲染、骨架屏；</li>
            <li>业绩1：负责批发首页和商详页，按时稳定上线；</li>
            <li>业绩2：实现批发的SKU多选算法，使用户可以批量筛选商品；</li>
          </ol>
        </section>

        <h2>工作经历</h2>
        <section>
          <div>
            <strong>拼多多</strong>（胡桃街（上海）信息技术有限公司） ・ 3年3月 ・ 前端开发 ・ 2019-02 ~ 2022-04
          </div>
          <ol>
            <li>负责商家装修前端，帮助商家向用户个性化展示自家店铺和商品；</li>
            <li>负责批发前端，让大小商家、厂家有一个对接的平台，降低批发的门槛，促进货物分销速度；</li>
            <li>负责店铺前端，帮助商家入驻、退店、管理账号、填报各种经营相关资料、协议；</li>
            <li>负责平台治理前端，帮助商家查看、确认、申请减免各种处罚；</li>
          </ol>
        </section>
        <section>
          <div>
            <strong>小红书</strong>（行吟信息科技（上海）有限公司） ・ 7个月 ・ 前端开发 ・ 2018-07 ~ 2019-02
          </div>
          <div>
            <strong>小红书</strong>（行吟信息科技（上海）有限公司） ・ 11个月 ・ 前端实习 ・ 2017-07 ~ 2018-06
          </div>
          <ol>
            <li>负责运营后台，活动、店铺装修前端；</li>
            <li>负责小红书 App 内部分前端页面；</li>
          </ol>
        </section>

        <h2>教育经历</h2>
        <ol>
          <li><strong>东华理工大学</strong> ・ 软件工程 ・ 本科 ・ 2014年9月 ~ 2018年7月</li>
        </ol>

        <h2>专业技能</h2>
        <ol>
          <li>熟悉 React、Typescript、Git、Charles 等前端常用工具；</li>
          <li>能运用作用域、原型链、Promise 等 Javascript 特性开发项目；</li>
          <li>知道常见的数据结构与算法，能利用它们解决实际问题；</li>
          <li>了解 DNS、TCP、HTTP、SSL 等网络知识；</li>
          <li>了解进程、线程、渲染帧、合成层、微宏任务、会话、缓存、跨域等浏览器知识；</li>
        </ol>

        <h2>个人作品</h2>
        <ol>
          <li>作品集：<a target="_blank" href="https://xueyan.site">https://xueyan.site</a></li>
          <li>Typescript 脚手架：<a target="_blank" href="https://xueyan.site/xueyan-typescript-cli/zh?doc=0005">xueyan-typescript-cli</a></li>
        </ol>

        <h2>联系方式</h2>
        <ol>
          <li>微信：xueyan-site</li>
          <li>
            手机：<a href='tel://15070836209' target="_blank">150-7083-6209</a>
            （<a href='sms://15070836209' target="_blank">短信</a>）
          </li>
          <li>
            邮箱：<a href='mailto://xueyan@xueyan.site' target="_blank">xueyan@xueyan.site</a>
          </li>
        </ol>

      </div>
    </WideScreen>
  )
}
