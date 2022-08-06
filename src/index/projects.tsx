import React, { Fragment, useEffect, useState } from 'react'
import cn from 'classnames'
import { List, ListItem } from 'ark-list'
import styles from './projects.scss'
import type { ListProps, ListItemProps } from 'ark-list'

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
  'stine': {
    name: 'stine',
    desc: 'React Context',
    option: '管理状态'
  },
  'solor': {
    name: 'solor',
    desc: '支持暗黑模式',
    option: '样式'
  },
  'sicon': {
    name: 'sicon',
    desc: 'SVG 图标，可自定义',
    option: '图标'
  },
  'ark-drawer': {
    name: 'ark-drawer',
    option: '抽屉'
  },
  'ark-link': {
    name: 'ark-link',
    desc: '以链接的形式渲染图片和文本',
    option: '链接'
  },
  'ark-portal': {
    name: 'ark-portal',
    desc: 'React Portal',
    option: '传送门'
  },
  'sdin': {
    name: 'sdin',
    desc: '开发命令行、模块、react组件和应用'
  },
  'ark-button': {
    name: 'ark-button',
    option: '按钮',
  },
  'ark-ellipsis': {
    name: 'ark-ellipsis',
    option: '省略'
  },
  'ark-list': {
    name: 'ark-list',
    option: '列表'
  },
  'ark-select': {
    name: 'ark-select',
    option: '选择'
  },
  'ark-clone': {
    name: 'ark-clone',
    desc: '保留 ref，自定义合并 props',
    option: '克隆元素'
  },
  'ark-executor': {
    name: 'ark-executor',
    desc: '组件函数化',
    option: '执行器'
  },
  'ark-markdown': {
    name: 'ark-markdown',
    desc: '渲染 Markdown 字符串',
    option: 'MD'
  },
  'ark-contents': {
    name: 'ark-contents',
    option: '目录'
  },
  'ark-playground': {
    name: 'ark-playground',
    desc: '封装 react-live 组件',
    option: '编辑运行'
  },
  'ark-doc': {
    name: 'ark-doc',
    desc: '可配置多个语言、版本和集合',
    option: '文档'
  },
  'ark-input': {
    name: 'ark-input',
    option: '输入'
  },
  'ark-popover': {
    name: 'ark-popover',
    option: '弹出框'
  },
  'ark-transition': {
    name: 'ark-transition',
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
      label: '应用程序'
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
      PROJECT_MAP['solor'],
      PROJECT_MAP['stine'],
      PROJECT_MAP['sicon'],
      PROJECT_MAP['sdin-react'],
      PROJECT_MAP['ark-executor'],
      PROJECT_MAP['ark-clone'],
      PROJECT_MAP['ark-portal'],
      PROJECT_MAP['ark-transition']
    ]
  },
  {
    props: {
      label: 'React 组件'
    },
    list: [
      PROJECT_MAP['ark-doc'],
      PROJECT_MAP['ark-markdown'],
      PROJECT_MAP['ark-popover'],
      PROJECT_MAP['ark-contents'],
      PROJECT_MAP['ark-ellipsis'],
      PROJECT_MAP['ark-playground'],
      PROJECT_MAP['ark-list'],
      PROJECT_MAP['ark-link'],
      PROJECT_MAP['ark-button'],
      PROJECT_MAP['ark-select'],
      PROJECT_MAP['ark-input'],
      PROJECT_MAP['ark-drawer'],
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
