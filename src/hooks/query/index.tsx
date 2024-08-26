import { getCars } from "@/api";
import { Car } from "@/api/types";
import { useQuery } from "@tanstack/react-query";

export const useCars = () => {
  return useQuery<Car[]>({
    queryFn: getCars,
    queryKey: ["cars"],
  });
};
