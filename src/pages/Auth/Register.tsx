import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import eye from "../../assets/icons/eye.svg";
import hide from "../../assets/icons/hide.svg";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthTextFeild from "../../components/reuseable/AuthTextField";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { CreateUser } from "@/api/types";
import { useRegisterUser } from "@/hooks/mutation";
import Loader from "@/components/reuseable/Loader";

// Define the Zod schema with additional validation
const RegisterSchema = z
  .object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(11, "Phone number is required"),
    gender: z.string().nonempty("Gender is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    // .regex(
    //   /[@$!%*?&#]/,
    //   "Password must contain at least one special character"
    // ),
    confirmPassword: z.string().min(5, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // Indicates which field the error message is associated with
  });

// Type definition for the register form input
export type RegisterInput = z.TypeOf<typeof RegisterSchema>;

const Register: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  // Initialize useForm with Zod resolver
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  // Destructure methods from useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const { mutate, isPending, isError, isSuccess } = useRegisterUser();
  // Form submission handler
  const signUpUser = async (data: CreateUser) => {
    mutate(data);
    reset();
  };

  return (
    <div className="bg-gray-50  w-full px-4 min-h-screen">
      <div className="  w-full  rounded-[18px]   flex  lg:px-[20%] md:px-[9%] px-3 md:pt-[2%] pt-0">
        <Link to={"/"} className="md:block hidden mt-[3rem]">
          <ChevronLeft
            size={30}
            className="text-[#655F5F] border border-[#655F5F] w-[30px] h-[30px] rounded-lg  "
          />
        </Link>
        <div className=" lg:w-[40%] md:w-[70%] w-full mx-auto">
          <div className="w-full flex justify-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="My Balance Logo"
                className="cursor-pointer w-[150px] h-[80px]"
              />
              {/* <p className="text-primary-light ml-2 text-[18px]">rent2own</p> */}
            </Link>
          </div>
          <h1 className="md:text-[30px] text-[24px] font-[700] leading-[36px]  text-[#0A0B0A] w-full text-center">
            Sign Up
          </h1>
          <p className="text-[#0A0B0A] text-[14px]  font-[500] w-full text-center leading-[16.8px] mt-2">
            Join thousands of users on Rent2own today!
          </p>
          {isSuccess && (
            <p className="text-green-400 text-[14px] bg-green-50 p-1 rounded-2xl  font-[500] w-full text-center leading-[16.8px] mt-2">
              Account created successfully
            </p>
          )}
          {isError && (
            <p className="text-red-400 text-[14px] bg-red-50 p-1 rounded-2xl  font-[500] w-full text-center leading-[16.8px] mt-2">
              Fail to create account, Try again!
            </p>
          )}
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(signUpUser)}>
              <div className="mt-4">
                <AuthTextFeild
                  name="firstname"
                  label="First Name"
                  placeholder="e.g John"
                  variant="long"
                />
              </div>
              <div className="mt-4">
                <AuthTextFeild
                  name="lastname"
                  label="Last Name"
                  placeholder="Doe"
                  variant="long"
                />
              </div>
              <div className="mt-4">
                <AuthTextFeild
                  name="email"
                  label="Email"
                  placeholder="e.g@example.com"
                />
              </div>
              <div className="mt-4">
                <AuthTextFeild
                  name="phone"
                  label="Phone Number"
                  placeholder="(288)8367770"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="gender"
                  className="block text-sm mb-[6px] capitalize text-[#0A0B0A]"
                >
                  Select Gender:
                </label>
                <select
                  id="gender"
                  {...register("gender")}
                  className={`block w-full border-2 border-[#CCCBCB] rounded-md p-2 outline-none focus:border-[#CCCBCB] bg-transparent text-[#0A0B0A] disabled:opacity-75 disabled:hover:cursor-not-allowed ${
                    errors.gender ? "border-2 border-red-500" : " "
                  }`}
                >
                  <option value="" className="text-[#868686]">
                    Select a gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-[12px]">
                    {errors.gender.message}
                  </p>
                )}
              </div>
              <div className="relative mt-4">
                <AuthTextFeild
                  name="password"
                  label="Password"
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
              <button className="w-full bg-primary py-2 px-[4rem] rounded-[11px] text-white mt-6 border-none  flex justify-center items-center ">
                {isPending ? <Loader size={30} /> : "Sign up"}
              </button>
            </form>
          </FormProvider>
          <p className="text-[#2D2D2D] text-[14px] lg:w-[60%] md:w-[70%] w- full mx-auto font-500 leading-[16.8px]  md:text-center mt-5 bg-[#ffffff] rounded-[18px] p-3 ">
            Existing user?{" "}
            <Link to="/sign-in" className="text-primary font-[600] ">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
