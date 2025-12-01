// src/components/Skills/Skills.js
'use client';

import { useEffect, useRef } from 'react';
import { formatMessage } from '../../utils/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3, 
  faNodeJs, 
  faGit, 
  faGithub,
  faFigma,
  faWordpress
} from '@fortawesome/free-brands-svg-icons';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { icon: faReact, name: 'React.js', level: 90, color: '#61DAFB' },
    { icon: faJs, name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { icon: faHtml5, name: 'HTML5', level: 95, color: '#E34F26' },
    { icon: faCss3, name: 'CSS3', level: 90, color: '#1572B6' },
    { icon: faNodeJs, name: 'Node.js', level: 75, color: '#339933' },
    { icon: faGit, name: 'Git', level: 80, color: '#F05032' },
    { icon: faGithub, name: 'GitHub', level: 80, color: '#181717' },
    { icon: faFigma, name: 'Figma', level: 70, color: '#F24E1E' },
    { icon: faWordpress, name: 'WordPress', level: 65, color: '#21759B' }
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {formatMessage({ id: 'skills.title' })}
          </h2>
          <p className={styles.sectionSubtitle}>
            {formatMessage({ id: 'skills.subtitle' }) || 'Technologies I work with'}
          </p>
          <div className={styles.headerDivider}></div>
        </div>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={styles.skillCard}
              ref={el => skillRefs.current[index] = el}
              style={{ '--skill-color': skill.color }}
            >
              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    className={styles.icon} 
                    style={{ color: skill.color }}
                  />
                </div>
                <div className={styles.skillLevelBadge}>{skill.level}%</div>
              </div>
              
              <div className={styles.skillInfo}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress} 
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`
                    }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;