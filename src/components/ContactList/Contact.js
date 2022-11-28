
import {  ContactName, DeletBtn } from "components/ContactList/ContactList.styled";
import { FaRegUser } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import {deleteContacts} from "../../redux/contactsSlice"
import PropTypes from 'prop-types';


  // const deletContact = contactId => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== contactId),
  //   );
  // };

export const ContactItem = ({ id, name, number}) => {

    const dispatch = useDispatch();

    return <>
        <ContactName><FaRegUser/> {name} {number}</ContactName>
        <DeletBtn type="button" onClick={() => dispatch(deleteContacts(id))}>Delete</DeletBtn>
    </>
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    // deletContactMethod: PropTypes.func.isRequired,
};