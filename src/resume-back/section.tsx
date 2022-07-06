import React from 'react'
import cn from 'classnames'
import styles from './section.scss'

export function Section({
  style,
  className,
  labelType,
  labelWidth,
  label,
  children
}: {
  style?: React.CSSProperties
  className?: string
  labelType?: 'title' | 'subtitle'
  labelWidth?: React.CSSProperties['width']
  label?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div style={style} className={cn(styles.section, className)}>
      <div style={{ width: labelWidth }} className={cn(styles.label, {
        [styles.title]: labelType === 'title',
        [styles.subtitle]: labelType === 'subtitle'
      })}>
        {label}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
