import React from "react";
import { webDevCardData } from "../../../constants/pricingCards/webdevelopment";
import PricingCards from "../pricingCards";

const WebDevelopmentPricingSection = ({ showHeader = true }) => {
  return (
    <>
      <PricingCards
        Title={"Website Development"}
        pricingCards={webDevCardData}
        showHeader={showHeader}
        description={
          "Transform your online presence with our comprehensive web development packages. From sleek personal portfolios to robust corporate websites, we offer <span>tailored solutions to meet your unique needs.</span> Our expert team ensures every website is designed for optimal performance, user experience, and scalability."
        }
      />
    </>
  );
};

export default WebDevelopmentPricingSection;
