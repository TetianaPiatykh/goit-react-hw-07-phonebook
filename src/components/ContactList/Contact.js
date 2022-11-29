
import {  ContactName, DeletBtn } from "components/ContactList/ContactList.styled";
import { FaRegUser } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import {deleteContact} from "../../redux/operations"
import PropTypes from 'prop-types';


  // const deletContact = contactId => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== contactId),
  //   );
  // };

export const ContactItem = ({ id, name, phone}) => {

    const dispatch = useDispatch();

    return <>
        <ContactName><FaRegUser/> {name} {phone}</ContactName>
        <DeletBtn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeletBtn>
    </>
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    // deletContactMethod: PropTypes.func.isRequired,
};