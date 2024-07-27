import { createSlice } from '@reduxjs/toolkit'

export type NavBarType = {
  isOpen: boolean
}

const initialState: NavBarType = {
  isOpen: false
}

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    toogleOpenEmailMenu: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { toogleOpenEmailMenu } = emailSlice.actions

export default emailSlice.reducer
