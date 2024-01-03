import React from 'react';
import Card from './Card';


const cardData = [
  {
    title: 'Bronze',
    heading: 'Ksh 18000',
    description: 'Perfect for new websites, personal portfolios and landing pages',
    button: 'Get Started',
    consist: 'Consists of',
    item1: '20 Pages Maximum',
    item2: 'Unlimited Bandwidth',
    item3: '1 Domain Name Registered',
    item4: 'Website Content Provided by The Client ',
    item5: 'Blog Integration',
    item6: 'Website Security',
    item7: '2 Website Integration',
    item8: 'Whatsapp Chatbot Integration',
    item9: 'Picture and / Video Gallery'
  },
  {
    title: 'Gold',
    heading: 'Ksh 18000',
    description: 'This is the description for Card 2.',
    button: 'Get Started',
    consist: 'Consists of',
    everything: 'Everything in Bronze',
    item1: '30 Pages Maximum',
    item2: '1 Domain Name Registered',
    item3: 'Unlimited Bandwidth',
    item4: 'Website Content Provided by The Client ',
    item5: 'Blog Integration',
    item6: 'Website Security',
    item7: '4 Website Integration',
    item8: 'Whatsapp Chatbot Integration',
    item9: 'Picture and / Video Gallery',
    item10: 'FAQ Section/Page',
    item11: 'Search Engine Optimization',
    item12: 'Web Ads'
  },
  {
    title: 'Platinum',
    heading: 'Ksh 18000',
    description: 'This is the description for Card 3.',
    button: 'Get Started',
    consist: 'Consists of',
    everything: 'Everything in Bronze and Gold ',
    item1: 'Unlimited Number of Pages',
    item2: '1 Domain Name Registered',
    item3: 'Unlimited Bandwidth',
    item4: 'Website Content Provided by The Client ',
    item5: 'Blog Integration',
    item6: 'Website Security',
    item7: 'Website Analytics',
    item8: 'Unlimited Web Hosting',
    item9: 'Unlimited Website Integration',
    item10: 'Whatsapp Chatbot Integration',
    item11: 'Picture and / Video Gallery',
    item12: 'FAQ Section/Page',
    item13: 'Search Engine Optimization',
    item14: 'Web Ads'
  },
];

const CardList = () => {
  return (
    <div className="card-container even-columns sm:grid-cols-2">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
