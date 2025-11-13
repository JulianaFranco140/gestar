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

const consejosAcompañante = {
  1: {
    titulo: '🌟 El Comienzo del Viaje Juntos',
    apoyo: 'Este es el inicio de una etapa maravillosa. Infórmate sobre el proceso de embarazo leyendo libros o artículos para entender mejor lo que ella vivirá. Acompáñala a la consulta preconcepcional si es posible.',
    alimentacion: 'Ayúdala a mantener una alimentación saludable. Prepara comidas ricas en ácido fólico juntos: ensaladas de espinaca, lentejas, o smoothies con vegetales verdes. Cocinar juntos fortalece el vínculo.',
    cuidados: 'Crea un ambiente libre de estrés en casa. Apóyala en eliminar hábitos no saludables siendo un ejemplo: si ella debe dejar el alcohol o tabaco, hazlo tú también en solidaridad. Escucha sus inquietudes sin juzgar.'
  },
  2: {
    titulo: '🌟 Preparándose Para la Gran Noticia',
    apoyo: 'Aprende sobre los primeros síntomas del embarazo para poder identificarlos y ser más comprensivo. Mantén una actitud positiva y emocionada ante la posibilidad de concebir.',
    alimentacion: 'Asegúrate de que tenga acceso a alimentos nutritivos. Haz las compras incluyendo alimentos ricos en hierro, calcio y vitaminas. Prepara snacks saludables que tenga a mano.',
    cuidados: 'Reduce las fuentes de estrés en el hogar. Ayuda con las tareas domésticas sin que ella tenga que pedirlo. Mantén un diálogo abierto sobre sus sentimientos y expectativas respecto al embarazo.'
  },
  3: {
    titulo: '🎯 La Espera con Paciencia',
    apoyo: 'Si están intentando concebir, sé paciente y comprensivo. El proceso puede tomar tiempo y la presión no ayuda. Mantén una actitud relajada y amorosa.',
    alimentacion: 'Cocina comidas balanceadas que incluyan proteínas, vegetales y frutas. Evita presionarla con restricciones alimenticias; en su lugar, haz que comer saludable sea algo natural y agradable.',
    cuidados: 'Evita actividades que generen estrés innecesario. Planifica momentos de relajación juntos: caminatas suaves, ver películas, o simplemente conversar. El apoyo emocional es fundamental.'
  },
  4: {
    titulo: '🎉 Posible Confirmación',
    apoyo: 'Si sospechan del embarazo, acompáñala a comprar la prueba de embarazo. Estate presente cuando se la haga si ella lo desea. Sea cual sea el resultado, reacciona con amor y apoyo.',
    alimentacion: 'Si confirman el embarazo, ella puede empezar a sentir náuseas. Ten a mano galletas saladas, jengibre, y alimentos suaves. Pregúntale qué se le antoja o qué le cae bien.',
    cuidados: 'Celebra la noticia del embarazo de manera especial pero íntima. Acompáñala a programar la primera cita prenatal. Comienza a ajustar tu agenda para estar presente en las citas médicas importantes.'
  },
  5: {
    titulo: '💓 Primeros Cambios Juntos',
    apoyo: 'Edúcate sobre el desarrollo del bebé semana a semana. Comparte con ella datos interesantes sobre cómo el corazón del bebé está comenzando a latir. Esto fortalece el vínculo emocional de ambos con el bebé.',
    alimentacion: 'Las náuseas matutinas pueden empezar. Ten preparados snacks suaves como galletas, frutas, o lo que ella tolere. No te ofendas si rechaza comidas que preparaste; las náuseas son involuntarias.',
    cuidados: 'Sé extra comprensivo con sus cambios de humor y fatiga. Ofrece masajes suaves en pies o espalda. Asegúrate de que descanse lo suficiente y no se sobrecargue con tareas del hogar.'
  },
  6: {
    titulo: '🥰 Apoyo en los Síntomas',
    apoyo: 'Reconoce que aunque no puedes sentir lo que ella siente, puedes validar sus experiencias. Frases como "entiendo que te sientas así" o "¿qué puedo hacer para ayudarte?" son muy valiosas.',
    alimentacion: 'Prepara comidas pequeñas y frecuentes si tiene náuseas. Experimenta con diferentes alimentos para encontrar qué le cae bien. El jengibre en té o galletas puede ayudar.',
    cuidados: 'Acomódate a sus necesidades cambiantes. Si ciertos olores la molestan, evítalos. Mantén el ambiente ventilado y limpio. Ofrece tu ayuda de manera proactiva, no esperes a que te lo pida.'
  },
  7: {
    titulo: '🌱 Construyendo la Base Juntos',
    apoyo: 'Este es un buen momento para comenzar a planificar financieramente la llegada del bebé. Hablen sobre presupuestos, ahorros, y necesidades futuras. Involúcrate activamente en la planificación.',
    alimentacion: 'Asegúrate de que tenga acceso a alimentos ricos en calcio: lácteos, almendras, vegetales verdes. Si es intolerante a la lactosa, busca alternativas fortificadas juntos.',
    cuidados: 'Reduce su exposición a cafeína limitando el café en casa. Si tomas café, hazlo discretamente para no tentarla. Apoya sus decisiones sobre qué consumir y qué evitar durante el embarazo.'
  },
  8: {
    titulo: '🖐 Crecimiento y Conexión',
    apoyo: 'Comienza a hablarle al vientre. Aunque el bebé aún no escucha claramente, es una forma hermosa de conectar y de mostrarle a tu pareja que estás emocionalmente presente.',
    alimentacion: 'Incluye frutas cítricas en las comidas: naranjas, mandarinas, fresas. Prepara jugos naturales frescos. Estos alimentos ayudan con la absorción de hierro y fortalecen el sistema inmunológico.',
    cuidados: 'Ayúdala con los zapatos cuando se vuelva incómodo agacharse. Ofrece masajes en pies y piernas para mejorar la circulación. Estos pequeños gestos significan mucho.'
  },
  9: {
    titulo: '🎪 Apoyo Activo y Presente',
    apoyo: 'Investiga sobre clases prenatales y cursos de preparación al parto. Inscríbanse juntos en uno que les parezca interesante. Tu participación muestra compromiso y le da seguridad a ella.',
    alimentacion: 'Asegúrate de que se mantenga bien hidratada. Ten siempre agua fresca disponible. Prepara infusiones suaves y naturales que sean seguras durante el embarazo.',
    cuidados: 'Acompáñala en caminatas suaves o actividades físicas recomendadas. El ejercicio juntos es beneficioso para ambos y fortalece su conexión. Respeta su ritmo y necesidades de descanso.'
  },
  10: {
    titulo: '✨ Celebrando Cada Hito',
    apoyo: 'Celebra los pequeños logros: cada semana completada, cada ecografía, cada síntoma que mejora. Lleva un diario o álbum del embarazo juntos con fotos y pensamientos.',
    alimentacion: 'Cocina carnes, pescados y huevos completamente cocidos para evitar riesgos. Revisa las temperaturas de cocción adecuadas y sé meticuloso con la higiene alimentaria.',
    cuidados: 'Ayúdala a elegir ropa cómoda y holgada. Acompáñala de compras si necesita nuevas prendas. Tu opinión positiva sobre cómo se ve embarazada fortalece su autoestima.'
  },
  11: {
    titulo: '🌀 Preparación Emocional',
    apoyo: 'Lee sobre la paternidad y el rol del padre/acompañante. Comparte tus descubrimientos con ella. Hablen sobre sus expectativas, miedos y sueños respecto a ser padres.',
    alimentacion: 'Busca recetas con salmón, sardinas o trucha para incluir omega-3 en la dieta. Si es vegetariana, investiga fuentes alternativas como chía, nueces y aceite de linaza.',
    cuidados: 'Masajea suavemente su abdomen, senos, muslos y caderas con aceites hidratantes para prevenir estrías. Convierte esto en un ritual diario de conexión y cuidado.'
  },
  12: {
    titulo: '🎉 Fin del Primer Trimestre Juntos',
    apoyo: 'El riesgo de complicaciones disminuye significativamente. Es un buen momento para compartir la noticia con familiares y amigos si aún no lo han hecho. Planifiquen juntos cómo anunciarlo.',
    alimentacion: 'Con las náuseas generalmente mejorando, ayúdala a retomar una dieta más variada. Prepara comidas coloridas y nutritivas con abundantes frutas y verduras.',
    cuidados: 'Acompáñala a la ecografía de translucencia nucal. Ver al bebé en pantalla juntos es un momento mágico que fortalecerá tu vínculo con él y con ella.'
  },
  13: {
    titulo: '🌈 Nueva Etapa de Energía',
    apoyo: 'Muchas mujeres recuperan energía en el segundo trimestre. Aprovecha para planear actividades juntos: paseos, visitas a tiendas de bebés, o simplemente disfrutar tiempo de calidad.',
    alimentacion: 'Prepara smoothies y batidos con frutas frescas. Experimenta con combinaciones creativas: sandía-menta, naranja-fresa, melón-jengibre. Que sea divertido y refrescante.',
    cuidados: 'Apóyala en retomar o mantener una rutina de ejercicio suave. Acompáñala a caminar, a nadar, o a clases de yoga prenatal. Tu participación la motivará.'
  },
  14: {
    titulo: '😍 Conexión Más Profunda',
    apoyo: 'Imaginen juntos cómo será el bebé. Hablen sobre a quién se parecerá, qué características tendrá. Estas conversaciones fortalecen la conexión emocional con el bebé que viene.',
    alimentacion: 'Asegura que consuma suficiente calcio y vitamina D. Prepara desayunos con lácteos, planea breves exposiciones al sol juntos (15-20 minutos), y cocina pescados grasos.',
    cuidados: 'Aplica protector solar antes de salir juntos. Su piel es más sensible ahora. Lleva siempre protector solar en el bolso o auto para reaplicar durante el día.'
  },
  15: {
    titulo: '👂 Hablarle al Bebé',
    apoyo: 'El bebé comienza a escuchar sonidos. Háblale, cántale o ponle música suave. Lee cuentos en voz alta cerca del vientre. Tu voz se convertirá en algo familiar y reconfortante para el bebé.',
    alimentacion: 'Incluye proteínas de calidad en cada comida. Prepara platos con pollo, pescado, huevos, legumbres o tofu. Varía las fuentes para que no se aburra de comer lo mismo.',
    cuidados: 'Crea una playlist especial para el bebé con música relajante o canciones significativas. Escúchenla juntos y conviertan esto en un ritual diario antes de dormir.'
  },
  16: {
    titulo: '🦴 Fortaleciendo Vínculos',
    apoyo: 'Ella podría empezar a sentir los movimientos del bebé pronto. Mantente atento a ese momento especial. Cuando lo sienta, pide permiso para poner tu mano en su vientre.',
    alimentacion: 'Prepara snacks ricos en calcio y magnesio: mix de nueces y almendras, yogur con frutas, batidos verdes con espinaca. Ten estos snacks listos para cuando tenga hambre.',
    cuidados: 'Sé paciente si aún no sientes los movimientos cuando pones tu mano en su vientre. Llegará el momento. Mientras tanto, tu interés y emoción son apoyo emocional importante.'
  },
  17: {
    titulo: '💤 Apoyo en el Descanso',
    apoyo: 'Ayúdala a encontrar posiciones cómodas para dormir. Acomoda almohadas entre sus piernas, bajo su vientre, o donde las necesite. Tu ayuda para que descanse bien es invaluable.',
    alimentacion: 'Cocina comidas ricas en hierro: carnes magras, espinacas, lentejas. Acompáñalas con alimentos ricos en vitamina C para mejorar la absorción. Aprende combinaciones efectivas.',
    cuidados: 'Si trabaja, ayúdala a organizarse para que pueda descansar más. Asume más tareas del hogar sin que tenga que pedírtelo. El descanso es crucial para ella y el bebé.'
  },
  18: {
    titulo: '🖐 Sintiendo las Pataditas',
    apoyo: 'Si aún no has sentido las pataditas, sé paciente. Cuando las sientas por primera vez, será un momento mágico. Expresa tu emoción y asombro; esto significa mucho para ella.',
    alimentacion: 'Investiga qué pescados son seguros y bajos en mercurio. Prepara salmón, sardinas o trucha de formas variadas. Busca recetas nuevas para que comer pescado sea interesante.',
    cuidados: 'Acompáñala a la segunda ecografía importante (ecografía morfológica). Descubrirán más sobre el bebé, quizás incluso el sexo si quieren saberlo. Es un momento especial para estar juntos.'
  },
  19: {
    titulo: '🌟 Desarrollo Emocional Conjunto',
    apoyo: 'Hablen sobre sus expectativas de crianza. Discutan valores, métodos educativos, y cómo quieren criar al bebé. Es importante estar alineados antes de que llegue.',
    alimentacion: 'Prepara desayunos completos con cereales integrales, huevos, frutas. Un buen desayuno le dará energía para el día. Haz que las mañanas sean especiales.',
    cuidados: 'Masajea su espalda baja regularmente. El peso extra causa tensión en esta área. Aprende técnicas de masaje prenatal o busquen juntos videos educativos.'
  },
  20: {
    titulo: '🎯 Mitad del Camino Recorrido',
    apoyo: 'Celebren este hito importante: ¡ya están a mitad del embarazo! Planea algo especial: una cena romántica, una escapada de fin de semana, o simplemente una noche especial en casa.',
    alimentacion: 'La fibra es importante ahora para prevenir estreñimiento. Prepara avena con frutas, ensaladas abundantes, pan integral. Haz que las comidas ricas en fibra sean deliciosas.',
    cuidados: 'Acompáñala a la ecografía morfológica. Esta ecografía revisa en detalle el desarrollo del bebé. Tu presencia le dará tranquilidad y podrán disfrutar juntos ver al bebé.'
  },
  21: {
    titulo: '🎶 Comunicación con el Bebé',
    apoyo: 'El bebé reconoce voces familiares. Háblale diariamente. Cuéntale sobre tu día, tus sueños para el futuro, cuánto lo esperan. Esta comunicación temprana es preciosa.',
    alimentacion: 'Asegura una dieta rica en proteínas y calcio. Prepara comidas balanceadas que incluyan lácteos, carnes magras, legumbres. La nutrición es crucial en esta etapa.',
    cuidados: 'Cántale al bebé. No importa si no cantas bien; lo que importa es tu voz y tu amor. Elige canciones que quieras que sean especiales entre ustedes.'
  },
  22: {
    titulo: '😍 Más Cerca de Conocerlo',
    apoyo: 'Comiencen a pensar en nombres si aún no lo han hecho. Hagan listas juntos, investiguen significados, compartan opciones. Es una actividad divertida que los acerca.',
    alimentacion: 'Combina alimentos ricos en hierro con vitamina C: carne con ensalada de tomate, espinacas con jugo de naranja. Explica por qué estas combinaciones ayudan.',
    cuidados: 'Compra una almohada de embarazo si aún no tienen. Ayúdala a posicionarla para dormir cómodamente. Tu interés en su comodidad demuestra tu cuidado.'
  },
  23: {
    titulo: '🌬 Cuidado y Atención',
    apoyo: 'Infórmate sobre las señales de parto prematuro para estar alerta. Conoce los síntomas que requieren atención médica inmediata. Estar preparado reduce la ansiedad.',
    alimentacion: 'Asegura exposición moderada al sol y alimentos ricos en vitamina D: pescado graso, huevos, lácteos fortificados. Planea caminatas matutinas juntos.',
    cuidados: 'Nota si hay hinchazón en pies y tobillos. Ayúdala a elevar las piernas regularmente. Ofrece masajes suaves en pies. Observa y actúa proactivamente.'
  },
  24: {
    titulo: '👀 Vigilancia de la Salud',
    apoyo: 'Acompáñala a los controles médicos donde vigilan presión arterial y glucosa. Toma notas de lo que el médico dice. Tu participación activa muestra compromiso.',
    alimentacion: 'Incluye omega-3 y antioxidantes: frutas rojas, salmón, nueces, arándanos. Prepara smoothie bowls coloridos y nutritivos. Haz que comer saludable sea visualmente atractivo.',
    cuidados: 'Pregunta al médico qué señales de alarma debes conocer. Asegúrate de entender cuándo deben acudir a urgencias. Es mejor estar sobre-informado que desprevenido.'
  },
  25: {
    titulo: '💃 Actividad y Relajación',
    apoyo: 'Practiquen juntos técnicas de respiración y relajación para el parto. Inscríbanse en clases de preparación al parto. Tu participación la tranquiliza y te prepara mejor.',
    alimentacion: 'Asegura consumo adecuado de lácteos o alternativas vegetales fortificadas. Varía las opciones: leche, yogur, queso, leches vegetales con calcio.',
    cuidados: 'Ayúdala con ejercicios de respiración. Practiquen juntos diariamente. Esto creará una rutina que será útil durante el trabajo de parto.'
  },
  26: {
    titulo: '🗣 Últimos Meses Juntos',
    apoyo: 'Ayúdala a evitar estar mucho tiempo de pie. Ofrécele tu asiento, alcánzale cosas, reduce su necesidad de caminar largas distancias. Pequeños gestos que alivian.',
    alimentacion: 'Prepara comidas ricas en proteínas magras y frutos secos: pollo, pescado, almendras, nueces. Ten snacks proteicos listos para cuando necesite energía rápida.',
    cuidados: 'Instala apps de seguimiento de movimientos del bebé si ella quiere. Ayúdala a contar pataditas. Participa activamente en el monitoreo del bienestar del bebé.'
  },
  27: {
    titulo: '🌟 Preparación Final del Segundo Trimestre',
    apoyo: 'Asistan juntos a cursos de preparación al parto si aún no lo han hecho. Aprende técnicas de apoyo durante el trabajo de parto: masajes, posiciones, palabras de aliento.',
    alimentacion: 'Enfócate en comidas ricas en fibra y mantén agua abundante siempre disponible. Prepara jarras con agua fresca, infusiones frías, aguas saborizadas naturalmente.',
    cuidados: 'Comienza a informarte sobre el proceso de parto. Lee libros, mira videos educativos, habla con otros padres. Cuanto más sepas, mejor apoyo podrás brindar.'
  },
  28: {
    titulo: '💕 Tercer Trimestre - Recta Final',
    apoyo: 'Acompáñala a la prueba de glucosa para descartar diabetes gestacional. Lleva snacks y agua. Este test puede ser incómodo, tu presencia ayuda.',
    alimentacion: 'Asegura dieta alta en fibra para combatir el estreñimiento común en esta etapa. Prepara ensaladas abundantes, frutas frescas, cereales integrales.',
    cuidados: 'Observa señales de cansancio extremo. Asume más responsabilidades en casa. Deja que descanse tanto como necesite; su cuerpo está trabajando arduamente.'
  },
  29: {
    titulo: '💪 Apoyo Físico Intensivo',
    apoyo: 'El peso del bebé está aumentando rápidamente. Ayúdala con tareas físicas: cargar compras, limpiar, alcanzar objetos altos. No dejes que haga esfuerzos innecesarios.',
    alimentacion: 'Proteínas y calcio son cruciales ahora. Planifica menús semanales que incluyan estas nutrientes. Cocina por adelantado para que siempre haya opciones saludables.',
    cuidados: 'Consigue medias de compresión si tiene varices o hinchazón. Ayúdala a ponérselas por la mañana. Investiga productos de maternidad que puedan darle comodidad.'
  },
  30: {
    titulo: '🛌 Comodidad y Descanso',
    apoyo: 'Ayúdala a descansar con piernas elevadas. Acomoda cojines, trae agua, crea un ambiente relajante. Tu atención a estos detalles mejora significativamente su comodidad.',
    alimentacion: 'Vitamina C y zinc para fortalecer defensas. Prepara jugos naturales de naranja, ensaladas con pimientos, sopas con ajo y cebolla. La inmunidad es importante cerca del parto.',
    cuidados: 'Verifica que la posición del bebé sea adecuada en las ecografías. Si está de nalgas, investiga sobre ejercicios de inversión y habla con el médico sobre opciones.'
  },
  31: {
    titulo: '🎶 Conexión Profunda',
    apoyo: 'Mantén conversaciones diarias con el bebé. El bebé reconoce tu voz. Cuéntale sobre el mundo que lo espera, sobre tu amor por él. Esta conexión temprana es invaluable.',
    alimentacion: 'Incluye pescados seguros o semillas ricas en omega-3. Prepara salmón al horno, ensaladas con nueces, chía en yogures. Varía las presentaciones.',
    cuidados: 'Practica ejercicios de respiración juntos diariamente. Esto los prepara para el parto y crea una rutina de conexión y calma que será útil durante el trabajo de parto.'
  },
  32: {
    titulo: '🌟 Preparativos Prácticos',
    apoyo: 'Comienza a preparar la maleta del hospital juntos. Haz una lista, reúne artículos, verifica que todo esté listo. Tu participación activa reduce la ansiedad de ella.',
    alimentacion: 'Mucha agua y fibra son esenciales. Mantén botellas de agua fresca siempre a su alcance. Prepara infusiones seguras, aguas frescas naturales.',
    cuidados: 'Revisa la posición del bebé en la ecografía. Si todo está bien, celebren. Si hay preocupaciones, busquen información juntos y apoyen las decisiones médicas.'
  },
  33: {
    titulo: '💤 Últimas Semanas de Preparación',
    apoyo: 'Investiga sobre lactancia materna para poder apoyarla después del parto. Asistan a talleres juntos. Tu conocimiento sobre el tema será apoyo práctico invaluable.',
    alimentacion: 'Hierro para prevenir anemia antes del parto. Cocina carnes magras, espinacas, lentejas. Asegura que tome sus suplementos según prescripción médica.',
    cuidados: 'Instala la silla del auto del bebé con anticipación. Practica cómo usarla. Verifica que todo esté seguro y listo para cuando llegue el momento.'
  },
  34: {
    titulo: '🤗 Apoyo Emocional Intensivo',
    apoyo: 'Ella puede sentirse ansiosa sobre el parto. Escucha sus miedos sin minimizarlos. Ofrece palabras de aliento: "Vas a estar increíble", "Estaré a tu lado", "Confío en ti".',
    alimentacion: 'Comidas pequeñas y nutritivas. Prepara porciones más pequeñas con mayor frecuencia. El espacio en su estómago es limitado por el bebé.',
    cuidados: 'Practiquen ejercicios de suelo pélvico juntos si es posible. Investiga cómo estos ejercicios ayudan en el parto y recuperación. Apoya su rutina de ejercicios.'
  },
  35: {
    titulo: '🚼 Casi Listos',
    apoyo: 'Revisa la ruta al hospital, cronometra el tiempo de viaje en diferentes horarios. Ten el tanque de gasolina lleno. Ten un plan B por si hay tráfico. Estar preparado reduce estrés.',
    alimentacion: 'Proteínas magras y muchas frutas. Prepara smoothies, ensaladas de frutas, carnes ligeras. La digestión es más lenta ahora, alimentos más ligeros ayudan.',
    cuidados: 'Verifica que la maleta del hospital esté completa. Incluye snacks para ti también; estarás con ella durante el trabajo de parto y necesitarás energía.'
  },
  36: {
    titulo: '🌸 Última Revisión',
    apoyo: 'Acompaña a los controles médicos semanales. Toma notas de las indicaciones del médico. Haz preguntas si algo no está claro. Tu participación activa muestra compromiso y amor.',
    alimentacion: 'Evita comidas muy pesadas que puedan causar acidez. Prepara comidas ligeras, sopas suaves, frutas fáciles de digerir. La comodidad digestiva es importante ahora.',
    cuidados: 'Ten los números de emergencia guardados en tu teléfono. Ten el número del médico, hospital, taxi confiable. Estar preparado para cualquier escenario da tranquilidad.'
  },
  37: {
    titulo: '🎉 Bebé a Término - ¡Puede Llegar!',
    apoyo: 'El bebé puede nacer en cualquier momento. Mantén tu teléfono cargado y cerca siempre. No te alejes demasiado. Estate disponible y atento a cualquier señal de parto.',
    alimentacion: 'Hidratación es clave. Ten agua, jugos naturales, bebidas isotónicas listas. Durante el trabajo de parto ella necesitará mantenerse hidratada.',
    cuidados: 'Aprende a reconocer señales de trabajo de parto: contracciones regulares, pérdida del tapón mucoso, ruptura de fuente. Saber qué buscar te permite actuar con calma.'
  },
  38: {
    titulo: '🍼 Espera Activa',
    apoyo: 'Mantén la calma. Si ella está ansiosa porque el bebé no ha nacido, tranquilízala: "El bebé llegará cuando esté listo", "Todo está bien", "Estamos preparados".',
    alimentacion: 'Comidas fáciles de digerir: sopas, frutas, yogur. Ten estos alimentos listos en casa. Después del parto querrás tener opciones simples y nutritivas a mano.',
    cuidados: 'Asegura que la bolsa del hospital esté en un lugar accesible. Revísala una vez más. Confirma que tienen documentos, ropa para el bebé, artículos de higiene.'
  },
  39: {
    titulo: '🚪 Cuenta Regresiva Final',
    apoyo: 'Planea actividades ligeras para mantenerla distraída: caminatas cortas, películas, juegos de mesa. La espera puede ser ansiosa; ayúdala a mantenerse ocupada pero relajada.',
    alimentacion: 'Mucha agua y snacks saludables siempre disponibles. Prepara bolsas con frutos secos, frutas picadas, galletas integrales. Ten opciones listas para cuando tenga hambre.',
    cuidados: 'Practica técnicas de relajación juntos. Respira con ella, masajea su espalda, crea ambiente tranquilo. Estas prácticas serán útiles durante el trabajo de parto.'
  },
  40: {
    titulo: '🎊 ¡El Día Ha Llegado!',
    apoyo: 'Cuando comiencen las contracciones, mantén la calma. Cronometra las contracciones. Recuérdale que respire. Dile constantemente: "Lo estás haciendo increíble", "Estoy aquí contigo", "Eres fuerte".',
    alimentacion: 'Ten snacks ligeros para ambos en la bolsa del hospital. Barras energéticas, frutas, agua. Necesitarás mantener tu energía para apoyarla durante el trabajo de parto.',
    cuidados: 'Durante el trabajo de parto: sostén su mano, masajea su espalda baja, ayúdala a cambiar de posición, abanicala si tiene calor, humedece sus labios. Tu presencia constante y activa es el mejor apoyo.'
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

  // Obtiene el consejo de la semana actual según el rol del usuario
  const consejoSemana = semana && user ? 
    (user.rol === 'acompañante' 
      ? (consejosAcompañante[semana] || null)
      : (consejosPorSemana[semana] || null))
    : null;
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
                {user.rol === 'acompañante' ? (
                  <>
                    <li><b>💝 Apoyo:</b> {consejoSemana.apoyo}</li>
                    <li><b>🍎 Alimentación:</b> {consejoSemana.alimentacion}</li>
                    <li><b>💡 Cuidados:</b> {consejoSemana.cuidados}</li>
                  </>
                ) : (
                  <>
                    <li><b>👶 Bebé:</b> {consejoSemana.bebe}</li>
                    <li><b>🍎 Alimentación:</b> {consejoSemana.alimentacion}</li>
                    <li><b>💡 Cuidados:</b> {consejoSemana.cuidados}</li>
                  </>
                )}
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
