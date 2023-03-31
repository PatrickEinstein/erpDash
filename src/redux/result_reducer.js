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
            if(action.payload > 0.2 ){
                state.cat1 = action.payload
            }else{
                return
            }
          
        },
        setCat2: (state, action) => {
            if(action.payload > 0.2 ){
            state.cat2 = action.payload;
        }else{
            return
        }
        },
        setCat3: (state, action) => {
            if(action.payload > 0.2 ){
            state.cat3 = action.payload;
        }else{
            return
        }
        },
        setCat4: (state, action) => {
            if(action.payload > 0.2 ){
            state.cat4 = action.payload;
             }else{
            return
        }
        },
        setCat5: (state, action) => {
            if(action.payload > 0.2 ){
            state.cat5 = action.payload;
             }else{
            return
        }
        },

        setCat6: (state, action) => {
            if(action.payload > 0.2 ){
            state.cat6 = action.payload;
             }else{
            return
        }
        },

        setCat7: (state, action) => {
            if(action.payload > 0.2 ){
            state.cat7 = action.payload;
             }else{
            return
        }
        },

        setCat8: (state, action) => {
            if(action.payload > 0.2 ){
            state.cat8 = action.payload;
             }else{
            return
        }
        },

        setCat9: (state, action) => {
            if(action.payload > 0.2 ){
            state.cat9 = action.payload;
             }else{
            return
        }
        },

        setCat10: (state, action) => {
             if(action.payload > 0.2 ){
            state.cat10 = action.payload;
             }else{
            return
        }
        },
        setCat11: (state, action) => {
             if(action.payload > 0.2 ){
            state.cat11 = action.payload;
             }else{
            return
        }
        },
        setCat12: (state, action) => {
             if(action.payload > 0.2 ){
            state.cat12 = action.payload;
             }else{
            return
        }
        },
        setCat13: (state, action) => {
             if(action.payload > 0.2 ){
            state.cat13 = action.payload;
             }else{
            return
        }
        },
        setCat14: (state, action) => {
             if(action.payload > 0.2 ){
            state.cat14 = action.payload;
             }else{
            return
        }
        },
        setCat15: (state, action) => {
             if(action.payload > 0.2 ){
            state.cat15 = action.payload;
             }else{
            return
        }
        },
        setTotalResult: (state, action) => {
            state.totalResult = action.payload;
            
        }
      ,
        setTotalAveragePercentage: (state, action) => {
            state.totalAveragePercentage = action.payload;
        }


    }
})

export const { setUser,setTotalAveragePercentage, setTotalResult, setCat1, setCat2, setCat3, setCat4, setCat5, setCat6, setCat7, setCat8, setCat9, setCat10, setCat11, setCat12, setCat13, setCat14, setCat15 } = resultReducer.actions;

export default resultReducer.reducer;
