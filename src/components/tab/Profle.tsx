// import React from "react";
import ProfilePicture from "../ProfileImageUploader";
import ProfileUpdatForm from "../ProfileUpdateForm";

const Profile = () => {
  return (
    <div className="mt-5 bg-[#ffffff] lg:w-[90%] md:w-[95%] w-full px-5 pt-5 rounded-lg">
      <ProfilePicture />
      <hr className=" border border-[#E6E6E6] mx-2 md:mx-5 my-8 " />
      <div className=" ">
        <ProfileUpdatForm />
      </div>
    </div>
  );
};

export default Profile;
