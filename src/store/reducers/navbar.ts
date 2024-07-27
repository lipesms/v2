import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type NavBarType = {
  sections:
    | 'home'
    | 'aboutMe'
    | 'skills'
    | 'experiences'
    | 'projects'
    | 'contacts'
}

const initialState: NavBarType = {
  sections: 'home'
}

const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    changeSection: (
      state,
      action: PayloadAction<
        'home' | 'aboutMe' | 'skills' | 'experiences' | 'projects' | 'contacts'
      >
    ) => {
      if (action.payload != undefined) {
        state.sections = action.payload
      }
    }
  }
})

export const { changeSection } = navBarSlice.actions

export default navBarSlice.reducer
