import GuestList from "./guestList";
import styles from "./guests.module.css";

function Guests(props) {
  const classes = `${styles.container} ${props.active && styles.selected}`;

  return (
    <div className={classes}>
      <div
        onClick={() => props.select(props.id, !props.active)}
        className={styles.content}
      >
        <h4>Guests</h4>
        <p className={styles.description}>Add guests</p>
      </div>

      {props.active && (
        <GuestList close={() => props.select(props.id, !props.active)} />
      )}
    </div>
  );
}

export default Guests;
