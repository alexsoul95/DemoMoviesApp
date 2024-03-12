import { StateCreator } from "zustand";
import { LanguageType, MovieProp, MovieShortItemProp } from "../types/types";

//Main State
export type MainStateDefinition = {
  data: MovieShortItemProp[],
  searchData: MovieShortItemProp[]
  LOADING: boolean,
  SEARCH_LOADING: boolean,
  error: string | null,
  searchError: string | null
  
} 
export type MainStateAction = {
  getMainPage: () => Promise<void>
  getSearchItems: (text: string) => Promise<void>
  clearSearch: () => void
}
export type MainType = MainStateAction & MainStateDefinition;

//Global State
export type MovieStateDefinion = {
  LOADING: boolean,
  data: MovieProp,
  error: string | null
}
export type MovieActionDefitinion = {
  getMovie: (id: string) => Promise<void>
}
export type MovieType = MovieStateDefinion & MovieActionDefitinion
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
  movie: MovieType,
  localization: LocalizationType
}

export type StateSlice<T> = StateCreator<
  CombinedState,
  [['zustand/immer', never]],
  [['zustand/persist', Partial<T>]],
  T
>;
