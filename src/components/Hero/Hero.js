// src/components/Hero/Hero.js
'use client';

import { useEffect, useRef } from 'react';
import { formatMessage } from '../../utils/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Hero.module.css';
import Image from 'next/image';
import profileImage from '../../styles/profile-image.png';

const Hero = () => {
  const heroRef = useRef(null);

  // Get translations
  const hero = formatMessage({ id: 'hero' });
  const socialLinks = formatMessage({ id: 'socialLinks' });

  if (!hero) return null;

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.greetingWrapper}>
              <span className={styles.greetingLine}></span>
              <p className={styles.greeting}>{hero.greeting}</p>
            </div>
            
            <h1 className={styles.name}>
              {hero.name.split(' ').map((word, i) => (
                <span key={i} className={styles.nameWord}>{word}</span>
              ))}
            </h1>
            
            <h2 className={styles.title}>
              <span className={styles.titleHighlight}>{hero.title}</span>
            </h2>
            
            <p className={styles.description}>{hero.description}</p>

            <div className={styles.ctaContainer}>
              <a href="#contact" className={styles.ctaPrimary}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.ctaIcon} />
                {hero.cta}
              </a>
              <a href="#projects" className={styles.ctaSecondary}>
                View My Work
              </a>
            </div>

            <div className={styles.socialLinks}>
              {socialLinks && socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.name === 'GitHub' && <FontAwesomeIcon icon={faGithub} />}
                  {social.name === 'LinkedIn' && <FontAwesomeIcon icon={faLinkedin} />}
                  {social.name === 'Twitter' && <FontAwesomeIcon icon={faTwitter} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.profileImageWrapper}>
            <div className={styles.profileImage}>
              <Image
                src={profileImage} // Update this path
                alt={hero.name}
                fill
                className={styles.image}
                priority
              />
            </div>
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>

      <a href="#about" className={styles.scrollIndicator} aria-label="Scroll down">
        <span>Scroll Down</span>
        <FontAwesomeIcon icon={faChevronDown} className={styles.scrollIcon} />
      </a>
    </section>
  );
};

export default Hero;