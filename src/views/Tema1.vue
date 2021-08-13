<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Manejo de herramientas básicas de software

    p(data-aos="fade-down") En los softwares de diseño se trabajan dos tipos principales de gráficos, gráficos vectoriales y mapas de bits.
    .row.justify-content-center.align-items-stretch.mt-5       
      .col-lg-6.card-color-1.p-5.d-none.d-lg-block(data-aos="fade-down-right")  
        ImagenInfografica.color-primario.my-2
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/ilustraciones/img3.svg', alt='')
          .tarjeta.color-acento-botones.card-color-1.p-3(x="48.9%" y="50.9%")
            p.color-p-card.mb-0 Los gráficos vectoriales o modelado geométrico están compuestos de formas primitivas como líneas, puntos, polígonos o curvas, determinados en el plano por su longitud, dirección y posición en que se dibujan, estos al maximizarse en la pantalla no pierden nitidez y pueden ser hasta 100 veces más grandes que su tamaño. De este tipo de gráficos se logran crear ilustraciones que se pueden escalar a cualquier tamaño o resolución e imprimiendo con gran calidad sin pérdida de detalles.       
        h4.text-center Gráficos vectoriales o modelado geométrico
      
      .col-lg-6.card-color-1.p-5.d-lg-none(data-aos="fade-down-right") 
        img.img-t.img-a.my-3(src='@/assets/ilustraciones/img3.svg', alt='')       
        h4.text-center Gráficos vectoriales o modelado geométrico
        p.mb-0 Los gráficos vectoriales o modelado geométrico están compuestos de formas primitivas como líneas, puntos, polígonos o curvas, determinados en el plano por su longitud, dirección y posición en que se dibujan, estos al maximizarse en la pantalla no pierden nitidez y pueden ser hasta 100 veces más grandes que su tamaño. De este tipo de gráficos se logran crear ilustraciones que se pueden escalar a cualquier tamaño o resolución e imprimiendo con gran calidad sin pérdida de detalles.
      .col-lg-6.card-color-2.p-5.d-none.d-lg-block(data-aos="fade-down-left")
        ImagenInfografica.color-acento-contenido.my-2
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/ilustraciones/img4.svg', alt='')
          .tarjeta.color-acento-botones.card-color-2.p-3(x="50%" y="50%")
            p.color-p-card.mb-0 Los mapas de bits, también llamadas imágenes ráster, están compuestos por un sinnúmero de pequeños cuadros llamados “pixeles” donde cada uno de ellos está en una ubicación exacta de la imagen con un valor numérico que determina su color y tamaño. Estos se encuentran en fotografías y en dibujos digitales, reproduciendo de forma exacta las gradaciones de color y dependen totalmente de un número determinado de pixeles al que se le llama “resolución”, la cual pierde en calidad cuando se aumenta y se muestra de forma dentada al realizar una escala mayor en ellas. 
        h4.text-center Mapas de Bits 

      .col-lg-6.card-color-2.p-5.d-lg-none(data-aos="fade-down-left") 
        img.img-t.img-a.my-3(src='@/assets/ilustraciones/img4.svg', alt='')       
        h4.text-center Gráficos vectoriales o modelado geométrico
        p.mb-0 Los mapas de bits, también llamadas imágenes ráster, están compuestos por un sinnúmero de pequeños cuadros llamados “pixeles” donde cada uno de ellos está en una ubicación exacta de la imagen con un valor numérico que determina su color y tamaño. Estos se encuentran en fotografías y en dibujos digitales, reproduciendo de forma exacta las gradaciones de color y dependen totalmente de un número determinado de pixeles al que se le llama “resolución”, la cual pierde en calidad cuando se aumenta y se muestra de forma dentada al realizar una escala mayor en ellas.  

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")        
      .col-lg-10.img-card-color-1.p-5
        .BorTit Figura 3 Graficación en software 
        img.img-a.mt-3(data-aos="flip-left")(src='@/assets/ilustraciones/img5.svg', alt='')      

    h4.mt-5(data-aos="fade-left") Marcación

    .row.justify-content-center.align-items-center.mt-5.card-border(data-aos="zoom-in")        
      .col-lg-6.px-0(data-aos="fade-down-right")
        img.img-a(src='@/assets/ilustraciones/img6.png', alt='')
      .col-lg-6.p-4(data-aos="fade-down-left")
        p Se pueden crear gráficos vectoriales en #[b CorelDRAW, Illustrator e Inkscape]. En cada uno de ellos se pueden importar o colocar mapas de bits en archivos con extensión JPEG, TIFF y hasta PDF añadiéndolos a las mesas de trabajo para vectorizarlos. Todo esto se logra realizando y conjugando el manejo de los programas, de las terminologías de cada uno ya que, pueden tomar nombres diferentes sus herramientas para lograr composiciones y diagramaciones, sin perder el concepto creativo de las piezas gráficas. 

    h4.mt-5(data-aos="fade-left") Configuración interfaz programas de creación gráfica 

    p(data-aos="fade-down") Como ya se relató los programas de creación gráfica son variados en su interfaz y se adapta a las necesidades creativas del desarrollador de colecciones al igual que conocer los que se manejan actualmente en el mercado, con herramientas adaptables donde en todos ellos se pueden crear gráficos vectoriales, es decir, imágenes hechas con líneas y curvas de manera digital,  las cuales  están definidas matemáticamente  dando  como resultado formas básicas según la posición de su punto inicial y final  o formas que se construyen logrando una trayectoria que compone la figura  cerrándola por completo. A continuación, se muestra la interfaz gráfica de cada uno de ellos, para que sean diferenciados.              
  
    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")        
      .col-lg-4
        a.lnk(@mouseover="mostrarIndicador = false" @click="modal1 = true")
          .indicador--click(v-if="mostrarIndicador")      
          img.img-t.img-a(src='@/assets/ilustraciones/img7.svg', alt='') 
          h5.mt-4.ml  #[b Inkscape] 
      .col-lg-4
        a.lnk(@mouseover="mostrarIndicador = false" @click="modal2 = true")
          .indicador--click(v-if="mostrarIndicador")       
          img.img-t.img-a(src='@/assets/ilustraciones/img8.svg', alt='') 
          h5.mt-4.ml #[b CorelDRAW]
      .col-lg-4
        a.lnk(@mouseover="mostrarIndicador = false" @click="modal3 = true")
          .indicador--click(v-if="mostrarIndicador")       
          img.img-t.img-a(src='@/assets/ilustraciones/img9.svg', alt='') 
          h5.mt-4.ml #[b Illustrator]

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-12.mb-4.mb-md-0
          .BorTit Figura 4 Software libre Inkscape
          img.img-a.mt-3(src='@/assets/ilustraciones/ink.svg', alt='') 

    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-md-12.mb-4.mb-md-0
          .BorTit Figura 5 Software Corel Draw
          img.img-a.mt-3(src='@/assets/ilustraciones/cor.svg', alt='') 

    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-md-12.mb-4.mb-md-0
          .BorTit Figura 6 Software Illustrator
          img.img-a.mt-3(src='@/assets/ilustraciones/ill.svg', alt='')                             

    .row.justify-content-center.align-items-center.mt-5(data-aos="zoom-in")      
      .col-lg-10.cajon.color-primario.p-4
        .row.justify-content-center.align-items-center       
          .col-lg-2(data-aos="fade-down-right")
            img.img-a.img-t.beat(src='@/assets/ilustraciones/img10.svg', alt='') 
          .col-lg-10(data-aos="fade-down-left")
            p.mb-0 Cada programa cuenta con un menú y herramientas propias en forma vertical al lado izquierdo agrupadas según su uso para crear los gráficos vectoriales, llamadas “paletas de herramientas”, la distribución aparece en casillas donde se pueden distinguir los símbolos gráficos o iconos que las representan y permiten entre otras retocar imágenes, mover difuminar, dibujar, pintar, clonar y crear figuras entre otras. 

    .row.justify-content-center.align-items-stretch.mt-5    
      .col-lg-4.img-card-color-1(data-aos="fade-left")    
        .row.justify-content-center.align-items-center.p-4
          .BorTit.mb-3 Figura 6 Software Illustrator 
          .col-lg-4.my-3 
            img.img-t.img-a(src='@/assets/ilustraciones/img11.svg', alt='')                
          .col-lg-4.my-3
            img.img-t.img-a(src='@/assets/ilustraciones/img12.svg', alt='')                
          .col-lg-4.my-3
            img.img-t.img-a(src='@/assets/ilustraciones/img13.svg', alt='')                
      .col-lg-8(data-aos="fade-right")  
        .imagen-titulo--der.color-secundario
          figure
            img.img-t.img-a(src='@/assets/ilustraciones/img14.png', alt='')

    p.mt-5(data-aos="fade-down") Las herramientas solo se pueden utilizar en la hoja que se tiene activa en el momento, se pueden abrir varias de ellas al tiempo. A continuación, se describe la interfaz de estos programas, estructura y herramientas:
    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-left")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 1 
              font(color='#D2E1F1') 0.   

      .col-lg-9.card-num-text.p-2
        h5.ml Barra de menús
        p.ml Área que contiene opciones de menú desplegable     

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-right")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 2 
              font(color='#D2E1F1') 0.   

      .col-lg-9.card-num-text.p-2
        h5.ml Barra de propiedades
        p.ml Barra acoplable con comandos relacionados con la herramienta u objeto activos. Por ejemplo, cuando la herramienta Texto se encuentra activa, la Barra de propiedades de texto 

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-left")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 3 
              font(color='#D2E1F1') 0.   

      .col-lg-9.card-num-text.p-2
        h5.ml Barra de herramientas
        p.ml Barra acoplable que contiene accesos directos a comandos de menú u otros. 

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-right")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 4 
              font(color='#D2E1F1') 0.   

      .col-lg-9.card-num-text.p-2
        h5.ml Barra de título
        p.ml El área que muestra el título del dibujo abierto. 

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-left")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 5
              font(color='#D2E1F1') 0.   

      .col-lg-9.card-num-text.p-2
        h5.ml Reglas
        p.ml Bordes horizontales y verticales que se utilizan para determinar el tamaño y posición de los objetos de un dibujo. 

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-right")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 6 
              font(color='#D2E1F1') 0.   

      .col-lg-9.card-num-text.p-2
        h5.ml Caja de herramientas
        p.ml Barra flotante de herramientas para crear, rellenar y modificar objetos del dibujo. 

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-left")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 7 
              font(color='#D2E1F1') 0.   

      .col-lg-9.card-num-text.p-2
        h5.ml Ventana de dibujo
        p.ml El área fuera de la página de dibujo, delimitada por las barras de desplazamiento y los controles de la aplicación. 

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-right")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 8
              font(color='#D2E1F1') 0..   

      .col-lg-9.card-num-text.p-2
        h5.ml Página de dibujo
        p.ml El área rectangular dentro de la ventana de dibujo. Es la zona imprimible del área de trabajo.

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-left")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 9 
              font(color='#D2E1F1') 0.   

      .col-lg-9.card-num-text.p-2
        h5.ml Paleta de colores
        p.ml (Windows) Una barra acoplable que contiene muestras de color. (Mac OS) Una barra flotante que contiene el modo de color actual. 
    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-right")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 10 
              font(color='#D2E1F1') .   

      .col-lg-9.card-num-text.p-2
        h5.ml Ventana acoplable/paleta
        p.ml Ventana que contiene los comandos disponibles y los valores relevantes para una herramienta o tarea específica. 

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-left")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 11 
              font(color='#D2E1F1') .   

      .col-lg-9.card-num-text.p-2
        h5.ml Barra de estado
        p.ml Área situada en la parte inferior de la ventana de aplicación que contiene información sobre propiedades de objeto como el tipo, tamaño, color, relleno y resolución. La barra de estado también muestra la posición actual del ratón. 

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-right")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 12 
              font(color='#D2E1F1') .   

      .col-lg-9.card-num-text.p-2
        h5.ml Explorador de documentos
        p.ml Áreaa situada en la parte inferior izquierda o en la parte superior de la ventana de aplicación que contiene controles para desplazarse entre páginas y añadir páginas 

    .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-left")    
      .col-lg-1.display-mum
        .row.justify-content-center
          .col-12.card-num
            p.mt-1 13 
              font(color='#D2E1F1') .   

      .col-lg-9.card-num-text.p-2
        h5.ml Explorador
        p.ml Botón situado en la esquina inferior derecha (Windows) o en la esquina inferior izquierda (Mac OS), que abre una pantalla más pequeña para facilitar el desplazamiento por el dibujo.                                                          
    h4.mt-5(data-aos="fade-left") Documento nuevo                            

    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-4(data-aos="fade-down-right") 
        img.img-t.img-a(src='@/assets/ilustraciones/img15.svg', alt='')       
      .col-lg-6(data-aos="fade-down-left") 
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-0 Para iniciar un nuevo desarrollo de diseño, se debe crear un documento nuevo. En los programas de diseño vectorial, de maquetación o donde se hace edición de imágenes lo primero que pide al inicio es el tipo de medida del documento a realizar para saber el tamaño de impresión de este. Además, se debe tener en cuenta también que los programas para edición de imágenes manejan resolución de las mismas ya que estos trabajan con base a mapa de bits, es decir, con píxeles (unidad mínima del mapa de bits) Se debe recordar que la resolución es un número determinado de pixeles y determina la cantidad de estos almacenados en el documento y efectivamente la calidad de la imagen.

    p.mt-5(data-aos="fade-down") El primer ejemplo es con Adobe Illustrator, una vez abierta la aplicación, se debe ir al menú #[b Archivo/Nuevo] y aparece una ventana de configuración donde se pide las medidas del documento el ancho y alto del mismo. En Corel Draw se hace la misma operación menú #[b Archivo/Nuevo], pero este crea un documento por defecto en A4 o carta que se puede configurar en la barra superior de propiedades en otros tamaños. Si el programa que se va a utilizar es Inkscape, automáticamente se crea un documento que también es configurable desde el menú #[b Archivo/Propiedades del documento]. El atajo o teclado rápido para los 3 programas para crear un documento nuevo es #[b CRTL+N].           
    
    SlyderB.mb-5(:datos="datosSlyder")(data-aos="flip-down").mt-5 

    p.mt-5(data-aos="fade-down") Para el manejo de cada una de las herramientas de los programas cuentan con atajos de teclado, desde una combinación de teclas llevan a cada una de ellas, agilizando y facilitando el trabajo, siendo muy recomendado su uso. Las herramientas que poseen atajos se encuentran luego del nombre de la herramienta y de la descripción entre paréntesis o posicionando el cursor sobre la herramienta (sin hacer clic) este aparece durante unos segundos su descripción en un recuadro emergente. 

    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-down")        
      .col-lg-10.cajon.color-primario.text-just.p-4.border     
        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a(data-aos="fade-right")(src='@/assets/ilustraciones/img19.svg', alt='')
          .col-lg-10(data-aos="fade-left")
            p Se recomienda descargar los anexos con las tablas de atajos de los programas descritos, para facilitar su utilización y manejo.
            .row.justify-content-center.align-items-center
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/ATAJOS_PDS_12.xlsx')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-xls.svg")
                  .anexo__texto
                    p #[b Anexo.] Atajos PDS 12              
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/TECLAS_RAPIDAS_PRINCIPALES_PDS.xls')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-xls.svg")
                  .anexo__texto
                    p #[b Anexo.] Teclas rápidas principales PDS       
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'Documento nuevo software Illustrator',
        imagen: require('@/assets/ilustraciones/img16.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Documento nuevo software Illustrator',
        imagen: require('@/assets/ilustraciones/img17.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Documento nuevo software Illustrator',
        imagen: require('@/assets/ilustraciones/img18.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
