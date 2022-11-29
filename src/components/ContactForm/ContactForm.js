// import { Component } from "react";
// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "redux/selectors";
import {addContact} from "../../redux/operations"
import { FormSubmit, Label, Span, InputContactForm, FormBtn } from "./ContactForm.styled";

export const Form = () => {

    // state = {
    //   name: '',
    //   number: '',
    // }

  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
      const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
  
  // const handleFormSubmit = (data) => {
  //    const { name, number } = data;

  //   contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase()) ?
  //     alert(data.name + ' is already in contacts!')
  //     : newContackEdit(name, number);
  // };
 

  const handleInputValue = (e) => {
    switch (e.currentTarget.name) {
      case 'name':
        setContactName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        break;
    }
  };



  const handleSubmit = (e) => {
     e.preventDefault();

    if (
      contacts.some(contact => contact.name.toLowerCase() === contactName.toLowerCase())
    ) {
      return alert(contactName + ' is already in contacts!');
    }
    const contact = {
      contactName,
      phone
    }

    dispatch(addContact(contact));
    reset();
    }
    
    const reset = () => {
            setContactName('');
    setPhone('');
    }

    // render() {

        return (
        <FormSubmit  onSubmit={handleSubmit}>
         <Label>
          <Span>Name</Span> 
           <InputContactForm
            
            type="text"
            name="name"
            value={contactName}
            onChange={handleInputValue}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
           />
           </Label>

          <Label>
          <Span>Number</Span> 
          <InputContactForm
            type="tel"
            name="number"
            // id={this.nameInputId}
            value={phone}
            onChange={handleInputValue}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          /> 
           </Label>
           
           <FormBtn type="submit">add contact</FormBtn>
        </FormSubmit>  

        )
    // }

}

export default Form;

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };