import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthTextField from "../../../components/reuseable/AuthTextField";
import { ChevronLeft } from "lucide-react";
import { useForgotPsw } from "@/hooks/mutation";
import Loader from "@/components/reuseable/Loader";

// Define the Zod schema with additional validation
const ResetPasswordSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
});

// Type definition for the ResetPassword form input
export type ResetPasswordInput = z.TypeOf<typeof ResetPasswordSchema>;

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  // Initialize useForm with Zod resolver
  const methods = useForm<ResetPasswordInput>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  // Destructure methods from useForm
  const {
    handleSubmit,
    // formState: { errors },
  } = methods;

  const { mutate, isPending } = useForgotPsw();
  // Form submission handler
  const getUserEmail = async (data: ResetPasswordInput) => {
    mutate(data);
  };

  return (
    <div className="bg-gray-50 w-full px-4 min-h-screen">
      <div className="w-full rounded-[18px] flex lg:px-[20%] md:px-[9%] px-3 md:pt-[10%] pt-[5%]">
        <ChevronLeft
          onClick={() => navigate(-1)}
          size={30}
          className="text-[#655F5F] border border-[#655F5F] w-[30px] h-[30px] rounded-lg"
        />
        <div className="lg:w-[40%] md:w-[70%] w-full mx-auto">
          <div className="w-full flex justify-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="My Balance Logo"
                className="cursor-pointer w-[150px] h-[80px]"
              />
            </Link>
          </div>
          <h1 className="md:text-[30px] text-[24px] font-[700] leading-[36px] text-[#0A0B0A] w-full text-center">
            Forgot Password
          </h1>
          <p className="text-[#0A0B0A] text-[14px] font-[500] w-full text-center leading-[16.8px] mt-2">
            Enter your email below to reset your password
          </p>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(getUserEmail)}>
              <div className="mt-4">
                <AuthTextField
                  name="email"
                  label="Email"
                  placeholder="e.g@example.com"
                  variant="long"
                />
              </div>
              <button className="w-full bg-primary py-2 px-[4rem] rounded-[11px] text-white mt-6 border-none  flex justify-center items-center ">
                {isPending ? <Loader size={30} /> : "Continue"}
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
