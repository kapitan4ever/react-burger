import styles from './OrderDetails.module.css'

export default function OrderDetails({totalSum, id, statusInfo, waitMessage}) {
  return (
    <div className={styles.popup}>
      <p className={`${styles.typography} ${styles.totalSum} mt-30 mb-8 text text_type_digits-large`}>{totalSum}</p>
      <h2 className={`${styles.typography} text text_type_main-medium`}>{id}</h2>
      <div className={`${styles.status} mt-15 mb-15`}></div>
      <p className={`${styles.typography} text text_type_main-default`}>{statusInfo}</p>
      <p className={`${styles.typography} text text_type_main-default text_color_inactive mt-2 mb-30`}>{waitMessage}</p>
    </div>
  )
}