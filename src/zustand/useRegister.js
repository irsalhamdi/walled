import { create } from "zustand";

const initialState = {
  inputs: {
    fullName: "",
    email: "",
    password: "",
    numberPhone: "",
  },
};

export const useRegister = create((set, get) => ({
  ...initialState,
  setInput: (name, value) =>
    set((state) => ({
      inputs: { ...state.inputs, [name]: value },
    })),
  handleSubmitRegister: (value, navigate) => {
    console.log("submit", value);
    get().resetInput();
    navigate("/");
  },
  resetInput: () => set(initialState),
}));
