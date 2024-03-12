import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

import { zustandStorage } from './storage';
import { CombinedState } from './types';
import { createMainSlice } from './mainState';
import { creteMovieSlice } from './movieState';
import { createLocalizationSlice } from './languageState';

export const useStore = create<CombinedState>()(
  persist(
    immer(devtools((...api) => ({
      main: createMainSlice(...api),
      movie: creteMovieSlice(...api),
      localization: createLocalizationSlice(...api),
    }))),
    {
      name: 'global-store',
      partialize: (state) => ({
        // Include the keys you want to persist in here.
        movie: {
        },
        localization: {
          ...state.localization
        }
      }),
      merge: (persistedState, currentState) => {
        const typedPersistedState = persistedState as CombinedState | undefined;

        return {
          main: {
            ...currentState.main,
            ...(typedPersistedState?.main || {}),
          },
          movie: {
            ...currentState.movie,
            ...(typedPersistedState?.movie || {})
          },
          localization: {
            ...currentState.localization,
            ...(typedPersistedState?.localization || {})
          }
        };
      },
      storage: createJSONStorage(() => zustandStorage)
    },
  ),
);