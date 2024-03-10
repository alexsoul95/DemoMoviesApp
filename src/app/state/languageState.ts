import { ru } from "../localization/ru";
import { LocalizationType, StateSlice } from "./types";

const initialState = {
    languages: [],
    current: {
      title: "Русский",
      key: 'ru',
      dictionary: ru
    },
}

export const createLocalizationSlice: StateSlice<LocalizationType> = (set, get) => ({
  ...initialState,
})