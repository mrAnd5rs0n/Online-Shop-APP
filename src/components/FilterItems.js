import React, { useState, useEffect } from 'react';
import FilterItem from './FilterItem';

const FilterItems = props => {
  const [genderChosen, setGenderChosen] = useState(props.gender);
  const [markChosen, setMarkChosen] = useState(props.mark);
  const [itemChosen, setItemChosen] = useState(props.item);
  const [valueChosen, setValueChosen] = useState(props.value);

  useEffect(() => {
    setGenderChosen(props.gender);
    setMarkChosen(props.mark);
    setItemChosen(props.item);
    setValueChosen(props.value);
  }, [props]);

  return <div></div>;
};

export default FilterItems;
