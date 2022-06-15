import React from 'react'
import styles from './table.scss'

export interface TableOption {
  key: string
  label?: React.ReactNode
  className?: string
  width?: React.CSSProperties['width']
  align?: "left" | "center" | "right" | "justify" | "char"
  render?: (value: any, item: Record<string, any>) => React.ReactNode
  onClick?: React.MouseEventHandler<HTMLTableCellElement>
}

export function Table({
  data,
  options
}: {
  data: Record<string, any>[]
  options: TableOption[]
}) {
  const showHeader = options.filter(i => i.label).length > 0
  return (
    <table className={styles.table}>
      {showHeader && (
        <thead>
          <tr>
            {options.map(opt => (
              <th key={opt.key}>{opt.label}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {options.map(opt => (
              <td 
                key={opt.key} 
                align={opt.align} 
                width={opt.width}
                onClick={opt.onClick}
                className={opt.className}
              >
                {opt.render ? opt.render(item[opt.key], item) : item[opt.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
