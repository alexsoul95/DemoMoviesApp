import { api } from "../api/api";
import { MovieProp } from "../types/types";
import { MovieType, StateSlice } from "./types";

//states from movie screen

const initialState = {
  LOADING: false,
  data: null,
  error: ""
}

export const creteMovieSlice: StateSlice<MovieType> = (set, get) => ({
  ...initialState,
  getMovie: async (id) => {
    set(state => {state.movie.LOADING = true})
    const resp = await api.get<MovieProp>({tt: id})
    const {data} = resp;
    if(resp.ok && data){
      set(state => {state.movie.data = data})
    } else {
      set(state => {state.main.error = resp.problem})
    }
    set(state => {state.movie.LOADING = false})
  }
})