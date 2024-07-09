import React from 'react';

const ComingSoon = ({ serviceName }) => {
  return (
    <div className="flex flex-col items-center justify-center text-black text-center px-4 py-20">
      <h1 className="text-5xl font-bold mb-4 text-secondary">Coming Soon</h1>
      <p className="text-2xl mb-8">
        The <span className="text-secondary">{serviceName}</span> page is under construction. Stay tuned for updates!
      </p>
      <div className="flex justify-center space-x-4">
      <a href="whatsapp://send?phone=+254791880412&text=Hi,%20Binary%20Bros%20Team,%20Please%20send%20me%20a%20quote%20for..."><i className="fab fa-whatsapp text-2xl cursor-pointer hover:text-secondary"></i></a>
        <a href='https://www.facebook.com/profile.php?id=61553668976790' target='_blank'><i className="fab fa-facebook-f text-2xl cursor-pointer hover:text-secondary"></i></a>
        <a href='https://x.com/Binarybros_KE' target='_blank'><i className="fab fa-twitter text-2xl cursor-pointer hover:text-secondary"></i></a>
        <a href='https://x.com/Binarybros_KE' target='_blank'><i className="fab fa-linkedin text-2xl cursor-pointer hover:text-secondary"></i></a>
        <a href='https://www.instagram.com/binary_bros.ke/' target='_blank'><i className="fab fa-instagram text-2xl cursor-pointer hover:text-secondary"></i></a>
      </div>
    </div>
  );
};

export default ComingSoon;
