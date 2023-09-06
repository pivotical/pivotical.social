import React from 'react';

const Banner = ({ backgroundImage, title, buttonText }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="w-full bg-cover bg-center h-64 md:h-[32rem]" style={bannerStyle}>
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">{title}</h1>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
