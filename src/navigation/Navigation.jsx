import { Link } from 'react-router-dom';
//import css 
import './Navigation.css';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/home" exact>Home</Link>  
      </li>
      <li>
        <Link to="/about" exact>About</Link>
      </li>
      <li>
        <Link to="/contact" exact>Contact</Link>
      </li>
    </ul>
  );
}

export default Navigation;