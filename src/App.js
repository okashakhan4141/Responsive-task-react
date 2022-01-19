import styles from "./App.module.css";
import Calander from "./components/date";
import Location from "./components/location";
import Guests from "./components/Guests/guests";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState([false, false, false, false]);
  const select = (id, status) => {
    const s = [false, false, false, false];
    s[id] = status;
    setSelected(s);
  };

  return (
    <ul className={styles.container}>
      <Location active={selected[0]} select={select} id={0} />

      <div className={styles.verticalLine} />

      <Calander name="Check in" active={selected[1]} select={select} id={1} />

      <div className={styles.verticalLine} />

      <Calander name="Check out" active={selected[2]} select={select} id={2} />

      <div className={styles.verticalLine} />

      <Guests active={selected[3]} select={select} id={3} />

      <div className={styles.search}>
        <ion-icon name="search-outline"></ion-icon>
        <p className={styles.searchText}>Search</p>
      </div>
    </ul>
  );
}

export default App;
