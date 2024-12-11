import React from 'react';
import Image from 'next/image';

const EditorsPick = () => {
  return (
    <div className="p-12 bg-gray-100">
      {/* Centered Heading */}
      <div className="text-center ">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">EDITOR’S PICK</h1>
        <p className="text-lg text-gray-600">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Image Grid */}
      <div className="flex flex-wrap gap-16 p-8 m-16">
        {/* First Image */}
        <div className="relative w-[509px] h-[500px] opacity-95">
          <Image
            src="/Images/filter (1).svg"
            alt="Men"
            layout="fill"
            
          
          />
          <div className="absolute bottom-4 left-4 bg-white px-6 py-2 ">
            <span className="text-gray-800 font-bold uppercase">Men</span>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative w-[240px] h-[500px] opacity-95 ">
          <Image
            src="/Images/filter (2).svg"
            alt="Women"
            width={400} height={400}
            
          />
          <div className="absolute bottom-4 left-4 bg-white px-6 py-2 ">
            <span className="text-gray-800 font-bold uppercase">Women</span>
          </div>
        </div>

        {/* Third Image */}
        <div className="relative w-[240px] h-[242px] opacity-95 ">
          <div className='p-2 ml-2'>
          <Image
            src="/Images/filter (3).svg"
            alt="Accessories"
            width={250} height={250}
            
            
            
          />
          <div className="absolute bottom-4 left-4 bg-white px-6 py-2 ">
            <span className="text-gray-800 font-bold uppercase">Accessories</span>
          </div>
          </div>
          <div className="relative w-[240px] h-[242px] opacity-95 ">
      <div className='p-2 ml-2 mt-10'>
          <Image
            src="/Images/filter (4).svg"
            alt="Kids"
            width={250} height={250}
          
            
           
          />
          <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded shadow">
            <span className="text-gray-800 font-bold uppercase">Kids</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
