import { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 300); // Adjust the value (300) based on when you want the button to appear
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <div className={`ScrollToTop ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
}

export default ScrollToTop;
