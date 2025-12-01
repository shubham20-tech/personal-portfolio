// src/components/Experience/Experience.js
'use client';

import { formatMessage } from '../../utils/i18n';
import styles from './Experience.module.css';
import { useEffect, useRef } from 'react';

const Experience = () => {
  const experience = formatMessage({ id: 'experience' });
  const experienceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  if (!experience?.timeline?.length) return null;

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionNumber}>03. </span>
        {experience.title}
      </h2>
      
      <p className={styles.sectionDescription}>
        {experience.description}
      </p>

      <div className={styles.timeline}>
        {experience.timeline.map((item, index) => (
          <div 
            key={item.id} 
            ref={el => experienceRefs.current[index] = el}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.role}>{item.role}</h3>
                <span className={styles.company}>{item.company}</span>
                <span className={styles.period}>{item.period}</span>
              </div>
              <p className={styles.description}>{item.description}</p>
              {item.technologies && (
                <div className={styles.technologies}>
                  {item.technologies.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;