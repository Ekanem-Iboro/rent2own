import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar((prevbar) => !prevbar);
  };
  const sessionstoken = localStorage.getItem("session_token");
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
              {navBars?.map((data, index) => (
                <li>
                  <NavLink
                    to={data.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-[700]"
                        : "text-[#191919] hover:text-primary  transition-all"
                    }
                    key={index}
                  >
                    {data.route}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex  items-center justify-between gap-10">
          <p className="cursor-pointer font-[600] text-primary border border-primary leading-[21.6px] py-2 px-[2rem] rounded-xl text-[18px]">
            <Link to={`${sessionstoken ? "/home" : "/sign-in"}`}>
              {sessionstoken ? "Continue to Dashboard" : "Sign In"}
            </Link>
          </p>
          <button
            className={`bg-primary  font-[600] py-3 px-[4rem] rounded-xl text-[18px] text-[#FAFAFA] ${
              sessionstoken ? "hidden" : "block"
            } `}
          >
            <Link to="/sign-up">Create an account</Link>
          </button>
        </div>
      </div>
      {/*  */}
      {/* Mobile Nav Bar */}
      <div className=" lg:hidden flex justify-between items-center pr-5   py-[1rem] text-[#FFFFFF]">
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
            {navBars?.map((data) => (
              <li className="mt-4 mb-4">
                <NavLink
                  to={data.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-[700]"
                      : "text-[#191919] hover:text-primary  transition-all"
                  }
                  key={data.id}
                >
                  {data.route}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <hr className=" lg:hidden block my-2 " />

        <div className="flex flex-col items-center justify-center gap-6 p-5">
          <Link to={`${sessionstoken ? "/home" : "/sign-in"}`}>
            <p
              className="cursor-pointer text-primary py-3 px-[4rem] text-center rounded-[10px] font-[600] border border-primary w-full mt-3"
              onClick={closeSidebar}
            >
              {sessionstoken ? "Continue to Dashboard" : "Sign In"}
            </p>
          </Link>
          <Link to="/sign-up" className="w-full">
            <button
              className={`bg-primary py-3 px-[4rem] w-full  font-[600] rounded-[10px] ${
                sessionstoken ? "hidden" : "block"
              }`}
              onClick={closeSidebar}
            >
              Create an account
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

const navBars = [
  {
    id: 1,
    route: "Home",
    path: "/",
  },
  {
    id: 2,
    route: "How it works",
    path: "/howitworks",
  },
  {
    id: 3,
    route: "FAQ",
    path: "/faq",
  },
  {
    id: 4,
    route: "Contact Us",
    path: "/contactus",
  },
];
