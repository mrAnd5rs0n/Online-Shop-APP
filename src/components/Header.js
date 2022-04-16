import classes from './Header.module.css';
import Card from '../Card/Card';

const Header = () => {
  return (
    <Card>
      <div className={classes.main}>
        <div>
          <div className={classes.logo}>
            <h2>LOGO</h2>
          </div>
        </div>
        <nav>
          <ul className={classes.nav}>
            <li>
              <a href="A">Shops</a>
            </li>
            <li>
              <a href="B">Tournaments</a>
            </li>
            <li>
              <a className={classes.login} href="C">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className={classes.maintext}>What are you looking for ?</p>
      </div>
    </Card>
  );
};
export default Header;
