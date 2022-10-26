import React from 'react'
import classes from './Index.module.scss'
import indexpic from '../../images/index.png'
export default function Index() {
  return (
    <div className={classes['index']}>
        <img className={classes['index__img']} src={indexpic} alt="index"/>
        <span className={classes['index__text']}>Во времена всеобщей экономической турбулентности Carpincho остаётся самым надёжным валютным вложением. </span>
    </div>
  )
}
