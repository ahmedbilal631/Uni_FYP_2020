import React, { Component } from 'react';
import './navStyle.css';

import {Link} from 'react-router-dom';

// import Logo_White from '../../../media/logo_white.png';

class NavBar extends Component {
    
    render() {
        return (
            <div>
                  <nav className="myNav">
                      {/* <span> */}
                          {/* <img src={Logo_White} alt="Lets Find" className="responsive-img"/> */}
                      {/* </span> */}
                      <ul>
                          <li className="myNavItem">
                              <Link to='/help'>
                              Help?
                              </Link>
                              </li>
                          <li className="myNavItem">
                              <Link to='/about'>
                              About us
                              </Link>
                              </li>
                      </ul>
                 </nav>
            </div>
        )
    }
}

export default NavBar