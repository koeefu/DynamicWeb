import { useNavigate } from "react-router-dom";
import styles from "./Pages.module.css";
import Buttons from "./Buttons";

export default function OrderSummary() {
  const navigate = useNavigate();
  function handelClick() {
    navigate(-1);
  }

  return (
    <>
      <div className={styles.info}>Order confirmed!</div>
      <Buttons nah handleClick={handelClick}>
        Go back
      </Buttons>
    </>
  );
}
