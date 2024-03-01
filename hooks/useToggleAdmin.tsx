import { create } from "zustand";

type toggleType = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
};
export const useToggleAdmin = create<toggleType>((set) => ({
  toggle: false,
  setToggle: (value) => {
    set({ toggle: value });
  },
}));
