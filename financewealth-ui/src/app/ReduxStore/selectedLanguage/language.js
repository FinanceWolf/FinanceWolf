import { createSlice } from '@reduxjs/toolkit'

export const selectedLanguage = createSlice({
    name: 'language',
    initialState: {
        value: 'pt-br'
    },
    reducers: {
        alter: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const { alter } = selectedLanguage.actions;
export default selectedLanguage.reducer;