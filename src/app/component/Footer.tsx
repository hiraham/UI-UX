import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-black">
      {/* Top Section */}
      <div className="container mx-auto flex justify-between items-center py-10 bg-[#FAFAFA] px-6 md:px-12">
        {/* Brand Name */}
        <div className="text-2xl font-bold font-[Montserrat] tracking-wide ">
          Bandage
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-[#23A6F0]">
          <FaFacebook className=" text-2xl hover:text-blue-700 cursor-pointer" />
          <FaInstagram className=" text-2xl hover:text-blue-700 cursor-pointer" />
          <FaTwitter className=" text-2xl hover:text-blue-700 cursor-pointer" />
          <FaLinkedin className=" text-2xl hover:text-blue-700 cursor-pointer" />
        </div>
      </div>

      {/* Middle Section: Footer Links */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6 md:px-12 py-10">
        {/* Company Info */}
        <div>
          <h3 className="font-bold font-[Montserrat] text-lg mb-4">Company Info</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About Us</li>
            <li>Careers</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold font-[Montserrat] text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-bold font-[Montserrat] text-lg mb-4">Features</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Business Marketing</li>
            <li>User Analytics</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold font-[Montserrat] text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>iOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="font-bold font-[Montserrat] text-lg mb-4">Get in Touch</h3>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-[200px] lg:w-[300px] h-[48px] px-2 rounded-l-md border border-gray-300 text-sm focus:outline-none"
            />
            <button className="bg-[#23A6F0] px-4 py-2 rounded-r-md text-white text-sm font-bold hover:bg-blue-700">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 font-[Montserrat]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#FAFAFA] py-6">
        <p className="text-center text-sm text-gray-500 font-[Montserrat]">
          Made with love by Finland. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
