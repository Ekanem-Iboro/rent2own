import { privateApi, publicApi } from "./axios";
import { Car, CreateUser, forgotpsw, resetpsw, SignInUser } from "./types";

export const getCars = async (): Promise<Car[]> => {
  const res = await publicApi.get("/get_cars.php");
  return res.data;
};

export const registerUser = async (data: CreateUser) => {
  const res = await publicApi.post("/create_user_a.php", data);
  return res;
};
export const signInUser = async (data: SignInUser) => {
  const res = await privateApi.post("/login_a.php", data);
  return res;
};
export const forgotPsw = async (data: forgotpsw) => {
  const res = await publicApi.post("/forgot-password", data);
  return res;
};
export const resetPsw = async (data: resetpsw) => {
  const res = await publicApi.post("/reset-password", data);
  return res;
};
export const getProfile = async (id: number) => {
  const res = await publicApi.get(`/get_user.php?user_id=${id}`);
  return res.data; // Assuming you want to return the response data directly
};
