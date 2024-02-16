import { FunctionComponent } from "react";
import styles from "./AboutInfoBlock.module.css";

const AboutInfoBlock: FunctionComponent = () => {
  return (
    <section className={styles.aboutInfoBlock}>
      <h1 className={styles.heading}>
        Creating extraordinary holidays since 1957.
      </h1>
      <div className={styles.buttonbase}>
        <div className={styles.heading1}>
          <p
            className={styles.theHappiestMemories}
          >{`The happiest memories come from more than just a hotel – they’re formed in places where guests can do everything, nothing, and anything in between. `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.weCreateVacation}>
            We create ‘vacation playgrounds’ like Poreč, Umag, Rijeka; unique
            resorts where we host Croatia’s best holidays. Whether guests seek
            to discover a local delicacy or simply relax by the pool, spend days
            exploring the great outdoors or leap, carefree, into the deep blue
            Adriatic sea, at our resorts it’s all possible.
          </p>
        </div>
        <div className={styles.container} />
        <div className={styles.content}>
          <div className={styles.layer}>
            <div className={styles.heading2}>4</div>
            <div className={styles.heading3}>Resorts</div>
          </div>
          <div className={styles.layer1}>
            <div className={styles.heading4}>25</div>
            <div className={styles.heading5}>Hotels</div>
          </div>
          <div className={styles.layer2}>
            <div className={styles.heading6}>13</div>
            <div className={styles.heading7}>
              <p className={styles.apartment}>Apartment</p>
              <p className={styles.communities}>communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfoBlock;
