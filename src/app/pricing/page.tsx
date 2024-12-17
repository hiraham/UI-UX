import React from 'react';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';
import Image from 'next/image';
;
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCheckCircle, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";



const pricing = () => {
  return (
    <div>
      <Navigation />
      {/* Header Section */}
      <div className="text-center bg-white pr-10 py-16 container mx-auto">
        <h5 className="text-gray-600 mb-6">PRICING</h5>
        <h2 className="text-6xl font-bold mb-4 text-[#252B42]">Simple Pricing</h2>
        <nav aria-label="breadcrumb" className="text-[#252B42] text-sm py-6">
          Home &gt; Shop
        </nav>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing</h2>
          <p className="text-gray-600 mb-8">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>

          {/* Toggle (Monthly/Yearly) */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-gray-600">Monthly</span>
            <div className="relative inline-flex">
              <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
              <div
                className="absolute w-6 h-6 bg-blue-500 rounded-full shadow transform transition-transform translate-x-0"
                style={{ left: '0.25rem' }}
              ></div>
            </div>
            <span className="text-gray-600">Yearly</span>
            <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
              Save 25%
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Free Plan */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">FREE</h3>
              <p className="text-gray-600 mb-4">
                Organize across all
                <br />
                apps by hand
              </p>
              <div className="text-4xl font-bold mb-4 text-[#23A6F0]">
                0<span className="text-xl">$ Per Month</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaCheckCircle className="text-[#2DC071]" />
                <h5 className="text-normal text-sm">Unlimited product updates</h5>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-black shadow-lg rounded-lg p-6 flex flex-col justify-between relative -top-6 transform md:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">STANDARD</h3>
              <p className="text-gray-300 mb-4">
                Organize across all
                <br />
                apps by hand
              </p>
              <div className="text-4xl font-bold text-[#23A6F0] mb-4">
                9.99<span className="text-xl">$ Per Month</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaCheckCircle className="text-[#2DC071]" />
                <h5 className="text-normal text-white text-sm">Unlimited product updates</h5>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#2DC071]" />
                <h5 className="text-normal text-white text-sm">Unlimited product updates
                </h5>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">PREMIUM</h3>
              <p className="text-gray-600 mb-4">
                Organize across all
                <br />
                apps by hand
              </p>
              <div className="text-4xl font-bold mb-4 text-[#23A6F0]">
                19.99<span className="text-xl">$ Per Month</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
           
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#2DC071]" />
                <h5 className="text-normal text-sm">Premium support</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing FAQs</h2>
          <p className="text-gray-600 mb-8">
          Problems trying to resolve the conflict between <br/>
          the two major realms of Classical physics
          </p>
    
    
   {/* Pricing FAQs Section */}
<div className="bg-white py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing FAQs</h2>
    <p className="text-gray-600 mb-8">
      Problems trying to resolve the conflict between <br />
      the two major realms of Classical physics
    </p>

    {/* FAQ Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      {/* Left Column */}
      <div className="space-y-8">
        {Array(3)
          .fill("FAQ Item")
          .map((_, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex items-center">
                <MdKeyboardArrowRight className="text-xl text-gray-700 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  The quick fox jumps over the lazy dog
                </h3>
              </div>
              <h5 className="text-sm text-gray-600">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met<br/>
                sent. RELIT official consequent door ENIM RELIT Mollie. Excitation<br/> venial consequent sent nostrum met.
              </h5>
            </div>
          ))}
      </div>

      {/* Right Column */}
      <div className="space-y-8">
        {Array(3)
          .fill("FAQ Item")
          .map((_, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex items-center">
                <MdKeyboardArrowRight className="text-xl text-gray-700 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  The quick fox jumps over the lazy dog
                </h3>
              </div>
              <h5 className="text-sm text-gray-600">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met<br/>
                sent. RELIT official consequent door ENIM RELIT Mollie. Excitation<br/> venial consequent sent nostrum met.
              </h5>
            </div>
          ))}
      </div>
    </div>

    {/* Final Support Text */}
    <div className="mt-12">
      <p className="text-gray-800 text-lg font-medium">
        Haven’t got your answer? Contact our support
      </p>
    </div>
  </div>
</div>
</div>
</div>
 {/* trial Section */}
        <div className="container mx-auto text-center py-16">
          <h2 className="text-5xl font-bold text-[#737373] mb-4">Start your 14 days free trial</h2>
          <p className="text-gray-600 mb-8 font-normal text-sm ">
          Met minim Mollie non desert Alamo est sit cliquey dolor<br/> 
          do met sent. RELIT official consequent.s
          </p>
          {/* Button and Social Media Icons Container */}
  <div className="space-y-6">
    {/* Button */}
    <button className="bg-[#23A6F0] border border-[#23A6F0] rounded py-4 px-10 gap-2 text-white">
      Try it free now
    </button>

    {/* Social Media Icons */}
    <div className="flex space-x-6 justify-center">
      <FaTwitter className="text-[#1DA1F2] cursor-pointer hover:text-blue-400" size={24} />
      <FaFacebook className="text-[#1877F2] cursor-pointer hover:text-blue-600" size={24} />
      <FaInstagram className="text-black cursor-pointer hover:text-pink-500" size={24} />
      <FaLinkedin className="text-[#1877F2] cursor-pointer hover:text-blue-600" size={24} />
    </div>
  </div>
     </div>     
  
  
      <Footer />
    </div>
  );
};

export default pricing;
