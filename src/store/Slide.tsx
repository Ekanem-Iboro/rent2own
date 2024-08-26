import { create } from "zustand";

interface SliderState {
  value: number;
  setValue: (newValue: number) => void;
}

const useSliderStore = create<SliderState>((set) => ({
  value: 6,
  setValue: (newValue) => set({ value: newValue }),
}));

export default useSliderStore;
