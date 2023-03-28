import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        user: null,
        cat1: 0,
        cat2: 0,
        cat3: 0,
        cat4: 0,
        cat5: 0,
        cat6: 0,
        cat7: 0,
        cat8: 0,
        cat9: 0,
        cat10: 0,
        cat11: 0,
        cat12: 0,
        cat13: 0,
        cat14: 0,
        cat15: 0,

        totalResult : 0,
        totalAveragePercentage : 0
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;

        },
        setCat1: (state, action) => {
            state.cat1 = action.payload
        },
        setCat2: (state, action) => {
            state.cat2 = action.payload;
        },
        setCat3: (state, action) => {
            state.cat3 = action.payload;
        },
        setCat4: (state, action) => {
            state.cat4 = action.payload;
        },
        setCat5: (state, action) => {
            state.cat5 = action.payload;
        },

        setCat6: (state, action) => {
            state.cat6 = action.payload;
        },

        setCat7: (state, action) => {
            state.cat7 = action.payload;
        },

        setCat8: (state, action) => {
            state.cat8 = action.payload;
        },

        setCat9: (state, action) => {
            state.cat9 = action.payload;
        },

        setCat10: (state, action) => {
            state.cat10 = action.payload;
        },
        setCat11: (state, action) => {
            state.cat11 = action.payload;
        },
        setCat12: (state, action) => {
            state.cat12 = action.payload;
        },
        setCat13: (state, action) => {
            state.cat13 = action.payload;
        },
        setCat14: (state, action) => {
            state.cat14 = action.payload;
        },
        setCat15: (state, action) => {
            state.cat15 = action.payload;
        },
        setTotalResult: (state, action) => {
            state.totalResult = action.payload;
        },
        setTotalAveragePercentage: (state, action) => {
            state.totalAveragePercentage = action.payload;
        },


    }
})

export const { setUser,setTotalAveragePercentage, setTotalResult, setCat1, setCat2, setCat3, setCat4, setCat5, setCat6, setCat7, setCat8, setCat9, setCat10, setCat11, setCat12, setCat13, setCat14, setCat15 } = resultReducer.actions;

export default resultReducer.reducer;
