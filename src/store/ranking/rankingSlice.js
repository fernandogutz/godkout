import { createSlice } from '@reduxjs/toolkit';

export const rankingSlice = createSlice({
    name: 'ranking',
    initialState: {
        consultingMarks: false,
        elements: [],
        marks: null,
        activeElement: 'Pull Ups Masculino',
        disabledFilterBtn: false,
        latestQueryElement: 'Pull Ups Masculino',
        suffix: 'Reps'
    },
    reducers: {
        setMarks: (state, action) => {
            state.marks = action.payload;
        },

        setConsultingMarks: (state, action) => {
            state.consultingMarks = action.payload;
        },

        setElements: (state, action) => {
            state.elements = action.payload;
        },

        setActiveElement: (state, action) => {
            state.activeElement = action.payload;
        },

        setLatestQueryElement: (state, action) => {
            state.latestQueryElement = action.payload;
        },

        setDisabledFilterBtn: (state, action) => {
            state.disabledFilterBtn = action.payload;
        },

        setSuffix: (state, action) => {
            state.suffix = action.payload;
        }
        
    }
});


// Action creators are generated for each case reducer function
export const { setMarks, setConsultingMarks, setElements, setActiveElement, setDisabledFilterBtn, setLatestQueryElement, setSuffix  } = rankingSlice.actions;