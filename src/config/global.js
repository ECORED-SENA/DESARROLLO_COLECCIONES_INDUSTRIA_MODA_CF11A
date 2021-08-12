export default {
  global: {
    componenteFormativo:
      'Software de illustration: Illustrator- Corel Draw –Inkscape ',
    descripcionCurso:
      'El diseño gráfico aplicado al desarrollo de colecciones de moda, es una disciplina que cada vez cuenta con más softwares de ilustración y aplicaciones disponibles tanto para ordenadores como para dispositivos móviles. En este componente está aplicado al uso del software Corel Draw.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Encabezados',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Párrafos',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Botones',
            hash: 'botones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Listas',
            hash: 'listas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tablas',
            hash: 'tablas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Imagen',
            hash: 'imagen',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Imagen Infográfica',
            hash: 'imagen_infografica',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Video',
            hash: 'video',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Bloques de texto destacado',
            hash: 'texto_destacado',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Sliders',
            hash: 'sliders',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Acordiones',
            hash: 'acordiones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Pestañas o Tabs',
            hash: 'tabs',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.13',
            titulo: 'Líneas de tiempo',
            hash: 'lineas_tiempo',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.14',
            titulo: 'Pasos',
            hash: 'pasos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.15',
            titulo: 'Llamados a la acción',
            hash: 'llamados_accion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.16',
            titulo: 'Tarjetas',
            hash: 'tarjetas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.17',
            titulo: 'Tarjetas con número',
            hash: 'tarjeta_numero',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.18',
            titulo: 'Modal',
            hash: 'modal',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Producción Audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Infografía Animada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Video Motion',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Motion + Presentador',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Animación 2D',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Video interactivo',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Infografías',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentación Textil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Identificación fibras por combustión',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Clasificación de los hilos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Clasificación de tejidos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Caracterización de los tejidos',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Procesos textiles',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alba, T. (2016). Diccionario PDF con 80 términos de Diseño Gráfico. Esfera Creativa. ',
      link:
        'https://esferacreativa.com/diccionario-de-diseno-grafico/#comments',
    },
    {
      referencia:
        'Benavente, V. T. L. E. D. A. (2016, 14 agosto). Inkscape for dummies: aplicar máscaras, recortes y otros consejos útiles. LINUX TERRESTRE. ',
      link:
        'https://linuxterrestre.wordpress.com/2016/08/05/inkscape-for-dummies-aplicar-mascaras-recortes-y-otros-consejos-utiles/#:%7E:text=Crear%20una%20figura%20con%20relleno,la%20opci%C3%B3n%20%E2%80%9CAplicar%20m%C3%A1scara%E2%80%9D',
    },
    {
      referencia: 'CorelDRAW. (2021, 16 febrero). Tutoriales en PDF. ',
      link: 'https://tutorialesenpdf.com/coreldraw/',
    },
    {
      referencia: 'CorelDRAW Graphics Suite 2021 | Free Trial. (2021). ',
      link: 'https://www.coreldraw.com/la/pages/items/12100111.html',
    },
    {
      referencia: 'Destruels Moreno, V. (2020). Trabajando con textos. ',
      link:
        'http://aulainformatica.eu/datos/dise%C3%B1o_grafico/inkscape/capitulo5/Textos.pdf',
    },
    {
      referencia:
        'Developers, I. W. (2019). Inkscape tutorial: BÃ¡sico | Inkscape. Inkscape tutorial: Básico. ',
      link:
        'https://inkscape.org/es-co/doc/tutorials/basic/tutorial-basic.html',
    },
    {
      referencia: 'Función de “RECORTE”. (2021, 9 mayo). Tu Inkscape. ',
      link: 'https://tuikscape.wordpress.com/2018/10/25/funcion-de-recorte/',
    },
    {
      referencia:
        'Lopez, A. M. L., & Lopez, A. M. L. (2019, 11 junio). TUTORIAL> Maniquí de moda geométrico en CorelDRAW. CORELCLUB.org. ',
      link:
        'http://www.corelclub.org/tutorial-maniqui-de-moda-geometrico-en-coreldraw/',
    },
    {
      referencia:
        'Perez, D. P. (2015, 21 mayo). Manual corel draw. slideshare. ',
      link:
        'https://es.slideshare.net/dianaperezperez777/manual-corel-draw-48456985',
    },
    {
      referencia: 'Sanchez, A. (2016, 3 mayo). Geometrales. Slideshare.Net.',
      link: 'https://www.slideshare.net/alinaberciano/geometrales',
    },
    {
      referencia:
        'Tutoriales de Illustrator. (2021). Tutoriales de Illustrator. ',
      link: 'https://helpx.adobe.com/es/illustrator/tutorials.html',
    },
    {
      referencia:
        'Yepes Sierra, M. L. (2008). Modulo Taller Corel Draw graphics suite X4. En Corel Draw graphics suite X4 (1.a ed., Vol. 1, pp. 2–120). Corel Draw.',
    },
  ],
  glosario: [
    {
      termino: 'Creatividad',
      significado:
        'Es la capacidad de generar nuevas ideas o conceptos, de llegar a nuevas conclusiones, resolver cruces en el camino, en pos de un proyecto determinado. También podemos encontrarla definida como “imaginación constructiva” o “pensamiento original”, y como resultado de ella somos capaces de producir soluciones creativas u originales.<br> Esta es una de las cualidades más destacables del perfil de un diseñador gráfico (aunque también de otros muchos profesionales) ya que diariamente ha de enfrentarse a nuevas situaciones en las que tiene que aportar a sus clientes soluciones e ideas creativas.',
    },
    {
      termino: 'Curva Bézier',
      significado:
        'Este término de diseño gráfico utilizado en imagen vectorial, es un tipo de línea curva ideada por medio de un método de descripción matemática que permite definir las transiciones de las curvaturas.<br> Esta curva se compone en su formato más básico de un punto de comienzo y fin, así como de dos puntos que permiten manejar el trazo de los vectores.',
    },
    {
      termino: 'Degradado',
      significado:
        'En un conjunto de colores, el degradado hace referencia a la transición de tonalidad entre dos colores de manera linealmente ordenada. Es decir, sin saltos de color. Su función es la de generar una sensación visual transitoria, suave y progresiva entre tonos. ',
    },
    {
      termino: 'Diseño editorial',
      significado:
        'Rama del diseño dedicada a la maquetación, edición y estructuración de publicaciones como revistas o libros.  ',
    },
    {
      termino: 'Diseño gráfico',
      significado:
        'Es el arte o disciplina cuyo fin consiste en idear y proyectar mensajes con carácter e identidad propia a través de la imagen. <br> Para ello, el diseño gráfico supone manejar técnicas (tanto artísticas, como teóricas) de comunicación visual, de manera que lo visible se convierta en un lenguaje de comprensión pública y persuasiva.',
    },
    {
      termino: 'Diseño plano',
      significado:
        'El diseño plano, o “flat design”, es una técnica que se viene aplicando cada vez más en apariencias web e incluso en logotipos, lo que ha llegado a convertirse en una tendencia.<br> Esta técnica consiste en la aplicación de diseños limpios libres de brillos, sombras, texturas, o cualquier tipo de decoración recargada, con el objetivo de facilitar la asimilación del mensaje y potenciar la usabilidad.<br> El trabajo de color suele jugar dentro de una paleta de colores pastel o de poca intensidad, mientras que la tipografía debe ser de fácil lectura y de buen tamaño, de manera que el mensaje sea el protagonista, sin necesidad de ser extenso. ',
    },
    {
      termino: 'Escala de grises',
      significado:
        'Es la representación de una imagen en la que cada pixel se dibuja usando un valor numérico individual en una escala que se extiende entre blanco y negro.<br> Este término se utiliza en la edición digital de imágenes y describe una gama limitada de valores de un mismo tono neutro (256 valores en imágenes de 8 bits de profundidad)<br>Estos valores se denominan “parches” de tonos neutros en artes gráficas, y se utilizan para evaluar la fidelidad de los tonos que se reproducen.',
    },
    {
      termino: 'Espacio de color',
      significado:
        'El espacio de color es el modelo con el que se teoriza sobre cómo los humanos percibimos los colores.<br> Son muchos los que han teorizado sobre este tema, como Newton o Goethe, pero en la actualidad este modelo está basado en la relación de 3 coordenadas. Es decir, se trata de un modelo tridimensional.',
    },
    {
      termino: 'Fotomontaje',
      significado:
        'Construcción fotográfica resultado de la composición de fragmentos de fotos, con intención artística o publicitaria.  ',
    },
    {
      termino: 'Icono',
      significado:
        'En artes gráficas, los iconos son signos o pictogramas que se utilizan para ilustrar una idea con la cual guarda una relación de identidad o semejanza.<br>Uno de los buscadores de iconos más potentes gratis (y de pago) es Iconfinder.',
    },
    {
      termino: 'Ilustración vectorial',
      significado:
        'Este es un concepto vinculado a la imagen digital (compuesta por mapa de bits), pero que en su caso se compone de elementos geométricos independientes que se combinan para crear dibujos y figuras geométricas más complejas. Las ilustraciones o imágenes vectoriales, ofrecen muchas más posibilidades a la hora de redimensionarlas o mover sus elementos, ya que, al componerse de objetos independientes, la imagen no se distorsiona ni pierde calidad visual.  ',
    },
    {
      termino: 'Lorem Ipsum',
      significado:
        'Es el texto que se usa en diseño gráfico y diseño web para referirse a las demostraciones de tipografías o borradores de diseño que se aplican para probar el diseño visual antes de insertar un texto real definitivo. ',
    },
    {
      termino: 'Mapa de bits',
      significado:
        'El mapa de bits, también denominado “imagen matricial” o “imagen rasterizada”, se compone a partir de puntos (píxeles) dispuestos en forma de matriz o rectángulo (raster). <br>Cada pixel contiene la información del color a partir de la combinación de los colores primarios (rojo, verde y azul), y de su cuantía depende la apariencia y resolución de las imágenes digitales.<br> Además de este método de representación digital, tenemos lo que se conoce como “imágenes vectorizadas”.',
    },
    {
      termino: 'Mezcla aditiva del color',
      significado:
        'La mezcla aditiva o “síntesis aditiva del color”, hace referencia a un sistema de formación del color en el que los colores se consiguen sumando luces con distintas longitudes de onda.<br> Esta mezcla es la base de la televisión y los monitores (compuesta por los tres colores primarios; rojo, verde y azul) mientras que las imágenes y artículos impresos se basan en la síntesis sustractiva.',
    },
    {
      termino: 'Mockup',
      significado:
        'Se trata de fotomontajes o prototipos muy utilizados en diseño gráfico, ya que permiten hacer pruebas del aspecto final de un trabajo y mostrarlo a los clientes.  ',
    },
    {
      termino: 'OpenType',
      significado:
        'Se trata de un formato vectorial de tipos o fuentes tipográficas escalables para PC, desarrollado por Adobe Systems y Microsoft Corporation. Sin duda alguna, el formato establecido por profesionales de la tipografía y el diseño gráfico.<br>Este formato, posee funciones tipográficas avanzadas multiplataforma (tanto para Apple, como para Windows), siendo sucesor de anteriores versiones (como TrueType y PostScript)',
    },
    {
      termino: 'Paleta de colores',
      significado:
        'Es una de las herramientas de diseño gráfico elementales, ya que se utiliza para crear combinaciones de colores que trabajen bien juntos.<br>La paleta de colores se utiliza en las artes gráficas (y también en decoración) para componer ambientes y tonalidades de producto. En este sentido, una paleta puede estar compuesta por todos los colores más comunes, o tan solo por una selección de colores de tonalidad similar.<br>Las diferentes tonalidades de una paleta completa, se inician desde los 3 colores básicos; el rojo, el azul y el amarillo.',
    },
    {
      termino: 'Patrón',
      significado:
        'También denominados “motivos”, los patrones de diseño son dibujos repetitivos que se aplican a una superficie y se clasifican según su composición o estilo. Por ejemplo, tenemos los patrones geométricos, artesanales, florales, etc. ',
    },
    {
      termino: 'Pixel',
      significado:
        'El pixel es la unidad básica de una imagen digitalizada en pantalla. En otras palabras, son los puntos de color que conforman una imagen, mediante la constitución de una matriz de pixeles sucesivos.<br>Cuando se dice que una imagen digital (o de mapas de bits) está “pixelada”, es porque la resolución de los píxeles que la conforman es muy baja, y se hace excesivamente visible para el ojo humano.',
    },
    {
      termino: 'Sangría',
      significado:
        'En tipografía, la sangría desplaza la línea o líneas de introducción de un texto con determinados caracteres blancos o espacios.<br>Las más comunes, son las sangrías que desplazan hacia dentro la primera línea de un párrafo, aunque también existen sangrías francesas (o negativas) que hacen sobresalir la primera línea hacia fuera.',
    },
    {
      termino: 'Sombras',
      significado:
        'En fotografía o diseño gráfico, las sombras se utilizan en cualquier dibujo o imagen para que los elementos adquieran volumen y generen mayor interés visual.<br>   Para considerarse sombras, deben resultar por encima del 75% más oscuro que el tono al que acompañan. Los tonos se relacionan según las luces, de más claros (del 0% al 25% del tono) a tonos medios (entre el 25% y el 75%) ',
    },
    {
      termino: 'Textura',
      significado:
        'En la terminología de diseño gráfico, la textura se refiere a las características que posee la superficie de una figura.<br>Las texturas se pueden clasificar según sus variantes visuales o táctiles. Por ejemplo, se califican según su suavidad, tonalidad (brillante u opaca) dureza, estilo decorativo y relieve (según si se representan en un formato plano o en relieve)',
    },
    {
      termino: 'Trama',
      significado:
        'En diseño gráfico, la trama es una textura de puntos que se utiliza como método para simular diferentes tonalidades y dispersión de color. ',
    },
    {
      termino: 'Vector',
      significado:
        'Un vector como concepto de diseño gráfico, es el elemento principal de las imágenes vectoriales compuestas por objetos geométricos independientes.<br>Estos objetos están definidos matemáticamente por vectores, que son las líneas o ejes con longitud y orientación que permiten construir ilustraciones mediante el arrastre y composición de vectores.',
    },
  ],
  complementario: [
    {
      texto:
        'Marius, A. (2020, 12 julio). Los 100 mejores tutoriales sobre efectos de texto en Illustrator (¡desde principiantes hasta avanzados!). Design & Illustration Envato Tuts+. ',
      tipo: 'Página web',
      link:
        'https://design.tutsplus.com/es/articles/100-best-illustrator-text-effect-tutorials-for-beginners-beyond--cms-35177 ',
    },
    {
      texto: 'SENA. CorelDRAW GRAPHICS SUITEX4 (Maria Luisa Yepes Sierra)',
      tipo: 'Documento PDF',
      descarga: '/downloads/COREL_DRAW_X4_TALLER_PARA_DISENO_DE_MODAS.pdf',
    },
    {
      texto:
        'Centro de estudios tecnológicos industriales y de servicios No 119 transforma prendas manualmente (Ensambla prendas de vestir). Planeación diseño y elaboración de ficha técnica 3ro BDM.',
      tipo: 'Documento PDF',
      descarga:
        '/downloads/DISENO_Y_ELABORACION_DE_FICHA_TECNICA _Angelica_Rodriguez.pdf',
    },
    {
      texto: 'Geometrales ',
      tipo: 'Documento PDF',
      descarga: '/downloads/GEOMETRALES.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
