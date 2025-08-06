import { useEffect, useState } from "react";
import { CartIcon, HamBurgerIcon, ProfileIcon } from "../icons/Icons";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerHeight < 1024);

  const {items} = useSelector((state) => state.cart)

  const totalItem = items.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center h-[60px] shadow px-4 md:px-10 border-t border-t-violet-700 relative">
        <Link to="/" className="logo text-lg font-bold">
          LOGO
        </Link>
        {/* Full Menu - hidden on small screens */}

        {!isMobile && (
          <div className="flex items-center gap-7">
            {/* Nav Links */}
            <div className="items flex items-center gap-7 uppercase text-[12px] font-medium">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-products" className="whitespace-nowrap">
                All Products
              </NavLink>
              {/* <NavLink to="/category/:{slug}" className="whitespace-nowrap">
                All Category
              </NavLink> */}
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            {/* Search Bar */}
            <div className="ml-6">
              <SearchBar />
            </div>
          </div>
        )}

        {isMobile && <>Hello</>}

        {/* Toggle icon - visible only on mobile */}

        <div className="flex gap-7">
          <div className="profile flex items-center gap-5 ml-6">
            <div className="group relative">
              <ProfileIcon className="cursor-pointer" />
              <div className="show absolute hidden group-hover:block bg-white shadow-md p-2 rounded z-10 w-[150px] right-[-50px]">
                <p className="text-sm text-gray-800">Welcome Saqib</p>
                <button className="text-blue-600 text-sm mt-1">Login</button>
              </div>
            </div>

            <div className="cart">
              <Link to="/cart" className="relative inline-block">
                {/* Cart Icon */}
                <CartIcon className="w-6 h-6 text-gray-700" />

                {/* Badge */}
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                 {totalItem}
                </span>
              </Link>
            </div>
          </div>
          <div className="toggle cursor-pointer block lg:hidden">
            <HamBurgerIcon />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
