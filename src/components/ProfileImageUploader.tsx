// import { IProfile } from "@/api/types";
// import { useUploadProfilePix } from "@/hooks/mutation";
import { useGetUserProfile } from "@/hooks/query";
import axios from "axios";
import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

const ProfilePicture: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [previewProfilePic, setPreviewProfilePic] = useState<string | null>(
    null
  );
  const sessionToken = localStorage.getItem("session_token");
  const userId = Number(localStorage.getItem("user_id"));

  // Retrieve the user profile
  const { data: userProfile } = useGetUserProfile(userId);

  useEffect(() => {
    // Set the profile picture URL from the user profile data
    if (userProfile?.profile_picture) {
      setProfilePic(
        `https://www.rent2ownauto.com.au/${userProfile.profile_picture}`
      );
    }
  }, [userProfile?.profile_picture]);

  const methods = useForm();
  const { reset } = methods;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const URLfetch = "https://www.rent2ownauto.com.au/api/update_pix.php";
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewProfilePic(imageUrl); // Set the preview image URL

      const fd = new FormData();
      fd.append("newProfilePicture", file);
      fd.append("user_id", userId.toString());

      axios
        .post(URLfetch, fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(
          (res) => {
            console.log("Profile picture uploaded successfully", res.data);
          },
          (error) => {
            console.error("Error uploading profile picture:", error);
          }
        );

      reset(); // Optionally reset the form after submission
    }
  };

  // Avatar Letters for fallback
  const firstName = userProfile?.firstname || "";
  const lastName = userProfile?.lastname || "";
  const avatarLetters = `${firstName.charAt(0)}${lastName.charAt(
    0
  )}`.toUpperCase();

  return (
    <FormProvider {...methods}>
      <form>
        <div className="flex items-center gap-5">
          <div className="relative w-[119px] h-[119px] border border-gray-200 rounded-full">
            {sessionToken ? (
              previewProfilePic ? (
                <img
                  src={previewProfilePic} // Preview the uploaded image
                  alt="Profile"
                  className="w-[119px] h-[119px] rounded-full object-cover"
                />
              ) : profilePic != null ? (
                <img
                  src={profilePic} // Show the stored profile picture
                  alt="Profile"
                  className="w-[119px] h-[119px] rounded-full object-cover"
                />
              ) : (
                <div className="w-[119px] h-[119px] rounded-full text-[32px] flex justify-center items-center border-[#D8E6FA] text-[#1C6CDB] bg-[#D8E6FA]">
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
            name="newProfilePicture"
            accept="image/*"
            onChange={handleImageChange}
          />
          <div>
            <label
              htmlFor="profile-pic-input"
              className="cursor-pointer text-[16px] leading-[19.2px] font-[600] text-[#6B6B6B] border border-[#D1D1D1] rounded-[20px] p-2 px-4"
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
