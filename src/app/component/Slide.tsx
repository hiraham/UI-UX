import React from 'react';

const Slide = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{
          backgroundImage: "url('/Images/Hero.svg')", // Ensure the correct path
        }}
      >
        <div className="container mx-auto text-white p-4">
          <div className="md:w-1/2 text-left bg-opacity-75 p-6 rounded-md">
          <h5 className="font-[Montserrat] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left  ">
             SUMMER 2020
           </h5>

            <h1 className="text-white text-5xl font-bold mb-4 leading-tight font-[Montserrat]">
              NEW COLLECTION
            </h1>
            <h4 className="text-white text-lg mb-6 font-[Montserrat] font-normal">
            We know how large objects will act,<br/> 
            but things on a small scale.
            </h4>
            <button className="bg-green-500 text-white px-8 py-3 rounded-md text-lg hover:bg-green-600 transition duration-300 ease-in-out">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
