import { Link } from "react-router-dom";
import { BiLogoSkype } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black text-white w-full h-20 p-5 fixed top-0 left-0">
        <div className="flex justify-around items-center">
          <div>
            <Link to="/" className="flex items-center font-semibold">
              <BiLogoSkype size={40} />
              <span> My Blog Site</span>
            </Link>
          </div>
          <ul className="flex space-x-8 justify-center font-semibold text-lg  ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portforlio</Link>
            </li>
          </ul>
          <div className="gap-3 font-semibold hidden md:flex">
            <Link to="/signin">
              <button className="bg-[#232327] text-white rounded-md py-2 px-3 hover:bg-blue-500 hover:text-black transition-all">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-white text-black rounded-md py-2 px-3 hover:bg-slate-500 hover:text-white transition-all">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
