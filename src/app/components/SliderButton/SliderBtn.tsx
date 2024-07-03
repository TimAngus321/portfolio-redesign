import styles from "./sliderBtn.module.scss";
import { ButtonProps } from "./sliderBtntypes";

const SliderBtn: React.FC<ButtonProps> = ({ label, onClick, isActive}) => {
    return (
        <button
          className={`default-btn ${styles.button} ${isActive ? styles.clickedBtn : ""}`}
          onClick={onClick}
        >
          {label}
        </button>
      );

}

export default SliderBtn;