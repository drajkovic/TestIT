import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import TextImageBlock from "./TextImageBlock";
import styles from "./Container2.module.css";

const Container2: FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.htzenbijelapozadina}>
        <div className={styles.enjoyYourBenefitsWrapper}>
          <div className={styles.enjoyYourBenefits}>Enjoy your benefits</div>
        </div>
        <FrameComponent
          heading="We take fun seriously"
          heading1="If you can’t have fun on your holiday, when can you?At Plava Laguna, we are committed to ensuring our guests have fun. In fact, we want them to have the time of their lives. We encourage them to dive into saltwater pools or their favourite ice-cream. We send them paragliding over the Adriatic and tempt them to dine with friends under the stars. Our ‘vacation playgrounds’ fill their holidays with joy."
          footerlinkscolumn="/frame-1424@2x.png"
        />
        <TextImageBlock
          frame1424="/frame-1424-1@2x.png"
          heading="We deliver once in a lifetime moments, everyday"
          heading1="It’s not about making our guests feel ‘at home’; it’s about making them feel that they are escaping the everyday (every single day of their holiday). We are always prepared to go the extra mile to turn the extraordinary moments they dream of into reality."
        />
        <FrameComponent
          heading="We make great service our standard"
          heading1="Every guest is a VIP. Whether they stay in one of our 5 star hotels or 2 star apartments, they can always expect the very best.At Plava Laguna, everyone is welcome. From the moment they arrive to the moment they leave, we want our guests to feel the warmth of our hospitality. So we introduce them to our beautiful Istrian countryside and the wonderful Adriatic sea. We share the delights of our national cuisine and fantastic wines. We show our guests the best of Croatia."
          footerlinkscolumn="/frame-1424-2@2x.png"
          propHeight="196px"
        />
        <TextImageBlock
          frame1424="/frame-1424-3@2x.png"
          heading="We take pride in our guests’ joy"
          heading1="Above all else, we are committed to serving happiness 24/7, to ensuring our guests leave with happy and cherished memories. Together we all make that happen for 600,000+ people every year.So, by the end of their holiday, they understand why we say ‘there’s no place like Plava Laguna’. And that’s something we can all be proud of."
          propHeight="140px"
        />
      </div>
    </section>
  );
};

export default Container2;
