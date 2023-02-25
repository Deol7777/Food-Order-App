import React from "react";

import mainImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header  = () =>
{
    return (
      <React.Fragment>
        <header className={classes.header}>
          <h1>QuickGrub</h1>
          <HeaderCartButton>Cart</HeaderCartButton>
        </header>
        <div className={classes["main-image"]}>
          <img src={mainImage} alt="Food" />
        </div>
      </React.Fragment>
    );
};

export default Header;