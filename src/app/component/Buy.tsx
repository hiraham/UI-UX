import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Buy = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
         {/* Image Content */}
         <div className="md:w-1/2 flex justify-center">
          <img
            src="/Images/asian-woman-man-with-winter-clothes 1.svg"
            alt="Product Image"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 font-[Montserrat] pt-10 gap-10 ">
          <h4 className="text-2xl py-4 px-10 gap-2 text-[#BDBDBD]">SUMMER 2020</h4>
          <h1 className="text-6xl py-4 px-10  font-bold mb-4 text-[#252B42]">Part of the Neural 
          Universe</h1>
          <p className=" py-2 px-10 mb-4 font-normal text-[#737373]">
          We know how large objects will act, 
          but things on a small scale.</p>

          <button className="bg-[#2DC071] px-10 py-4 rounded-md font-semibold hover:bg-[#1c6d58] m-2">
          BUY NOW
          </button>
         
    <button className="border border-[#2DC071] text-[#2DC071]  bg-white px-10 py-4 rounded-md font-semibold hover:bg-[#1c6d58]">
    READ MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default Buy;
