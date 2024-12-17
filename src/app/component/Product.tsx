import React from 'react';
import Image from 'next/image';

const Product = () => {
  const products = [
    {
      src: "/Images ign",
      description: "English Department",
      previousPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (6).svg",
      alt: "Graphic Design",
      name: "Graphic Design",
      description: "Math Department",
      previousPrice: "$18.48",
      newPrice: "$8.48",
      colors: ["bg-blue-500", "bg-red-600", "bg-yellow-500", "bg-purple-800"],
    },
    {
      src: "/Images/product-cover-5 (2).svg",
      alt: "Graphic Design",
      name: "Product 3",
      description: "Science Department",
      previousPrice: "$20.48",
      newPrice: "$10.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (5).svg",
      alt: "Graphic Design",
      name: "Product 4",
      description: "History Department",
      previousPrice: "$22.48",
      newPrice: "$12.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/product-cover-5 (6).svg",
      alt: "Graphic Design",
      name: "Product 5",
      description: "Geography Department",
      previousPrice: "$24.48",
      newPrice: "$14.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/fixed-height.svg",
      alt: "Graphic Design",
      name: "Product 6",
      description: "Chemistry Department",
      previousPrice: "$26.48",
      newPrice: "$16.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/fixed-height (1).svg",
      alt: "Graphic Design",
      name: "Product 7",
      description: "Biology Department",
      previousPrice: "$28.48",
      newPrice: "$18.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
    {
      src: "/Images/fixed-height (2).svg",
      alt: "Graphic Design",
      name: "Product 8",
      description: "Computer Science Department",
      previousPrice: "$30.48",
      newPrice: "$20.48",
      colors: ["bg-blue-500", "bg-green-600", "bg-orange-500", "bg-gray-800"],
    },
  ];

  return (
    <div className="p-8 bg-white">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-sm text-gray-500 p-2 uppercase tracking-wide">
          Featured Products
        </h2>
        <h3 className="text-2xl font-bold text-gray-800 font-[Montserrat]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="p-2 text-gray-500 text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-8 mt-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="p-2 "
          >
            {/* Product Image */}
            <div className="flex justify-center items-center mb-4">
            <Image
                src={item.src || "/images/placeholder.png"} // Fallback for missing images
                alt={item.alt || "Product Image"}
                width={200}
                height={250}
                className="object-contain"
                priority
              />
            </div>
            {/* Product Name */}
            <p className="mt-2 font-bold text-center font-[Montserrat] ">
              {item.name}
            </p>
            {/* Product Description */}
            {item.description && (
              <p className="text-sm text-gray-500 text-center font-[Montserrat]">
                {item.description}
              </p>
            )}
            {/* Prices */}
            <div className="flex justify-center items-center space-x-2 mt-2">
              {item.previousPrice && (
                <p className="text-gray-400 line-through">{item.previousPrice}</p>
              )}
              <p className="text-green-600 font-bold">{item.newPrice}</p>
            </div>
            {/* Color Options */}
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
    </div>
  );
};

export default Product;
