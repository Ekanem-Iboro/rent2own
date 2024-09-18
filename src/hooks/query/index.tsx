import { getCars, getContact, getFAQ, getProfile } from "@/api";
import { Car, ContactInfo, IFaq } from "@/api/types";
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
export const useGetContact = () => {
  return useQuery<ContactInfo>({
    queryFn: getContact,
    queryKey: ["contact"],
  });
};

export const useGetFaq = () => {
  return useQuery<IFaq>({
    queryFn: getFAQ,
    queryKey: ["faq"],
  });
};
