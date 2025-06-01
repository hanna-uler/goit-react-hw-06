import { createAction } from "@reduxjs/toolkit";

const initialState = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
} 

export const addContacts = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");


export default function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case "contacts/addContact":
            return [...state.items, action.payload];
        case "contacts/deleteContact":
            return state.items.filter((item) => item.id !== action.payload);
    
        default:
            return state;
    }
}