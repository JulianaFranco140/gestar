"use client";
const consejosPorSemana = {
  1: {
    titulo: '🌟 El Milagro Comienza',
    bebe: 'Tu cuerpo está preparando el óvulo que podría convertirse en tu bebé. Aunque técnicamente aún no estás embarazada, este es el punto de partida que los médicos usan para calcular las semanas de gestación. Tu útero se está preparando con un revestimiento rico que nutrirá al futuro embrión.',
    alimentacion: 'Comienza a tomar ácido fólico (400-800 mcg diarios) para prevenir defectos del tubo neural. Incluye alimentos ricos en folatos como espinacas, brócoli, lentejas, espárragos y cereales fortificados. Consume proteínas de calidad (carnes magras, pescado, huevos, legumbres) y mantén una dieta balanceada rica en vitaminas y minerales.',
    cuidados: 'Elimina completamente el alcohol, tabaco y drogas recreativas. Evita medicamentos sin prescripción médica. Mantén un peso saludable y comienza rutinas de ejercicio suave si no las tienes. Reduce el estrés y asegúrate de dormir 7-9 horas diarias. Es el momento ideal para una consulta preconcepcional con tu médico.'
  },
  2: {
    titulo: '🌟 Preparación Perfecta',
    bebe: 'Tu cuerpo continúa preparándose para la posible concepción. Los folículos ováricos están madurando y tu endometrio se está engrosando para crear el ambiente perfecto para la implantación. Los niveles hormonales fluctúan preparando tu sistema reproductivo.',
    alimentacion: 'Mantén la suplementación con ácido fólico. Incluye alimentos ricos en hierro como carnes rojas magras, pollo, pescado, espinacas y legumbres, acompañados de vitamina C (cítricos, fresas, tomates) para mejorar la absorción. Consume lácteos o alternativas fortificadas para obtener calcio. Bebe mucha agua y limita la cafeína.',
    cuidados: 'Si estás planificando quedarte embarazada, este es tu periodo fértil más probable. Mantén relaciones sin protección si buscas concebir. Continúa evitando alcohol, tabaco y sustancias tóxicas. Practica técnicas de relajación y mantén un estilo de vida activo pero sin excesos. Toma vitaminas prenatales recomendadas por tu médico.'
  },
  3: {
    titulo: '🎯 La Concepción',
    bebe: 'Si la concepción ha ocurrido, el óvulo fertilizado (ahora llamado cigoto) comienza su increíble viaje hacia el útero a través de las trompas de Falopio. Se divide rápidamente, duplicando sus células cada 12 horas. Al final de esta semana, se habrá convertido en un blastocisto listo para implantarse.',
    alimentacion: 'El hierro es crucial ahora para la formación de glóbulos rojos adicionales. Consume carnes magras, pescado, lentejas, espinacas y tofu. Combina con vitamina C de naranjas, fresas, pimientos y brócoli para maximizar la absorción. Incluye granos integrales ricos en vitaminas B. Evita pescados altos en mercurio como tiburón, pez espada y caballa gigante.',
    cuidados: 'Evita exposición a temperaturas extremas como saunas, jacuzzis y baños muy calientes que pueden afectar la implantación. Limita el ejercicio intenso y evita deportes de contacto. Continúa tomando ácido fólico religiosamente. Reduce el estrés ya que puede afectar la implantación. Si fumas, es absolutamente crucial dejarlo ahora mismo.'
  },
  4: {
    titulo: '🎉 Implantación Exitosa',
    bebe: 'El blastocisto se ha implantado exitosamente en el revestimiento uterino y ahora se llama embrión. Mide apenas 0.2 mm pero ya está produciendo la hormona hCG que detectarán las pruebas de embarazo. Se están formando las capas celulares que se convertirán en todos los órganos y sistemas de tu bebé.',
    alimentacion: 'Las náuseas pueden comenzar, así que come pequeñas cantidades frecuentemente. Prueba con galletas saladas, jengibre fresco, plátanos y arroz. Evita alimentos grasos o muy condimentados. Mantén la hidratación con agua, jugos naturales diluidos o infusiones suaves. Los alimentos ricos en vitamina B6 como pollo, pescado y plátanos pueden ayudar con las náuseas.',
    cuidados: 'Puedes hacerte una prueba de embarazo casera, preferiblemente con la primera orina de la mañana para mayor precisión. Programa tu primera cita prenatal. Comienza un diario de síntomas para compartir con tu médico. Descansa más si te sientes fatigada, es normal. Evita rayos X innecesarios y informa a cualquier profesional médico sobre tu posible embarazo.'
  },
  5: {
    titulo: '💓 Primer Latido del Corazón',
    bebe: 'El corazón de tu bebé comienza a latir esta semana, aunque es demasiado pronto para escucharlo. Se está formando el tubo neural que se convertirá en el cerebro y la médula espinal. Ya mide aproximadamente 2 mm y se pueden distinguir la cabeza del cuerpo. Los brotes de brazos y piernas empiezan a aparecer.',
    alimentacion: 'Si tienes náuseas matutinas, prueba con snacks suaves como galletas integrales, pretzels, o cereales secos antes de levantarte. El jengibre es muy efectivo: puedes tomarlo como té, galletas o caramelos. Come plátanos ricos en potasio y vitamina B6. Evita olores fuertes que puedan desencadenar náuseas y come en lugares bien ventilados.',
    cuidados: 'Programa tu primera cita prenatal para confirmar el embarazo y establecer tu fecha de parto. Comienza a tomar vitaminas prenatales con ácido fólico, hierro y calcio. Descansa cuando te sientas cansada - la fatiga es normal debido a los cambios hormonales. Evita cambiar la caja de arena del gato para prevenir toxoplasmosis. Mantén buenos hábitos de higiene.'
  },
  6: {
    titulo: '🥰 Desarrollo Acelerado',
    bebe: 'Tu bebé mide ahora 4-6 mm (como una lenteja). Su corazón late a 140-150 latidos por minuto, el doble que el tuyo. Se están formando las estructuras faciales básicas: ojos, nariz y boca. El cerebro se está desarrollando rápidamente y los brotes de extremidades son más evidentes. El cordón umbilical se está formando.',
    alimentacion: 'Los omega-3 son cruciales para el desarrollo cerebral. Consume pescados seguros como salmón, sardinas, anchoas y trucha (2-3 porciones por semana). Si eres vegetariana, incluye nueces, semillas de chía y aceite de linaza. Las náuseas pueden hacer difícil comer, así que enfócate en alimentos que toleres bien y toma vitaminas prenatales para llenar vacíos nutricionales.',
    cuidados: 'Nunca tengas el estómago completamente vacío, ya que esto puede empeorar las náuseas. Come algo pequeño cada 2-3 horas. Descansa mucho - tu cuerpo está trabajando arduamente creando la placenta. Evita multitudes y personas enfermas para reducir el riesgo de infecciones. Informa a tu jefe sobre el embarazo si tu trabajo involucra químicos o radiación.'
  },
  7: {
    titulo: '🌱 Crecimiento Cerebral Intensivo',
    bebe: 'Tu bebé mide aproximadamente 10 mm (como un arándano) y está creciendo a un ritmo increíble. Su cerebro se está desarrollando a una velocidad asombrosa, produciendo 100,000 neuronas por minuto. Los rasgos faciales son más definidos, con párpados que cubren los ojos en desarrollo. Los brazos y piernas están más formados y pueden moverse.',
    alimentacion: 'El calcio es esencial ahora para el desarrollo óseo y dental. Consume 3-4 porciones diarias de lácteos: leche, yogur natural, queso fresco. Si eres intolerante a la lactosa, prueba productos sin lactosa o alternativas fortificadas como leche de almendras o soja. Incluye almendras, sardinas con huesos y vegetales de hoja verde oscura como fuentes adicionales de calcio.',
    cuidados: 'Si consumes café, redúcelo a máximo 200 mg de cafeína al día (aproximadamente una taza pequeña). Esto incluye té, chocolate y bebidas energéticas. El exceso de cafeína se ha asociado con bajo peso al nacer. Comienza a usar ropa más holgada si sientes molestias. Mantén una rutina de ejercicio suave como caminar 30 minutos diarios si te sientes bien.'
  },
  8: {
    titulo: '🖐 Formación de Extremidades',
    bebe: 'Tu bebé mide alrededor de 14-20 mm (como una frambuesa). Sus brazos y piernas están bien definidos, y los dedos de manos y pies están comenzando a separarse. Los rasgos faciales son más humanos, con una nariz pequeña visible. Sus órganos internos continúan desarrollándose y especializándose rápidamente.',
    alimentacion: 'Las frutas cítricas ricas en vitamina C (naranjas, mandarinas, kiwis, fresas) ayudan a absorber el hierro y fortalecen tu sistema inmunológico. Combínalas con alimentos ricos en hierro en las mismas comidas. La vitamina C también es importante para la formación del colágeno en los tejidos de tu bebé. Evita jugos no pasteurizados que podrían contener bacterias dañinas.',
    cuidados: 'Tu circulación sanguínea está cambiando para acomodar el aumento del volumen sanguíneo. Usa zapatos cómodos y con buen soporte, evita tacones altos. Eleva las piernas cuando descanses para mejorar la circulación. Si trabajas sentada mucho tiempo, levántate y camina cada hora. Comienza a dormir de lado, preferiblemente el izquierdo, para mejorar el flujo sanguíneo al útero.'
  },
  9: {
    titulo: '🎪 Primeros Movimientos',
    bebe: 'Tu bebé mide alrededor de 22-30 mm (como una cereza). Aunque ya se mueve constantemente, flexionando brazos y piernas, aún es demasiado pequeño para que sientas sus movimientos. Sus órganos principales están formados y ahora entran en un período de crecimiento y refinamiento. Los párpados están fusionados protegiendo los ojos en desarrollo.',
    alimentacion: 'El hierro es fundamental para prevenir la anemia, común en el embarazo. Incluye espinacas, carnes rojas magras, lentejas, garbanzos y quinoa. Asegúrate de beber al menos 8-10 vasos de agua al día para mantener el volumen sanguíneo en aumento. Los alimentos ricos en vitamina B12 (carnes, pescados, lácteos) son esenciales para el desarrollo del sistema nervioso.',
    cuidados: 'Incorpora actividad física suave como caminar, nadar o yoga prenatal para mantener tu energía y estado de ánimo. Evita deportes de contacto o actividades con riesgo de caídas. Las náuseas pueden estar en su punto máximo, así que descansa cuando lo necesites. Mantén la casa bien ventilada y evita olores fuertes que puedan desencadenar malestar.'
  },
  10: {
    titulo: '✨ Formación de Dedos Completa',
    bebe: 'Tu bebé mide aproximadamente 31-42 mm (como una aceituna grande). Sus dedos de manos y pies están completamente formados, incluyendo las uñas diminutas. Los rasgos faciales están más definidos y las orejas externas están comenzando a formarse. Su estómago produce jugos digestivos y los riñones producen orina.',
    alimentacion: 'Evita completamente carnes, pescados y huevos crudos o poco cocidos para prevenir salmonela, listeria y toxoplasmosis. Esto incluye sushi crudo, carpaccio, huevos pochados, mayonesa casera y quesos blandos no pasteurizados. Opta por carnes bien cocidas, pescados seguros y pasteurizados, y huevos completamente cocidos.',
    cuidados: 'Tu ropa regular puede empezar a sentirse ajustada, especialmente en la cintura y el pecho. Comienza a usar ropa más holgada y cómoda. Los sostenes pueden necesitar una talla más grande debido al crecimiento mamario. Evita ropa que comprima el abdomen. Considera invertir en algunas prendas de maternidad básicas para mayor comodidad.'
  },
  11: {
    titulo: '🌀 Movimientos Activos',
    bebe: 'Tu bebé mide entre 44-60 mm (como un higo grande) y pesa aproximadamente 8 gramos. Sus extremidades están completamente formadas y se mueve activamente, aunque todavía no puedas sentirlo. La cabeza representa casi la mitad de su longitud total. Sus huesos se están endureciendo y los folículos pilosos se están formando.',
    alimentacion: 'Los ácidos grasos omega-3, especialmente el DHA, son cruciales para el desarrollo cerebral y ocular. Consume salmón, sardinas, anchoas y trucha (pescados bajos en mercurio). Si eres vegetariana, incluye semillas de chía, nueces, aceite de linaza y considera suplementos de algas marinas ricos en DHA. Evita atún, pez espada y otros pescados altos en mercurio.',
    cuidados: 'Es el momento perfecto para comenzar a usar cremas hidratantes especiales para prevenir estrías en abdomen, senos, muslos y caderas. Masajea suavemente estas áreas dos veces al día. El aceite de coco, aceite de almendras dulces o cremas específicas para embarazo son excelentes opciones. Mantén la piel bien hidratada bebiendo mucha agua.'
  },
  12: {
    titulo: '🎉 Fin del Primer Trimestre',
    bebe: 'Tu bebé mide entre 61-70 mm (como una ciruela grande) y pesa alrededor de 14 gramos. Todos sus órganos principales están formados y funcionando. Sus intestinos se están moviendo desde el cordón umbilical hacia el abdomen. Puede abrir y cerrar los puños, y sus riñones están produciendo orina que se convierte en líquido amniótico.',
    alimentacion: 'Con las náuseas generalmente disminuyendo, es momento de enfocarse en una dieta equilibrada y variada. Incluye 5-9 porciones de frutas y verduras de diferentes colores diariamente, granos integrales, proteínas magras y lácteos. Las verduras de hoja verde oscura (espinacas, kale, brócoli) son especialmente nutritivas. Evita alimentos procesados y azúcares refinados.',
    cuidados: 'Programa tu primera ecografía importante (ecografía de translucencia nucal) si no la has hecho. Esta puede detectar posibles anomalías cromosómicas. El riesgo de aborto espontáneo disminuye significativamente después de esta semana. Muchas mujeres eligen compartir la noticia del embarazo después de esta marca. Continúa evitando alcohol, tabaco y medicamentos no prescritos.'
  },
  13: {
    titulo: '🌈 Segundo Trimestre - Nueva Energía',
    bebe: 'Tu bebé mide aproximadamente 74-87 mm (como una vaina de guisantes) y pesa cerca de 25 gramos. Sus cuerdas vocales se están formando, aunque no podrá hacer sonidos hasta después del nacimiento debido al líquido amniótico. Su cabeza es más proporcionada al cuerpo. Los intestinos se mueven completamente hacia el abdomen.',
    alimentacion: 'Las frutas con alto contenido de agua como sandía, melón, naranjas y uvas te ayudarán a mantenerte hidratada y a combatir la retención de líquidos. Estas frutas también proporcionan vitaminas esenciales y fibra. Incluye frutas en cada comida y como snacks entre comidas. Los smoothies naturales son una excelente manera de consumir múltiples frutas.',
    cuidados: 'Muchas mujeres experimentan un aumento de energía durante el segundo trimestre. Aprovecha este momento para ejercitarte regularmente - caminar, nadar, yoga prenatal o clases de ejercicio específicas para embarazadas. El ejercicio mejora el estado de ánimo, reduce la hinchazón, previene el exceso de peso y te prepara para el parto. Consulta con tu médico antes de comenzar cualquier rutina nueva.'
  },
  14: {
    titulo: '😍 Expresiones Faciales',
    bebe: 'Tu bebé mide entre 90-100 mm (como un limón) y pesa aproximadamente 45 gramos. Puede hacer expresiones faciales como fruncir el ceño, hacer muecas e incluso sonreír. Sus brazos están creciendo proporcionalmente y puede chuparse el pulgar. El lanugo (vello fino) comienza a cubrir su cuerpo para mantener la temperatura.',
    alimentacion: 'El calcio y la vitamina D trabajan juntos para desarrollar huesos y dientes fuertes. Consume 3-4 porciones de lácteos diarios: leche, yogur, queso. La vitamina D se obtiene de la exposición moderada al sol (15-20 minutos diarios), pescados grasos y alimentos fortificados. Si vives en áreas con poco sol, considera suplementos de vitamina D según recomendación médica.',
    cuidados: 'Tu piel puede volverse más sensible a la radiación UV debido a los cambios hormonales. Usa protector solar de factor 30 o superior diariamente, incluso en días nublados. Evita exposición prolongada al sol y usa sombreros y ropa protectora. Algunas mujeres desarrollan melasma (manchas oscuras en la cara), que generalmente se desvanece después del parto.'
  },
  15: {
    titulo: '👂 Escucha Tu Voz',
    bebe: 'Como una manzana, ya percibe sonidos.',
    alimentacion: 'Proteínas en cada comida.',
    cuidados: 'Háblale o ponle música suave.'
  },
  16: {
    titulo: '🦴 Huesos Fuertes',
    bebe: 'Como un aguacate, huesos y músculos se fortalecen.',
    alimentacion: 'Calcio + magnesio (nueces, espinaca).',
    cuidados: 'Puedes empezar a sentir “mariposas” (movimientos).'
  },
  17: {
    titulo: '💤 Duerme y Se Mueve',
    bebe: 'Como una pera, alterna sueño y actividad.',
    alimentacion: 'Hierro (hígado, lentejas) para evitar anemia.',
    cuidados: 'Dormir de lado izquierdo mejora la circulación.'
  },
  18: {
    titulo: '🖐 Primeros Golpecitos',
    bebe: 'Como un pimiento, sus pataditas se sienten.',
    alimentacion: 'Pescado bajo en mercurio.',
    cuidados: 'Segunda ecografía importante.'
  },
  19: {
    titulo: '🌟 Sistema Nervioso',
    bebe: 'Como un mango, desarrolla sistema nervioso.',
    alimentacion: 'Vitamina B (cereales integrales, huevo).',
    cuidados: 'Masajea tu piel con aceites naturales.'
  },
  20: {
    titulo: '🎯 Mitad del Embarazo',
    bebe: 'Como un plátano, mide 25 cm aprox.',
    alimentacion: 'Fibra (avena, frutas) para evitar estreñimiento.',
    cuidados: 'Hazte la ecografía morfológica.'
  },
  21: {
    titulo: '🎶 Escucha Claramente',
    bebe: 'Como una zanahoria, reacciona a sonidos.',
    alimentacion: 'Proteínas y calcio.',
    cuidados: 'Habla o cántale, reconoce tu voz.'
  },
  22: {
    titulo: '😍 Más Parecido a Un Bebé',
    bebe: 'Como una papaya, se define su carita.',
    alimentacion: 'Hierro + vitamina C.',
    cuidados: 'Empieza a usar almohada para dormir más cómoda.'
  },
  23: {
    titulo: '🌬 Pulmones en Práctica',
    bebe: 'Como una berenjena, practica respirar.',
    alimentacion: 'Vitamina D (sol, pescado, huevo).',
    cuidados: 'Puedes notar hinchazón en pies, eleva las piernas.'
  },
  24: {
    titulo: '👀 Abre Los Ojos',
    bebe: 'Como una mazorca, abre los ojos.',
    alimentacion: 'Omega-3 y antioxidantes (frutas rojas).',
    cuidados: 'Vigila presión arterial y glucosa.'
  },
  25: {
    titulo: '💃 Se Mueve Mucho',
    bebe: 'Como un coliflor, responde a tu actividad.',
    alimentacion: 'Lácteos o alternativas vegetales.',
    cuidados: 'Practica respiración y relajación.'
  },
  26: {
    titulo: '🗣 Oído Muy Fino',
    bebe: 'Como una lechuga, oye con claridad.',
    alimentacion: 'Proteínas magras y frutos secos.',
    cuidados: 'Evita estar mucho tiempo de pie.'
  },
  27: {
    titulo: '🌟 Final del Segundo Trimestre',
    bebe: 'Como un pepino, abre y cierra los ojos.',
    alimentacion: 'Comida rica en fibra y agua abundante.',
    cuidados: 'Curso de preparación al parto recomendado.'
  },
  28: {
    titulo: '💕 Última Etapa',
    bebe: 'Como una berenjena grande, ya abre los ojos y sueña.',
    alimentacion: 'Mucha fibra para el estreñimiento.',
    cuidados: 'Control de glucosa (descartar diabetes gestacional).'
  },
  29: {
    titulo: '💪 Más Fuerte',
    bebe: 'Como una calabaza pequeña, músculos y pulmones crecen.',
    alimentacion: 'Proteínas + calcio.',
    cuidados: 'Usa medias de compresión si tienes varices.'
  },
  30: {
    titulo: '🛌 Se Da La Vuelta',
    bebe: 'Como un repollo, puede colocarse cabeza abajo.',
    alimentacion: 'Vitamina C y zinc para defensas.',
    cuidados: 'Descansa con piernas elevadas.'
  },
  31: {
    titulo: '🎶 Reconoce Voces',
    bebe: 'Como un coco, distingue voces y sonidos familiares.',
    alimentacion: 'Pescados bajos en mercurio o semillas ricas en omega-3.',
    cuidados: 'Haz ejercicios de respiración.'
  },
  32: {
    titulo: '🌟 Acumula Grasa',
    bebe: 'Como un melón, acumula grasa bajo la piel.',
    alimentacion: 'Mucha agua y fibra.',
    cuidados: 'Revisa posición del bebé en ecografía.'
  },
  33: {
    titulo: '💤 Sueños Activos',
    bebe: 'Como una piña, sueña y alterna fases de sueño.',
    alimentacion: 'Hierro para evitar anemia.',
    cuidados: 'Prepárate para lactancia (talleres o lecturas).'
  },
  34: {
    titulo: '🤗 Más Espacio Ocupado',
    bebe: 'Como un cantalupo, llena tu abdomen.',
    alimentacion: 'Comidas pequeñas y nutritivas.',
    cuidados: 'Ejercicios de suelo pélvico.'
  },
  35: {
    titulo: '🚼 Preparado Para Nacer',
    bebe: 'Como un durazno grande, pulmones casi listos.',
    alimentacion: 'Proteínas magras, muchas frutas.',
    cuidados: 'Ten lista la maleta del hospital.'
  },
  36: {
    titulo: '🌸 Recta Final',
    bebe: 'Como una sandía pequeña, sigue ganando peso.',
    alimentacion: 'Evita comidas muy pesadas.',
    cuidados: 'Control semanal con tu médico.'
  },
  37: {
    titulo: '🎉 Embarazo a Término',
    bebe: 'Oficialmente listo para nacer, aunque puede esperar.',
    alimentacion: 'Hidratación clave.',
    cuidados: 'Señales de parto: contracciones regulares, pérdida de líquido o tapón mucoso.'
  },
  38: {
    titulo: '🍼 Ansiedad Positiva',
    bebe: 'Sigue ganando peso, como una calabaza grande.',
    alimentacion: 'Comidas fáciles de digerir, sopas y frutas.',
    cuidados: 'Relájate, mantén lista la bolsa.'
  },
  39: {
    titulo: '🚪 A Punto',
    bebe: 'Ya totalmente formado, solo engorda un poquito más.',
    alimentacion: 'Mucha agua y snacks saludables.',
    cuidados: 'Mantente activa con caminatas cortas.'
  },
  40: {
    titulo: '🎊 ¡Bienvenido al Mundo!',
    bebe: '¡El gran día! Puede nacer en cualquier momento.',
    alimentacion: 'Ligera, fácil de digerir (frutas, yogur, avena).',
    cuidados: 'Escucha a tu cuerpo, mantén la calma, sigue indicaciones médicas.'
  }
};
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserHeader from '../../../components/Header/UserHeader';
import styles from './page.module.css';

import Link from 'next/link';
import MessageIcon from '../../../components/Icons/MessageIcon';
import HospitalIcon from '../../../components/Icons/HospitalIcon';
import MentalHealthIcon from '../../../components/Icons/MentalHealthIcon';

export default function Dashboard() {
  // Hook principal de la página Dashboard
  const handleActualizarFecha = async () => {
    setFechaError("");
    if (!nuevaFecha) return;
    try {
      const res = await fetch("/api/users/set-semana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, fechaUltimaMenstruacion: nuevaFecha })
      });
      const data = await res.json();
      if (res.ok) {
        setFechaUltimaMenstruacion(nuevaFecha);
        setUser(u => ({ ...u, semana: nuevaFecha }));
        localStorage.setItem('gestarUser', JSON.stringify({ ...user, semana: nuevaFecha }));
        setDefiniendoFecha(false);
        setNuevaFecha("");
      } else {
        setFechaError(data.error || "Error al actualizar fecha");
      }
    } catch (e) {
      setFechaError("Error de red o servidor");
    }
  };
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [parejaCode, setParejaCode] = useState("");
  const [vinculando, setVinculando] = useState(false);
  const [vinculaError, setVinculaError] = useState("");
  const [fechaUltimaMenstruacion, setFechaUltimaMenstruacion] = useState(""); // alias local, pero solo usaremos 'semana'
  const [semana, setSemana] = useState("");
  const [definiendoFecha, setDefiniendoFecha] = useState(false);
  const [nuevaFecha, setNuevaFecha] = useState("");
  const [fechaError, setFechaError] = useState("");
  // Calcula la semana actual a partir de la fecha guardada
  useEffect(() => {
    if (!fechaUltimaMenstruacion) return;
    const fecha = new Date(fechaUltimaMenstruacion);
    const hoy = new Date();
    const diff = hoy - fecha;
    const semanaActual = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
    setSemana(semanaActual > 0 ? semanaActual : "");
  }, [fechaUltimaMenstruacion]);

  // Obtiene el consejo de la semana actual
  const consejoSemana = semana && consejosPorSemana[semana] ? consejosPorSemana[semana] : null;
  const [parejaNombre, setParejaNombre] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('gestarUser');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        // Obtener datos frescos del backend
        fetch(`/api/users/get-user?id=${parsedUser.id}`)
          .then(res => res.json())
          .then(freshUser => {
            // Si el backend retorna el usuario completo, úsalo. Si no, usa el local
            const updatedUser = { ...parsedUser, ...freshUser };
            setUser(updatedUser);
            setFechaUltimaMenstruacion(updatedUser.semana || "");
            localStorage.setItem('gestarUser', JSON.stringify(updatedUser));
            setLoading(false);
            // Si tiene pareja, buscar su nombre
            if (updatedUser.id_pareja) {
              fetch(`/api/users/get-nombre?id=${updatedUser.id_pareja}`)
                .then(res => res.json())
                .then(data => {
                  if (data && data.nombres) setParejaNombre(data.nombres);
                });
            }
          })
          .catch(() => {
            setUser(parsedUser);
            setFechaUltimaMenstruacion(parsedUser.semana || "");
            setLoading(false);
          });
      } else {
        alert('No hay una sesión iniciada. Redirigiendo al login.');
        router.push('/login');
      }
    }
  }, [router]);

  const handleVincular = async () => {
    setVinculando(true);
    setVinculaError("");
    try {
      const res = await fetch("/api/users/link-pareja", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, parejaCode })
      });
      const data = await res.json();
      if (res.ok) {
        // Forzar recarga completa para asegurar actualización de datos y localStorage
        window.location.reload();
      } else {
        setVinculaError(data.error || "Error al vincular");
      }
    } catch (e) {
      setVinculaError("Error de red o servidor");
    }
    setVinculando(false);
  };

  if (loading) {
    return <div className={styles.container}><p>Cargando usuario...</p></div>;
  }

  return (
    <div className={styles.container}>
      <UserHeader userName={user.nombres} />
      <main className={styles.main}>
        <div className={styles.welcomeSection}>
          <div className={styles.welcomeContent}>
            <h1 className={styles.welcomeTitle}>
              {user.genero === 'masculino' && 'Bienvenido'}
              {user.genero === 'femenino' && 'Bienvenida'}
              {user.genero === 'otro' && 'Bienvenid@'}
              , <span className={styles.nameHighlight}>{user.nombres}</span>!
            </h1>
            {user.id_pareja && parejaNombre && (
              <p className={styles.parejaText}>
                <b>Pareja vinculada:</b> {parejaNombre}
              </p>
            )}
            <p className={styles.welcomeText}>
              {user.rol === 'gestante'
                ? 'Controla y haz seguimiento de tu proceso de embarazo'
                : 'Acompaña a tu pareja en el proceso de embarazo'}
            </p>
          </div>
          <div className={styles.weekBadge}>
            {fechaUltimaMenstruacion ? (
              <>Semana {semana}</>
            ) : (
              <button
                className={styles.definirSemanaBtn}
                onClick={() => setDefiniendoFecha(true)}
              >
                Definir semana actual de embarazo
              </button>
            )}
          </div>
          {definiendoFecha && (
            <div className={styles.definirSemanaModal}>
              <div className={styles.definirSemanaCard}>
                <h3>
                  {user.rol === 'gestante'
                    ? '¿Cuál fue el primer día de tu última menstruación?'
                    : '¿Cuál fue el primer día de la última menstruación de tu pareja?'}
                </h3>
                <input
                  type="date"
                  value={nuevaFecha}
                  onChange={e => setNuevaFecha(e.target.value)}
                  className={styles.input}
                />
                <div style={{ display: 'flex', gap: '1rem', marginTop: 12 }}>
                  <button
                    className={styles.submitButton}
                    onClick={handleActualizarFecha}
                    disabled={!nuevaFecha}
                  >
                    Guardar
                  </button>
                  <button
                    className={styles.cancelButton}
                    onClick={() => { setDefiniendoFecha(false); setNuevaFecha(""); }}
                  >
                    Cancelar
                  </button>
                </div>
                {fechaError && <p className={styles.errorText}>{fechaError}</p>}
              </div>
            </div>
          )}
        </div>

        {consejoSemana && (
          <section className={styles.consejoSection}>
            <h2 className={styles.consejoTitle}>Consejo de la semana</h2>
            <div className={styles.consejoCard}>
              <h3 className={styles.consejoSemana}>{consejoSemana.titulo}</h3>
              <ul className={styles.consejoList}>
                <li><b>👶 Bebé:</b> {consejoSemana.bebe}</li>
                <li><b>🍎 Alimentación:</b> {consejoSemana.alimentacion}</li>
                <li><b>💡 Cuidados:</b> {consejoSemana.cuidados}</li>
              </ul>
            </div>
          </section>
        )}

        {!user.id_pareja && (
          <div className={styles.vinculaParejaSection}>
            <h2>Vincula tu pareja (opcional)</h2>
            <p>Comparte esta experiencia con tu pareja. Tu código único: <b>{user.id}</b></p>
            <div className={styles.vinculaForm}>
              <input
                type="number"
                placeholder="Código de tu pareja"
                value={parejaCode}
                onChange={e => setParejaCode(e.target.value)}
                className={styles.input}
                disabled={vinculando}
              />
              <button onClick={handleVincular} disabled={vinculando || !parejaCode} className={styles.submitButton}>
                {vinculando ? 'Vinculando...' : 'Vincular'}
              </button>
            </div>
            {vinculaError && <p className={styles.errorText}>{vinculaError}</p>}
            <p className={styles.infoText}>
              Puedes usar todas las funciones de Gestar sin vincular pareja
            </p>
          </div>
        )}



        <section className={styles.cardCarouselSection}>
          <h2 className={styles.cardCarouselTitle}>Explora las secciones principales</h2>
          <div className={styles.cardCarouselContainer}>
            <div className={styles.cardCarousel}>
              <Link href="/foro" className={styles.cardLink}>
                <div className={styles.cardCarouselCard}>
                  <div className={styles.cardIcon}><MessageIcon color="#7b68a0" size={40} /></div>
                  <h3 className={styles.cardCarouselCardTitle}>Foro</h3>
                  <p className={styles.cardCarouselCardDesc}>Comparte dudas, experiencias y recibe apoyo de la comunidad y expertos.</p>
                </div>
              </Link>
              <Link href="/hospitales" className={styles.cardLink}>
                <div className={styles.cardCarouselCard}>
                  <div className={styles.cardIcon}><HospitalIcon color="#7b68a0" size={40} /></div>
                  <h3 className={styles.cardCarouselCardTitle}>Mapa de Hospitales</h3>
                  <p className={styles.cardCarouselCardDesc}>Encuentra hospitales y centros de salud cercanos con información real y actualizada.</p>
                </div>
              </Link>
              <Link href="/apoyo-psicologico" className={styles.cardLink}>
                <div className={styles.cardCarouselCard}>
                  <div className={styles.cardIcon}><MentalHealthIcon color="#7b68a0" size={40} /></div>
                  <h3 className={styles.cardCarouselCardTitle}>Apoyo Psicológico</h3>
                  <p className={styles.cardCarouselCardDesc}>Accede a recursos y orientación profesional para tu bienestar emocional.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
