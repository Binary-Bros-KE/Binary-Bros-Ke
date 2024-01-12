import styled from 'styled-components';
import CardList from '../components/CardList';
import SeoCardList2 from '../components/SeoCardList2';
// import { Link } from 'react-router-dom'


const StyledButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: hsl(0, 0%, 0%);
  color: #fff;
  border-radius: 0.4em;
  font-family: 'Poppins', sans;
  transition: all 100ms ease-in-out;

  &:hover {
    color: #fff;
    background-color: #0e232eff;
  }
`;

const InverseButton = styled.button`
  padding: 0.5rem 1.5rem;
  color: hsl(0, 0%, 0%);
  background-color: hsl(0, 0%, 87%);
  border-radius: 0.4em;
  margin-right: auto;
  font-family: 'Poppins', sans;
  transition: all 100ms ease-in-out;

  &:hover {
    color: #0084C8;
  }
`

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="text-lg pricing-container">

      {/*====== Banner Container ========*/}

        <section>
          <div className="container-section py-6 pt-16">
            <div>
              <h1 className='text-4xl sm:text-6xl font-semibold leading-tight pb-8 sm:w-[80%]'>We`ve got a plan <br /> that`s perfect for you</h1>
              <div className="flex border-[0.15em] border-neutral-300/90 p-[0.2em] rounded-[0.4em] w-[19em]">
                <StyledButton onClick={
                  () => {
                    const element = document.getElementById('webPrices');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }>Web Prices</StyledButton>
                <InverseButton onClick={
                  () => {
                    const element = document.getElementById('seoPrices');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }>SEO Prices</InverseButton>
              </div>
            </div>
          </div>
        </section>

      {/*====== Web Prices Section ========*/}

        <section className="mb-10" id='webPrices'>
          <div className="container-section">
            <h1 className='text-3xl text-black-col font-semibold py-6'>Web Services Pricing</h1>
            <CardList />
          </div>
        </section>

      {/*====== SEO Prices Section ========*/}

      <section className='seo padding-block bg-black' id='seoPrices'>
        <div className="container-section">
          <h1 className="text-3xl text-white font-semibold py-6">SEO Services Pricing</h1>
          <SeoCardList2 />
        </div>
      </section>

      {/*====== Footer Container ========*/}

      </div>
    </div>
  )
}

export default Pricing