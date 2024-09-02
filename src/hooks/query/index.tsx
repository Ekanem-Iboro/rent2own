import { getCars, getProfile } from "@/api";
import { Car } from "@/api/types";
import { useQuery } from "@tanstack/react-query";

export const useCars = () => {
  return useQuery<Car[]>({
    queryFn: getCars,
    queryKey: ["cars"],
  });
};
export const useGetUserProfile = (id: number) => {
  return useQuery({
    queryKey: ["profile", id],
    queryFn: () => getProfile(id),
    enabled: !!id, // Only run the query if the id exists
  });
};
