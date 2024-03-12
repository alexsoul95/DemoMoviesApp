import { api } from "../api/api";
import { getGeneralApiProblem } from "../api/api.problem";
import { GET_SEARCH_TYPE } from "../api/api.types";
import { MovieShortItemProp } from "../types/types";
import { MainType, StateSlice } from "./types";

//states from main screen

const initialState = {
  LOADING: false,
  SEARCH_LOADING: false,
  data: [],
  searchData: [],
  error: "",
  searchError: ""
}

export const createMainSlice: StateSlice<MainType> = (set, get) => ({
  ...initialState,
  getMainPage: async() => {
    set(state => {state.main.LOADING = true})
    const resp = await api.get<GET_SEARCH_TYPE>({q: ''})
    const {data} = resp;
    if(resp.ok && data){
      const {description} = data;
      set(state => {state.main.data = description ?? []})
    } else {
      set(state => {state.main.error = getGeneralApiProblem(resp) ?? 'Unexpected error'})
    }
    set(state => {state.main.LOADING = false})
  },
  getSearchItems: async(text) => {
    set(state => {state.main.SEARCH_LOADING = true})
    const resp = await api.get<GET_SEARCH_TYPE>({q: text})
    const {data} = resp;
    if(resp.ok && data){
      const {description} = data;
      set(state => {state.main.searchData = description ?? []})
    } else {
      set(state => {state.main.searchError = resp.problem})
    }
    set(state => {state.main.SEARCH_LOADING = false})

  },
  clearSearch: () => {
    set(state => {
      state.main.searchData = []
      state.main.error = ''
      state.main.SEARCH_LOADING = false
    })
  }
})