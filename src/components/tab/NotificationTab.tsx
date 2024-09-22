import { useState } from "react";

const NotificationTab = () => {
  // States for each notification setting
  const [emailNotif, setEmailNotif] = useState(true);
  const [desktopNotif, setDesktopNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  return (
    <div className=" w-full md:flex block gap-8 bg-[#ffffff] lg:w-[90%] md:w-[95%]  px-5 pt-5 rounded-lg pb-[3rem]">
      <div className="lg:basis-[30%] md:basis-[35%] basis-full md:mb-0 mb-6">
        <div className="">
          <p className="text-[16px] font-[600] leading-[19.2px] text-[#191919]">
            Notifications
          </p>
          <p className="text-[14px] font-[400] leading-[16.8px] text-[#424242]  w-full mt-2">
            Personalise your notifications here
          </p>
        </div>
        <button className="w-[40%] bg-[#E6E6E6] py-2 text-[14px] leading-[19.2px] font-[600] rounded-[10px] mt-6 flex items-center justify-center   ">
          Save changes
        </button>
      </div>
      <div className="w-full">
        <div className="p-6">
          {/* Notification item */}
          <div className=" mb-4">
            <p className="text-[16px] leading-[19.2px] font-[600] text-[#191919]">
              Email Notifications
            </p>
            <div className="w-full p-6 flex items-center gap-4 mb-10 mt-4 bg-[#FAFAFA]">
              <div
                className={`relative w-14 h-7 flex items-center  rounded-full p-1 cursor-pointer transition-all duration-300  ease-in-out ${
                  emailNotif ? "bg-[#6FC200]" : "bg-[#BDBDBD]"
                }`}
                onClick={() => setEmailNotif(!emailNotif)}
              >
                <div
                  className={`h-6 w-6 bg-[#FAFAFA] rounded-full shadow-md transform   ${
                    emailNotif
                      ? "translate-x-7 transition-all duration-300  ease-in-out"
                      : " transition-all duration-300  ease-in-out"
                  }`}
                ></div>
              </div>
              <span>Email Me</span>
            </div>
          </div>

          <div className=" mb-4">
            <p className="text-[16px] leading-[19.2px] font-[600] text-[#191919]">
              Desktop Notifications
            </p>

            <div className="w-full p-6 flex items-center gap-4 mb-10 mt-4 bg-[#FAFAFA]">
              <div
                className={`relative w-14 h-7 flex items-center  rounded-full p-1 cursor-pointer transition-all duration-300  ease-in-out ${
                  desktopNotif ? "bg-[#6FC200]" : "bg-[#BDBDBD]"
                }`}
                onClick={() => setDesktopNotif(!desktopNotif)}
              >
                <div
                  className={`h-6 w-6 bg-[#FAFAFA] rounded-full shadow-md transform ${
                    desktopNotif
                      ? "translate-x-7 transition-all duration-300  ease-in-out"
                      : " transition-all duration-300  ease-in-out"
                  }`}
                ></div>
              </div>
              <span>Notify Me</span>
            </div>
          </div>

          <div className=" mb-4">
            <p className="text-[16px] leading-[19.2px] font-[600] text-[#191919]">
              Push Notifications
            </p>
            <div className="w-full p-6 flex items-center gap-4 mb-10 mt-4 bg-[#FAFAFA]">
              <div
                className={`relative w-14 h-7 flex items-center  rounded-full p-1 cursor-pointer transition-all duration-300  ease-in-out ${
                  pushNotif ? "bg-[#6FC200]" : "bg-[#BDBDBD]"
                }`}
                onClick={() => setPushNotif(!pushNotif)}
              >
                <div
                  className={`h-6 w-6 bg-[#FAFAFA] rounded-full shadow-md transform ${
                    pushNotif
                      ? "translate-x-7 transition-all duration-300  ease-in-out"
                      : " transition-all duration-300  ease-in-out"
                  }`}
                ></div>
              </div>
              <span>Notify me when</span>
            </div>
          </div>

          <div className=" mb-4">
            <p className="text-[16px] leading-[19.2px] font-[600] text-[#191919]">
              SMS Notifications
            </p>
            <div className="w-full p-6 flex items-center gap-4 mb-10 mt-4 bg-[#FAFAFA]">
              <div
                className={`relative w-14 h-7 flex items-center  rounded-full p-1 cursor-pointer transition-all duration-300  ease-in-out ${
                  smsNotif ? "bg-[#6FC200]" : "bg-[#BDBDBD]"
                }`}
                onClick={() => setSmsNotif(!smsNotif)}
              >
                <div
                  className={`h-6 w-6 bg-[#FAFAFA] rounded-full shadow-md transform ${
                    smsNotif
                      ? "translate-x-7 transition-all duration-300  ease-in-out"
                      : " transition-all duration-300  ease-in-out"
                  }`}
                ></div>
              </div>
              <span>Notify me when</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationTab;
