import { Link } from "react-router-dom";

function SaleBanner() {
  return (
    <section className="grid md:grid-cols-2 gap-6 px-6 md:px-20 py-14">

      {/* MEN */}
      <div className="relative overflow-hidden rounded-lg h-[220px] md:h-[260px]">
        <img
          src="/images/salebanner-men.jpg"
          alt="Men Fashion Sale"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex flex-col justify-center p-6 text-white">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Men's Fashion
          </h3>
          <p className="mb-4">Min. 50% Off</p>

          <Link to="/men">
            <button className="w-fit px-4 py-2 bg-white text-black hover:bg-gray-200 transition rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* WOMEN */}
      <div className="relative overflow-hidden rounded-lg h-[220px] md:h-[260px]">
        <img
          src="/images/salebanner-women.jpg"
          alt="Women Fashion Sale"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex flex-col justify-center p-6 text-white">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Women's Wear
          </h3>
          <p className="mb-4">Min. 35% Off</p>

          <Link to="/women">
            <button className="w-fit px-4 py-2 bg-white text-black hover:bg-gray-200 transition rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
}

export default SaleBanner;