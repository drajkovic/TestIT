import { FunctionComponent } from "react";
import styles from "./Container.module.css";

const Container: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.content}>
        <img
          className={styles.layer12Icon}
          loading="eager"
          alt=""
          src="/layer-12.svg"
        />
        <div className={styles.content1}>
          <div className={styles.maskGroup}>
            <img
              className={styles.logoBrtonigla3Icon}
              loading="eager"
              alt=""
              src="/logo-brtonigla-3@2x.png"
            />
            <img
              className={styles.maskGroupIcon}
              loading="eager"
              alt=""
              src="/mask-group@2x.png"
            />
            <img
              className={styles.htzEnBijelaPozadina2}
              loading="eager"
              alt=""
              src="/htz-en-bijela-pozadina-2@2x.png"
            />
            <img
              className={styles.funtanaLogoBijelaPozadina2}
              loading="eager"
              alt=""
              src="/funtanalogo-bijela-pozadina-2@2x.png"
            />
            <img
              className={styles.tziLogoIstraBijelaPozadinaIcon}
              loading="eager"
              alt=""
              src="/tzilogoistra-bijela-pozadina-2@2x.png"
            />
            <img
              className={styles.image72Icon}
              loading="eager"
              alt=""
              src="/image-72@2x.png"
            />
            <img
              className={styles.tzUmag2Icon}
              loading="eager"
              alt=""
              src="/tz-umag-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
