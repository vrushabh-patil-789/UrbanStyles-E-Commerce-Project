import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-20 dark:bg-[#1A1A1A]">

      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-20 py-14">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            UrbanStreet
          </h2>
          <p className="text-sm leading-relaxed">
            UrbanStreet is a modern shopping site. 
            Get branded products at the best deals.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
            <Link to="/" className="hover:text-white cursor-pointer">
            Home
            </Link>
            </li>

            <li>
            <Link to="/cart" className="hover:text-white cursor-pointer">
            Cart
            </Link>
            </li>

            <li>
            <Link to="/men" className="hover:text-white cursor-pointer">
            Men's 
            </Link>
            </li>

            <li>
            <Link to="/kids" className="hover:text-white cursor-pointer">
            Kids's 
            </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>
          <div className="text-sm space-y-2">
            <p>Email: pvrushabh@gmail.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Mumbai, India</p>
          </div>
        </div>

      </div>

      <div className="text-center text-xs border-t border-gray-700 py-4">
        © 2026 UrbanStreet | VJ
      </div>

    </footer>
  );
}

export default Footer;