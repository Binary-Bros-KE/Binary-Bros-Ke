import React from 'react'
import PricingCards from '../pricingCards'
import mobileAppCardData from '../../../constants/pricingCards/mobileapps'

const MobileAppsSection = () => {
  return (
    <>
    <PricingCards 
        Title={"Mobie Applications"} 
        pricingCards={mobileAppCardData} 
        description={"Bring your business to the fingertips of your customers with our mobile application development services. <span> We create intuitive, user-friendly apps for both Android and iOS platforms,</span> designed to enhance user engagement and streamline your business operations. Our apps are built for performance, security, and seamless integration with your existing systems."}/>
    </>
  )
}

export default MobileAppsSection
