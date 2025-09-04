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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          alt="Gestar ilustración"
          className={styles.imageContent}
        />
        <p className={styles.imageText}>{imageText}</p>
      </div>
      <div className={styles.formSection}>
        <div className={`${styles.formCard} ${formType === 'login' ? styles.loginCard : styles.signupCard}`}>
          <h2 className={styles.title}>{title}</h2>
          <form onSubmit={handleSubmit} className={styles.form}>


            {/* Render other fields except genero and rol */}
            {fields.filter(f => f.name !== 'genero' && f.name !== 'rol').map((field) => (
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

            {formType === 'signup' && fields.find(f => f.name === 'genero') && (
              <div className={styles.genderRoleSelector}>
                {[
                  {
                    value: 'masculino',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="#fff"><g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 61.374 0 v 6.039 h 18.318 L 57.823 27.907 c -6.124 -5.16 -14.022 -8.278 -22.638 -8.278 C 15.784 19.63 0 35.414 0 54.815 C 0 74.216 15.784 90 35.185 90 s 35.185 -15.784 35.185 -35.185 c 0 -8.616 -3.118 -16.514 -8.278 -22.638 l 21.869 -21.869 v 18.318 H 90 V 0 H 61.374 z M 35.185 83.961 c -16.071 0 -29.147 -13.075 -29.147 -29.146 c 0 -16.071 13.075 -29.147 29.147 -29.147 s 29.147 13.075 29.147 29.147 C 64.332 70.886 51.257 83.961 35.185 83.961 z"/></g></svg>
                    ),
                    label: 'Masculino',
                    className: `${styles.genderOption} ${styles.male}`
                  },
                  {
                    value: 'femenino',
                    icon: (
                      <svg fill="#fff" width="32" height="32" viewBox="0 0 52.857 52.857" xmlns="http://www.w3.org/2000/svg"><g><path d="M43.021,16.593C43.021,7.444,35.579,0,26.43,0C17.28,0,9.836,7.443,9.836,16.593c0,8.425,6.316,15.387,14.459,16.438 v10.109h-4.213c-1.178,0-2.133,0.955-2.133,2.133s0.955,2.133,2.133,2.133h4.213v3.318c0,1.178,0.955,2.133,2.135,2.133 c1.177,0,2.132-0.955,2.132-2.133v-3.318h4.213c1.181,0,2.136-0.955,2.136-2.133s-0.955-2.133-2.136-2.133h-4.213V33.031 C36.706,31.979,43.021,25.018,43.021,16.593z M14.104,16.593c0-6.797,5.529-12.326,12.326-12.326 c6.794,0,12.326,5.529,12.326,12.326c0,6.797-5.531,12.326-12.326,12.326C19.633,28.919,14.104,23.39,14.104,16.593z"></path></g></svg>
                    ),
                    label: 'Femenino',
                    className: `${styles.genderOption} ${styles.female}`
                  },
                  {
                    value: 'otro',
                    icon: (
                      <svg fill="#fff" width="32" height="32" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M215.96008,23.20947c-.01117-.11377-.03271-.22412-.04858-.33642-.02069-.146-.038-.29248-.06671-.4375-.026-.13086-.0622-.2583-.09461-.38721-.03106-.124-.05829-.24854-.09546-.37158-.03839-.12647-.08593-.24854-.13037-.37256-.04382-.12256-.08429-.24609-.13427-.3667-.04779-.11523-.104-.22559-.157-.33838-.05835-.124-.11358-.249-.17865-.3706-.05774-.10791-.12359-.21-.186-.31495-.07111-.11914-.13873-.24023-.21661-.35644-.07593-.11328-.16059-.22022-.242-.3291-.07464-.1001-.14429-.20264-.22424-.3003-.1521-.18505-.31384-.36181-.48175-.53271-.01654-.01709-.0304-.03564-.04712-.05225-.01935-.01953-.04077-.03515-.0603-.05468-.16852-.165-.34253-.32422-.525-.47413-.09424-.07763-.19366-.145-.29053-.21728-.1123-.084-.22229-.1709-.339-.249-.11236-.0752-.229-.14063-.34423-.20948-.109-.06494-.2157-.1333-.32807-.19384-.115-.06153-.23328-.11329-.35058-.16895-.11963-.05664-.23749-.11621-.3603-.167-.11077-.0459-.22387-.08252-.33618-.123-.13421-.04883-.267-.09961-.40442-.1416-.10833-.03223-.2185-.05615-.32788-.084-.14325-.03663-.28515-.07666-.43145-.10547-.12085-.02393-.24286-.03711-.36451-.05567-.13653-.02051-.27142-.04541-.41009-.05908-.20184-.01953-.40436-.02588-.60693-.03076C208.11768,16.00781,208.05981,16,208,16H168a8,8,0,0,0,0,16h20.686L164.25226,56.43359A67.97439,67.97439,0,1,0,112,175.51367V196H88a8,8,0,0,0,0,16h24v20a8,8,0,0,0,16,0V212h24a8,8,0,0,0,0-16H128V175.51367A67.9301,67.9301,0,0,0,175.09692,68.2168L200,43.314V64a8,8,0,0,0,16,0V24.00244C216.00006,23.73779,215.98608,23.47314,215.96008,23.20947ZM120,160a52,52,0,1,1,52-52A52.059,52.059,0,0,1,120,160Z"></path></svg>
                    ),
                    label: 'Otro',
                    className: `${styles.genderOption} ${styles.other}`
                  }
                ].map(opt => (
                  <div
                    key={opt.value}
                    className={`${opt.className}${formData.genero === opt.value ? ' ' + styles.selected : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, genero: opt.value }))}
                    tabIndex={0}
                    role="button"
                    aria-label={opt.label}
                  >
                    {opt.icon}
                    <span className={styles.genderLabel}>{opt.label}</span>
                  </div>
                ))}
              </div>
            )}

            {formType === 'signup' && fields.find(f => f.name === 'rol') && (
              <div className={styles.genderRoleSelector}>
                {[
                  {
                    value: 'gestante',
                    icon: (
                      <svg width="32" height="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="M254.962,145.192c-38.209,36.682-47.168,80.782-47.168,80.782s-78.16,49.137-47.591,157.646h91.854 l13.549,102.607C267.553,500.985,280.129,512,295.004,512h5.189c16.379,0,29.656-13.273,29.656-29.652V383.62h12.053 c0,0,0-189.14,0-233.837C341.902,114.63,290.042,111.517,254.962,145.192z" fill="#fff"/><path d="M305.398,0c-29.542,0-53.493,23.955-53.493,53.493c0,29.546,23.951,53.493,53.493,53.493 c29.542,0,53.49-23.947,53.49-53.493C358.888,23.955,334.94,0,305.398,0z" fill="#fff"/></g></svg>
                    ),
                    label: 'Gestante',
                    className: `${styles.roleOption} ${styles.gestante}`
                  },
                  {
                    value: 'acompañante',
                    icon: (
                      <svg width="32" height="32" viewBox="0 0 459.254 459.254" xmlns="http://www.w3.org/2000/svg"><g><path d="M317.108,64.146c-3.846,0-7.48,0.903-10.707,2.502c8.563,1.412,16.07,6.346,20.764,13.523 c9.264,14.164,5.366,33.273-8.914,42.613l-25.301,16.547v11.003l-47.026,30.602c-6.927,4.508-8.889,13.778-4.38,20.706 c4.51,6.931,13.783,8.886,20.705,4.38l43.593-28.367c3.365,1.777,7.197,2.788,11.267,2.788c13.342,0,24.158-10.816,24.158-24.158 V88.305C341.266,74.962,330.45,64.146,317.108,64.146z" fill="#fff"></path><circle cx="289.151" cy="29.645" r="29.645" fill="#fff"></circle><path d="M241.423,99.464l34.074-22.284l-21.746,2.769C244.476,81.13,238.481,90.474,241.423,99.464z" fill="#fff"></path><circle cx="164.866" cy="66.412" r="34.109" fill="#fff"></circle><path d="M264.004,321.515c-0.253-3.308-1.329-6.5-3.13-9.285l-31.406-48.567l-12.387-87.608l-52.253-5.529l62.483-7.325 c2.549-0.299,4.994-1.186,7.143-2.591l76.02-49.717c7.662-5.011,9.811-15.284,4.8-22.945c-5.01-7.661-15.283-9.811-22.945-4.8 l-72.753,47.581l-58.608,6.87l42.166-14.859c-5.242-4.425-12.272-6.685-19.599-5.649l-44.076,6.232 c-13.65,1.93-23.151,14.56-21.221,28.211l20.069,126.507l18.068,75.944l-20.743,80.405c-2.744,10.637,3.655,21.485,14.292,24.229 c10.644,2.744,21.487-3.661,24.229-14.292l21.974-85.18c0.809-3.136,0.84-6.422,0.09-9.572l-18.349-77.128l9.075-1.283 l37.78,58.424l8.507,111.287c0.834,10.905,10.338,19.151,21.35,18.317c10.954-0.837,19.154-10.396,18.317-21.35L264.004,321.515z" fill="#fff"></path></g></svg>
                    ),
                    label: 'Acompañante',
                    className: `${styles.roleOption} ${styles.acompanante}`
                  }
                ].map(opt => (
                  <div
                    key={opt.value}
                    className={`${opt.className}${formData.rol === opt.value ? ' ' + styles.selected : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, rol: opt.value }))}
                    tabIndex={0}
                    role="button"
                    aria-label={opt.label}
                  >
                    {opt.icon}
                    <span className={styles.roleLabel}>{opt.label}</span>
                  </div>
                ))}
              </div>
            )}
            
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


