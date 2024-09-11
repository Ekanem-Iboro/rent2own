import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import logo from "@/assets/images/logo.png";
// import logo2 from "../assets/images/logo2.png";LogIn, LogOut,

import { BellIcon, ChevronDown, UserCircle } from "lucide-react";
// import handbuger from "../assets/icons/handbuger.svg";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
import { useState } from "react";
import Sidebardata from "@/components/reuseable/SidebarData";
import Footer from "@/components/Footer";
// import { toast } from "react-toastify";
import { useGetUserProfile } from "@/hooks/query";
import { toast } from "react-toastify";
import { ContactAdressPhone } from "@/components/reuseable/ContactAdressPhone";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const sessionToken = localStorage.getItem("session_token");
  const userId = Number(localStorage.getItem("user_id")); // Retrieve the user ID from local storage
  const {
    data: userProfile,
    //  isLoading: isUserProfileLoading,
    //  error,
  } = useGetUserProfile(userId);
  //Avata
  const firstName = userProfile?.firstname || "";
  const lastName = userProfile?.lastname || "";
  const avatarLetters = `${firstName.charAt(0)}${lastName.charAt(
    0
  )}`.toUpperCase();
  //

  // const [isSheetOpen, setIsSheetOpen] = useState(false);

  // const handleLinkClick = () => {
  //   setIsSheetOpen(false); // Close the sheet when a link is clicked
  // };

  return (
    <>
      <header className="flex justify-between items-center py-1 px-[2%] md:bg-none bg-slate-50 md:shadow-none  shadow-md md:relative fixed top-0 w-full md:mb-0 mb-[4.5rem] md:z-0 z-20 ">
        <div className="">
          <Link to="/home">
            <img
              src={logo}
              alt="My Balance Logo"
              className="cursor-pointer w-[110px] h-[70px]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-9">
          <NavLink to="/notification">
            <BellIcon />
          </NavLink>
          <div className="flex items-center gap-3">
            {" "}
            <NavLink to="/settings">
              {sessionToken ? (
                <div className="w-[40px] h-[40x] rounded-full border  flex justify-center border-[#D8E6FA] text-[#1C6CDB] bg-[#D8E6FA] items-center mb-[3px]  overflow-hidden">
                  <p className="text-[25px]">{avatarLetters}</p>
                </div>
              ) : (
                <UserCircle className="mb-[3px] " />
              )}
              {/* <img src={User} className="mb-[3px]" alt="User Icon" /> */}
            </NavLink>
            <div className="relative">
              <ChevronDown
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
              {open && (
                <div className="absolute top-10 right-0 w-[150px] h-[150px] bg-[#ffffff] py-[40px] rounded-lg transition-all duration-500 delay-500 ease-in-out  ">
                  <div className="flex flex-col gap-9 items-center transition-all duration-500 delay-500 ease-in-out ">
                    <Link
                      to="/settings"
                      className="text-[14px] font-[500] leading-[16.8px] text-[#383434]"
                      onClick={() => setOpen(false)}
                    >
                      {" "}
                      Settings
                    </Link>
                    <button
                      className="text-[14px] font-[500] leading-[16.8px] text-[#383434]"
                      onClick={() => {
                        if (!sessionToken) {
                          navigate("/sign-in");
                        } else {
                          localStorage.clear();
                          toast.warning("Logging out user", {
                            toastId: "warning1",
                          });
                          setTimeout(() => {
                            navigate("/");
                          }, 1500);
                        }
                        setOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <hr className=" border border-[#E6E6E6] mx-2 md:mx-5 my-4 md:block hidden " />
      <div className="lg:flex justify-start  block md:mt-0 mt-[4.5rem]  ">
        {/* top Sidebar */}
        <div className="hidden h-screen lg:flex flex-col justify-between sticky top-0 left-0 bottom-0 text-[#726C6C] p-3 ml-2">
          <div className="w-full">
            <div className="mt-[1rem] w-full">
              {Sidebardata?.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={`flex justify-center items-center flex-col mt-[1.5rem] py-[6px] w-full rounded-md px-2 ${
                    item.path === location.pathname
                      ? "bg-[#D8E6FA] text-[#1C6CDB] transition-all duration-500 ease-in-out"
                      : "bg-transparent"
                  }`}
                >
                  <item.icon className="mb-[3px]" />
                  <h2 className="text-[16px] leading-[16.8px]  font-[400]">
                    {item.title}
                  </h2>
                </NavLink>
              ))}
            </div>
          </div>
          {/* <div
          className="flex flex-col items-center justify-center mb-[7px] cursor-pointer"
          // Uncomment and implement logout functionality as needed
          onClick={() => {
            if (!sessionToken) {
              navigate("/sign-in");
            } else {
              localStorage.clear();
              toast.warning("Logging out user", {
                toastId: "warning1",
              });
              setTimeout(() => {
                navigate("/");
              }, 1500);
            }
          }}
          >
            {!sessionToken ? (
              <LogIn size={25} className=" text-secondary" />
            ) : (
              <LogOut size={25} color="red" className="-rotate-[179deg]" />
            )}
            <h2 className="text-[18px] leading-[16.8px] mt-[5%] font-[400] text-red">
              {sessionToken ? "Sign out" : "Sign in"}
            </h2>
          </div> */}
        </div>

        {/* Mobile Navbar */}
        {/* <div className="lg:hidden w-full bg-[#ffffff] flex justify-between items-center fixed top-0 z-20 px-[5%]">
          <div className="mt-[1rem]">
            <img
              src={logo2}
              alt="My Balance Logo"
              className="cursor-pointer w-[110px] h-[70px]"
            />
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger>
              <img src={handbuger} alt="menu" className="w-7 h-7 " />
            </SheetTrigger>

            <SheetContent className="bg-white w-[200px] h-full flex flex-col justify-between overflow-y-auto no-scrollbar">
              <SheetHeader className="hidden">
                <SheetTitle className=""></SheetTitle>
              </SheetHeader>

              <div className="mt-[1rem] w-full">
                {Sidebardata?.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`flex justify-center items-center flex-col mt-[1.5rem] py-[6px] w-full rounded-md ${
                      item.path === "/home"
                        ? "bg-[#D8E6FA] text-[#1C6CDB] transition-all duration-500 ease-in-out"
                        : "bg-transparent"
                    }`}
                  >
                    <item.icon className="mb-[3px]" />
                    <h2 className="text-[16px] leading-[16.8px]  font-[400]">
                      {item.title}
                    </h2>
                  </NavLink>
                ))}

                <NavLink
                  to="/profile"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `flex justify-center items-center flex-col mt-[1.5rem] py-[6px] w-full rounded-md ${
                      isActive
                        ? "bg-[#D8E6FA] text-[#1C6CDB] transition-all duration-500 ease-in-out"
                        : "bg-transparent"
                    }`
                  }
                >
                  {sessionToken ? (
                    <div className="w-[40px] h-[40px] rounded-full border border-[#D8E6FA] flex justify-center items-center mb-[3px] bg-[#D8E6FA] text-[#1C6CDB]  overflow-hidden">
                      <p className="text-[25px]">{avatarLetters}</p>
                    </div>
                  ) : (
                    <UserCircle className="mb-[3px] " />
                  )}
                  <h2 className="text-[16px] leading-[16.8px] font-[400]">
                    Profile
                  </h2>
                </NavLink>
              </div>
              <div
                className="flex flex-col items-center justify-center mb-[7px] cursor-pointer"
                // Uncomment and implement logout functionality as needed
                onClick={() => {
                  if (!sessionToken) {
                    navigate("/sign-in");
                  } else {
                    localStorage.clear();
                    toast.warning("Logging out user", {
                      toastId: "warning1",
                    });
                    setTimeout(() => {
                      navigate("/");
                    }, 1500);
                  }
                }}
              >
                {!sessionToken ? (
                  <LogIn size={25} className=" text-secondary" />
                ) : (
                  <LogOut size={25} color="red" className="-rotate-[179deg]" />
                )}
                <h2 className="text-[18px] leading-[16.8px] mt-[5%] font-[400] text-red">
                  {sessionToken ? "Sign out" : "Sign in"}
                </h2>
              </div>
            </SheetContent>
          </Sheet>
        </div> */}

        {/* b0ttom Sidebar */}
        <div className=" w-full bg-[#FFFFFF] z-20 lg:hidden block fixed left-0 bottom-0 text-[#726C6C]">
          <div className="w-full">
            <div className=" w-full flex justify-between items-end">
              {Sidebardata?.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={`flex justify-center items-center flex-col  py-[6px] w-full rounded-md nav_b_link ${
                    item.path === location.pathname
                      ? "bg-[#D8E6FA] text-[#1C6CDB] transition-all duration-500 ease-in-out"
                      : "bg-transparent"
                  }`}
                >
                  <item.icon className="mb-[5px]" />
                  <h2 className="text-[14px] leading-[16.8px]  font-[400] nav_b_text">
                    {item.title}
                  </h2>
                </NavLink>
              ))}
            </div>
          </div>
          {/* <div
          className="flex flex-col items-center justify-center mb-[7px] cursor-pointer"
          // Uncomment and implement logout functionality as needed
          onClick={() => {
            if (!sessionToken) {
              navigate("/sign-in");
            } else {
              localStorage.clear();
              toast.warning("Logging out user", {
                toastId: "warning1",
              });
              setTimeout(() => {
                navigate("/");
              }, 1500);
            }
          }}
          >
            {!sessionToken ? (
              <LogIn size={25} className=" text-secondary" />
            ) : (
              <LogOut size={25} color="red" className="-rotate-[179deg]" />
            )}
            <h2 className="text-[18px] leading-[16.8px] mt-[5%] font-[400] text-red">
              {sessionToken ? "Sign out" : "Sign in"}
            </h2>
          </div> */}
        </div>
        <main className=" w-full overflow-hidden pb-[1%] pt-[1%] px-[1%]  ">
          <Outlet />
        </main>
      </div>
      {location.pathname === "/settings" ? "" : <ContactAdressPhone />}

      <div className="md:mt-[1%] md:mb-0 mb-[3rem] ">
        <Footer />
      </div>
    </>
  );
};

export default Sidebar;
