import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className='gnb'>
      <ul>
        <li className={pathname==='/React-MovieAPI2025'       ? 'on' : ''}><Link to='/React-MovieAPI2025'>HOME</Link></li>
        <li className={pathname==='/intro'  ? 'on' : ''}><Link to='/intro'>INTRO</Link></li>
        <li className={pathname==='/api'   ? 'on' : ''}><Link to='/api'>API</Link></li>
        <li className={pathname==='/contact'   ? 'on' : ''}><Link to='/contact'>Contact US</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
