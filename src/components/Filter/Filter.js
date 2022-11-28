// import { Component } from "react";
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors"
import {setFilter} from "../../redux/filterSlice"
import { FilterLabel, FilterInput } from './Filter.styled';



 const Filter = () => {

  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleInputFilter = (e) => {
    
    dispatch(setFilter(e.currentTarget.value));
  }
   

return  (<FilterLabel>
        Find contacts by name <FilterInput type='text' name="filter" value={value} onChange={handleInputFilter} />
  </FilterLabel>)
};
export default Filter;


// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };