import React from 'react';
import SeoCard2 from './SeoCard2';

const cardData = [
  {
    title: 'Basic',
    price: 'Ksh 10 000',
    description: 'Lorem ipsum dolor sit amet consectetur',
    button: 'Get Started',
    consist: 'Consist:',
    item1: 'Up To 10 Keywords Optimization',
    item2: 'Search Engine Friendly Analysis',
    item3: 'Monthly Reporting',
    item4: 'On-Page SEO Optimization'
  },
  {
    title: 'Standard',
    price: 'Ksh 15 000',
    description: 'Lorem ipsum dolor sit amet',
    button: 'Get Started',
    consist: 'Everything from basic package',
    item1: 'Up To 20 Keywords Optimization',
    item2: 'Search Engine Friendly Analysis',
    item3: 'Monthly Reporting',
    item4: ' Local SEO For Your Google My Business Profile ',
    item5: 'On-Page and Off-Page SEO Optimization',
    item6: 'SEO Content Writing or Creation'
  },
  {
    title: 'Premium',
    price: 'Ksh 20 000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    button: 'Get Started',
    consist: 'Everything from  standard package',
    item1: 'Up To 40 Keywords Optimization',
    item2: 'On-Page and Off-Page SEO Optimization',
    item3: 'Monthly Reporting',
    item4: 'Search Engine Friendly Analysis',
    item5: ' Local SEO For Your Google My Business Profile ',
    item6: 'SEO Content Writing or Creation'
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