import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

import Footer from '../component/Footer';
import Navigation from '../component/Navigation';

const Contact = () => {
  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <div
        className="relative bg-center bg-cover h-screen flex items-center mt-8"
        style={{
          backgroundImage: "url('/Images/background.svg')",
        }}
      >
        <div className="container mx-auto text-[#252B42] p-14 font-montserrat">
          <div className="md:w-1/2 text-left bg-opacity-75 p-6 rounded-md">
            <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] m-8">
              CONTACT US
            </h5>
            <h1 className="text-5xl font-bold mb-4 leading-tight text-[#252B42] py-2 m-8">
              Get in touch <br />
              today!
            </h1>
            <h4 className="text-lg mb-6 font-normal text-[#737373] m-8">
              We know how large objects will act, <br />
              but things on a small scale
            </h4>
            <h5 className="text-sm ml-8 font-bold">Phone: +451 215 215</h5>
            <h5 className="text-sm ml-8 font-bold">Fax: +451 215 215</h5>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 ml-12">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} className="hover:text-blue-600" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="hover:text-pink-500" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} className="hover:text-blue-700" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} className="hover:text-blue-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="text-center">
          <h5 className="text-sm font-bold  text-[#252B42]">VISIT OUR OFFICE</h5>
          <h2 className="text-3xl font-bold text-[#252B42] my-4">
            We help small businesses <br /> with big ideas
          </h2>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 ">
            <FaPhoneAlt size={40} className="text-[#23A6F0] mb-4" />
            <p className="text-sm text-[#252B42]">georgia.young@example.com</p>
            <p className="text-sm text-[#252B42]">georgia.young@ple.com</p>
            <button className="mt-4 px-6 py-2 border border-[#23A6F0] text-[#23A6F0] rounded-full hover:bg-blue-500 hover:text-white transition">
  Submit Request
</button>

          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-[#252B42] text-white  shadow-sm">
            <FaMapMarkerAlt size={40} className="text-[#23A6F0] mb-4" />
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm">georgia.young@ple.com</p>
            <button className="mt-4 px-6 py-2 border border-[#23A6F0] text-[#23A6F0] rounded-full hover:bg-blue-500 hover:text-white transition">
            Submit Request
            </button>

          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-10">
            <FaEnvelope size={40} className= "text-[#23A6F0] mb-4" />
            <p className="text-sm text-[#252B42]">georgia.young@example.com</p>
            <p className="text-sm text-[#252B42]">georgia.young@ple.com</p>
            <button className="mt-4 px-6 py-2 border border-[#23A6F0] text-[#23A6F0] rounded-full hover:bg-blue-500 hover:text-white transition">
            Submit Request
              </button>

          </div>
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className=" py-16">
        <div className="container mx-auto text-center">
        <h5 className="text-[#252B42] mb-8 text-sm font-bold ">
        WE Can't WAIT TO MEET YOU
          </h5>
          <h2 className="text-5xl font-bold text-[#252B42] mb-6">Let’s Talk</h2>
         
            <button
              type="submit"
              className=" px-10 py-4 bg-[#23A6F0] text-white rounded hover:bg-blue-600 transition"
            >
              Try it free now
            </button>
         
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
