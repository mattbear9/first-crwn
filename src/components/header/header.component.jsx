import React from "react";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
      {
        currentUser ?
        <span className='option' onClick={() => auth.signOut()}>SIGN OUT</span>
        :
        <Link className='option' to ='/signin'>SIGN IN</Link>
      }
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;