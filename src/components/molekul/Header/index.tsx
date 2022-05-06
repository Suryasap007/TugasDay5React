import React from 'react';
import { LogoGTD } from '../../../assets';
import './Header.css';

const Header = () => {
  return (
    <header>
        <div className="container">
        <div className="header__wrapper">
            <div className="logo">
                <img src={LogoGTD} alt="gtd logo" />
            </div>
        </div>
        </div>
    </header>
  );
};

export default Header;