import { configureStore } from '@reduxjs/toolkit'

import navBarSlice from './reducers/navbar'
import emailSlice from './reducers/email'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    navBar: navBarSlice,
    email: emailSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
