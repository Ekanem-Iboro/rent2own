import notificationTap from "@/assets/icons/notificationtabicon.svg";

const NotificationTab = () => {
  return (
    <div className="md:w-[90%] w-full md:h-[747px] h-[591px] mt-5 bg-[#ffffff]  rounded-lg flex justify-center items-center mb-[4rem]">
      <div className="w-full  flex flex-col justify-center items-center">
        <img src={notificationTap} alt="notification tap" className="w-[15%]" />
        <p className="text-[14px] font-[400] leadeing-[16.8px] text-[#7F7F7F]">
          You don’t have any notification at the moment.
        </p>
      </div>
    </div>
  );
};

export default NotificationTab;
