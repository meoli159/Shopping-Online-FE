/* eslint-disable react/prop-types */
import './Navbar.css';
import { FaBagShopping } from 'react-icons/fa6';
import { FaSearch, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import catImg from '../assets/cat-img.png';
export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isAuth = true;
  const cartItemAmount = 0;
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
        <p className="logo">KHỀU DONATE</p>
      </div>
      <div className="nav_right">
        <div className="shopping-cart">
          <div className="notification">
            <p className="amount-notification">{cartItemAmount}</p>
          </div>
          <div className="shopping-cart-icon" onClick={() => console.log('open cart modal')}>
            <FaBagShopping fill="white" />
          </div>
          <div className="shopping-cart-dropdown">
            {/* <div className="cart-items"></div> */}
            <div className="none-cart-items">
              <img src={catImg} alt="none cart item image" />
              <p>Your cart is currently empty.</p>
            </div>
          </div>
        </div>
        <div className="user">
          <div className="user-icon" onClick={() => console.log('open user modal')}>
            <FaUser fill="white" />
          </div>
          <div className="user-dropdown">
            {!isAuth ? (
              <div className="logout">
                <Link to={'/logout'}>logout</Link>
              </div>
            ) : (
              <div className="login">
                <Link to={'/login'}>Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
