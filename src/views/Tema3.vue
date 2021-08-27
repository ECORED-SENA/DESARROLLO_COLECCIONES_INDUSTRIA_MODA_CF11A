<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 3
      h1 Técnicas de expresión
    p(data-aos="fade-down") Los objetos gráficos creados de manera vectorial desde que queden cerrados en su construcción y en su trazo se pueden “rellenar” de color donde se puede elegir por un relleno sólido, degradado y por motivos o patrones determinados en los #[i softwares] o se puede rellenar también con una imagen importada. Lo colores que se ven en la pantalla y que están aplicados por este medio digital están representados numéricamente tal cual se hace en la impresión cumpliendo con los requisitos de paletas de colores con todos los atributos cromáticos. 

    AcordionA(data-aos="slide-down").mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center.align-items-center(titulo="Relleno uniforme")
        .col-lg-11
          p Los Pixeles están divididos en tres colores cuando se ven en una pantalla: rojo, verde y azul, de la cual se crea la paleta de colores RGB (Red, Green, Blue). Cada uno de ellos toma un valor entre 0 y 255, es decir, 256 en total, y la combinación entre ellos da un resultado de 16.777.256 colores (256 x 256 x 256).
          p Cada color tiene su propia fuente de luz tomado como elemento gráfico y como se ve desde un televisor, un celular, una cámara digital o un computador.

          .row.justify-content-center.align-items-stretch.my-4
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 21 #[i Ventanas de relleno RGB Illustrator]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img60.svg', alt='')
            
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 22 #[i Ventanas de relleno RGB Corel Draw]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img61.svg', alt='') 
              
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 23 #[i Ventanas de relleno RGB Inkscape]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img62.svg', alt='')                                      

          p Si por el contrario lo que se quiere hacer es imprimir el elemento gráfico se utiliza otro de los perfiles o paletas de color donde las tintas son CMYK cian, magenta, amarillo y negro (Cyan, Magenta, Yellow, Black) llamado también cuatricromía y se trabajan de acuerdo al porcentaje a utilizar de acuerdo a las tintas del mismo color en el proceso de impresión.

          .row.justify-content-center.align-items-stretch.my-4
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 24 #[i Ventanas de relleno CMYK Illustrator]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img63.svg', alt='')
            
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 25 #[i Ventanas de relleno CMYK Corel Draw]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img64.svg', alt='') 
              
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 26 #[i Ventanas de relleno CMYK Inkscape]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img65.svg', alt='')           

      .row.justify-content-center.align-items-center(titulo="Relleno degradado")
        .col-lg-11
          p El degradado es una transición cromática de dos o más colores donde se funden dando una escala de oscuro a claro y se encuentran de acuerdo a los #[i softwares] así: menú Ventana/Color en Adobe Illustrator, menú Objeto/Relleno de borde en Inkscape o directamente en la herramienta de relleno de la paleta de herramientas de Corel Draw. 
          .row.justify-content-center.align-items-stretch.my-4
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 27 #[i Ventanas de degradado Illustrator]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img66.svg', alt='')
            
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 28 #[i Ventanas de degradado Corel Draw]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img67.svg', alt='') 
              
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 29 #[i Ventanas de degradado Inkscape]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img68.svg', alt='')  

          p Los degradados ayudan a crear diversos efectos en los objetos logrando entre ellos volumen haciéndolos más realistas. Estos también se pueden crear a partir de la escogencia de colores dando libertad de crear degradados nuevos activando el editor de degradado de cada programa y entre otros cambiar la ubicación y el ángulo y crear transparencias.
          p Cada uno de los programas en la ventana de degradado traen formas predefinidas para realizarlos en los que están el lineal, radial, cónico, elíptico, cuadrado, rectangular, de rejilla y de forma libre. 
          .row.justify-content-center.align-items-stretch.my-4
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 30 #[i Tipos de degradado en Illustrator]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img69.svg', alt='')
            
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 31 #[i Tipos de degradado Corel Draw]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img70.svg', alt='') 
              
              .col-lg-4.bg-cajon-color-1.p-4.border-1      
                .BorTit Figura 32 #[i Tipos de degradado en Inkscape]
                img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img71.svg', alt='')  

          p Los degradados se trabajan a diferentes formas predefinidas y cerradas; ya aplicado el efecto crea una línea dentro de esta con la cual al moverla dentro de la figura cruzando de lado a lado se va moviendo teniendo en cuenta el punto inicial para crear efectos de fluidez y extensión dando volumen. 

      .row.justify-content-center.align-items-center(titulo="Relleno de motivo")
        .col-lg-11
          p Los #[i softwares] para vectorizar poseen una biblioteca de patrones o motivos los cuales hacen las veces de estampados o formas de tapiz, los cuales en algunos casos se pueden editar, redimensionar y personalizar sin perder calidad al trabajarlos en grandes dimensiones, para aplicarlos en elementos gráficos. Con estos también se pueden usar imágenes de mapas de bits, vectoriales o dibujos, incluso con degradado. En algunos de ellos como Corel Draw se puede hacer la repetición del patrón o girarlo e inclinarlo. 
          .row.justify-content-center.align-items-stretch.my-4
            .col-lg-12.bg-cajon-color-1.p-4.border-1      
              .BorTit Figura 33 #[i Relleno motivo en Illustrator]
              img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img72.svg', alt='') 
          .row.justify-content-center.align-items-stretch.mb-4
            .col-lg-8.bg-cajon-color-1.p-4.border-1      
              .BorTit Figura 34 #[i Relleno motivo en CorelDraw]
              img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img73.svg', alt='') 
            .col-lg-4.bg-cajon-color-1.p-4.border-1      
              .BorTit Figura 35 #[i Relleno motivo en Inkscape]
              img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img74.svg', alt='')                                             

      .row.justify-content-center.align-items-center(titulo="Herramientas para enmascarar formas")
        .col-lg-11
          p Este formato permite ubicar una capa superior con reformas de color, filtros, trazos, textos o efectos sobre una capa inferior. Donde la ilustración se “recorta” con la misma forma o máscara de esta. Estos objetos se denominan «conjunto de recorte». Este se puede crear a partir de una selección con dos o más objetos (capas) y un grupo. El paso a paso para su realización según el software donde la capa a enmascarar va en la parte superior, logrando crear desde lo gráfico efectos de estampado en los objetos.
          TabsC.color-acento-contenido.acor-bg-1.mt-5
            .p-3.p-md-4(titulo="Paso 1")
              .row
                .col-md-6.bg-cajon-color-1.p-4      
                  .BorTit Figura 36 #[i Herramienta PowerClip Corel Draw -paso 1-]
                  img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img75.svg', alt='')
                  figcaption.mt-3 Nota. Corel Draw. (2021).
                .col-md-6.mb-4.mb-md-0
                  p Crear una elipse (F7). Hacer clic en el menú Archivo y luego en la opción Importar. En la ventana que se abre buscar la imagen de la flor y seleccionarla y luego hacer clic en el botón Importar. Hacer clic en la hoja para que quede la imagen.
              
            .p-3.p-md-4(titulo="Paso 2")
              .row
                .col-md-6.bg-cajon-color-1.p-4      
                  .BorTit Figura 37 #[i Herramienta PowerClip Corel Draw -paso 2-]
                  img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img76.svg', alt='')
                  figcaption.mt-3 Fuente: Corel Draw. (2021).
                .col-md-6.mb-4.mb-md-0
                  p Con la imagen seleccionada, hacer clic en el menú Efectos, seleccionar la opción #[b PowerClip] y en el submenú, la opción Situar dentro de contenedor. El puntero del #[i mouse] se transforma en una flecha negra grande, hacer clic sobre la elipse para que la imagen de la flor se inserte allí.            

          .row.justify-content-center.align-items-center.mt-5    
          .col-lg-12.cajon.color-primario.p-5
            .row.justify-content-center.align-items-center       
              .col-lg-2
                img.img-a.img-t.shake(src='@/assets/ilustraciones/img45.svg', alt='') 
              .col-lg-10
                p.mb-0 Recuerde que la imagen debe cubrir toda el área donde se quiera insertar. Esta operación también se puede hacer dando clic derecho sobre la imagen del estampado y arrastrarla hasta el contenedor donde se insertará. Luego de realizada la operación se puede editar si la imagen no queda centrada tal cual, si se desea, hacer clic en el menú Efectos, seleccionar PowerClip y luego en el submenú la opción Editar Contenido. Ahora se puede mover la imagen hasta situarla en la posición que se desea que tenga dentro del objeto. Hacer clic en el menú Efectos, luego en PowerClip y a continuación en Finalizar la edición de este nivel. 

          .row.justify-content-center.align-items-stretch.my-4
            .col-lg-10.bg-cajon-color-1.p-4.border-1      
              .BorTit Figura 38 #[i Herramienta PowerClip Corel Draw]
              img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img77.svg', alt='')                  

      .row.justify-content-center.align-items-center(titulo="Máscaras de recorte Illustrator")
        .col-lg-11
          p Las máscaras de recorte al igual que enmascarar formas o el Powerclip son una o varias capas que esconden o disimulan los objetos situados debajo de esta, solo se puede visualizar la parte que queda incluida adentro de los límites de la forma de la máscara de recorte, donde la máscara actuara solo en ella o grupo de ellas.
          p Cuando se crea las formas esta será puesta encima y servirá de máscara en la misma capa o grupo de capas y seleccionarlas.
          p Estando en el panel Capas, hacer clic en el botón Crear/Soltar máscara de recorte o abrir el menú del panel Capas y luego clic en la opción Crear máscara de recorte.
          .row.justify-content-center.align-items-stretch.my-4
            .col-lg-10.bg-cajon-color-1.p-4.border-1      
              .BorTit Figura 39 #[i Herramienta Mascara de recorte Illustrator]
              img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img78.svg', alt='')     
          p Para quitar la máscara que se creó, se selecciona la capa en la que está hecha la máscara y hacer clic en el botón Crear/Soltar máscara de recorte del panel Capas o abrir el menú de panel Capas y hacer clic en Soltar máscara de recorte.

      .row.justify-content-center.align-items-center(titulo="Máscaras y recortes en Inkscape ")
        .col-lg-11
          p El crear máscaras en Inkscape es similar a lo anterior donde desde una figura a rellenar y previamente con relleno blanco, esta estará encima de la imagen u objeto que se desea enmascarar, ambas se seleccionan al tiempo con la letra “S” de selección y, con clic derecho sobre esta, dar clic en la opción “Aplicar recorte”. Tanto la máscara como el recorte en Inkscape se pueden liberar después para hacer ediciones haciendo clic derecho en la imagen y seleccionando la opción “Liberar máscara” o “Liberar recorte”.                               
          .row.justify-content-center.align-items-stretch.my-4
            .col-lg-10.bg-cajon-color-1.p-4.border-1      
              .BorTit Figura 40 #[i Herramienta Mascara Inkscape]
              img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img79.svg', alt='') 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
