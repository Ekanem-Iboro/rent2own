import { IProfile } from "@/api/types";
import { useGetUserProfile } from "@/hooks/query";
import { User } from "lucide-react";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

const ProfilePicture: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const sessionToken = localStorage.getItem("session_token");

  const methods = useForm<IProfile>();
  const { handleSubmit, reset, register } = methods;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);

      // Create a FormData object to submit the file
      const formData = new FormData();
      formData.append("profile_picture", file);

      // Handle form submission
      handleSubmit((data) => {
        console.log("Form submitted with data:", data);
        // Optionally reset the form after submission
        reset();
      })(); // Calling handleSubmit directly
    }
  };

  const userId = Number(localStorage.getItem("user_id")); // Retrieve the user ID from local storage
  const { data: userProfile } = useGetUserProfile(userId);

  // Avatar
  const firstName = userProfile?.firstname || "";
  const lastName = userProfile?.lastname || "";
  const avatarLetters = `${firstName.charAt(0)}${lastName.charAt(
    0
  )}`.toUpperCase();

  return (
    <FormProvider {...methods}>
      <form>
        <div className="flex items-center gap-5">
          <div className="relative w-[119px] h-[119px]">
            {sessionToken ? (
              profilePic ? (
                <img
                  src={profilePic || userProfile?.profile_picture}
                  alt="Profile"
                  className="w-[119px] h-[119px] rounded-full object-cover"
                />
              ) : (
                <div className="w-[119px] h-[119px] rounded-full text-[32px] flex justify-center items-center border-[#D8E6FA] text-[#1C6CDB] bg-[#D8E6FA] ">
                  {avatarLetters}
                </div>
              )
            ) : (
              <div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-full">
                <User className="w-12 h-12 text-gray-500" />
              </div>
            )}
          </div>
          <input
            type="file"
            id="profile-pic-input"
            className="hidden"
            {...register("profile_picture")}
            accept="image/*"
            onChange={handleImageChange}
          />
          <div className="">
            <label
              htmlFor="profile-pic-input"
              className="cursor-pointer text-[16px] leading-[19.2px] font-[600] text-[#6B6B6B] border border-[#D1D1D1] rounded-[20px] p-2 px-6"
            >
              Upload a picture
            </label>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProfilePicture;
