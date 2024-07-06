import React from 'react'
import PricingCards from '../pricingCards'
import SeoCardData from "../../../constants/pricingCards/seo"

const SeoPricingSection = ({showHeader=true}) => {
  return (
    <>
      <PricingCards 
          Title={"Search Engine Optimization(SEO)"} 
          pricingCards={SeoCardData}
          showHeader={showHeader} 
          description={"Boost your online visibility with our advanced SEO services. We employ cutting-edge techniques to <span> enhance your search engine rankings, driving more organic traffic to your site.</span> Our approach includes keyword analysis, content optimization, and link-building strategies to ensure sustained growth and a strong online presence."}/>
    </>
  )
}

export default SeoPricingSection
