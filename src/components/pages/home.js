import styles from "./home.module.css";
import Button from "../layout/button";

function home() {
  return (
    <div className={styles.home}>
      <div>home</div>
      <Button text="página de home" />
    </div>
  );
}

export default home;
