// src/components/Footer/Footer.js
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>SK</Link>
            <p>Building exceptional digital experiences</p>
          </div>
          
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a 
              href="https://codepen.io/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="CodePen"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className={styles.socialLink}
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} Shubham Kumar. All rights reserved.</p>
          <div className={styles.links}>
            <Link href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;