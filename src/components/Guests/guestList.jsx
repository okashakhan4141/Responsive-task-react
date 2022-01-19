import GuestListItem from "./guestListItem";
import styles from "./guestList.module.css";

function GuestList(props) {
  return (
    <div className={styles.guestList}>
      <GuestListItem name="Adults" description="Ages 13 or above" />
      <GuestListItem name="Children" description="Ages 2-12" />
      <GuestListItem name="Infants" description="Under 2" />
      <GuestListItem name="Pets" description="Bringing an assistance animal?" />
      <p className={styles.text}>
        If you are lucky enough to have more than 2 pets with you, be sure to
        let your host know.
      </p>
      <div className={styles.arrow} onClick={props.close}>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
    </div>
  );
}

export default GuestList;
