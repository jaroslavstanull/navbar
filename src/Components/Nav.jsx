import React from 'react';
import {Link} from'react-router-dom';



function Nav() {
  return (
    <div >
      <nav className='nav'>
          <h3 className='logo'>JS</h3>
          <ul className="nav-links">
              <Link to="/About">
              <li>About</li>
              </Link>
              <Link to="/Shop">
              <li>Shop</li>
              </Link>
              <Link to="/Todo">
              <li>Todo</li>
              </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;