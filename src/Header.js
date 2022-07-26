import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  
  return (
    
    <div className="header">

      <Link to ="/">
        <img
             className="header__logo"
             src="https://camo.envatousercontent.com/9afa9f0356e21f021f50b325ba3318621901f778/687474703a2f2f76656c696b6f726f646e6f762e636f6d2f7468656d65666f726573742f73686f706d652d77702f73637265656e73686f74732f6c6f676f2e706e67"
              />
      </Link>

     <div className="header__search">
     <input className="header__searchInput" type="text" />
     <SearchIcon
     className="header__searchIcon" />
     
    </div>
 
    <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to='/checkout'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to='/contact_us'>
        <div className='header__option'>
        <span className='header__optionLineOne'>Contact</span>
        <span ClassName='header__optionLineTwo'>Us</span>
        </div>
        </Link>

        
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon/>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
     
    </div>
  </div>
  );
}

export default Header