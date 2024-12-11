import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Card = () => {
  return (
    <section className="bg-[#23856D] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 font-[Montserrat] pt-10 gap-10 text-white">
          <h4 className="text-2xl py-4 px-10 gap-2">SUMMER 2020</h4>
          <h1 className="text-6xl py-4 px-10  font-bold mb-4">Vita Classic Product</h1>
          <p className=" py-2 px-10 mb-4 font-normal ">
            We know how large objects will act, We know<br/> how are objects will act, We know
          </p>
          <button className="text-xl font-bold text-white m-2 py-4 px-10">$16.48</button>
         
    <button className="bg-[#2DC071] px-10 py-4 rounded-md font-semibold hover:bg-[#1c6d58] m-2">
            ADD TO CART
          </button>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/Images/boyhero.svg"
            alt="Product Image"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Card;
