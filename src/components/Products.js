import classes from './Products.module.css';

function Products(props) {
  return (
    <div className={classes['expense-item']}>
      <div className={classes['expense-item__description']}>
        <h2>
          {props.mark}
          <br></br>
          {props.item}
        </h2>

        <div className={classes['expense-item__price']}>{props.value} KM</div>
      </div>
    </div>
  );
}

export default Products;
