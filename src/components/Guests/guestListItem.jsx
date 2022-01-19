import { useState } from "react";
import styles from "./guestListItem.module.css";

function GuestListItem(props) {
  const [count, setCount] = useState(0);

  const incCount = () => setCount(count + 1);
  const decCount = () => setCount(count - 1);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4>{props.name}</h4>
          <p className={styles.text}>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.btn} onClick={decCount} disabled={!count}>
            -
          </button>
          <p>{count}</p>
          <button className={styles.btn} onClick={incCount}>
            +
          </button>
        </div>
      </div>
      <div className={styles.line} />
    </>
  );
}

export default GuestListItem;
