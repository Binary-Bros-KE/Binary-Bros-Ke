import React from 'react'
import PricingCards from '../pricingCards'
import bbKeSpecialPackagesCardData from '../../../constants/pricingCards/BBSpecialPackages'

const BBSpecialPackages = () => {
  return (
    <>
    <PricingCards
          Title={"BB KE Special Packages"}
          pricingCards={bbKeSpecialPackagesCardData} 
          description={"Discover our exclusive packages tailored to catapult first-time businesses into the online space or assist those looking to expand. Our BB KE Special Packages provide comprehensive <span>website development</span>, advanced <span>SEO services</span>, and complete <span>Google My Business setup</span>. These bespoke services cater to your specific requirements, ensuring your business stands out in the competitive digital landscape."}/>
    </>
  )
}

export default BBSpecialPackages
