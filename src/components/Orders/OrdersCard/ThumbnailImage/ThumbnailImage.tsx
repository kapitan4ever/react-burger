import styles from "./thumbnailImage.module.css";
import { FC } from 'react';

type TThumbnail = {
  image: string;
  alt: string;
};

export const ThumbnailImage: FC<TThumbnail> = ({ image, alt }) => {
  return (
    <div className={styles.border}>
      <div className={styles.item}>
        <img className={styles.img} src={image} alt={alt} />
      </div>
    </div>
  );
};


