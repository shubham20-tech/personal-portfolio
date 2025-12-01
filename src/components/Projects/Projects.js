// src/components/Projects/Projects.js
'use client';

import { formatMessage } from '../../utils/i18n';
import styles from './Projects.module.css';
import { useEffect, useRef } from 'react';

const Projects = () => {
  const projects = formatMessage({ id: 'projects' });
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  if (!projects?.items?.length) return null;

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>
        {projects.title}
      </h2>
      
      <p className={styles.sectionDescription}>
        {projects.description}
      </p>

      <div className={styles.projectsGrid}>
        {projects.items.map((project, index) => (
          <div 
            key={project.id} 
            ref={el => projectRefs.current[index] = el}
            className={styles.projectCard}
          >
            <div className={styles.projectImage}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.image}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="GitHub Repository"
                  >
                    <span>Code</span>
                    <span className={styles.linkIcon}>↗</span>
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.liveLink}`}
                    aria-label="Live Demo"
                  >
                    <span>Live Demo</span>
                    <span className={styles.linkIcon}>↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;