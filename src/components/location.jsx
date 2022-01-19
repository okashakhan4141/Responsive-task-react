import { useState } from "react";
import styles from "./location.module.css";

function Location(props) {
  const classes = `${styles.container} ${props.active && styles.selected}`;

  return (
    <div
      className={classes}
      onClick={() => props.select(props.id, !props.active)}
    >
      <div className={styles.content}>
        <h4>Location</h4>
        <p className={styles.description}>Where are you going?</p>
      </div>
    </div>
  );
}

export default Location;
