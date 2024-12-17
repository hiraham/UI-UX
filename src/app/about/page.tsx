"use client";
import Link from "next/link";
import { FaBars, FaArrowRight, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Footer from "../component/Footer";
const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const cards = [
    '/Images/team-1-user-1.svg',
    '/Images/team-1-user-2.svg',
    '/Images/team-1-user-3.svg',
  ];
  const brands = [
    '/Images/col-5.svg',
    '/Images/six.svg',
    '/Images/col-4.svg',
    '/Images/col-3.svg',
    '/Images/col-2.svg',
    '/Images/col-1.svg',
  ];


  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white  py-2 ">
        <div className="container mx-auto flex items-center justify-between ">
          {/* Left: Website Name */}
          <h3 className="text-[#252B42] font-montserrat font-bold text-2xl leading-8 tracking-tight m-2">
            <Link href="/">Bandage</Link>
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
              <Link href="/pricing">Pricing</Link>
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
              <span className="font-montserrat font-medium text-sm">Login</span>
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
                <Link href="/product2">Product</Link>
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

      {/* Hero Section */}
      <div
        className="relative  bg-center h-screen flex items-center"
        style={{
          backgroundImage: "url('/Images/background.png')",
        }}
      >
        <div className="container mx-auto text-[#252B42] p-14 font-[Montserrat]">
          <div className="md:w-1/2 text-left bg-opacity-75 p-6 rounded-md">
            <h5 className="font-Montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left m-8">
              ABOUT COMPANY
            </h5>
            <h1 className=" text-5xl font-bold mb-4 leading-tight font-Montserrat text-[#252B42] py-2 m-8">ABOUT US</h1>
            <h4 className=" text-lg mb-6  font-normal text-[#737373] m-8">
              We know how large objects will act, <br />
              but things on a small scale
            </h4>
            <button className="bg-[#23A6F0] text-white px-8 py-2 rounded-md text-lg hover:bg-green-600 transition duration-300 ease-in-out m-8">
              <Link href="/productlist">Get Quote Now</Link>
            </button>
          </div>
        </div>
      </div>
{/* Problems Trying Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-between items-center">
    {/* Left paragraph */}
    <div className="p-8 rounded-md md:w-[45%] font-Montserrat">
      <h5 className="text-sm mb-4 text-[#E74040] font-normal">Problems trying</h5>
      <p className="text-2xl text-black font-bold leading-[1.75rem]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </p>
    </div>

    {/* Right paragraph */}
    <div className="p-6 md:w-[45%] font-[Montserrat]">
      <p className="text-sm text-[#737373] font-normal leading-[1.75rem]">
        Problems trying to resolve the conflict between the two major realms of Classical physics:
        Newtonian mechanics.
      </p>
    </div>
  </div>
</section>




      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8 font-Montserrat">
          <div>
            <h2 className="text-6xl font-bold">15k</h2>
            <p className="text-gray-600 p-3">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-6xl font-bold">150k</h2>
            <p className="text-gray-600 p-3">Monthly Visitors</p>
          </div>
          <div>
            <h2 className="text-6xl font-bold">15</h2>
            <p className="text-gray-600 p-3">Countries Worldwide</p>
          </div>
          <div>
            <h2 className="text-6xl font-bold">100+</h2>
            <p className="text-gray-600 p-3">Top Partners</p>
          </div>
        </div>
      </section>
      
      <div
  className="relative flex items-center justify-center mx-auto w-[989px] h-[540px] py-10 px-10"
  style={{
    backgroundImage: "url('/Images/Video card.svg')",
    backgroundSize: "cover", // Ensures the image covers the container
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    backgroundPosition: "center", // Centers the image
  }}
>
 
</div>


      {/* Cards Section */}
<div className="text-center bg-white pr-16 py-16">
  <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
  <p className="text-gray-600 mb-12">
    Problems trying to resolve the conflict between <br /> the two major realms of Classical physics:
    Newtonian mechanics.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
    {cards.map((src, index) => (
      <div key={index} className="flex flex-col justify-center items-center p-8 font-[Montserrat]">
        {/* Image */}
        <Image
          src={src}
          alt={`Card ${index + 1}`}
          width={329}  
          height={331} 
          className=" mb-4" 
        />

        {/* Username */}
        <h5 className="text-xl font-semibold mb-2">username</h5>

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


      {/* Brands Section */}
          
      <div className="text-center bg-[#FAFAFA] pr-12 py-12">
  <h2 className="text-4xl font-bold mb-4">Big Companies Are Here</h2>
  <p className="text-gray-600 mb-12">
  Problems trying to resolve the conflict between <br/>
  the two major realms of Classical physics: Newtonian mechanics 
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center p-4 "
                  >
                    <Image
                      src={brand}
                      alt={`Brand ${index + 1}`}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Work With Us Section */}
<section className="py-16 bg-[#2A7CC7]">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    {/* Left Side */}
    <div className="text-left md:w-[50%] px-6 mt-0">
      <h2 className="text-sm font-normal text-white mb-4">WORK WITH US</h2>
      <h1 className="text-5xl font-bold text-white mb-4">Now Let’s Grow Yours</h1>
      <p className="text-lg text-white mb-8">
        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
      </p>
      <button className="bg-[#2A7CC7] text-white py-3 px-8 rounded-md text-lg border border-white  hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
    </div>

    <div className="md:w-[50%] h-full bg-gray-300 relative">
    <div className="absolute inset-0 bg-gray-300 mt-0"></div>
  <Image
    src="/Images/unsplash_vjMgqUkS8q8 (1).svg" 
    alt="Work with us"
    layout="responsive" 
    width={590} 
    height={640} 
    className="object-cover w-full  relative bg-cover bg-center h-screen flex items-center"
  />
</div>

  </div>
</section>
   <Footer/>
    </div>
  );
};

export default About;
