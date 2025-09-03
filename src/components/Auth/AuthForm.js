'use client';
import { useState } from 'react';
import styles from './AuthForm.module.css';

const AuthForm = ({ 
  title, 
  fields, 
  submitText, 
  onSubmit,
  footerText, 
  footerLink,
  footerLinkText,
  isReverse = false,
  imageSrc = "/dibujoembarazo.png",
  imageText = "Tu embarazo conectado y cuidado",
  formType = "login" 
}) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className={`${styles.authContainer} ${isReverse ? styles.reverse : styles.normal}`}>
      <div className={styles.imageSection}>
        <img 
          src={imageSrc} 
          alt="GeStar" 
          className={styles.imageContent}
        />
        <p className={styles.imageText}>{imageText}</p>
      </div>
      
      <div className={styles.formSection}>
        <div className={`${styles.formCard} ${formType === 'login' ? styles.loginCard : styles.signupCard}`}>
          <h2 className={styles.title}>{title}</h2>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            {fields.map((field) => (
              <div key={field.name} className={styles.fieldGroup}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            ))}
            
            <button type="submit" className={styles.submitButton}>
              {submitText}
            </button>
          </form>
          
          {footerText && (
            <p className={styles.footer}>
              {footerText}{' '}
              {footerLink && footerLinkText && (
                <a href={footerLink} className={styles.footerLink}>
                  {footerLinkText}
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;


