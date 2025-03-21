import { personalProj } from "../types/workTypes";
import styles from "../style/projCardStyle.module.scss";
import useProjCard from "../hooks/useProjCard";
import projMobileStyle from "../style/projCardStyle.module.scss";

const UiUXCard = (props: personalProj) => {
    const {
      link,
      name,
      desc,
      techTitle,
      techStack,
      img,
      uniqueInfo,
    } = useProjCard(props);

  return (
    <div className={projMobileStyle?.mobileCard}>
      <a
        href={link}
        className={styles?.projCard}
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: "95%" }}
      >
        <img src={img} alt={name} className={styles?.projCardImg} style={{ height: "100%", objectFit: "contain" }} />
        <div className={styles?.scrollCards}>
          <div className={styles?.companyInfo} style={{ width: "75%", alignSelf: "center"}}>
            <h4 className={styles?.uniqueInfo}>{uniqueInfo}</h4>
            <h4 className={styles?.company}>{name}</h4>
            <p className={styles?.companyName} >{desc}</p>
          </div>
          <div className={styles?.projectInfo} style={{ width: "75%", alignSelf: "center"}}>
            <h4 className={styles?.project}>{techTitle}</h4>
            <p className={styles?.projectInfo} >{techStack}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
export default UiUXCard;
