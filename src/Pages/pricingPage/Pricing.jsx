import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import WebDevelopmentPricingSection from "../../components/pricingCards/webistedevelopment/WebDevelopmentPricingSection";
import SeoPricingSection from "../../components/pricingCards/seo/SeoPricingSection";
import MobileAppsSection from "../../components/pricingCards/mobileapps/MobileAppsSection";
import SocialMediaMarketingSection from "../../components/pricingCards/socialmediamarketing/SocialMediaMarketingSection";
import BBSpecialPackages from "../../components/pricingCards/BBSpecialPackages/BBSpecialPackages";

const Pricing = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="text-lg pricing-container">

        <div className="web_dev_cards" id='WebDevPricing'>
          <WebDevelopmentPricingSection />
        </div>

        <div className="web_dev_cards" id='SeoPricing'>
          <SeoPricingSection />
        </div>

        <div className="web_dev_cards" id='MobileApplications'>
          <MobileAppsSection />
        </div>
        
        <div className="web_dev_cards" id='SocialMediaMarketing'>
          <SocialMediaMarketingSection />
        </div>

        <div className="web_dev_cards" id="BBPackages">
          <BBSpecialPackages />
        </div>

      </div>
    </motion.div>
  );
};

export default Pricing;
