import { StateCreator } from "zustand";
import { LanguageType } from "../types/types";

//Main State
export type MainStateDefinition = {
} 
export type MainStateAction = {
}
export type MainType = MainStateAction & MainStateDefinition;

//Global State
export type GlobalStateDefinition = {
  colors: {
    primary: string
  }
}
export type GlobalActionDefitinion = {

}
export type GlobalType = GlobalStateDefinition & GlobalActionDefitinion
//Localization State
export type LocalizationStateDefinition = {

}
export type LocalizationStateAction = {
  languages: LanguageType[],
  current: LanguageType
}
export type LocalizationType = LocalizationStateAction & LocalizationStateDefinition
//// Combined State
export interface CombinedState {
  main: MainType,
  global: GlobalType,
  localization: LocalizationType
}

export type StateSlice<T> = StateCreator<
  CombinedState,
  [['zustand/immer', never]],
  [['zustand/persist', Partial<T>]],
  T
>;
