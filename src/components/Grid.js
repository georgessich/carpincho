import React from "react";
import classes from "./Grid.module.scss";
import capy1 from "../images/capy1.png";
import capy2 from "../images/capy2.png";
import capy3 from "../images/capy3.png";
const cards = [
  { title: "Безопасно", text: "Быстрая, надёжная и эффективная обработка транзакций", img: capy1 },
  { title: "Надёжно", text: "Уникальная технология многофакторной аутентификации, ", img: capy2 },
  { title: "Технологично", text: "Carpincho — это CapyChain™® сеть, распределенная, с открытым исходным кодом и принадлежащая сообществу.", img: capy3 },
];

export default function Grid() {
  return <ul className={classes['grid']}>{cards.map((item) => (
    <div className={classes["grid__container"]}>
        <img className={classes["grid__container-img"]} src={item.img} alt="capy"/>
        <span className={classes["grid__container-title"]}>{item.title}</span>
        <span className={classes["grid__container-text"]}>
            {item.text}
        </span>
        
    </div>
  ))}</ul>;
}
