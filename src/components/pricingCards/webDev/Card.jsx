import React from 'react';
import styled from 'styled-components';
import { FaRegCheckSquare } from "react-icons/fa";
import Rectangle00 from '../../../../public/Rectangle-1.svg'
import Rectangle01 from '../../../../public/Rectangle-2.svg'
import Rectangle02 from '../../../../public/Rectangle-3.svg'


const PricingButton = styled.button`
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.85rem 0.5rem 0.85rem;
  }
  
  font-size: 1.125rem;
  line-height: 1.75rem;
  background: blue;
  color: white;
  padding: 0.73rem 1.25rem 0.75rem 1.25rem;
  width: 100%;
  border-radius: 1.5rem;
  transition: all 200ms ease;
  font-weight: bold;

  &:hover {
    opacity: 0.6;
  }
`;

const Rectangle = Rectangle00;
const Rectangle1 = Rectangle01;
const Rectangle2 = Rectangle02;

const Card = ({ title, heading, description, everything, button, consist, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14 }) => {
  let itemsToShow;
  let cardImage;

  if (title === 'Bronze') {
    itemsToShow = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
    cardImage = Rectangle1;
  } else if (title === 'Gold') {
    itemsToShow = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];
    cardImage  = Rectangle2;
  } else if (title === 'Platinum') {
    itemsToShow = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14];
    cardImage = Rectangle;
  }

  return (
    <div className="relative overflow-hidden bg-white p-5 border-2 border-neutral-300 rounded-xl">
      <img className='absolute -top-1/4 -right-2/4 opacity-40' src={cardImage} />
      <h1 className='text-xl font-semibold inline-block p-1 px-5 bg-neutral-200 border-2 border-neutral-300 rounded-3xl'>{title}</h1>
      <h2 className='text-4xl text-title font-bold pt-6 pb-3'>{heading}</h2>
      <p className='text-base py-2'>{description}</p>
      <PricingButton>{button}</PricingButton>
      <p className='text-lg my-3 font-bold text-title'>{consist}</p>
      <p className='my-3 text-xl font-bold text-black-col'>{everything}</p>
      <ul>
        {itemsToShow.map((item, index) => (
          <li className='flex items-center py-2 border-b-2 border-neutral-100' key={index}>
            { <FaRegCheckSquare color='#4070f4' />}
            <p className='text-sm pl-4'>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
