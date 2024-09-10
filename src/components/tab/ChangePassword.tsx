// import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import logo from "@/assets/images/logo.png";

import eye from "@/assets/icons/eye.svg";
import hide from "@/assets/icons/hide.svg";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthTextFeild from "@/components/reuseable/AuthTextField";
// import { ChevronLeft } from "lucide-react";
import { Changepsw } from "@/api/types";
import ProfilePicture from "../ProfileImageUploader";

// Define the Zod schema with additional validation
const ChangePasswordSchema = z
  .object({
    oldpassword: z.string().min(1, "Please type in the old"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    //   .regex(
    //     /[@$!%*?&#]/,
    //     "Password must contain at least one special character"
    //   ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // Indicates which field the error message is associated with
  });

// Type definition for the Reset form input
export type ChangePasswordInput = z.TypeOf<typeof ChangePasswordSchema>;

const ChangePassword: React.FC = () => {
  //   const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  // Initialize useForm with Zod resolver
  const methods = useForm<ChangePasswordInput>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  // Destructure methods from useForm
  const {
    handleSubmit,
    reset,
    // formState: { errors },
  } = methods;

  // Form submission handler
  const ChangeUserPassword = async (data: Changepsw) => {
    console.log(data);
    reset();
  };

  return (
    <div className="mt-5 bg-[#ffffff] lg:w-[90%] md:w-[95%] w-full px-5 pt-5 rounded-lg">
      <ProfilePicture />
      <hr className=" border border-[#E6E6E6] mx-2 md:mx-5 my-8 " />

      <div className=" w-full md:flex block gap-8 bg-[#ffffff] lg:w-[90%] md:w-[95%]  px-5 pt-5 rounded-lg pb-[10rem]">
        <div className="lg:basis-[30%] md:basis-[35%] basis-full md:mb-0 mb-6">
          <div className="">
            <p className="text-[16px] font-[600] leading-[19.2px] text-[#191919]">
              Change Password
            </p>
            <p className="text-[14px] font-[400] leading-[16.8px] text-[#424242]  w-full mt-2">
              Use the form to change your password.
            </p>
          </div>
          <button className="w-[40%] bg-[#E6E6E6] py-2 text-[14px] leading-[19.2px] font-[600] rounded-[10px] mt-6    ">
            {/* {isPending ? <Loader size={30} /> : "Sign in"} */}
            Change Password
          </button>
        </div>
        <div className="lg:basis-[35%] md:basis-[65%] basis-full">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(ChangeUserPassword)}>
              <div className="mt-4">
                <AuthTextFeild
                  name="password"
                  label="Old password"
                  placeholder="************"
                  type={passwordShown ? "text" : "password"}
                />
                <img
                  src={passwordShown ? hide : eye}
                  alt="show password"
                  className="absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5"
                  onClick={() => setPasswordShown(!passwordShown)}
                />
              </div>
              <div className="relative mt-4">
                <AuthTextFeild
                  name="password"
                  label="New password"
                  placeholder="************"
                  type={passwordShown ? "text" : "password"}
                />
                <img
                  src={passwordShown ? hide : eye}
                  alt="show password"
                  className="absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5"
                  onClick={() => setPasswordShown(!passwordShown)}
                />
              </div>
              <div className="relative mt-4">
                <AuthTextFeild
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Re-enter password"
                  type={confirmPasswordShown ? "text" : "password"}
                />
                <img
                  src={confirmPasswordShown ? hide : eye}
                  alt="show password"
                  className="absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5"
                  onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
