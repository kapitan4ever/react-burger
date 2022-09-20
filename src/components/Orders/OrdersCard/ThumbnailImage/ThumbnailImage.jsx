import styles from "./thumbnailImage.module.css";
import propTypes from "prop-types";

export const ThumbnailImage = ({ image, alt }) => {
  return (
    <div className={styles.border}>
      <div className={styles.item}>
        <img className={styles.img} src={image} alt={alt} />
      </div>
    </div>
  );
};

ThumbnailImage.propTypes = {
  image: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
