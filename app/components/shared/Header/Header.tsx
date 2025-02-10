import Image from 'next/image';
import React from 'react';
import globe from '../../../../public/globe.svg';

const Header = () => {
  return (
    <header className='header'>
      <Image src={globe} alt='logo' />
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href='/' className='nav__link'>
              Home
            </a>
          </li>
          <li className='nav__item'>
            <a href='/about' className='nav__link'>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
