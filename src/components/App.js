// import { useState } from "react";
import {Form} from "./ContactForm/ContactForm";
import {ContactList} from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getIsLoading, getError, getContacts } from "redux/selectors";
import { FirstTitle, SecondTitle, AppForm } from "./App.styled";
// import {useLocalStorage} from "../../src/hooks/useLocalStorage"


export const App = () => {

   const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 
  

  return (
     
    <AppForm
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
          color: '#010101'
        
      }}
       >
      <FirstTitle>Phonebook</FirstTitle>     
      <Form />
      <SecondTitle>Contacts</SecondTitle>    
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
       {contacts && !isLoading && <ContactList />}
      {/* <ContactList /> */}
    </AppForm>
  );
  
 
};

