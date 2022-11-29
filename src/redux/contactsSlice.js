import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./operations";


// const contactsInitialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
// ];
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled
        , (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.contacts.items.findIndex(
            contact => contact.id === action.payload.id
          );
          state.contacts.items.splice(index, 1);
        })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      )
  }
})


// {
      // [fetchContacts.pending]: handlePending,
      // [fetchContacts.fulfilled](state, action) {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items = action.payload;
      // },
      // [fetchContacts.rejected]: handleRejected,
      // [addContact.pending]: handlePending,
      // [addContact.fulfilled](state, action) {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items.push(action.payload);
      // },
      // [addContact.rejected]: handleRejected,
      // [deleteContact.pending]: handlePending,
      // [deleteContact.fulfilled](state, action) {
      //   state.isLoading = false;
      //   state.error = null;
      //   const index = state.items.findIndex(
      //     task => task.id === action.payload.id
      //   );
      //   state.items.splice(index, 1);
      // },
      // [deleteContact.rejected]: handleRejected,
    // }


export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// reducers: {
//     addContacts: {
//       reducer(state, action) {
//           state.push(action.payload);
//       },
//       prepare(userName, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name: userName,
//             number: number,
   
//           },
//         };
//       },
//     },
//     deleteContacts(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },