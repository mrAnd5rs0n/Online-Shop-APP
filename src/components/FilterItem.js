import React, { useState, useEffect, useContext } from 'react';
import ClothesContext from '../store/clothes-context';
import classes from './FilterItem.module.css';

const FilterItem = props => {
  const [dictKey] = useState(props.dictKey);
  const { filters, removeFilter } = useContext(ClothesContext);

  if (filters[dictKey] === '') return null;

  return (
    <div className={classes.filterItems}>
      <button onClick={() => removeFilter(dictKey)}>
        <p>{filters[dictKey]}</p>
      </button>
    </div>
  );
};

export default FilterItem;
