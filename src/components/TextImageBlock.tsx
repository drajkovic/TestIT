import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TextImageBlock.module.css";

export type TextImageBlockType = {
  frame1424?: string;
  heading?: string;
  heading1?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const TextImageBlock: FunctionComponent<TextImageBlockType> = ({
  frame1424,
  heading,
  heading1,
  propHeight,
}) => {
  const heading1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.textImageBlock}>
      <img
        className={styles.textImageBlockChild}
        loading="eager"
        alt=""
        src={frame1424}
      />
      <div className={styles.headingParent}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.heading1} style={heading1Style}>
          {heading1}
        </div>
      </div>
    </div>
  );
};

export default TextImageBlock;
