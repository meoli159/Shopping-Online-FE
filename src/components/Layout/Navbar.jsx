/* eslint-disable react/prop-types */
import './Navbar.css';
import { FaBagShopping } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav>
      <div className="nav_left">
        <div className="menu">
          <p className="menu-container" onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <GiHamburgerMenu />
            <span>Menu </span>
          </p>
          {isOpenMenu ? (
            <ul className="show-menu">
              {/* <li>Home</li>
            <li>Gallery</li>
            <li>Blog</li>
            <li>About Me</li>
            <li>Contact</li> */}
              <DropdownItem text={'Home'} />
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div className="search_bar">
          <button className="search_btn">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="shop_logo">
        <p className="logo"> SHOP </p>
      </div>
      <div className="nav_right">
        <div className="shopping">
          <div className="notification">
            <p className="amount-notification">0</p>
          </div>
          <div className="cart">
            <FaBagShopping />
          </div>
        </div>
      </div>
    </nav>
  );
};

const DropdownItem = (props) => {
  return (
    <li className="dropdownItem">
      <a>{props.text}</a>
    </li>
  );
};
