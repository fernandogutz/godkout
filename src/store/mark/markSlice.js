import { createSlice } from '@reduxjs/toolkit';

export const markSlice = createSlice({
    name: 'mark',
    initialState: {
        consulting: false,
        errorsCreateMark: null, 
        errorsUpdateMark: null,
        errorsDeleteMark: null,
        errorsGetMark: null, // creo que usaré el getMark() solo para poder setear luego el activeMark que usaré en updateMark()
        activeMark: {} // creo que me servirá para pintar el formulario de updateMark()
    },
    reducers: {
        setActiveMark: (state, action) => {
            state.activeMark = action.payload;
        },
        setErrorsCreateMark: (state, action) => {
            state.errorsCreateMark = action.payload;
        },
        setErrorsUpdateMark: (state, action) => {
            state.errorsUpdateMark = action.payload;
        },
        setErrorsDeleteMark: (state, action) => {
            state.errorsDeleteMark = action.payload;
        },
        setErrorsGetMark: (state, action) => {
            state.errorsGetMark = action.payload;
        }

    }
});


// Action creators are generated for each case reducer function
export const { setActiveMark, setErrorsCreateMark, setErrorsDeleteMark, setErrorsGetMark, setErrorsUpdateMark  } = markSlice.actions;