import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
  return (
    <header className='sidebar'>
      <h1 className='logo'>
        <Link to='/React-MovieAPI2025'>
          <img src={`${process.env.PUBLIC_URL}/images/logo-YTS.svg`} alt='YTS 로고' />
        </Link>
      </h1>

      {/* 사이드바용 네비 */}
      <Navigation />
    </header>
  );
}

export default Header;
