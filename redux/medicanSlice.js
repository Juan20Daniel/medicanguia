import { createSlice } from "@reduxjs/toolkit";
const medicanSlice = createSlice({
    name:"medican",
    initialState:{
        publications:null,
        token: [ {user:false} ],
        publicToMoreInfo: {},
        myCount:true
    },
    reducers: {
        setToken: (state, action) => {
            state.token[0] = {user:action.payload};
        },
        closeSession: (state) => {
            state.token[0].user = false;
        },
        getMoreInfo: (state, action) => {
            state.publicToMoreInfo = action.payload;

        },
        countClosed: (state, action) => {
            state.myCount = action.payload;
        },
        getPublications: (state, action) => {
            state.publications = action.payload;
        }
    }
});

export const { 
    setToken, 
    closeSession, 
    getMoreInfo,
    countClosed,
    getPublications
} = medicanSlice.actions;

export default medicanSlice.reducer;