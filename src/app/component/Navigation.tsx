"use client";
import Link from "next/link";
import { FaBars, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white  py-2 ">
        <div className="container mx-auto flex items-center justify-between ">
          {/* Left: Website Name */}
          <h3 className="text-[#252B42] font-montserrat font-bold text-2xl leading-8 tracking-tight m-2">
            <Link href="/home">Bandage</Link>
          </h3>

          {/* Center: Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-[#737373] font-montserrat text-base font-medium">
            <li className="hover:text-[#252B42] cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#252B42] cursor-pointer">
              <Link href="/product2">Product</Link>
            </li>
            <li className="hover:text-[#252B42] cursor-pointer">
              <Link href="/Pricing">Pricing</Link>
            </li>
            <li className="hover:text-[#252B42] cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <FaBars className="text-[#23A6F0] cursor-pointer" size={20} onClick={toggleMobileMenu} />
          </div>

          {/* Right: Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/login">
              <span className="font-montserrat font-medium text-sm text-[#23A6F0] ">Login</span>
            </Link>
            <button className="flex items-center bg-[#23A6F0] text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="/" className="flex items-center">
                Become a Member <FaArrowRight className="ml-2" />
              </Link>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white shadow-md mt-4">
            <ul className="space-y-4 py-4 text-[#737373] font-montserrat text-base font-medium">
              <li className="hover:text-[#252B42] cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#252B42] cursor-pointer">
                <Link href="/product">Product</Link>
              </li>
              <li className="hover:text-[#252B42] cursor-pointer">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="hover:text-[#252B42] cursor-pointer">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      </div>
  )
}
export default Navigation;