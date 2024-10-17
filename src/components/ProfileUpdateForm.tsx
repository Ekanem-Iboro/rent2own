import { FormProvider, useForm } from "react-hook-form";
import AuthTextFeild from "@/components/reuseable/AuthTextField";
import KYC from "./KYCComp";
import { useGetUserProfile } from "@/hooks/query";
import { IProfile } from "@/api/types";
import { useEffect } from "react";
import { useUpdateProfile } from "@/hooks/mutation";
import { toast } from "react-toastify";
import Loader from "./reuseable/Loader";

const ProfileUpdatForm: React.FC = () => {
  const userId = Number(localStorage.getItem("user_id")); // Retrieve the user ID from local storage
  const { data: userProfile, refetch: reFetchProfile } =
    useGetUserProfile(userId);

  const { mutate: upDateUserProfile, isPending } = useUpdateProfile();

  const methods = useForm<IProfile>({
    defaultValues: {
      firstname: userProfile?.user?.firstname || "",
      lastname: userProfile?.user?.lastname || "",
      email: userProfile?.user?.email || "",
      phone: userProfile?.user?.phone || "",
      location: userProfile?.user?.location || "",
      gender: userProfile?.user?.gender || "",
      date_of_birth: userProfile?.user?.date_of_birth || "",
    },
  });

  const { handleSubmit, setValue, register } = methods;

  // Update form default values when userProfile is fetched
  useEffect(() => {
    if (userProfile?.user) {
      setValue("firstname", userProfile.user.firstname);
      setValue("lastname", userProfile.user.lastname);
      setValue("email", userProfile.user.email);
      setValue("phone", userProfile.user.phone);
      setValue("location", userProfile.user.location);
      setValue("gender", userProfile.user.gender);
      setValue("date_of_birth", userProfile.user.date_of_birth);
    }
  }, [userProfile, setValue]);

  // Form submission handler
  const profileUpdate = async (data: IProfile) => {
    const updatedProfile = {
      ...data,
      user_id: userId, // Add the user ID
    };

    upDateUserProfile(updatedProfile, {
      onSuccess: (response) => {
        if (response) {
          toast.success(response.success);
          reFetchProfile();
        }
      },
    });
  };

  return (
    <div className=" w-full px-4 mt-9">
      <div className="w-full">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(profileUpdate)}
            encType="multipart/form-data"
          >
            <div className="w-full md:flex block gap-8">
              <div className="lg:basis-[30%] md:basis-[35%] basis-full md:mb-0 mb-6">
                <div className="">
                  <p className="text-[16px] font-[600] leading-[19.2px] text-[#191919]">
                    Personal Information
                  </p>
                  <p className="text-[14px] font-[400] leading-[16.8px] text-[#424242] w-full mt-2">
                    Update your personal details here.
                  </p>
                </div>
                <button className="w-fit bg-[#E6E6E6] py-2 text-[14px] leading-[19.2px] font-[600] rounded-[10px] mt-6 px-2">
                  {isPending ? (
                    <p className="flex items-center justify-center gap-2">
                      <Loader size={20} />
                      Save changes
                    </p>
                  ) : (
                    "Save changes"
                  )}
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
                        value={userProfile?.user?.firstname}
                      />
                    </div>
                    <div className="mt-4 basis-1/2">
                      <AuthTextFeild
                        name="lastname"
                        label="Last name"
                        placeholder="Doe"
                        variant="long"
                        value={userProfile?.user?.lastname}
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="mt-4 basis-1/2">
                    <AuthTextFeild
                      name="date_of_birth"
                      label="Date of Birth"
                      placeholder="2000-10-06"
                      variant="long"
                      value={userProfile?.user?.date_of_birth}
                    />
                  </div>
                  {/*  */}
                  <div className="md:flex block items-center w-full gap-8">
                    <div className="mt-4 basis-1/2">
                      <AuthTextFeild
                        name="email"
                        label="Email"
                        placeholder="e.g@example.com"
                        variant="long"
                        value={userProfile?.user?.email}
                        // readOnly={true}
                      />
                    </div>
                    <div className="mt-4 basis-1/2">
                      <AuthTextFeild
                        name="phone"
                        label="Phone number"
                        placeholder="(288)8367770"
                        value={userProfile?.user?.phone}
                      />
                    </div>
                  </div>

                  <div className="md:flex block items-center w-full gap-8">
                    <div className="mt-4 basis-1/2">
                      <AuthTextFeild
                        name="location"
                        label="Postal code"
                        placeholder="2044"
                        variant="long"
                        value={userProfile?.user?.location}
                      />
                    </div>
                    <div className="mt-1 basis-1/2">
                      <label
                        htmlFor="gender"
                        className="block text-sm mb-[6px] capitalize text-[#0A0B0A]"
                      >
                        Select gender:
                      </label>

                      <select
                        id="gender"
                        defaultValue={userProfile?.user?.gender}
                        {...register("gender")}
                        className="block w-full border-2 border-[#CCCBCB] capitalize rounded-[10px] p-2 outline-none focus:border-[#CCCBCB] bg-transparent text-[#0A0B0A] disabled:opacity-75 disabled:hover:cursor-not-allowed"
                      >
                        <option value="" className="text-[#868686]">
                          {userProfile?.user?.gender}
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>

        <div className="lg:w-[70%] w-full pb-6 ml-auto">
          <p className="text-[16px] font-[600] leading-[19.2px] text-[#191919] mt-9">
            KYC INFO
          </p>
          <KYC />
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatForm;
