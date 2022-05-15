import React from 'react'
import { usePage } from 'xueyan-react'
import { List, ListItem } from 'xueyan-react-list'
import type { ListItemProps } from 'xueyan-react-list'

const LIST: ListItemProps[] = [
  {
    icon: <img style={{ width: '100%' }} src="https://xueyan.site/xueyan-react-doc/project.png"/>,
    label: 'xueyan-typescript-cli',
    desc: '开发命令行、模块、react组件和应用'
  },
  {
    icon: <div style={{ width: '40px', height: '40px', background: '#eee' }}></div>,
    label: 'xueyan-react-icon',
    note: '图标组件'
  }
]

export function ReactComponents() {
  const { router } = usePage()
  return (
    <List 
      label="React 组件"
      arrow={true}
      iconWidth="40px"
      icon={<div style={{ width: '40px', height: '40px', background: '#eee' }}></div>}
      onClick={item => {
        router.changeUrl('https://xueyan.site/' + item.label)
      }}
    >
      {LIST.map((item, index) => <ListItem key={index} {...item}/>)}
    </List>
  )
}
