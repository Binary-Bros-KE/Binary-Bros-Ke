import { FaCheckCircle } from "react-icons/fa";
import styled from 'styled-components';

const SeoButton = styled.button`
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.85rem 0.5rem 0.85rem;
  }
  
    display: inline-block;
    font-size: 1.125rem;
    line-height: 1.75rem;
    background: hsl(0, 0%, 0%);
    color: white;
    padding: 0.73rem 1.25rem 0.75rem 1.25rem;
    width: 100%;
    border-radius: 1.5rem;
    transition: all 300ms ease;
    font-weight: light;
    margin-block: 0.5rem;

  &:hover {
    background: #0e232eff;
  }
`;

const SeoCard2 = ({ title, description, price, button, consist, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10 }) => {
  let itemsToShow;

  if (title === 'Basic') {
    itemsToShow = [item1, item2, item3, item4, item5, item6, item7];
  } else if (title === 'Standard') {
    itemsToShow = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
  } else if (title === 'Premium') {
    itemsToShow = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
  }

  return (
    <div className="bg-white py-8 p-5 border-0 border-neutral-300 rounded-[2rem] duration-300 scale-90 hover:last:scale-100 hover:first:scale-100 even:scale-95 hover:scale-100">
      <h1 className='py-2 px-5 bg-black inline-block text-white rounded-3xl'>{title}</h1>
      <p className='text-md my-2'>{description}</p>
      <h2 className='text-3xl py-2'>{price}</h2>
      <div className="grid">
        <SeoButton>{button}</SeoButton>
      </div>
      <p className='py-4 border-b-2 font-normal opacity-80 text-black'>{consist}</p>
      <ul className='mt-4'>
        {itemsToShow.map((item, index) => (
          <li className='flex items-center py-2' key={index}>
            { <FaCheckCircle color='#000' size={23} />}
            <p className='text-sm pl-4'>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SeoCard2