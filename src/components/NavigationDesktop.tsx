import { FunctionComponent } from "react";
import styles from "./NavigationDesktop.module.css";

const NavigationDesktop: FunctionComponent = () => {
  return (
    <header className={styles.navigationDesktop}>
      <div className={styles.mainNavigation}>
        <div className={styles.left}>
          <div className={styles.navItem}>
            <div className={styles.buttonBase}>
              <b className={styles.layerContainer}>Accommodation</b>
              <img
                className={styles.navigationDesktopvariant4}
                alt=""
                src="/navigation--desktopvariant4@2x.png"
              />
            </div>
          </div>
          <div className={styles.navItem1}>
            <div className={styles.buttonBase1}>
              <b className={styles.text}>Resorts</b>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>
          <div className={styles.navItem2}>
            <div className={styles.buttonBase2}>
              <b className={styles.text1}>Experience</b>
              <img
                className={styles.navigationDesktopvariant41}
                alt=""
                src="/navigation--desktopvariant4@2x.png"
              />
            </div>
          </div>
          <div className={styles.navItem3}>
            <div className={styles.buttonBase3}>
              <b className={styles.text2}>Special offers</b>
              <img
                className={styles.chevronDownIcon1}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.plLogo}>
          <img
            className={styles.plLogo1Icon}
            loading="eager"
            alt=""
            src="/pllogo-1.svg"
          />
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <div className={styles.navItem4}>
              <div className={styles.buttonBase4}>
                <b className={styles.frameContent}>Plava Laguna Club</b>
                <img
                  className={styles.chevronDownIcon2}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
            <div className={styles.navItem5}>
              <div className={styles.buttonBase5}>
                <b className={styles.text3}>News</b>
                <img
                  className={styles.chevronDownIcon3}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
            <div className={styles.navItem6}>
              <div className={styles.buttonBase6}>
                <b className={styles.text4}>Contact</b>
                <img
                  className={styles.chevronDownIcon4}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.right1}>
              <img
                className={styles.materialIcons}
                loading="eager"
                alt=""
                src="/material-icons.svg"
              />
              <img
                className={styles.materialIcons1}
                loading="eager"
                alt=""
                src="/material-icons-1.svg"
              />
              <button className={styles.buttons}>
                <img
                  className={styles.materialIcons2}
                  alt=""
                  src="/material-icons-2.svg"
                />
                <b className={styles.heading}>Log in</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationDesktop;
