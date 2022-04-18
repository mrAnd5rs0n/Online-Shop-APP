import classes from './Form.module.css';
import React, { useState, useContext, useEffect, useRef } from 'react';
import FilterItem from './FilterItem';
import ClothesContext from '../store/clothes-context';
import Products from './Products';
import { getDataAPI, getCompaniesAPI } from '../services/data.js';

const Form = props => {
  const [data, setData] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getDataAPI().then(response => setData(response));
  }, []);

  useEffect(() => {
    getCompaniesAPI().then(response => setCompanies(response));
  }, []);

  const [filteredExpenses, setFilteredExpenses] = useState(data);
  const { filters, setFilter } = useContext(ClothesContext);

  let expenses = data;

  useEffect(() => {
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
  }, [expenses, filters]);

  const changeHandlerMark = event => {
    setFilter('mark', event.target.value);
  };

  const changeHandlerItem = event => {
    setFilter('item', event.target.value);
  };

  const changeHandlerValue = event => {
    setFilter('value', event.target.value);
  };
  const options = companies.map((company, index) => {
    return {
      label: company.name,
      value: company.name,
      key: company.id,
    };
  });

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
              {companies.map(item => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <select onChange={changeHandlerItem}>
              {data.map(item => (
                <option key={item.id} value={item.item}>
                  {item.item}
                </option>
              ))}
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

