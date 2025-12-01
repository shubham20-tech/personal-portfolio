// src/components/About/About.js
'use client';

import { formatMessage } from '../../utils/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import styles from './About.module.css';

const About = () => {
  const about = formatMessage({ id: 'about' });

  if (!about) return null;

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionNumber}>01. </span>
          {about.title}
        </h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p className={styles.description}>{about.description}</p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <FontAwesomeIcon icon={faUserTie} className={styles.statIcon} />
                <div>
                  <h3>6+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <FontAwesomeIcon icon={faCode} className={styles.statIcon} />
                <div>
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <FontAwesomeIcon icon={faRocket} className={styles.statIcon} />
                <div>
                  <h3>40+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className={styles.skills}>
            <h3 className={styles.skillsTitle}>My Skills</h3>
            <div className={styles.skillsList}>
              {about.skills?.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillLevel} 
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;