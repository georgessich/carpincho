import React from 'react'
import partner1 from '../../images/partners/partner1.png'
import partner2 from '../../images/partners/partner2.png'
import partner3 from '../../images/partners/partner3.png'
import partner4 from '../../images/partners/partner4.png'
import partner5 from '../../images/partners/partner5.png'
import partner6 from '../../images/partners/partner6.png'
import classes from './Partners.module.scss'
const partners = [{
    img:partner1
}, {
    img:partner2
}, {
    img:partner3
}, {
    img:partner4
}, {
    img:partner5
}, {
    img:partner6
}]
export default function Partners() {
  return (
    <div className={classes['partners']}>
        <span className={classes['partners__title']}>
            Наши партнёры и инвесторы
        </span>
        <ul className={classes['partners__items']}>
            {partners.map((partner, i) => (
                <li key={i} className={classes['partners__container']}>
                    <img className={classes['partners__container-img']} src={partner.img} alt="partner"/>
                </li>
            ))}
        </ul>
    </div>
  )
}
