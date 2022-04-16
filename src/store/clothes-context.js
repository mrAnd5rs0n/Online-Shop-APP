import React from 'react';

const ClothesContext = React.createContext({
  filters: {},
  setFilter: (index, value) => {},
  removeFilter: index => {},
});

export default ClothesContext;
