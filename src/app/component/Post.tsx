"use client";

import React, { useState, useEffect } from "react";
import { LuRectangleVertical } from "react-icons/lu";

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // for page redirection

const post = () => {
  
  const products = [
    { id: 1,  image: '/Images/fixed-height (3).svg', discount: 'New' },
    { id: 2,  image: '/Images/fixed-height (4).svg', discount: 'New' },
    { id: 3,  image: '/Images/fixed-height (5).svg', discount: 'New' },

  ];

  

  return (
    <div className="p-2 bg-white ">
      {/* Flash Sales Header and Timer */}
      <div className="px-2  ">
  
  <h6 className="text-sm font-bold text-[Montserrat] py-2 text-center text-[#23A6F0]">Practice Advice</h6>
  <h2 className="text-5xl font-bold text-[Montserrat] py-6 text-center">Featured Posts</h2>
  <p className="text-sm font-normal font-[Montserrat] text-center text-[#737373]">Problems trying to resolve the conflict between 
  the two major realms of Classical physics: Newtonian mechanics </p>
  

</div>




      
      {/* Product Listing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-md overflow-hidden group">
            <div className="p-4">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.discount}
                  width={300}
                  height={200}
                  className="w-full h-64 object-cover duration-300 group-hover:scale-105"
                />
  


              
              </div>
              <div className="flex items-center p-4 font-[Montserrat]">
             <h3 className="p-2 text-[#8EC2F2]">Google</h3>
             <h3 className="p-2">Trending</h3>
             <h3 className="p-2">New</h3>
              </div>
              <div className="p-4 font-[Montserrat]">
                <h3 className="text-lg font-semibold text-[#252B42]">Loudest à la Madison #1 
                (L'integral)</h3>
                <p className="text-[#737373]">We focus on ergonomics and meeting 
you where you work. It's only a 
                 keystroke away.</p>


             <div className=" flex items-center font-[Montserrat] text-[#737373]">
              <h4 className="p-2">22 April 2021</h4>
               <h4 className="p-2">10 comments</h4>
                </div>



                <div className="flex items-center space-x-2 text-[#737373]">
                 
                <h6>Learn More</h6>
                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default post;
