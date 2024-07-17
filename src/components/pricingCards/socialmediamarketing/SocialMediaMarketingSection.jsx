import React from 'react'
import PricingCards from '../pricingCards'
import socialMediaMarketingCardData from '../../../constants/pricingCards/socialmediamarketing'

const SocialMediaMarketingSection = ({showHeader=true}) => {
  return (
    <>
    <PricingCards 
          Title={"Social Media Marketing"} 
          pricingCards={socialMediaMarketingCardData}
          showHeader={showHeader} 
          description={"Elevate your brand's social media presence with our targeted marketing strategies. We help you engage with your audience, build brand loyalty, and drive conversions through <span>effective social media campaigns.</span> Our services include content creation, audience analysis, and performance tracking to maximize your return on investment."}/>
    </>
  )
}

export default SocialMediaMarketingSection
