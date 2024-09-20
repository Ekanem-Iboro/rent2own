import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";
import ChangePassword from "@/components/tab/ChangePassword";
import NotificationTab from "@/components/tab/NotificationTab";
import Profile from "@/components/tab/Profle";
import { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="px-2">
      <BreadcrumbComp item="Settings" color="#191919" path="/home" sepCol="" />
      <h1 className=" mt-[1rem] mb-7  text-[#151413] text-[20px] font-[500] leading-[24px] ">
        Settings
      </h1>
      <div className=" w-fit  border border-[#E4E7EC] flex  items-center rounded-l-lg overflow-hidden bg-[#ffffff]">
        <button
          className={`${
            activeTab === "profile" ? "text-[#1D2739] bg-[#D6EEFF]" : ""
          } w-fit p-2 px-4 text-[14px] leading-[16.8px] font-[500] transition-all duration-300 delay-100 ease-in`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <hr className="h-[32px] w-[1px] bg-[#E4E7EC]" />
        <button
          className={`${
            activeTab === "changepassword" ? "text-[#1D2739] bg-[#D6EEFF]" : ""
          } w-fit p-2 px-4  text-[14px] leading-[16.8px] font-[500] transition-all duration-300 delay-100 ease-in`}
          onClick={() => setActiveTab("changepassword")}
        >
          Change Password
        </button>
        <hr className="h-[32px] w-[1px] bg-[#E4E7EC]" />

        <button
          className={`${
            activeTab === "notifications" ? "text-[#1D2739] bg-[#D6EEFF]" : ""
          } w-fit p-2 px-4  text-[14px] leading-[16.8px] font-[500] transition-all duration-300 delay-100 ease-in`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
      </div>
      {/* Tab Content */}
      <div className="mt-10">
        {activeTab === "profile" && <Profile />}

        {activeTab === "changepassword" && <ChangePassword />}
        {activeTab === "notifications" && <NotificationTab />}
      </div>
    </div>
  );
};

export default Settings;
