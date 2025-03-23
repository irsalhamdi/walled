import { create } from "zustand";

const initialState = {
  inputs: {
    email: "",
    password: "",
  },
};

export const useLogin = create((set, get) => ({
  ...initialState,
  setInput: (name, value) =>
    set((state) => ({
      inputs: { ...state.inputs, [name]: value },
    })),
  handleSubmitLogin: (value, navigate) => {
    console.log("submit", value);
    get().resetInput();
    navigate("/");
  },
  resetInput: () => set(initialState),
}));
