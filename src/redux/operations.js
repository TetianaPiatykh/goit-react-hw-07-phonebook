import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { getTasks } from "./selectors";

axios.defaults.baseURL = "https://6385dd3fbeaa6458266b25e1.mockapi.io"; 

export const fetchContacts = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "tasks/addTask",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", {
        name: contact.contactName,
        phone: contact.phone,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "tasks/deleteTask",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);