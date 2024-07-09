import React from 'react';
import Button from '../../components/genericButton/genButton';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-9xl font-bold mb-4 text-secondary">404</h1>
      <h2 className="text-4xl mb-4">Page Not Found</h2>
      <p className="text-lg mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Button to={"/services"} text={"Check Our Services Page"} width={'300px'} showArrow={true}/>
    </div>
  );
};

export default NotFound;
