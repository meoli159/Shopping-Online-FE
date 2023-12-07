/* eslint-disable react/prop-types */
import './Navbar.css';
import { FaBagShopping } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav>
      <div className="nav_left">
        {isOpenMenu ? (
          <div className="menu">
            <p className="menu-container menu-container-active" onClick={() => setIsOpenMenu(!isOpenMenu)}>
              <AiOutlineClose size={'1em'} />
              <span>Back</span>
            </p>

            <ul className="show-menu show-menu-active">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'#'}>Gallery</Link>
              </li>
              <li>
                <Link to={'#'}>Blog</Link>
              </li>
              <li>
                <Link to={'#'}>About Me</Link>
              </li>
              <li>
                <Link to={'#'}>Contact</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="menu">
            <p className="menu-container" onClick={() => setIsOpenMenu(!isOpenMenu)}>
              <GiHamburgerMenu />
              <span>Menu</span>
            </p>
            <ul className="show-menu"></ul>
          </div>
        )}

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
            <FaBagShopping fill="white" />
          </div>
        </div>
      </div>
    </nav>
  );
};
