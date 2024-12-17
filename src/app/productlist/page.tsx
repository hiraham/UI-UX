import Header from '../component/Header';
import React from 'react';
import Image from 'next/image';
import Navbar from '../component/Navbar';
import { AiFillAppstore, AiOutlineBars, AiOutlineDown } from 'react-icons/ai';
import Footer from '../component/Footer';

const ProductList = () => {
  const products = [
    {
      src: "/Images/product-cover-5 (18).svg",
      alt: "Graphic Design",
      name: "Graphic Design",
      description: "English Department",
      previousPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (16).svg",
      alt: "Graphic Design",
      name: "Graphic Design",
      description: "Math Department",
      previousPrice: "$18.48",
      newPrice: "$8.48",
      colors: ["bg-blue-500", "bg-red-600", "bg-yellow-500", "bg-purple-800"],
    },
    {
      src: "/Images/product-cover-5 (15).svg",
      alt: "Graphic Design",
      name: "Product 3",
      description: "Science Department",
      previousPrice: "$20.48",
      newPrice: "$10.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (17).svg",
      alt: "Graphic Design",
      name: "Product 4",
      description: "History Department",
      previousPrice: "$22.48",
      newPrice: "$12.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (12).svg",
      alt: "Graphic Design",
      name: "Product 5",
      description: "Geography Department",
      previousPrice: "$24.48",
      newPrice: "$14.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (11).svg",
      alt: "Graphic Design",
      name: "Product 6",
      description: "Chemistry Department",
      previousPrice: "$26.48",
      newPrice: "$16.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (10).svg",
      alt: "Graphic Design",
      name: "Product 7",
      description: "Biology Department",
      previousPrice: "$28.48",
      newPrice: "$18.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (13).svg",
      alt: "Graphic Design",
      name: "Product 8",
      description: "Computer Science Department",
      previousPrice: "$30.48",
      newPrice: "$20.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (9).svg",
      alt: "Graphic Design",
      name: "Product 9",
      description: "Geography Department",
      previousPrice: "$24.48",
      newPrice: "$14.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (8).svg",
      alt: "Graphic Design",
      name: "Product 10",
      description: "Chemistry Department",
      previousPrice: "$26.48",
      newPrice: "$16.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (7).svg",
      alt: "Graphic Design",
      name: "Product 11",
      description: "Biology Department",
      previousPrice: "$28.48",
      newPrice: "$18.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/fixed-height (6).svg",
      alt: "Graphic Design",
      name: "Product 12",
      description: "Computer Science Department",
      previousPrice: "$30.48",
      newPrice: "$20.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
  
  ];

  const cards = [
    '/Images/four.svg',
    '/Images/three.svg',
    '/Images/two.svg',
    '/Images/one.svg',
    
    '/Images/five.svg',
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
      <Header/>
      <Navbar />

      {/* Header Section */}
      <div className="flex justify-between items-center bg-[#FAFAFA] p-4">
        <h1 className="text-[#252B42] text-xl font-bold">Shop</h1>
        <nav className="text-[#252B42] text-sm">Home &gt; Shop</nav>
      </div>

      {/* Cards Section */}
      <div className="bg-[#FAFAFA] pr-8">
        <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 gap-1  ">
          {cards.map((src, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <Image
                src={src}
                alt={`Card ${index + 1}`}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sorting Section */}
      <div className="flex justify-between items-center m-8">
        <h6 className="text-sm text-gray-500">Showing all 12 results</h6>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Views:</span>
            <AiFillAppstore className="text-gray-500 text-lg cursor-pointer" />
            <AiOutlineBars className="text-gray-500 text-lg cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center bg-[#F9F9F9] px-4 py-2 text-gray-600 border border-gray-300 rounded-md">
              Popularity <AiOutlineDown className="ml-2" />
            </button>
            <button className="bg-[#23A6F0] px-4 py-2 text-white rounded-md">Filter</button>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-[#FAFAFA] p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-white border border-gray-200 rounded-md"
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
     
      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-8 mt-8">
        {products.map((item, index) => (
          <div key={index} className="p-2">
            <div className="flex justify-center items-center mb-4">
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={250}
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-2 font-bold text-center font-[Montserrat]">
              {item.name}
            </p>
            {item.description && (
              <p className="text-sm text-gray-500 text-center font-[Montserrat]">
                {item.description}
              </p>
            )}
            <div className="flex justify-center items-center space-x-2 mt-2">
              {item.previousPrice && (
                <p className="text-gray-400 line-through">{item.previousPrice}</p>
              )}
              <p className="text-green-600 font-bold">{item.newPrice}</p>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-4">
              {item.colors.map((colorClass, idx) => (
                <div
                  key={idx}
                  className={`w-4 h-4 rounded-full border ${colorClass}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

     

    <div className="flex justify-center items-center py-4 bg-white shadow-md rounded-lg">
      {/* First Button */}
      <button className="px-4 py-2 bg-[#F3F3F3] text-[#23A6F0] rounded-l hover:bg-blue-700 border border-[#BDBDBD]">
        First
      </button>

      {/* Page Numbers */}
      {[1, 2, 3].map((number, index) => (
        <button
          key={number}
          className={`px-3 py-2 border border-[#BDBDBD] hover:bg-[#F3F3F3] text-[#23A6F0] ${
            index !== 0 ? "-ml-px" : ""
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button className="px-4 py-2 bg-[#23A6F0] text-[#BDBDBD] rounded-r hover:bg-blue-700 border border-[#BDBDBD] -ml-px">
        Next
      </button>
    </div>


    <Footer/> 
    </div>
  );
};

export default ProductList;
