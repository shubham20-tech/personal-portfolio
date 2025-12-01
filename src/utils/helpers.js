// src/utils/helpers.js
export const getNestedValue = (obj, path, defaultValue = null) => {
  if (!obj || typeof obj !== 'object') return defaultValue;
  
  const keys = typeof path === 'string' ? path.split('.') : path;
  let result = obj;
  
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) return defaultValue;
  }
  
  return result !== undefined ? result : defaultValue;
};