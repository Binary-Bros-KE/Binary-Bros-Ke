import { useState } from 'react';

import Logo from '../Assets/header_logo_blue.svg';
import { Link } from 'react-router-dom'
import { HiChevronDown, HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import NavButton from '../components/NavButton';

const style = {
  color: '#0e232eff'
}

const Navbar = () => {
  const [nav, setnav] = useState(false)

  return(
    <div className="navbar">
      <div className="nav-socials">
        <div className="primary-info">
          <p><i className='fa fa-envelope'></i> binarybroske@gmail.com</p>|
          <p><i className='fa fa-phone'></i>+254 791 880 412</p>
        </div>
        <div className="platforms">
            <i className="fab fa-facebook cursor-pointer"></i>
            <i className="fab fa-twitter cursor-pointer"></i>
            <i className="fab fa-github cursor-pointer"></i>
            <i className="fab fa-instagram cursor-pointer"></i>
        </div>
      </div>

      <div className='navbar-container-section flex justify-between items-center py-4'>
        <img className='w-48 sm:w-60' src={Logo} alt="LOGO" />
        <ul className='relative hidden md:flex'>
          <li className='p-2'>
            <Link className='text-lg text-black-col md:opacity-75 duration-100 hover:text-primary hover:opacity-100 font-medium' to='/'>Home</Link>
          </li>
          <li className='inner p-2'>
            <Link className='flex text-lg text-black-col md:opacity-75 duration-100 hover:text-primary hover:opacity-100 font-medium'>Services<HiChevronDown size={25} /></Link>
            <ul className='md:absolute hidden navigation-inner bg-black-col md:w-80 md:rounded-xl md:p-5 py-1 left-0'>
              <li className='relative inner-inner md:py-1 p-2'>
                <Link className='text-white hover:text-primary duration-300 hover:pl-4' to="#">Development Services &nbsp; <i className="fas fa-chevron-down"></i></Link>
                <ul className='absolute navigation-inner-inner hidden bg-black-col min-w-96 md:rounded-xl pl-8 py-6 top-full left-full'>
                  <li className='md:py-1 p-2 duration-300 hover:pl-4'>
                    <Link className='text-col-light hover:text-primary' to='/website-development'>Web Development</Link>
                  </li>
                  <li className='md:py-1 p-2 duration-300 hover:pl-4'>
                    <Link className='text-col-light hover:text-primary' to='/e-commerce-development'>E-Commerce Development</Link>
                  </li>
                  <li className='md:py-1 p-2 duration-300 hover:pl-4'>
                    <Link className='text-col-light hover:text-primary' to='/wordpress-development'>Wordpress Development</Link>
                  </li>
                </ul>
              </li>
              <li className='relative inner-inner md:py-1 p-2'>
                <Link className='text-white hover:text-primary duration-300 hover:pl-4' to="#">Marketing Services &nbsp; <i className="fas fa-chevron-down"></i></Link>
                <ul className='absolute hidden navigation-inner-inner bg-black-col min-w-96 md:rounded-xl pl-8 py-6 top-0 left-full'>
                  <li className='md:py-1 p-2 duration-300 hover:pl-4'>
                    <Link className='text-col-light hover:text-primary' to='/seo'>Search Engine Optimization</Link>
                  </li>
                  <li className='md:py-1 p-2 duration-300 hover:pl-4'>
                    <Link className='text-col-light hover:text-primary' to='/social-media-marketing'>Social Media Marketing</Link>
                  </li>
                  <li className='md:py-1 p-2 duration-300 hover:pl-4'>
                    <Link className='text-col-light hover:text-primary' to='/website-optimization'>Website Optimization</Link>
                  </li>
                </ul>
              </li>
              <li className='inner-inner relative md:py-1 p-2'>
                <Link className='text-white hover:text-primary duration-300 hover:pl-4' to="#">Design Services &nbsp; <i className="fas fa-chevron-down"></i></Link>
                <ul className='absolute hidden navigation-inner-inner bg-black-col min-w-96 md:rounded-xl pl-8 py-6 top-0 left-full'>
                  <li className='md:py-1 p-2 duration-300 hover:pl-4'>
                    <Link className='text-col-light hover:text-primary' to='/website-maintenance'>Website Maintenance</Link>
                  </li>
                  <li className='md:py-1 p-2 duration-300 hover:pl-4'>
                    <Link className='text-col-light hover:text-primary' to='/mobile-apps'>Mobile App Development</Link>
                  </li>
                  <li className='md:py-1 p-2 duration-300 hover:pl-4'>
                    <Link className='text-col-light hover:text-primary' to='/graphic-design'>Graphic Design</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className='p-2'>
            <Link className='text-lg text-black-col md:opacity-75 duration-100 hover:text-primary hover:opacity-100 font-medium' to='/portfolio'>Portfolio</Link>
          </li>
          <li className='p-2 inner relative'>
            <Link className='flex text-lg text-black-col md:opacity-75 duration-100 hover:text-primary hover:opacity-100 font-medium' to='#'>Pricing<HiChevronDown size={25} /></Link>
            <ul className='navigation-inner hidden absolute bg-black-col p-4 rounded-lg w-[20rem] max-lg:right-[-100%]'>
              <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/seo'>SEO</Link></li>
              <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/website-development'>Web development</Link></li>
              <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/wordpress-development'>Wordpress development</Link></li>
              <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/e-commerce-development'>E-commerce development</Link></li>
              <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/social-media-marketing'>Social media marketing</Link></li>
              <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/website-optimization'>Website optimization</Link></li>
              <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/website-maintenance'>Website maintenance</Link></li>
              <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/mobile-apps'>Mobile app development</Link></li>
              <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/graphic-design'>Graphic design</Link></li>
            </ul>
          </li>
          <li className='p-2'>
            <Link className='text-lg text-black-col md:opacity-75 duration-100 hover:text-primary hover:opacity-100 font-medium' to='/contact'>Contact</Link>
          </li>
        </ul>

        <div className="hidden lg:inline-block">
          <NavButton />
        </div>

        <div onClick={ () => setnav(!nav) } className='fixed md:hidden right-0 pr-4 z-50'>
          {!nav ? <AiOutlineClose size={30} style={style} /> : <HiMenuAlt3 size={30} fontWeight={1000} style={style} />}
        </div>
        
        <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[85%] sm:w-[50%] h-full bg-white ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
          <img className='w-48 sm:w-60 mt-4 mx-4' src={Logo} alt="LOGO" />
          <ul className="p-4 uppercase">
            <li className='p-2'>
              <Link className='text-lg hover:text-primary' to='/'>Home</Link>
            </li>
            <li className='inner p-2'>
              <Link className='flex text-lg text-black-co  md:opacity-75 duration-100 hover:text-primary hover:opacity-100 font-medium' to='#'>Services<HiChevronDown size={25} /></Link>
              <ul className='navigation-inner hidden pt-2 pl-4 capitalize'>
                <li className='inner-inner py-1'>
                  <Link className='cursor-pointer' to="#">Development Services &nbsp; <i className="fas fa-chevron-down"></i></Link>
                  <ul className='navigation-inner-inner hidden mt-10 p-4 bg-black-col rounded-lg'>
                    <li className='duration-300 hover:pl-2'>
                      <Link className='text-col-light duration-200 hover:text-primary' to='/website-development'>Web Development</Link>
                    </li>
                    <li className='py-1 duration-300 hover:pl-2'>
                      <Link className='text-col-light duration-200 hover:text-primary' to='/e-commerce-development'>E-Commerce Development</Link>
                    </li>
                    <li className='duration-300 hover:pl-2'>
                      <Link className='text-col-light duration-200 hover:text-primary' to='/wordpress-development'>Wordpress Development</Link>
                    </li>
                  </ul>
                </li> 
                <li className='inner-inner py-1'>
                  <Link className='cursor-pointer' to="#">Marketing Services &nbsp; <i className="fas fa-chevron-down"></i></Link>
                  <ul className='navigation-inner-inner hidden mt-10 p-4 bg-black-col rounded-lg'>
                    <li className='duration-300 hover:pl-2'>
                      <Link className='text-col-light duration-200 hover:text-primary' to='/seo'>Search Engine Optimization</Link>
                    </li>
                    <li className='py-1 duration-300 hover:pl-2'>
                      <Link className='text-col-light duration-200 hover:text-primary' to='/social-media-marketing'>Social Media Marketing</Link>
                    </li>
                    <li className='duration-300 hover:pl-2'>
                      <Link className='text-col-light duration-200 hover:text-primary' to='/website-optimization'>Website Optimization</Link>
                    </li>
                  </ul>
                </li>
                <li className='inner-inner py-1'>
                  <Link className='cursor-pointer' to="#">Design Services &nbsp; <i className="fas fa-chevron-down"></i></Link>
                  <ul className='navigation-inner-inner hidden mt-10 p-4 bg-black-col rounded-lg'>
                    <li className='duration-300 hover:pl-2'>
                      <Link className='text-col-light duration-200 hover:text-primary' to='/website-maintenance'>Website Maintenance</Link>
                    </li>
                    <li className='py-1 duration-300 hover:pl-2'>
                      <Link className='text-col-light duration-200 hover:text-primary' to='/mobile-apps'>Mobile App Development</Link>
                    </li>
                    <li className='duration-300 hover:pl-2'>
                      <Link className='text-col-light duration-200 hover:text-primary' to='/graphic-design'>Graphic Design</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='p-2'>
              <Link className='text-lg hover:text-primary' to='/portfolio'>Portfolio</Link>
            </li>
            <li className='inner p-2 relative'>
              <Link className='flex text-lg hover:text-primary' to='#'>Pricing<HiChevronDown size={25} /></Link>
              {/* Try without position absolute to the class inner */}
              <ul className='navigation-inner hidden absolute bg-black-col p-4 rounded-lg min-w-[16.5rem]'>
                <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/seo'>SEO</Link></li>
                <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/website-development'>Web development</Link></li>
                <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/wordpress-development'>Wordpress development</Link></li>
                <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/e-commerce-development'>E-commerce development</Link></li>
                <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/social-media-marketing'>Social media marketing</Link></li>
                <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/website-optimization'>Website optimization</Link></li>
                <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/website-maintenance'>Website maintenance</Link></li>
                <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/mobile-apps'>Mobile app development</Link></li>
                <li className='py-[0.15rem]'><Link className='text-white duration-300 hover:pl-2 hover:text-primary' to='/graphic-design'>Graphic design</Link></li>
              </ul>
            </li>
            <li className='p-2'>
              <Link className='text-lg hover:text-primary' to='/contact'>Contact</Link>
            </li>
            <div className="grid mr-auto w-52 mt-10">
              <NavButton />
            </div>
          </ul>
        </div>
      </div>
        
    </div>
  )
  }

export default Navbar
