import { MainType, StateSlice } from "./types";

const initialState = {
}

export const createMainSlice: StateSlice<MainType> = (set, get) => ({
  ...initialState,
})