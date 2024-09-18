import {
  changePassword,
  forgotPsw,
  registerUser,
  resetPsw,
  signInUser,
} from "@/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useRegisterUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      if (data.config.data) {
        localStorage.setItem("email", data.config.data.email || "");
      }
      toast.success(data.data.message);
      setTimeout(() => {
        navigate("/sign-in");
      }, 1500);
    },
    onError: (error) => {
      // Check if the error is an AxiosError
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error(error.message);
      }
    },
    retry: false,
    // refetchInterval: 5000, // Retry every 5 seconds if the request fails
  });
};

export const useSignInUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => {
      localStorage.setItem("session_token", data.data.token);
      localStorage.setItem("user_id", data.data.user_id);
      toast.success(data.data.message);
      navigate("/home");

      if (location.state?.from) {
        const from = location.state?.from?.pathname || "/";
        navigate(from);
        // navigate(location.state.from);
        // return;
      }
    },
    // onError: (error) => {
    //   const resMessage = error.message;
    //   toast.error(resMessage);
    // },
  });
};
export const useForgotPsw = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: forgotPsw,
    onSuccess: (data) => {
      toast.success(data.data.message);
      navigate("/reset-password");
    },
    onError: (error) => {
      const resMessage = error.message;
      toast.error(resMessage);
    },
  });
};
export const useResetPsw = () => {
  return useMutation({
    mutationFn: resetPsw,
    onSuccess: (data) => {
      toast.success(data.data.message);
    },
    onError: (error) => {
      const resMessage = error.message;
      toast.error(resMessage);
    },
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
