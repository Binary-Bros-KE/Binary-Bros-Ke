import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='fixed grid bg-black-col p-6 mt-2 rounded-xl z-50' id='tagname'>
      <div className="nested-links-container flex flex-col">
        <div className="main-link relative p-2 z-50">
          <Link to='/#' className='main-link-text inline-block text-white'>
            Development Services
            <div className="prices-sub-links bg-black-col p-8">
              <Link className='text-sm prices-sub-link block py-2 text-white duration-200 hover:pl-4' to='/website-development'>Web Development</Link>
              <Link className='text-sm prices-sub-link block py-2 text-white duration-200 hover:pl-4' to='/e-commerce-development'>E-Commerce Development</Link>
              <Link className='text-sm prices-sub-link block py-2 text-white duration-200 hover:pl-4' to='/wordpress-development'>Wordpress Development</Link>
            </div>
          </Link>
        </div>
        <div className="main-link relative p-2 z-50">
          <Link to='/#' className='main-link-text inline-block text-white'>
            Marketing Services
            <div className="prices-sub-links bg-black-col p-8">
              <Link className='text-sm prices-sub-link block py-2 text-white duration-200 hover:pl-4' to='/seo'>Search Engine Optimization</Link>
              <Link className='text-sm prices-sub-link block py-2 text-white duration-200 hover:pl-4' to='/social-media-marketing'>Social Media Marketing</Link>
              <Link className='text-sm prices-sub-link block py-2 text-white duration-200 hover:pl-4' to='/website-optimization'>Website Optimization</Link>
            </div>
          </Link>
        </div>
        <div className="main-link relative p-2 z-50">
          <Link to='/#' className='main-link-text inline-block text-white'>
            Design Services
            <div className="prices-sub-links bg-black-col p-8">
              <Link className='text-sm prices-sub-link block py-2 text-white duration-200 hover:pl-4' to='/website-maintenance'>Website Maintenance</Link>
              <Link className='text-sm prices-sub-link block py-2 text-white duration-200 hover:pl-4' to='/mobile-apps'>Mobile App Development</Link>
              <Link className='text-sm prices-sub-link block py-2 text-white duration-200 hover:pl-4' to='/graphic-design'>Graphic Design</Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services