import React from 'react';
import SeoCard2 from './SeoCard2';

const cardData = [
  {
    title: 'Basic',
    price: 'Ksh 5,000',
    description: 'Ideal for startups and small businesses aiming to boost their online visibility and attract more customers. Our Basic package provides essential SEO services to kickstart your digital presence.',
    button: 'Get Started',
    consist: 'Package Includes:',
    item1: 'Up To 10 Keyword Optimization',
    item2: 'Search Engine Friendly Analysis',
    item3: 'Monthly Reporting on Performance',
    item4: 'On-Page SEO Optimization',
    item5: 'Technical SEO Audit',
    item6: 'Competitor Analysis',
    item7: 'Basic Link Building Strategy'
  },
  {
    title: 'Standard',
    price: 'Ksh 9,500',
    description: 'Designed for growing businesses seeking to expand their reach and outrank competitors. Our Standard package offers comprehensive SEO solutions tailored to your specific industry and target audience.',
    button: 'Get Started',
    consist: 'Includes Everything in the Basic Package Plus:',
    item1: 'Up To 20 Keyword Optimization',
    item2: 'Search Engine Friendly Analysis',
    item3: 'Monthly Reporting on Performance',
    item4: 'Local SEO For Your Google My Business Profile',
    item5: 'On-Page and Off-Page SEO Optimization',
    item6: 'SEO Content Writing or Creation',
    item7: 'Advanced Link Building Strategy',
    item8: 'Mobile SEO Optimization',
    item9: 'Schema Markup Implementation'
  },
  {
    title: 'Premium',
    price: 'Ksh 18,000',
    description: 'Our Premium package is the ultimate solution for established businesses aiming to dominate the search engine results and maintain a competitive edge. With advanced SEO strategies, your business will thrive in the digital landscape.',
    button: 'Get Started',
    consist: 'Includes Everything in the Standard Package Plus:',
    item1: 'Up To 40 Keyword Optimization',
    item2: 'On-Page and Off-Page SEO Optimization',
    item3: 'Monthly Reporting on Performance',
    item4: 'Search Engine Friendly Analysis',
    item5: 'Local SEO For Your Google My Business Profile',
    item6: 'SEO Content Writing or Creation',
    item7: 'Comprehensive Link Building Strategy',
    item8: 'Advanced Technical SEO Implementation',
    item9: 'Conversion Rate Optimization (CRO)',
    item10: 'Social Media Integration for SEO'
  }
];


const SeoCardList2 = () => {
  return (
    <div className="card-container even-columns sm:grid-cols-2">
      {cardData.map((card, index) => (
        <SeoCard2 key={index} {...card} />
      ))}
    </div>
  )
}

export default SeoCardList2