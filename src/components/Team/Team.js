import React from "react";
import classes from "./Team.module.scss";
import team1 from "../../images/team-1.jpg";
import team2 from "../../images/team-2.jpg";
import team3 from "../../images/team-3.jpg";
import team4 from "../../images/team-4.jpg";
const teamMembers = [
  {
    position: "CEO",
    name:"Капибор Борисович",
    image: team1,
  },
  {
    position: "Президент",
    name:"Карпинчо Арбузыч",
    image: team2,
  },
  {
    position: "Вице-президент",
    name:"Цапи Родент",
    image: team3,
  },
  {
    position: "Финансовый менеджер",
    name:"Барах Капиман",
    image: team4,
  },
];
export default function Team() {
  return (
    <div className={classes['team']}>
      <span className={classes['team__title']}>Познакомьтесь с нашей командой</span>
      <ul className={classes['team__list']}>
        {teamMembers.map((member) => (
          <li className={classes['team__container']}>
            <img className={classes['team__container-image']} src={member.image} alt={member.position} />
            <span className={classes['team__container-name']}>{member.name}</span>
            <span className={classes['team__container-position']}>{member.position}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
