// components/Navbar.js
import { FaSignInAlt, FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Website Name */}
        <h3 className="text-[#252B42] font-montserrat font-bold text-2xl leading-8 tracking-tight">
          Bandage
        </h3>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-8 text-[#737373] font-montserrat text-base font-medium">
          <li className="hover:text-[#252B42] cursor-pointer">Home</li>
          <li className="relative group cursor-pointer">
            Shop
            <span className="text-[#252B42] ml-1">▼</span>
            {/* Dropdown (Optional) */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
              <li className="px-4 py-2 hover:bg-gray-100">Category 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Category 2</li>
            </ul>
          </li>
          <li className="hover:text-[#252B42] cursor-pointer">About</li>
          <li className="hover:text-[#252B42] cursor-pointer">Blog</li>
          <li className="hover:text-[#252B42] cursor-pointer">Contact</li>
        </ul>

        {/* Right: Icons and Login/Register */}
        <div className="flex items-center space-x-6">
          {/* Login */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center text-[#23A6F0] space-x-1 cursor-pointer">
              
              <span className="font-montserrat font-medium text-sm">
                Login / Register
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#23A6F0] mt-1"></div>
          </div>
          {/* Navbar Icon */}
          <FaBars className="text-[#23A6F0] cursor-pointer" size={20} />
          {/* Shopping Cart */}
          <FaShoppingCart className="text-[#23A6F0] cursor-pointer" size={20} />
          {/* Heart Icon */}
          <FaHeart className="text-[#23A6F0] cursor-pointer" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
