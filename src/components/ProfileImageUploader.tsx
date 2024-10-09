// import { IProfile } from "@/api/types";
// import { useUploadProfilePix } from "@/hooks/mutation";
import { useGetUserProfile } from "@/hooks/query";
import axios from "axios";
import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";

const ProfilePicture: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [previewProfilePic, setPreviewProfilePic] = useState<string | null>(
    null
  );
  const sessionToken = localStorage.getItem("session_token");
  const userId = Number(localStorage.getItem("user_id"));

  // Retrieve the user profile
  const { data: userProfile, refetch: reFetchProfile } =
    useGetUserProfile(userId);

  useEffect(() => {
    // Set the profile picture URL from the user profile data
    if (userProfile?.user?.profile_picture) {
      setProfilePic(
        `https://www.rent2ownauto.com.au/${userProfile?.user?.profile_picture}`
      );
    }
  }, [userProfile?.user?.profile_picture]);
  if (profilePic == "https://www.rent2ownauto.com.au/uploads/") {
    setProfilePic(null);
  }

  const methods = useForm();
  const { reset } = methods;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadURL = "https://www.rent2ownauto.com.au/api/update_pix.php";
    const updateIdURL = "https://www.rent2ownauto.com.au/api/update_pix_id.php";
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewProfilePic(imageUrl); // Set the preview image URL

      const fd = new FormData();
      fd.append("newProfilePicture", file);

      axios
        .post(uploadURL, fd, {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            if (total) {
              const progress = Math.round((loaded / total) * 100);
              setUploadProgress(progress); // Update progress state
            }
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          const uploadedFilename = res.data.filename;

          // Call the update_pix_id.php API to send filename and userId
          axios
            .post(updateIdURL, {
              user_id: userId,
              filename: uploadedFilename,
            })
            .then((res) => {
              res.data;
              reFetchProfile();
            })
            .catch((error) => {
              toast.error(error);
            });

          // Reset form and upload progress after success
          reset();
          setUploadProgress(0);
        })
        .catch((error) => {
          console.error("Error uploading profile picture:", error);
        });
    }
  };

  // Avatar Letters for fallback
  const firstName = userProfile?.user?.firstname || "";
  const lastName = userProfile?.user?.lastname || "";
  const avatarLetters = `${firstName.charAt(0)}${lastName.charAt(
    0
  )}`.toUpperCase();

  return (
    <FormProvider {...methods}>
      <form>
        <div className="flex md:flex-row flex-col md:items-center gap-5 w-full">
          <div className="relative w-[119px] h-[119px] border border-gray-200 rounded-full overflow-hidden">
            {uploadProgress > 0 && uploadProgress !== 100 && (
              <div className="absolute backdrop-blur-xl w-[119px] h-[119px] flex justify-center items-center">
                <svg className="w-[50px] h-[50px]" viewBox="0 0 36 36">
                  <path
                    className="text-gray-300" // Background circle (gray)
                    d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    className="text-green-500" // Progress circle (green)
                    d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="100, 100" // Defines the circumference
                    strokeDashoffset={`${100 - uploadProgress}`} // Determines the progress based on uploadProgress
                    strokeLinecap="round" // Adds rounded end to the progress stroke
                  />
                </svg>
                <span className="absolute z-50 text-green-500 font-[600] text-[16px]">
                  {uploadProgress}%
                </span>
              </div>
            )}

            {sessionToken ? (
              previewProfilePic ? (
                <img
                  src={previewProfilePic} // Preview the uploaded image
                  alt="Profile"
                  className="w-[119px] h-[119px] rounded-full object-cover"
                  // loading="lazy"
                />
              ) : profilePic != null ? (
                <img
                  src={profilePic} // Show the stored profile picture
                  alt="Profile"
                  className="w-[119px] h-[119px] rounded-full object-cover"
                  // loading="lazy"
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
          <div className="flex items-center gap-2">
            <label
              htmlFor="profile-pic-input"
              className="cursor-pointer text-[16px] leading-[19.2px] font-[600] text-[#6B6B6B] border border-[#D1D1D1] rounded-[20px] p-2 md:px-4 px-6"
            >
              Upload a picture
            </label>
            {userProfile?.user?.kyc_status === 1 && (
              <div className="w-[40px] h-[40px] bg-green-100 flex justify-center items-center rounded-full">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 31.125C25.2487 31.125 31.125 25.2487 31.125 18C31.125 10.7513 25.2487 4.875 18 4.875C10.7513 4.875 4.875 10.7513 4.875 18C4.875 25.2487 10.7513 31.125 18 31.125ZM23.36 16.1588C23.9539 15.6148 23.9944 14.6923 23.4505 14.0984C22.9065 13.5044 21.984 13.4639 21.39 14.0079L16.0058 18.9391L14.61 17.6608C14.016 17.1168 13.0935 17.1573 12.5496 17.7513C12.0056 18.3452 12.0461 19.2677 12.64 19.8117L15.0208 21.9921C15.5782 22.5026 16.4333 22.5026 16.9907 21.9921L23.36 16.1588Z"
                    fill="#0F973D"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProfilePicture;
