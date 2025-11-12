'use client';
import styles from './StarRating.module.css';

const StarRating = ({ rating, maxStars = 5, size = 20, showNumber = true }) => {
  const stars = [];
  
  // Usar colores directamente (las variables CSS se aplicarán vía estilos inline y clases)
  // Valores por defecto que coinciden con las variables globales
  const primaryPink = '#fd94bd'; // var(--primary-pink)
  const emptyStarColor = '#d9d9d9';
  
  for (let i = 1; i <= maxStars; i++) {
    let fillPercentage = 0;
    
    if (rating >= i) {
      fillPercentage = 100;
    } else if (rating > i - 1) {
      fillPercentage = (rating - (i - 1)) * 100;
    }
    
    stars.push(
      <div key={i} style={{ position: 'relative', display: 'inline-block' }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          style={{ display: 'block' }}
        >
          {/* Estrella vacía (gris claro) */}
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={emptyStarColor}
          />
          {/* Estrella llena (rosado primario con gradiente) */}
          <defs>
            <linearGradient id={`grad-${i}-${rating}`}>
              <stop offset="0%" stopColor={primaryPink} />
              <stop offset={`${fillPercentage}%`} stopColor={primaryPink} />
              <stop offset={`${fillPercentage}%`} stopColor="transparent" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={`url(#grad-${i}-${rating})`}
          />
        </svg>
      </div>
    );
  }
  
  return (
    <div className={styles.starRating}>
      {stars}
      {showNumber && (
        <span 
          className={styles.starNumber}
          style={{ fontSize: `${size * 0.75}px` }}
        >
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
};

export default StarRating;
