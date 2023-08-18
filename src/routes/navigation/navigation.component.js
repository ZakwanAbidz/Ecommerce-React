// import { Fragment } from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import './navigation.styles.scss';

// const Navigation = () => {
//   return (
//     <Fragment>
//       <div className='navigation'>
//         <Link className='logo-container' to='/'>
//           <CrwnLogo className='logo' />
//         </Link>
//         <div className='nav-links-container'>
//           <Link className='nav-link' to='/shop'>
//             SHOP
//           </Link>
//           <Link className='nav-link' to='/sign-in'>
//             SIGN IN
//           </Link>
//         </div>
//       </div>
//       <Outlet />
//     </Fragment>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import { NavLink,Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import "./NavBar.css";

function Navigation() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <CrwnLogo className='logo' />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/shop"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sign-in"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign-In
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
