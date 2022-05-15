import React, { useState } from 'react'
import COVER_IMG from './cover.webp'
import styles from './header.scss'

export function Header() {
  const [visible, setVisible] = useState(false)
  return (
    <div 
      className={styles.header}
      style={{ height: visible ? '54rem' : '30rem' }}
      onClick={() => setVisible(!visible)}
    >
      <img className={styles.cover} src={COVER_IMG} />
      <div className={styles.mask}/>
      <div className={styles.banner}>
        <img className={styles.avatar} src={XT_PATH + 'xueyan-icon-rounded.png'} />
        <div className={styles.info}>
          <div className={styles.name}>雪砚</div>
          <div className={styles.desc}>xueyan-site</div>
        </div>
      </div>
    </div>
  )
}
