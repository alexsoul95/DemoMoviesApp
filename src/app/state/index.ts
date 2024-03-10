import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

import { zustandStorage } from './storage';
import { CombinedState } from './types';
import { createLocalizationSlice } from './languageState';
import { createMainSlice } from './mainState';
import { createGlobalSlice } from './globalState';

export const useStore = create<CombinedState>()(
  persist(
    immer(devtools((...api) => ({
      main: createMainSlice(...api),
      global: createGlobalSlice(...api),
      localization: createLocalizationSlice(...api),
    }))),
    {
      name: 'global-store',
      partialize: (state) => ({
        // Include the keys you want to persist in here.
        global: {
          ...state.global,
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
          global: {
            ...currentState.global,
            ...(typedPersistedState?.global || {})
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