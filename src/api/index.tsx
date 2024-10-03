import { privateApi, publicApi } from "./axios";
import {
  Car,
  ContactInfo,
  CreateUser,
  forgotpsw,
  IChangePassword,
  RentCarData,
  resetpsw,
  SignInUser,
} from "./types";

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
export const getContact = async (): Promise<ContactInfo> => {
  const res = await publicApi.get("/about_settings.php ");
  return res.data; // Assuming you want to return the response data directly
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export const getFAQ = async (): Promise<any> => {
  const res = await publicApi.get("/faq.php");
  return res.data; // Return the data as any
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export const rentCar = async (data: RentCarData) => {
  const res = await publicApi.post("/rent_car_testing.php", data); // Use POST and pass the data
  return res.data; // Return the response data
};
export const changePassword = async (data: IChangePassword) => {
  const res = await publicApi.put(`/change_password.php`, data);
  return res.data;
};

export const getOrderDashboard = async (id: number) => {
  const res = await publicApi.get(`/get_dashboarddata.php?user_id=${id}`);
  return res.data; // Assuming you want to return the response data directly
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const payInstallment = async (data: any) => {
  const res = await publicApi.post("/pay_installment.php", data); // Use POST and pass the data
  return res.data; // Return the response data
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export const contactUs = async (data: any) => {
  const res = await publicApi.post("/message_contact.php", data); // Use POST and pass the data
  return res.data; // Return the response data
};
/* eslint-disable @typescript-eslint/no-explicit-any */
// export const uploadProfilePix = async (data: any) => {
//   const res = await publicApi.post("/profile_picture_a.php", data); // Use POST and pass the data
//   return res.data; // Return the response data
// };

// export const uploadProfilePix = async (data: any) => {
//   const res = await publicApi.post("/profile_picture_a.php", data); // Use POST and pass the data
//   return res.data; // Return the response data
// };
