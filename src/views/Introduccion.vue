<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-down")
          .BorTit Figura 1 Patronista digital
          img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img1.png', alt='') 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p(data-aos="fade-left") Los programas profesionales de diseño gráfico en su mayoría permiten el manejo y edición de imágenes de formato mapa de bits o bitmaps a vectorial. Estos se desarrollan a través de varias herramientas y funciones, entre ellas las capturas de imágenes o “Screenshot”, exportar archivos a otros formatos y vectorizar imágenes a través de filtros y efectos, creando con ello librerías graficas que luego se pueden reutilizar en la generación de nuevos diseños.  Algunos de ellos son:   
    
    .row.justify-content-center.align-items-center.mt-5       
      .col-lg-10  
        .BorTit_table(data-aos="fade-left") Software utilizado para diseño
        .tabla-a.color-secundario.mt-3(data-aos="zoom-in-down") 
          table
            caption Nota. https://bit.ly/3isyFpG
            thead
              tr
                th Software
                th Aplicación
                th Uso

            tbody
              tr
                td Adobe Photoshop
                td Diseño y edición de imágenes
                td Licencia

            tbody
              tr
                td Adobe Illustrator
                td Diseño y dibujo vectorial
                td Licencia   

            tbody
              tr
                td Adobe Indesign
                td Maquetación, diseño y dibujo vectorial
                td Licencia   

            tbody
              tr
                td Coreldraw
                td Maquetación, diseño y dibujo vectorial
                td Licencia   

            tbody
              tr
                td Gimp
                td Diseño y edición de imágenes
                td Libre   

            tbody
              tr
                td Paint.net
                td Diseño y edición de imágenes
                td Libre  

            tbody
              tr
                td Inkscape
                td Diseño y dibujo vectorial
                td Libre  

    p.mt-5(data-aos="fade-down") A continuación, se presentarán los tres programas más representativos para realizar este tipo de tareas. El primero de ellos es Corel Draw, un programa graficador en dos dimensiones también utilizado para el diseño gráfico y la ilustración digital. Su aprendizaje es fácil ya que posee una interfaz y entorno gráfico muy amigable y en él se pueden realizar desde logos y marcas hasta folletos manuales bien elaborados. Esto es importante y ayuda mucho especialmente a personas que no conocen o no han tenido mucho acercamiento a este tipo de programas.                 

    .row.justify-content-center.align-items-stretch.mt-5       
      .col-lg-6.cajon.color-primario.text-just.p-4.border(data-aos="fade-down-right")
        p El segundo es Illustrator y una de las tantas aplicaciones de Creative Cloud. Es desarrollado y comercializado por Adobe Systems. Adobe Illustrator (AI) es un editor de gráficos vectoriales siendo el primer programa de su tipo de esta compañía para vectorizar. Esto se realiza sobre “mesas de trabajo” que son hojas de tamaño que se pueden cambiar de acuerdo con lo que se va a elaborar y puedo tener desde 1 mesa hasta mil de ellas, aparte de ser editor de vectores también, se pueden crear desde cero de forma artísticas utilizando sus herramientas de pincel o de pluma o siendo un ayudante en el diseño gráfico.
          br
          br
          |Otro de los programas a utilizar en el caso de no poseer alguno de los anteriores en Inskape el cual es un software de libre acceso el cual se descarga en el PC y su utilización es relativamente parecido al Corel Draw. En este software al igual que los otros dos mencionados es un editor de vectores y se pueden crear imágenes de las cuales ha sido utilizado para animación de personajes de video juegos. 

      .col-lg-6.bg-cajon-color-1.p-4.border(data-aos="fade-down-left")
        .row.justify-content-center.align-items-stretch     
          .col-lg-10      
            .BorTit Figura
            img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img2.png', alt='')
            figcaption.mt-3 Nota. Tomado de Freepik                            

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
