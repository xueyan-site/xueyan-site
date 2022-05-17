import React from 'react'
import cn from 'classnames'
import styles from './bottom.scss'

export function Bottom({
  className,
  style,
  children
}: {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}) {
  return (
    <div className={cn(styles.bottom, className)} style={style}>
      {children}
    </div>
  )
}