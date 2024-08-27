import { Link } from "react-router-dom";
import footerlogo from "../assets/images/logo.png";
import apple from "../assets/images/download-apple-store.png";
import googleplay from "../assets/images/get-it-on-google-play.png";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
// import ctwitter from "../assets/icons/c_twitter.svg";
// import cinstagram from "../assets/icons/c_instagram.svg";
// import cfacebook from "../assets/icons/c_facebook.svg";

const Footer = () => {
  return (
    <footer className="lg:px-[6rem] px-2 py-9 w-full bg-grey-50 footerpad">
      <div className="md:flex block justify-between items-center md:px-[2rem] p-0   ">
        <div className="">
          <div className="md:w-[50%] w-full">
            {" "}
            <Link to="/" className="flex items-center">
              <img
                src={footerlogo}
                alt="My Balance Logo"
                className="cursor-pointer w-[40%] "
              />
              {/* <p className="text-primary">Rent2OwnAuto</p> */}
            </Link>
            <p className="text-wrap text-[14px] text-[#2D2D2D] mt-2 font-[400] leading-[16.8px]">
              Rent-to-own (RTO) is a flexible option that allows individuals to
              lease a vehicle with the option to purchase it after a certain
              period.
            </p>
          </div>
          {/* desktop */}
          <ul className="md:flex hidden gap-7 items-center mt-8 font-[700] leading-[16.8px] text-[14px] text-[#2D2D2D]">
            <li className="mb-7">
              <Link className="underline" to="/sign-up">
                Register
              </Link>
            </li>
            <li className="mb-7">
              <Link className="underline" to="/sign-in">
                Sign in
              </Link>
            </li>
            <li className="mb-7">
              <Link className="underline" to="/">
                Home
              </Link>
            </li>
            <li className="mb-7">
              <a href="#howitworks" className=" transition-all mb-6 underline">
                How it works
              </a>
            </li>
            <li className="mb-7">
              <a href="/#contact" className=" transition-all mb-6 underline">
                Contact us
              </a>
            </li>
            <li className="mb-7">
              <a href="/#faq" className=" transition-all mb-6 underline">
                FAQ
              </a>
            </li>
          </ul>
          {/* mobile */}
          <ul className="md:hidden flex  items-start gap-5  mt-8 font-[700] leading-[16.8px] text-[14px] text-[#2D2D2D]">
            <div className="flex-1">
              <li className="mb-4">
                <Link to="/" className="underline">
                  Sign up
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="underline">
                  Sign in
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="underline">
                  Home
                </Link>
              </li>
            </div>
            <div className="flex-1">
              <li className="mb-4">
                <a href="/#howitworks" className="underline">
                  How it works
                </a>
              </li>
              <li className="mb-4">
                <a href="contact" className="underline">
                  Contact us
                </a>
              </li>
              <li className="mb-7">
                <a href="/#faq" className=" transition-all mb-6 underline">
                  FAQ
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="lg:w-[25%] w-full  flex  md:mt-0 mt-10">
          {appStores?.map((item, index) => (
            <div className="flex items-start" key={item.id}>
              <Link to={item.path}>
                <img
                  src={item.icon}
                  alt=""
                  className={`rounded-[9px] ${
                    index === 1 ? "w-[135px]  -mt-[1px] " : "w-[120px]"
                  }`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop */}
      <div className="  mt-[4rem] px-[4rem] pb-6 md:flex hidden justify-between items-end border-t border-t-gray-300 ">
        <p className="  text-[14px] leading-[16.8px] mt-7 text-[#191919] ">
          &copy; 2024 Rent2OwnAuto. All rights reserved.
        </p>
        <ul className="flex gap-5 items-center mt-8 text-[#191919]">
          {socialLinks?.map((item) => (
            <li key={item.id} className="">
              <Link to={item.path} className="underline">
                <img src={item.icon} alt="" className="text-[#191919]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="  mt-[4rem] pb-6 block md:hidden  border-t border-t-gray-300 ">
        <ul className="flex gap-5 items-center mt-8 w-full ">
          {socialLinks?.map((item) => (
            <li key={item.id} className="">
              <Link to={item.path} className="underline">
                <img src={item.icon} alt="" className="text-[#191919]" />
              </Link>
            </li>
          ))}
        </ul>
        <p className=" text-[14px] leading-[16.8px] mt-7 text-[#191919]">
          &copy; 2024 Rent2OwnAuto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const appStores = [
  {
    id: 1,
    title: "Download on the",
    name: "App Store",
    path: "/",
    icon: apple,
  },
  {
    id: 2,
    title: "Get it on",
    name: "Google Play",
    path: "/",
    icon: googleplay,
  },
];

const socialLinks = [
  {
    id: 1,
    icon: twitter,
    path: "/",
  },
  {
    id: 2,
    icon: instagram,
    path: "/",
  },
  {
    id: 3,
    icon: facebook,
    path: "/",
  },
];

// const contactLink = [
//   {
//     id: 1,
//     icon: ctwitter,
//     path: "/",
//   },
//   {
//     id: 2,
//     icon: cinstagram,
//     path: "/",
//   },
//   {
//     id: 3,
//     icon: cfacebook,
//     path: "/",
//   },
// ];
