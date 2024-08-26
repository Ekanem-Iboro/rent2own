import { Car } from "@/api/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CarState {
  cars: Car[];
  currentCar: Car | null;
  setCurrentCar: (car: Car) => void;
}

const useCarStore = create<CarState>()(
  persist(
    (set) => ({
      cars: [],
      currentCar: null,
      setCurrentCar: (car) => set({ currentCar: car }),
    }),
    {
      name: "car-store",
    }
  )
);

export default useCarStore;
