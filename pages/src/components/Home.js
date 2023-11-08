import { useNavigate } from "react-router-dom";
import styles from "./Pages.module.css";
import Buttons from "./Buttons";

export default function Home() {
  const navigate = useNavigate();
  function handelClick() {
    navigate("order-summary");
  }

  return (
    <>
      <div className={styles.info}>Home page</div>
      <Buttons nah handleClick={handelClick}>
        Place order!
      </Buttons>
    </>
  );
}
