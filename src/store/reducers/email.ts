import { createSlice } from '@reduxjs/toolkit'

type EmailType = {
  isOpen: boolean
}

const initialState: EmailType = {
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
