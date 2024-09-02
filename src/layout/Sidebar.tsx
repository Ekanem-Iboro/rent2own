import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";

import { LogIn, LogOut, UserCircle } from "lucide-react";
import handbuger from "../assets/icons/handbuger.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Sidebardata from "@/components/reuseable/SidebarData";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import { useGetUserProfile } from "@/hooks/query";

const Sidebar = () => {
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
  const navigate = useNavigate();
  const location = useLocation();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <>
      <div className="lg:flex justify-start  block bg-[#ffffff]">
        {/* Desktop Navbar */}
        <div className="hidden h-screen lg:flex flex-col justify-between sticky top-0 left-0 bottom-0 text-[#726C6C] p-5 ml-4">
          <div className="w-full">
            <div className="mt-[1rem]">
              <img
                src={logo}
                alt="My Balance Logo"
                className="cursor-pointer w-[110px] h-[70px]"
              />
            </div>
            <div className="mt-[1rem] w-full">
              {Sidebardata?.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={`flex justify-center items-center flex-col mt-[1.5rem] py-[6px] w-full rounded-md ${
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
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex justify-center items-center flex-col mt-[1.5rem] py-[6px] w-full rounded-md ${
                    isActive
                      ? "bg-[#D8E6FA] text-[#1C6CDB] transition-all duration-500 ease-in-out"
                      : "bg-transparent"
                  }`
                }
              >
                {sessionToken ? (
                  <div className="w-[50px] h-[50px] rounded-full border border-[#D8E6FA] flex justify-center text-[#1C6CDB] items-center mb-[3px] bg-[#D8E6FA] overflow-hidden">
                    <p className="text-[25px]">{avatarLetters}</p>
                  </div>
                ) : (
                  <UserCircle className="mb-[3px] " />
                )}
                {/* <img src={User} className="mb-[3px]" alt="User Icon" /> */}
                <h2 className="text-[16px] leading-[16.8px] font-[400]">
                  Profile
                </h2>
              </NavLink>
            </div>
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
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden w-full bg-[#ffffff] flex justify-between items-center fixed top-0 z-20 px-[5%]">
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
                    <div className="w-[50px] h-[50px] rounded-full border border-[#D8E6FA] flex justify-center items-center mb-[3px] bg-[#D8E6FA] text-[#1C6CDB]  overflow-hidden"></div>
                  ) : (
                    <UserCircle className="mb-[3px] " />
                  )}
                  {/* <img src={User} className="mb-[3px]" alt="User Icon" /> */}
                  <h2 className="text-[16px] leading-[16.8px] font-[400]">
                    Profile
                  </h2>
                </NavLink>
              </div>
              <div
                className="flex flex-col items-center  cursor-pointer"
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
                <LogOut size={25} color="red" className="" />
                <h2 className="text-[18px] leading-[16.8px] mt-[5%] font-[400] text-red">
                  Sign Out
                </h2>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <main className=" w-full overflow-hidden pb-[1%] pt-[1%] px-[1%] bg-[#ffffff]">
          <Outlet />
        </main>
      </div>
      <div className="md:mt-[1%]">
        <Footer />
      </div>
    </>
  );
};

export default Sidebar;
