import ClothesContext from './clothes-context';
import { useState } from 'react';


const ClothesProvider = props => {
  const [filters, setFilters] = useState({
    gender: '',
    mark: '',
    item: '',
    value: '',
  });

  const setFilter = (key, value) => {
    let newFilters = { ...filters };
    newFilters[key] = value;
    setFilters(newFilters);
  };

  const removeFilter = key => {
    let newFilters = { ...filters };
    newFilters[key] = '';
    setFilters(newFilters);
  };

  return (
    <ClothesContext.Provider value={{ filters, setFilter, removeFilter }}>
      {props.children}
    </ClothesContext.Provider>
  );
};

export default ClothesProvider;
