import { api } from "../api/api";
import { getGeneralApiProblem } from "../api/api.problem";
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
      set(state => {state.main.error = getGeneralApiProblem(resp) ?? 'Unexpected error'})
    }
    set(state => {state.movie.LOADING = false})
  }
})