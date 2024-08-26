import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar((prevbar) => !prevbar);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <>
      <div className="lg:flex hidden justify-between items-center md:px-[5%] py-[1%] text-[#FFFFFF]  w-full  ">
        <div className="flex justify-start items-center gap-14">
          <div className="">
            <Link to="/" className="">
              <img
                src={logo}
                alt="My Balance Logo"
                className="cursor-pointer w-full h-[90px] "
              />
              {/* <p className="text-primary-light">rent2own</p> */}
            </Link>
          </div>

          <nav>
            <ul className="flex gap-8 text-[16px] leading-[19.2px] font-[500]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-[700]"
                      : "text-[#191919] hover:text-primary  transition-all"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a href="#howitworks" id="" className="text-[#191919] ">
                  How it works
                </a>
              </li>
              <li>
                <a href="/#faq" id="contact-link" className="text-[#191919] ">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  id="contact-link"
                  className="text-[#191919] "
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex  items-center justify-between gap-10">
          <p className="cursor-pointer font-[600] text-primary border border-primary leadeing-[21.6px] py-2 px-[2rem] rounded-xl text-[18px]">
            <Link to="/sign-in">Sign in</Link>
          </p>
          <button className="bg-primary  font-[600] py-3 px-[4rem] rounded-xl text-[18px] text-[#FAFAFA] ">
            <Link to="/sign-up">Create an account</Link>
          </button>
        </div>
      </div>
      {/*  */}
      {/* Mobile Nav Bar */}
      <div className=" lg:hidden flex justify-between items-center  px-4 py-[1rem] text-[#FFFFFF]">
        <div className="">
          <Link to="/" className="flex items-center" onClick={closeSidebar}>
            <img
              src={logo}
              alt="My Balance Logo"
              className="cursor-pointer w-[150px] h-[80px] "
            />
            {/* <p className="text-primary-light">rent2own</p> */}
          </Link>
        </div>
        <div>
          {sidebar == false ? (
            <NavLink to="#">
              <AlignJustify
                color="black"
                className="w-8 h-8"
                onClick={showSidebar}
              />
            </NavLink>
          ) : (
            <NavLink to="#">
              <X onClick={showSidebar} color="black" className="w-8 h-8" />
            </NavLink>
          )}
        </div>
      </div>
      {sidebar == true && <hr className=" lg:hidden block bg-primary" />}
      <div
        className={`lg:hidden block font-light ${
          sidebar
            ? "navMenu right-0 duration-300"
            : "navMenu -right-full duration-700"
        }`}
      >
        <nav>
          <ul className="lg:flex block p-4 font-[500]">
            <li className="mb-4 mt-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-[700]"
                    : "text-[#191919] hover:text-primary  transition-all"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mb-4 ">
              <a href="#howitworks" id="" className="text-[#191919] ">
                How it works
              </a>
            </li>
            <li className="mb-4 ">
              <a href="/#faq" id="contact-link" className="text-[#191919] ">
                FAQ
              </a>
            </li>
            <li className="mb-4 ">
              <a href="#contact" id="contact-link" className="text-[#191919] ">
                Contact us
              </a>
            </li>
          </ul>
        </nav>

        <hr className=" lg:hidden block my-2 " />

        <div className="flex flex-col items-center justify-center gap-6 p-5">
          <button
            className="bg-primary py-2 px-[4rem] w-full  font-[600] rounded-[10px] mt-5"
            onClick={closeSidebar}
          >
            <Link to="/sign-up">Create an account</Link>
          </button>
          <p
            className="cursor-pointer text-primary  font-[600]"
            onClick={closeSidebar}
          >
            <Link to="/sign-in">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
