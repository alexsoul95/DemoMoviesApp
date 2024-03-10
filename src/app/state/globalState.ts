import { GlobalType, StateSlice } from "./types";

const initialState = {
  colors: {
    primary: "#E82830"
  }
}

export const createGlobalSlice: StateSlice<GlobalType> = (set, get) => ({
  ...initialState,
})