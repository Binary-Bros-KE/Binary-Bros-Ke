import { motion } from "framer-motion";
import WebDevelopmentPricingSection from "../../components/pricingCards/webistedevelopment/WebDevelopmentPricingSection";
import SeoPricingSection from "../../components/pricingCards/seo/SeoPricingSection";
import MobileAppsSection from "../../components/pricingCards/mobileapps/MobileAppsSection";
import SocialMediaMarketingSection from "../../components/pricingCards/socialmediamarketing/SocialMediaMarketingSection";
import BBSpecialPackages from "../../components/pricingCards/BBSpecialPackages/BBSpecialPackages";


const Pricing = () => {
  return (
    <motion.div intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} >
      <div className="text-lg pricing-container">

        <div className="web_dev_cards">
        <WebDevelopmentPricingSection />
        </div>

        <div className="web_dev_cards">
          <SeoPricingSection />
        </div>

        <div className="web_dev_cards">
        <MobileAppsSection />
        </div>
        
        <div className="web_dev_cards">
        <SocialMediaMarketingSection />
        </div>
        
        <div className="web_dev_cards">
          <BBSpecialPackages />
        </div>

      </div>
    </motion.div>
  )
}

export default Pricing