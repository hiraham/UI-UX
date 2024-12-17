import React from 'react'
import Navigation from '../component/Navigation'
import Image from 'next/image'
import { FaHeart, FaShoppingCart, } from 'react-icons/fa'
import { FaArrowsToEye, FaEye } from 'react-icons/fa6'
import Footer from '../component/Footer'
const Product2 = () => {
  const products = [
    {
      src: "/Images/product-cover-5 (19).svg",
      alt: "Graphic Design",
      name: "Graphic Design",
      description: "Graphic Design",
      previousPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (20).svg",
      alt: "Graphic Design",
      name: "Graphic Design",
      description: " Graphic Design",
      previousPrice: "$18.48",
      newPrice: "$8.48",
      colors: ["bg-blue-500", "bg-red-600", "bg-yellow-500", "bg-purple-800"],
    },
    {
      src: "/Images/product-cover-5 (21).svg",
      alt: "Graphic Design",
      name: "Product 3",
      description: "Science Department",
      previousPrice: "$20.48",
      newPrice: "$10.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (22).svg",
      alt: "Graphic Design",
      name: "Product 4",
      description: "Graphic Design",
      previousPrice: "$22.48",
      newPrice: "$12.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (23).svg",
      alt: "Graphic Design",
      name: "Product 5",
      description: "Graphic Design",
      previousPrice: "$24.48",
      newPrice: "$14.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (24).svg",
      alt: "Graphic Design",
      name: "Product 6",
      description: "Graphic Design",
      previousPrice: "$26.48",
      newPrice: "$16.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (19).svg",
      alt: "Graphic Design",
      name: "Product 7",
      description: "Graphic Design",
      previousPrice: "$28.48",
      newPrice: "$18.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (20).svg",
      alt: "Graphic Design",
      name: "Product 8",
      description: "Graphic Design",
      previousPrice: "$30.48",
      newPrice: "$20.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
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
      <Navigation/>
      <section className="py-16 bg-gray-200">
  {/* Header with Home and Shop gap */}
  <div className="container mx-auto">
    <div className="flex justify-between mb-8">
      <div className="text-lg font-medium">Home & shop</div>
    
    </div>

    {/* Product Details */}
    <div className="flex flex-col md:flex-row items-center">
      {/* Left Side: Product Image */}
      <div className="md:w-1/2 flex justify-center relative mb-8 md:mb-0">
        <Image
          src="/Images/single-product-1-cover-2.svg"
          alt="Floating Phone"
          width={506}
          height={450}
          className="object-cover w-full max-w-[506px] h-[450px]"
        />
      </div>

      {/* Right Side: Product Info */}
      <div className="md:w-1/2 text-left px-6">
        <h1 className="text-5xl font-bold mb-4">Floating Phone</h1>
        <div className="flex items-center mb-4">
          {/* Stars rating */}
          <div className="flex">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="border-2 border-yellow-400 text-yellow-400 p-1">☆</span>
          </div>
          <span className="ml-2">10 Reviews</span>
        </div>
        <div className="text-2xl font-semibold text-gray-900 mb-4">$1,139.33</div>
        <div className="text-lg font-medium text-gray-700 mb-8">Availability: In Stock</div>

        {/* Product description */}
        <p className="text-gray-600 mb-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
          Excitation venial consequent sent nostrum met.
        </p>

        {/* Divider line */}
        <hr className="border-[#BDBDBD] mb-6" />

        {/* Color Options */}
        <div className="flex space-x-2 mb-6">
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#23A6F0" }}></div>
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#2DC071" }}></div>
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#E77C40" }}></div>
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#252B42" }}></div>
        </div>

        {/* Select Options Button */}
        <div className='flex items-center space-x-4'>
        <button className="bg-[#23A6F0] text-white py-4 px-4 rounded-md text-lg flex items-center justify-between ">
        Select Options </button>
          <div className="flex space-x-4 ml-4">
            <FaHeart className="text-black"/>
            <FaShoppingCart className="fas fa-credit-card text-black"/>
            <FaEye className=" text-black"/>
          </div>
        </div>
      </div>
    </div>

    {/* Small Images below the main image */}
    <div className="flex justify-start mt-6 mb-4 space-x-4">
  {/* Image 1 */}
  <div className="w-1/6">
    <Image
      src="/Images/single-product-1-cover-2.svg"
      alt="Small Image 1"
      width={100}
      height={75}
      className="rounded-lg py-4 ml-16"
    />
  </div>

  {/* Image 2 */}
  <div className="w-1/6">
    <Image
      src="/Images/single-product-1-thumb-1.svg"
      alt="Small Image 2"
      width={100}
      height={75}
      className="rounded-lg py-4 "
    />
  </div>
</div>
</div>
</section>
<div className="container mx-auto px-4 py-8">
  {/* Tabs Section */}
  <div className="flex justify-center items-center space-x-8 text-gray-800 mb-4">
    <h3 className="text-lg font-semibold cursor-pointer border-b-2 border-gray-800 pb-2">
      Description
    </h3>
    <h3 className="text-lg font-semibold cursor-pointer">Additional Information</h3>
    <h3 className="text-lg font-semibold cursor-pointer">Reviews (0)</h3>
  </div>
</div>

  {/* Gray Line */}
  

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
    {/* Left Section (Image) */}
    <div className="flex justify-center items-center mb-14">
      <Image
        src="/Images/unsplash_QANOF9iJlFs.svg"
        alt="Descriptive Image"
        width={316}  height={200}
        className="w-[316px] h-[372px] object-cover shadow-md"
      />
    </div>

    {/* Center Section (Heading and Paragraphs) */}
    <div className="col-span-1 space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">The quick fox jumps over</h2>
      <p className="text-gray-600 mb-4">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
        consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
      </p>
      <p className="text-gray-600 mb-4">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
        consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
      </p>
      <p className="text-gray-600 mb-6">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
        consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
      </p>
      </div>
      {/* Right Side (Repeated Headings and Arrows) */}
     <div className='mb-10'>
      <h3 className="text-lg font-semibold text-gray-800 mb-6">The quick fox jumps over</h3>
      <ul className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <span className="text-lg mr-2">&gt;</span> The quick fox jumps over the lazy dog
          </li>
        ))}
      </ul>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-6 pt-4">The quick fox jumps over</h3>
      <ul className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <span className="text-lg mr-2">&gt;</span> The quick fox jumps over the lazy dog
          </li>
        ))}
      </ul>
    </div>
  </div>
  {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-8 mt-8 bg-[#FAFAFA]">
          {products.map((item, index) => (
            <div key={index} className="p-2">
              <div className="flex justify-center items-center mb-4 ]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={250}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="mt-2 font-bold text-center font-Montserrat">
                {item.name}
              </p>
              {item.description && (
                <p className="text-sm text-gray-500 text-center font-Montserrat">
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
             
              
              </div>
            </div>
          ))}
        </div>
         {/* Brands Section */}
              <div className=" p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center p-4 bg-[#FAFAFA]"
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

  <Footer/>
    </div>
  )
}

export default Product2
