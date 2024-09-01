import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/images/logo.png";

import eye from "../../../assets/icons/eye.svg";
import hide from "../../../assets/icons/hide.svg";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthTextFeild from "../../../components/reuseable/AuthTextField";
import { ChevronLeft } from "lucide-react";
import { resetpsw } from "@/api/types";
import { useResetPsw } from "@/hooks/mutation";
import Loader from "@/components/reuseable/Loader";

// Define the Zod schema with additional validation
const ResetSchema = z
  .object({
    reset_password_token: z.string().min(1, "Invalid token"),
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
export type ResetInput = z.TypeOf<typeof ResetSchema>;

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  // Initialize useForm with Zod resolver
  const methods = useForm<ResetInput>({
    resolver: zodResolver(ResetSchema),
  });

  // Destructure methods from useForm
  const {
    handleSubmit,
    reset,
    // formState: { errors },
  } = methods;
  const { mutate, isPending, isError, isSuccess } = useResetPsw();

  // Form submission handler
  const signUpUser = async (data: resetpsw) => {
    mutate(data);
    reset();
  };

  return (
    <div className="bg-gray-50  w-full px-4 min-h-screen">
      {isSuccess && (
        <div
          className={`flex flex-col min-h-screen items-center  md:pt-[10%] pt-[5%]   ${
            isError ? "hidden" : "block"
          }`}
        >
          <div className="lg:w-[40%] text-center">
            <div className="w-full flex justify-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="My Balance Logo"
                  className="cursor-pointer w-[150px] h-[80px]"
                />
              </Link>
            </div>
            <p className="text-[32px] font-[700] leading-[36px] text-[#19D282]">
              Password Reset Successful
            </p>
            <p className="font-[500] text-[14px] leading-[16.8px] md:w-[40%] w-full mt-6 mx-auto">
              Weldone! You have successfully changed your password.
            </p>
            <div className=" mt-4">
              <Link
                to="/sign-in"
                className="text-[#19D282]  text-[14px] font-[600] leading-[16.8px] underline"
              >
                Login here
              </Link>
            </div>
          </div>
        </div>
      )}
      {isError && (
        <div
          className={`flex flex-col min-h-screen items-center md:pt-[10%] pt-[5%] ${
            isSuccess ? "hidden" : "block"
          }`}
        >
          <div className="lg:w-[40%] text-center">
            <div className="w-full flex justify-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="My Balance Logo"
                  className="cursor-pointer w-[150px] h-[80px]"
                />
              </Link>
            </div>
            <p className="text-[32px] font-[700] leading-[36px] text-[#DD1D30]">
              Oops! Reset Unsuccessful
            </p>
            <p className="font-[500] text-[14px] leading-[16.8px] md:w-[40%] w-full mt-6 mx-auto">
              We are unable to change your password at this moment.
            </p>
            <div className=" mt-4">
              <Link
                to="/sign-in"
                className="text-primary text-[14px] font-[600] leading-[16.8px] underline"
              >
                Try again later
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className={`${isSuccess || isError ? "hidden" : "block"}`}>
        <div className="  w-full  rounded-[18px]   flex  lg:px-[20%] md:px-[9%] px-3 md:pt-[10%] pt-[5%] ">
          <ChevronLeft
            onClick={() => navigate(-1)}
            size={30}
            className="text-[#655F5F] border border-[#655F5F] w-[30px] h-[30px] rounded-lg  md:block hidden mt-[3rem] "
          />

          <div className=" lg:w-[40%] md:w-[70%] w-full mx-auto">
            <div className="w-full flex justify-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="My Balance Logo"
                  className="cursor-pointer w-[150px] h-[80px]"
                />
              </Link>
            </div>
            <h1 className="md:text-[30px] text-[24px] font-[700] leading-[36px]  text-[#0A0B0A] w-full text-center">
              Reset Password
            </h1>
            <p className="text-[#0A0B0A] text-[14px]  font-[500] w-full text-center leading-[16.8px] mt-2">
              Type in a new password
            </p>

            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(signUpUser)}>
                <div className="mt-4">
                  <AuthTextFeild
                    name="reset_password_token"
                    label="Token"
                    placeholder=""
                    type="text"
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
                    onClick={() =>
                      setConfirmPasswordShown(!confirmPasswordShown)
                    }
                  />
                </div>
                <button className="w-full bg-primary py-2 px-[4rem] rounded-[11px] text-white mt-6 border-none  flex justify-center items-center ">
                  {isPending ? <Loader size={30} /> : "Reset password"}
                </button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
