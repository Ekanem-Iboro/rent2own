import { publicApi } from "./axios";
import { Car } from "./types";

export const getCars = async (): Promise<Car[]> => {
  const res = await publicApi.get("/get_cars.php");
  return res.data;
};
