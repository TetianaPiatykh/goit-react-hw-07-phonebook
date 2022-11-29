// import { Component } from "react";
import { ContactItem } from "./Contact";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
// import PropTypes from 'prop-types';
import { ContactListUl, ContactLi } from "./ContactList.styled";


export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log(contacts);
  // console.log(filter);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    console.log(filter.toLowerCase());

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  // console.log(visibleContacts());

 return (<ContactListUl>
   {visibleContacts().map(({ id, name, phone }) => {
     return (
       <ContactLi key={id}>
         <ContactItem id={id} name={name} phone={phone} />
        </ContactLi>)
   }
        )}
    </ContactListUl>)
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     })
//   ),
//   deletContact: PropTypes.func.isRequired,
// }


