import React from "react";
import classes from "./Index.module.scss";
import indexpic from "../../images/index.png";
import { ReactComponent as Arrow1 } from "../../images/arrows/arrow-long-up.svg";
import { ReactComponent as Arrow2 } from "../../images/arrows/arrow-thick-up.svg";
import { ReactComponent as Arrow3 } from "../../images/arrows/arrow-up2.svg";
import { ReactComponent as Arrow4 } from "../../images/arrows/long-arrow-up.svg";
export default function Index() {
  return (
    <div className={classes["index"]}>
      <img className={classes["index__img"]} src={indexpic} alt="index" />
      <div className={classes["index__container"]}>
        <div>
         
          <Arrow3 className={classes['index__container-arrow']}/>
        </div>
        <span className={classes["index__text"]}>
          Во времена всеобщей экономической турбулентности Carpincho остаётся
          самым надёжным валютным вложением.
        </span>
      </div>
    </div>
  );
}
