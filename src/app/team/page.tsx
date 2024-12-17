'use client'
import React from 'react'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import { useState } from "react";
const team = () => {
    
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const cards = [
    '/Images/team-1-user-1 (1).svg',
    '/Images/team-1-user-2 (1).svg',
    '/Images/team-1-user-3 (1).svg',
    '/Images/team-1-user-3.svg',
    '/Images/team-1-user-2 (2).svg',
    '/Images/team-1-user-1.svg',
    '/Images/team-1-user-2.svg',
    '/Images/team-user.svg',
    '/Images/team-1-user-3 (2).svg',
  ];
  return (
    <div>
      <Navigation/>
      {/* Header Section */}
      <div className="text-center bg-white pr-10 py-16 container mx-auto font-Montserrat">
        <h5 className="text-[#737373] mb-6 font-bold">WHAT WE DO</h5>
        <h2 className="text-6xl font-bold mb-4 text-[#252B42]">Innovation tailored for you</h2>
        <nav aria-label="breadcrumb" className="text-[#737373] text-sm py-6 font-bold">
          Home &gt; Team
        </nav>
      </div>
 
      <div className="flex items-center bg-white shadow-lg p-2 rounded-lg">
      {/* Left Side Image */}
      <div className="w-2/3">
        <Image 
          src="/Images/unsplash_Lks7vei-eAg.svg" 
          alt="Left Image" 
          width={700} 
          height={530} 
        />
      </div>

      {/* Right Side Images */}
      <div className="w-2/3 grid grid-cols-2 gap-4">
        <Image 
          src="/Images/unsplash_gMsnXqILjp4.svg" 
          alt="Right Image 1" 
          width={361} 
          height={260} 
    
        />
        <Image 
          src="/Images/unsplash_1-aA2Fadydc.svg" 
          alt="Right Image 2" 
          width={361} 
          height={260} 
  
        />
        <Image 
          src="/Images/unsplash_mcSDtbWXUZU.svg" 
          alt="Right Image 3" 
          width={361} 
          height={260} 
           
        />
        <Image 
          src="/Images/unsplash_PSmDDeXaEWE.svg" 
          alt="Right Image 4" 
          width={361} 
          height={260} 
     
        />
      </div>
    </div>



       {/* Cards Section */}
      <div className="text-center bg-white pr-16 py-16 ">
        <h2 className="text-4xl font-bold mb-4 text-[#252B42] ">Meet Our Team</h2>
      
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {cards.map((src, index) => (
            <div key={index} className="flex flex-col justify-center items-center p-8 font-Montserrat">
              {/* Image */}
              <Image
                src={src}
                alt={`Card ${index + 1}`}
                width={329}  
                height={331} 
                className=" mb-4" 
              />
      
              {/* Username */}
              <h5 className="text-xl font-semibold mb-2">Username</h5>
      
              {/* Profession */}
              <h4 className="text-gray-500 mb-4 font-bold ">Profession</h4>
      
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <FaFacebook className="text-[#1877F2] cursor-pointer hover:text-blue-600" size={24} />
                <FaTwitter className="text-[#1DA1F2] cursor-pointer hover:text-blue-400" size={24} />
                <FaInstagram className="text-[#E1306C] cursor-pointer hover:text-pink-500" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
       {/* trial Section */}
              <div className="container mx-auto text-center py-16 font-Montserrat">
                <h2 className="text-5xl font-bold text-[#737373] mb-4">Start your 14 days free trial</h2>
                <p className="text-gray-600 mb-8 font-normal text-sm ">
                Met minim Mollie non desert Alamo est sit cliquey dolor<br/> 
                do met sent. RELIT official consequent.s
                </p>
                {/* Button and Social Media Icons */}
      <div className="text-center mt-8">
        <button className='bg-[#23A6F0] border border-[#23A6F0] rounded py-4 px-10 gap-2 text-white'>
          Try it free now
        </button>

        <div className="flex justify-center space-x-6 mt-6">
          <FaTwitter className="text-[#1DA1F2] cursor-pointer hover:text-blue-400" size={24} />
          <FaFacebook className="text-[#1877F2] cursor-pointer hover:text-blue-600" size={24} />
          <FaInstagram className="text-black cursor-pointer hover:text-pink-500" size={24} />
          <FaLinkedin className="text-[#1877F2] cursor-pointer hover:text-blue-600" size={24} />
        </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default team
