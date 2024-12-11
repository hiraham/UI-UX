// components/Header.js
import { FaPhone, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white py-2 hidden md:block">
      
      <div className="container mx-auto flex items-center justify-between text-[Montserrat]">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center */}
        <div className="text-center">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2">
          <span>Follow Us:</span>
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaYoutube className="hover:text-red-500 cursor-pointer" />
          <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
