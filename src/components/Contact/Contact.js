// src/components/Contact/Contact.js
'use client';

import { useState } from 'react';
import { formatMessage } from '../../utils/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faEnvelope,
  faMessage,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{formatMessage({ id: 'contact.title' })}</h2>
        <p className={styles.sectionSubtitle}>{formatMessage({ id: 'contact.subtitle' })}</p>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h3>Email</h3>
                <p>your.email@example.com</p>
              </div>
            </div>
            {/* Add more contact info items as needed */}
          </div>
          
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder={formatMessage({ id: 'contact.form.name' })}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formControl}
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder={formatMessage({ id: 'contact.form.email' })}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formControl}
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                <textarea
                  name="message"
                  placeholder={formatMessage({ id: 'contact.form.message' })}
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className={`${styles.formControl} ${styles.textarea}`}
                ></textarea>
              </div>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              <FontAwesomeIcon icon={faPaperPlane} />
              {formatMessage({ id: 'contact.form.submit' })}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;