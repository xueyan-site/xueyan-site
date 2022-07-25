import React, { Fragment, useEffect, useState } from 'react'
import cn from 'classnames'
import { List, ListItem } from 'xueyan-react-list'
import styles from './projects.scss'
import type { ListProps, ListItemProps } from 'xueyan-react-list'

const PROJECT_MAP: Record<string, ListItemProps> = {
  'xueyan-site': {
    label: 'xueyan-site',
    desc: 'https://xueyan.site',
    option: '本站点',
    arrow: false,
    href: undefined,
    image: P_ASSETS_PATH + 'project.png'
  },
  'sdin-react': {
    name: 'sdin-react',
    desc: 'React 应用程序辅助包'
  },
  'xueyan-react-drawer': {
    name: 'xueyan-react-drawer',
    option: '抽屉'
  },
  'xueyan-react-link': {
    name: 'xueyan-react-link',
    desc: '以链接的形式渲染图片和文本',
    option: '链接'
  },
  'xueyan-react-portal': {
    name: 'xueyan-react-portal',
    desc: 'React Portal',
    option: '传送门'
  },
  'sdin': {
    name: 'sdin',
    desc: '开发命令行、模块、react组件和应用'
  },
  'xueyan-react-button': {
    name: 'xueyan-react-button',
    option: '按钮',
  },
  'xueyan-react-ellipsis': {
    name: 'xueyan-react-ellipsis',
    option: '省略'
  },
  'xueyan-react-list': {
    name: 'xueyan-react-list',
    option: '列表'
  },
  'xueyan-react-select': {
    name: 'xueyan-react-select',
    option: '选择'
  },
  'xueyan-react-clone': {
    name: 'xueyan-react-clone',
    desc: '保留 ref，自定义合并 props',
    option: '克隆元素'
  },
  'xueyan-react-executor': {
    name: 'xueyan-react-executor',
    desc: '组件函数化',
    option: '执行器'
  },
  'xueyan-react-markdown': {
    name: 'xueyan-react-markdown',
    desc: '渲染 Markdown 字符串',
    option: 'MD'
  },
  'xueyan-react-store': {
    name: 'xueyan-react-store',
    desc: 'React Context',
    option: '管理状态'
  },
  'xueyan-react-contents': {
    name: 'xueyan-react-contents',
    option: '目录'
  },
  'xueyan-react-icon': {
    name: 'xueyan-react-icon',
    desc: 'SVG 图标，可自定义',
    option: '图标'
  },
  'xueyan-react-playground': {
    name: 'xueyan-react-playground',
    desc: '封装 react-live 组件',
    option: '编辑运行'
  },
  'xueyan-react-style': {
    name: 'xueyan-react-style',
    desc: '自动切换暗黑模式',
    option: '样式'
  },
  'xueyan-react-doc': {
    name: 'xueyan-react-doc',
    desc: '可配置多个语言、版本和集合',
    option: '文档'
  },
  'xueyan-react-input': {
    name: 'xueyan-react-input',
    option: '输入'
  },
  'xueyan-react-popover': {
    name: 'xueyan-react-popover',
    option: '弹出框'
  },
  'xueyan-react-transition': {
    name: 'xueyan-react-transition',
    desc: '实现复杂过渡效果',
    option: '过渡'
  }
}

const PROJECT_MATRIX: {
  props: ListProps,
  list: ListItemProps[]
}[] = [
  {
    props: {
      label: '命令行工具'
    },
    list: [
      PROJECT_MAP['sdin']
    ]
  },
  {
    props: {
      label: 'React 应用程序'
    },
    list: [
      PROJECT_MAP['xueyan-site']
    ]
  },
  {
    props: {
      label: 'React 工具包'
    },
    list: [
      PROJECT_MAP['sdin-react'],
      PROJECT_MAP['xueyan-react-style'],
      PROJECT_MAP['xueyan-react-store'],
      PROJECT_MAP['xueyan-react-executor'],
      PROJECT_MAP['xueyan-react-clone'],
      PROJECT_MAP['xueyan-react-portal'],
      PROJECT_MAP['xueyan-react-transition']
    ]
  },
  {
    props: {
      label: 'React 组件'
    },
    list: [
      PROJECT_MAP['xueyan-react-doc'],
      PROJECT_MAP['xueyan-react-icon'],
      PROJECT_MAP['xueyan-react-markdown'],
      PROJECT_MAP['xueyan-react-popover'],
      PROJECT_MAP['xueyan-react-contents'],
      PROJECT_MAP['xueyan-react-ellipsis'],
      PROJECT_MAP['xueyan-react-playground'],
      PROJECT_MAP['xueyan-react-list'],
      PROJECT_MAP['xueyan-react-link'],
      PROJECT_MAP['xueyan-react-button'],
      PROJECT_MAP['xueyan-react-select'],
      PROJECT_MAP['xueyan-react-input'],
      PROJECT_MAP['xueyan-react-drawer'],
    ]
  }
]

function ProjectIcon({
  item
}: {
  item: ListItemProps
}) {
  const [src, setSrc] = useState<string>()
  useEffect(() => {
    const src = item.image || `https://xueyan.site/${item.name}/ast/project.png`
    const img = document.createElement('img')
    img.setAttribute('src', src)
    img.onload = () => setSrc(src)
    img.onerror = () => setSrc('')
  }, [item.image])
  return src ? (
    <img className={styles.icon} src={src} />
  ) : (
    <div className={cn(styles.icon, styles.empty)} />
  )
}

export function Projects() {
  return (
    <Fragment>
      {PROJECT_MATRIX.map((list, i) => (
        <List
          key={i}
          arrow={true}
          target="_blank"
          {...list.props}
        >
          {list.list.map((item, j) => (
            <ListItem 
              key={j}
              label={item.name}
              icon={<ProjectIcon item={item}/>}
              href={item.name && ('https://xueyan.site/' + item.name)}
              {...item}
            />
          ))}
        </List>
      ))}
    </Fragment>
  )
}
