// import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import AuthTextFeild from "@/components/reuseable/AuthTextField";
import KYC from "./KYCComp";
import { useGetUserProfile } from "@/hooks/query";
// import ProfilePicture from "./ProfileImageUploader";
import { IProfile } from "@/api/types";
import { useEffect } from "react";
import { useUpdateProfile } from "@/hooks/mutation";
import { toast } from "react-toastify";

// import Loader from "@/components/reuseable/Loader";

const ProfileUpdatForm: React.FC = () => {
  // Initialize useForm with Zod resolver
  // Initialize useForm with IProfile type

  const userId = Number(localStorage.getItem("user_id")); // Retrieve the user ID from local storage
  const {
    data: userProfile,
    //  isLoading: isUserProfileLoading,
    //  error,
    refetch: reFetchProfile,
  } = useGetUserProfile(userId);

  const { mutate: upDateUserProfile } = useUpdateProfile();
  useEffect(() => {
    // console.log(userProfile?.phone);
  });
  const methods = useForm<IProfile>();
  const { handleSubmit, register } = methods;

  // Form submission handler
  const profileUpdate = async (data: IProfile) => {
    upDateUserProfile(
      {
        ...data,
        user_id: userId,
      },
      {
        onSuccess: (response) => {
          // Destructure and handle the response
          if (response) {
            toast.success(response.success);
            reFetchProfile();
          }
        },
      }
    );
  };

  return (
    <div className=" w-full px-4 mt-9">
      <div className="  w-full ">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(profileUpdate)}
            encType="multipart/form-data"
          >
            <div className=" w-full md:flex block gap-8">
              <div className="lg:basis-[30%] md:basis-[35%] basis-full md:mb-0 mb-6">
                <div className="">
                  <p className="text-[16px] font-[600] leading-[19.2px] text-[#191919]">
                    Personal Information
                  </p>
                  <p className="text-[14px] font-[400] leading-[16.8px] text-[#424242]  w-full mt-2">
                    Update your personal details here.
                  </p>
                </div>
                <button className="w-fit bg-[#E6E6E6] py-2 text-[14px] leading-[19.2px] font-[600] rounded-[10px] mt-6 px-2   ">
                  {/* {isPending ? <Loader size={30} /> : "Sign in"} */}
                  Save changes
                </button>
              </div>
              <div className="lg:basis-[80%] md:basis-[65%] basis-full">
                <div>
                  <p className="text-[16px] font-[600] leading-[19.2px] text-[#191919]">
                    BIO
                  </p>
                  <div className="md:flex block items-center w-full gap-8">
                    <div className="mt-4 basis-1/2">
                      <AuthTextFeild
                        name="firstname"
                        label="First name"
                        placeholder="John"
                        variant="long"
                        value={userProfile?.firstname}
                      />
                    </div>
                    <div className="mt-4 basis-1/2">
                      <AuthTextFeild
                        name="lastname"
                        label="Last name"
                        placeholder="Doe"
                        variant="long"
                        value={userProfile?.lastname}
                      />
                    </div>
                    {/*  */}
                  </div>
                  <div className="md:flex block items-center w-full gap-8">
                    <div className="mt-4 basis-1/2">
                      <AuthTextFeild
                        name="email"
                        label="Email"
                        placeholder="e.g@example.com"
                        variant="long"
                        value={userProfile?.email}
                        readOnly={true}
                      />
                    </div>
                    <div className="mt-4 basis-1/2">
                      <AuthTextFeild
                        name="phone"
                        label="Phone number"
                        placeholder="(288)8367770"
                        value={userProfile?.phone}
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="md:flex block items-center w-full gap-8">
                    <div className="mt-4 basis-1/2">
                      <AuthTextFeild
                        name="location"
                        label="Postal code"
                        placeholder="2044"
                        variant="long"
                        value={userProfile?.location}
                      />
                    </div>
                    <div className=" mt-1 basis-1/2">
                      <label
                        htmlFor="gender"
                        className="block text-sm mb-[6px] capitalize text-[#0A0B0A]"
                      >
                        Select gender:
                      </label>

                      <select
                        id="gender"
                        {...register("gender")}
                        className={`block w-full border-2 border-[#CCCBCB] capitalize rounded-[10px] p-2 outline-none focus:border-[#CCCBCB] bg-transparent text-[#0A0B0A] disabled:opacity-75 disabled:hover:cursor-not-allowed`}
                      >
                        <option value="" className="text-[#868686]">
                          {userProfile?.gender}
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <p className="text-[16px] font-[600] leading-[19.2px] text-[#191919] mt-9">
                    KYC INFO
                  </p>
                  <KYC />
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ProfileUpdatForm;
