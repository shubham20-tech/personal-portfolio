// src/utils/i18n.js
import en from '../locales/en.json';
import { getNestedValue } from './helpers';

const translations = {
  en
};

export const formatMessage = ({ id, defaultMessage = '' } = {}) => {
  if (!id) return defaultMessage || '';
  
  // Handle nested paths (e.g., 'hero.greeting')
  const keys = id.split('.');
  let result = translations.en;
  
  for (const key of keys) {
    if (result === undefined || result === null) {
      console.warn(`Translation not found for key: ${id}`);
      return defaultMessage || id;
    }
    result = result[key];
  }
  
  return result !== undefined ? result : (defaultMessage || id);
};