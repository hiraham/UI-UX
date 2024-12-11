import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    
    <footer className=" text-black  ">
      <div className="container mx-auto flex justify-between items-center  py-10 bg-[#FAFAFA]">
        {/* Left Side */}
        <div className="text-2xl font-montserrat">
          Bandage
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex space-x-4">
          <FaFacebook className="text-blue-500 text-2xl hover:text-blue-700" />
          <FaInstagram className="text-blue-500 text-2xl hover:text-blue-700" />
          <FaTwitter className="text-blue-500 text-2xl hover:text-blue-700" />
        </div>
      </div>
          

        {/* Footer Links Section */}
       
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 ">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="font-bold font-[Montserrat] text-lg mb-4">Company Info</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 2: Legal */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 3: Features */}
        <div>
          <h3 className="font-bold text-lg mb-4">Features</h3>
          <ul className="space-y-2">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>
        {/* Get In Touch Section */}
    
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-6">
          <div>
            <h3 className="font-bold text-lg mb-4">Get in touch</h3>
            <form className="flex w-3/4 mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[321px] h-[58px] px-4 py-2 rounded-l-md text-sm focus:outline-none font-[Montserrat] text-[12px] font-[400] leading-[28px] tracking-[0.2px] text-left"
              />
              <button className="bg-blue-500 px-2 py-2 rounded-r-md text-white text-sm font-bold hover:bg-blue-700">
                Subscribe
              </button>
            </form>
            <br />
            <h5 className="font-[Montserrat] text-[12px] font-[400] leading-[28px] tracking-[0.2px] text-left">
              Lore imp sum dolor Amit
            </h5>

          </div>
          
        </div>
        <div className="bg-[#FAFAFA] py-14">
  <h1 className="text-[#737373] text-center font-[Montserrat] text-[14px] font-bold leading-[24px] tracking-[0.2px]">
    Made With Love By Finland All Right Reserved
  </h1>
</div>



      </div>

        

    
    </footer>
  );
};

export default Footer;

  
    

