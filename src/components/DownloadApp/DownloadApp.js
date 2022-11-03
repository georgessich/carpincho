import React from "react";
import classes from "./DownloadApp.module.scss";
import app from "../../images/app.png";
export default function DownloadApp() {
  return (
    <div className={classes["downloadApp"]}>
      <div className={classes["downloadApp__container"]}>
       <img src={app} className={classes["downloadApp__container-img"]} />
        <div className={classes["downloadApp__container-info"]}>
          <span className={classes["downloadApp__container-title"]}>
            Управляйте своими финансами через приложение
          </span>
          <span className={classes["downloadApp__container-text"]}>
            С помощью вашего смартфона или планшета вы можете совершать все
            необходимые операции со своим счетом: оплачивать услуги, пополнять
            баланс, переводить деньги, погашать кредиты и многое другое.
          </span>
        </div>
      </div>
    </div>
  );
}
