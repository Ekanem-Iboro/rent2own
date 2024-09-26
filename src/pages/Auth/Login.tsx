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
import { useSignInUser } from "@/hooks/mutation";
import { SignInUser } from "@/api/types";
import Loader from "@/components/reuseable/Loader";
import SpinnerOverlay from "@/components/reuseable/OverlayLoader";

// Define the Zod schema with additional validation
const LoginSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
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
});

// Type definition for the Login form input
export type LoginInput = z.TypeOf<typeof LoginSchema>;

const Login: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  // Initialize useForm with Zod resolver
  const methods = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  // Destructure methods from useForm
  const { handleSubmit, reset } = methods;

  const { mutate, isPending, isError } = useSignInUser();

  // Form submission handler
  const signUpUser = async (data: SignInUser) => {
    mutate(data);

    reset();
  };

  return (
    <div className="bg-gray-50  w-full px-4 min-h-screen">
      {isPending && <SpinnerOverlay />}
      <div className="  w-full  rounded-[18px]   flex  lg:px-[20%] md:px-[9%] px-3  md:pt-[10%] pt-[5%]">
        <Link to={"/"} className="md:block hidden mt-[3rem]">
          <ChevronLeft
            size={30}
            className="text-[#655F5F] border border-[#655F5F] w-[30px] h-[30px] rounded-lg   "
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
            Sign in
          </h1>
          <p className="text-[#0A0B0A] text-[14px]  font-[500] w-full text-center leading-[16.8px] mt-2">
            Welcome back! Sign in to your account.
          </p>
          {isError && (
            <p className="text-red-400 text-[14px] bg-red-50 p-1 rounded-2xl  font-[500] w-full text-center leading-[16.8px] mt-2">
              Incorrect email or password
            </p>
          )}
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(signUpUser)}>
              <div className="mt-4">
                <AuthTextFeild
                  name="email"
                  label="Email"
                  placeholder="e.g@example.com"
                  variant="long"
                />
              </div>
              <div className="mt-4 ">
                <div className="relative">
                  <AuthTextFeild
                    name="password"
                    label="Password"
                    placeholder="************"
                    variant="long"
                    type={passwordShown ? "text" : "password"}
                  />
                  <img
                    src={passwordShown ? hide : eye}
                    alt="show password"
                    className="absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5"
                    onClick={() => setPasswordShown(!passwordShown)}
                  />
                </div>
              </div>

              <button className="w-full bg-primary py-2 px-[4rem] rounded-[11px] text-white mt-6 border-none  flex justify-center items-center ">
                {isPending ? <Loader size={20} /> : "Sign in"}
              </button>
            </form>
          </FormProvider>
          <p className="text-[#0A0B0A] text-[14px] w-full mt-5 font-[500] leading-[16.8px] md:text-center">
            <Link to="/forgot-password" className="font-medium underline">
              Forgot password?
            </Link>
          </p>
          <p className="text-[#2D2D2D] text-[14px] lg:w-[60%] md:w-[70%] w- full mx-auto font-500 leading-[16.8px]  md:text-center mt-5 bg-[#ffffff] rounded-[18px] p-3 ">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-primary font-[600] ">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
