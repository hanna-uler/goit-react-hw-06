import { createAction } from "@reduxjs/toolkit";

const initialState = {
    name: "",
} 

export const changeFilter = createAction("filters/changeFilter");
export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case "filters/changeFilter":
            return action.payload;
        default:
            return state;
    }
}