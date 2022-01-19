import { useEffect, useState } from "react";
import styles from "./date.module.css";

const Calander = (props) => {
  const [classes, setClasses] = useState(styles.container);

  useEffect(() => {
    setClasses(`${styles.container} ${props.active && styles.selected}`);
  }, [props]);

  return (
    <div
      className={classes}
      onClick={() => props.select(props.id, !props.active)}
    >
      <div className={styles.content}>
        <h4>{props.name}</h4>
        <p className={styles.description}>Add dates</p>
      </div>

      {props.active && <div className={styles.Calander} />}
    </div>
  );
};

export default Calander;
