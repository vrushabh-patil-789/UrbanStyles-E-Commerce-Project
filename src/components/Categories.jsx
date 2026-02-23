import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="grid md:grid-cols-[1.2fr_1fr] gap-6 px-6 md:px-20 py-12">

      {/* LEFT BIG CARD */}
      <div className="relative overflow-hidden rounded-lg h-[300px] md:h-[420px]">
        <img
          src="/images/Women.jpg"
          alt="Women Style"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 p-6 flex flex-col justify-center bg-black/20">
          <span className="text-blue-600 font-semibold mb-2">
            New Arrivals
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Women's Style
          </h3>
          <p className="mb-4 text-white">Up to 70% Off</p>

          <Link to="/women">
            <button className="w-fit px-4 py-2 bg-black text-white hover:bg-gray-800 transition rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Kids */}
        <div className="relative overflow-hidden rounded-lg h-[180px]">
          <img
            src="/images/twokids.jpg"
            alt="Kids"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 p-5 flex flex-col justify-center bg-black/20 text-white">
            <span className="bg-blue-600 text-xs px-2 py-1 w-fit mb-2">
              25% OFF
            </span>
            <h4 className="text-lg font-semibold mb-3">
              New Arrivals: Kids
            </h4>

            <Link to="/kids">
              <button className="w-fit px-3 py-1 bg-black text-white hover:bg-gray-800 transition rounded-md">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Jackets */}
        <div className="relative overflow-hidden rounded-lg h-[180px]">
          <img
            src="/images/winter.jpg"
            alt="Jackets"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 p-5 flex flex-col justify-center bg-black/20 text-white">
            <span className="bg-blue-600 text-xs px-2 py-1 w-fit mb-2">
              45% OFF
            </span>
            <h4 className="text-lg font-semibold mb-3">
              Jackets
            </h4>

            <button className="w-fit px-3 py-1 bg-black text-white hover:bg-gray-800 transition rounded-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* Men - Wide */}
        <div className="relative overflow-hidden rounded-lg h-[200px] md:col-span-2">
          <img
            src="/images/mens.jpg"
            alt="Men"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 p-6 flex flex-col justify-center items-end text-right bg-black/20 text-white">
            <span className="text-blue-400 font-semibold mb-2">
              Hot Deal
            </span>
            <h4 className="text-xl font-semibold mb-2">
              Men's Style
            </h4>
            <p className="mb-3">Min. 40–80% Off</p>

            <Link to="/men">
              <button className="w-fit px-4 py-2 bg-black text-white hover:bg-gray-800 transition rounded-md">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Categories;