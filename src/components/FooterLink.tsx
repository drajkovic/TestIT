import { FunctionComponent } from "react";
import styles from "./FooterLink.module.css";

const FooterLink: FunctionComponent = () => {
  return (
    <div className={styles.footerLink}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.paymentMethodIcon}>
            Join us on social media
          </div>
          <div className={styles.socialMediaIcons}>
            <img className={styles.socialIcon} alt="" src="/social-icon.svg" />
            <img
              className={styles.socialIcon1}
              alt=""
              src="/social-icon-1.svg"
            />
            <img
              className={styles.socialIcon2}
              alt=""
              src="/social-icon-2.svg"
            />
            <img
              className={styles.socialIcon3}
              alt=""
              src="/social-icon-3.svg"
            />
            <img
              className={styles.socialIcon4}
              alt=""
              src="/social-icon-4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
