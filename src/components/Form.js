import classes from './Form.module.css';
import React, { useState, useContext, useEffect } from 'react';
import FilterItem from './FilterItem';
import ClothesContext from '../store/clothes-context';
import Products from './Products';

const DUMMY_DATA = [
  {
    id: '1',
    gender: 'Male',
    mark: 'Nike',
    item: 'Sneakers',
    value: 94.12,
  },
  { id: '2', gender: 'Female', mark: 'Adidas', item: 'Socks', value: 5.49 },
  {
    id: '3',
    gender: 'Male',
    mark: 'Puma',
    item: 'T-Shirt',
    value: 54.67,
  },
  {
    id: '4',
    gender: 'Female',
    mark: 'Reebok',
    item: 'Trousers',
    value: 75.0,
  },
  {
    id: '5',
    gender: 'Female',
    mark: 'Puma',
    item: 'T-Shirt',
    value: 124.67,
  },
  {
    id: '6',
    gender: 'Male',
    mark: 'Reebok',
    item: 'Jacket',
    value: 55.0,
  },
  {
    id: '7',
    gender: 'Female',
    mark: 'Puma',
    item: 'Dress',
    value: 164.67,
  },
  {
    id: '8',
    gender: 'Male',
    mark: 'Reebok',
    item: 'Jeans',
    value: 275.0,
  },
  {
    id: '9',
    gender: 'Female',
    mark: 'Puma',
    item: 'Jacket',
    value: 64.67,
  },
  {
    id: '10',
    gender: 'Male',
    mark: 'Reebok',
    item: 'T-Shirt',
    value: 225.0,
  },
  {
    id: '11',
    gender: 'Female',
    mark: 'Puma',
    item: 'Sneakers',
    value: 64.67,
  },
  {
    id: '12',
    gender: 'Male',
    mark: 'Reebok',
    item: 'Trousers',
    value: 145.0,
  },
];

const Form = props => {
  const [filteredExpenses, setFilteredExpenses] = useState(DUMMY_DATA);
  const { filters, setFilter } = useContext(ClothesContext);

  useEffect(() => {
    let expenses = DUMMY_DATA;

    if (filters['gender'] !== '')
      expenses = expenses.filter(
        expense => expense.gender === filters['gender']
      );

    if (filters['mark'] !== '')
      expenses = expenses.filter(expense => expense.mark === filters['mark']);

    if (filters['item'] !== '')
      expenses = expenses.filter(expense => expense.item === filters['item']);

    if (filters['value'] !== '')
      expenses = expenses.filter(
        expense =>
          expense.value >= Number(filters['value'].split('-')[0]) &&
          expense.value <= Number(filters['value'].split('-')[1])
      );

    setFilteredExpenses(expenses);
  }, [filters]);

  const changeHandlerMark = event => {
    setFilter('mark', event.target.value);
  };

  const changeHandlerItem = event => {
    setFilter('item', event.target.value);
  };

  const changeHandlerValue = event => {
    setFilter('value', event.target.value);
  };

  return (
    <div>
      <div className={classes.form}>
        <form className={classes['form-items']}>
          <div>
            <div className={classes.buttons}>
              <button
                type="button"
                id="maleFilter"
                onClick={() => setFilter('gender', 'Male')}
              >
                <img src="m.png" alt="" width="19" height="19" />
              </button>
              <button
                type="button"
                id="femaleFilter"
                onClick={() => setFilter('gender', 'Female')}
              >
                <img src="f.png" alt="" width="15" height="15" />
              </button>
            </div>
            <select onChange={changeHandlerMark}>
              <option value="Nike">Nike</option>
              <option value="Reebok">Reebok</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
            </select>
            <select onChange={changeHandlerItem}>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Trousers">Trousers</option>
              <option value="Jeans">Jeans</option>
              <option value="Sneakers">Sneakers</option>
              <option value="Dress">Dress</option>
              <option value="Jacket">Jacket</option>
            </select>
            <select onChange={changeHandlerValue}>
              <option value="50-100">50 KM - 100 KM</option>
              <option value="100-200">100 KM - 200 KM</option>
              <option value="200-300">200 KM - 300 KM</option>
              <option value="300-400">300 KM - 400 KM</option>
            </select>
          </div>
          <div>
            <button className={classes.searchButton} type="submit">
              Reset
            </button>

            <FilterItem dictKey="gender" value={filters['gender']} />
            <FilterItem dictKey="mark" value={filters['mark']} />
            <FilterItem dictKey="item" value={filters['item']} />
            <FilterItem dictKey="value" value={filters['value']} />
          </div>
        </form>
      </div>
      {filteredExpenses.map(expense => (
        <Products
          key={expense.id}
          gender={expense.gender}
          mark={expense.mark}
          item={expense.item}
          value={expense.value}
        />
      ))}
    </div>
  );
};

export default Form;
