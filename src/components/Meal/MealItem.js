import React, { Fragment } from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <Fragment>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
      </div>
      <p className={classes.decription}>{props.descr}</p>
    </Fragment>
  );
};

export default MealItem;
