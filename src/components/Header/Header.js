// src/components/Header/Header.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatMessage } from '../../utils/i18n';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          SK
        </Link>
        
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav 
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            <li><a href="#about" onClick={closeMenu}>{formatMessage({ id: 'header.about' })}</a></li>
            <li><a href="#skills" onClick={closeMenu}>{formatMessage({ id: 'header.skills' })}</a></li>
            <li><a href="#projects" onClick={closeMenu}>{formatMessage({ id: 'header.projects' })}</a></li>
            <li><a href="#experience" onClick={closeMenu}>{formatMessage({ id: 'header.experience' })}</a></li>
            <li>
              <a 
                href="#contact" 
                className={styles.contactLink}
                onClick={closeMenu}
              >
                {formatMessage({ id: 'header.contact' })}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;