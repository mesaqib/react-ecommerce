import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative w-full bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover the Latest Styles
          </h1>
          <p className="text-lg text-gray-600">
            Shop trending fashion, accessories, and more. New arrivals every week!
          </p>
          <Link to='/all-product'>
           <button>Shop Now</button>
          </Link>
        </div>

        <div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Banner"
            className="w-full h-auto rounded shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
