import { create } from "zustand";

interface SliderState {
  value: number;
  setValue: (newValue: number) => void;
  modal: boolean;
  setModal: (isOpen: boolean) => void;
}

const useSliderStore = create<SliderState>((set) => ({
  modal: false,
  setModal: (isOpen) => set({ modal: isOpen }),
  value: 6,
  setValue: (newValue) => set({ value: newValue }),
}));

export default useSliderStore;
