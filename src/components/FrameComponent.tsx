import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  heading?: string;
  heading1?: string;
  footerlinkscolumn?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  heading,
  heading1,
  footerlinkscolumn,
  propHeight,
}) => {
  const headingStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.tZILOGOISTRAbijelapParent}>
      <div className={styles.tZILOGOISTRAbijelap}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.heading1} style={headingStyle}>
          {heading1}
        </div>
      </div>
      <img
        className={styles.footerlinkscolumnIcon}
        loading="eager"
        alt=""
        src={footerlinkscolumn}
      />
    </div>
  );
};

export default FrameComponent;
