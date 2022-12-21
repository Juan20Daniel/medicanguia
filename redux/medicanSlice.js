import { createSlice } from "@reduxjs/toolkit";
import { networck, otherCosts, moreInfo, experience, comments } from "../data";
import { filter } from "../functions/functions";
const medicanSlice = createSlice({
    name:"medican",
    initialState:{
        token: [ {user:false} ],
        allInfo: {}
    },
    reducers: {
        setToken: (state, action) => {
            state.token[0] = action.payload;
        },
        closeSession: (state) => {
            state.token[0] = { user:false }
        },
        getMoreInfo: (state, action) => {
            const { idPublication } = action.payload;
            const meetInfo = {
                infoHeader: action.payload,
                networks: filter(networck, "idPublication1", idPublication),
                otherCosts: filter(otherCosts, "idPublication5", idPublication),
                moreInfo: filter(moreInfo, "idPublication2", idPublication),
                experience: filter(experience, "idPublication3", idPublication),
                comments: filter(comments, "idPublication4", idPublication)
            }
            state.allInfo = meetInfo;
        }
    }
});

export const { 
    setToken, 
    closeSession, 
    getMoreInfo 
} = medicanSlice.actions;

export default medicanSlice.reducer;