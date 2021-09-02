<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 5
      h1 Elaboración de fichas técnicas
    img.img-a.img-t(data-aos="slide-down")(src='@/assets/ilustraciones/img96.png', alt='')       
    p.mt-5(data-aos="fade-down") La ficha técnica es un documento con toda la información básica para ejecutar la primera muestra física y luego para la posterior confección de las prendas. Esta se hace de forma detallada con el objetivo de proporcionar un seguimiento detallado de la producción desde su inicio hasta el final. Con ella se logra la optimización de costos, la coordinación con los talleres de producción, además, de llevar un control permanente de calidad y la terminación de la producción. De acuerdo al tipo de prenda se elabora la ficha técnica y varían según el modelo o referencia de esto. Allí se consignan los datos técnicos para la elaboración de una prenda, los cuales se deben seguir paso a paso para lograr la aprobación del producto, y por eso el especial cuidado al elaborarla.

    p.mt-5(data-aos="fade-down") Una ficha técnica debe contener un mínimo de información entre los cuales están: 

    TabsA.color-acento-contenido.mt-5(data-aos="slide-left")
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Encabezado")
        h4 Encabezado
        p Contiene el logotipo y nombre que identifica la empresa, fecha en que se elaboró el documento. 

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Identificación del producto")
        h4 Identificación del producto
        p Nombre del producto o referencia asignado por la empresa. Este puede ser un nombre o un código numérico el cual detalla la prenda, en alguno trae espacio para observaciones en el cual se puede determinar si es una muestra o no. 

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Descripción")
        h4 Descripción
        p Información detallada del producto y sus características especiales, entre ellas, estampado tipo de tela tintorería etc.  

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Dibujo Geometral")
        h4 Dibujo Geometral
        p Es el dibujo plano, el cual es el esquema exacto de la prenda indicando cuáles son los puntos importantes de esta a través de lupas, cotas de medida y flechas también detalla cómo quedará confeccionada y donde se ven todos los detalles de confección. 

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Descripción de materiales")
        h4 Descripción de materiales e insumos
        p Son todos los materiales e insumos a utilizar en la fabricación de la prenda, los insumos utilizados, cantidad que se gasta en una sola prenda, la composición de la tela, entre otros. 

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Maquinaria a utilizar")
        h4 Maquinaria a utilizar
        p En algunas fichas se detalla y se describe el tipo de máquinas van en el proceso de confección de la prenda, y también el sistema, el calibre y la punta de la aguja a utilizar, según el tipo de material, el número de serie de puntada identificada según la norma ISO 4915 y las puntadas por pulgada.  

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Esquema de costura")
        h4 Esquema de costura
        p En algunas fichas las operaciones se ilustran con el esquema de costura identificado en la norma ISO 4916, y esto ayuda a aclarar aún más como se realiza cada una de las operaciones. Algunas de estas están determinadas con flechas o cotas de medida en el geometral de la prenda.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Realizado y aprobado por")
        h4 Realizado y aprobado por
        p Allí se escriben los nombres completos de las personas que realizaron la ficha técnica dando su aprobación donde se registran los responsables del proceso. 

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Orden operacional")
        h4 Orden operacional
        p Aquí se relacionan las 3 operaciones a realizar en tres partes importantes en la realización de las prendas: operaciones de preparación, operaciones de ensamble y operaciones de terminación. 

    p.mt-5(data-aos="fade-down") A continuación, se amplían los conceptos de los 3 tipos de operaciones que se desarrollan a través de las órdenes operacionales: 

    img.img-a.img-t(data-aos="slide-down")(src='@/assets/ilustraciones/img97.svg', alt='') 

    p.mt-5(data-aos="fade-down") En orden lógico y estricto de lo descrito, se detallan las operaciones a realizar, anotando la máquina y el aditamento que se debe utilizar para realizar con calidad la prenda de principio a fin. Para construir la ficha técnica en los #[i softwares] descritos, es similar, ya que se utilizan figuras geométricas y textos, para ello se crea un rectángulo del tamaño de la hoja dejando una margen de 1 cm por todos los lados y crear rectángulos y líneas del tamaño necesario para la distribución de la ficha, calculando la distancias para que quede funcional y acorde a las necesidades. A continuación, se referencia modelos de fácil construcción:

    .row.justify-content-center.align-items-stretch.my-5
      .col-lg-10.bg-cajon-color-1.p-4.border(data-aos="slide-down")
        .BorTit Figura 57 #[i Ficha técnica ropero Corel Draw] 
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img98.svg', alt='')  

    .row.justify-content-center.align-items-stretch
      .col-lg-6.bg-cajon-color-1.p-4.border(data-aos="slide-right")    
        .BorTit Figura 58 #[i Ficha costos insumo Corel Draw]
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img99.svg', alt='')    
      .col-lg-6.bg-cajon-color-1.p-4.border(data-aos="slide-left")     
        .BorTit Figura 59 #[i Ficha técnica de prenda Corel Draw]
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img100.svg', alt='')             

    .bloque-texto-d.color-secundario.p-4.mt-5(data-aos="zoom-in")
      .bloque-texto-d__texto
        p.mb-0 Al momento de realizar los geometrales se utiliza una herramienta en Corel llamada lente el cual nos acerca la parte de la pieza que se quiere acercar. Una lente cambia la forma del área del objeto que está debajo de esta lente, sin cambiar los atributos y propiedades de los objetos. Se pueden aplicar lentes a cualquier objeto en vectores, desde figuras como rectángulos, elipses, o trayectos cerrados o polígonos. Cuando se aplica una lente a un objeto no vectorizado, la lente se convierte en un vector. Además, si por el contrario se usa un lente encima de un mapa de bits, este también se convierte en un mapa de bits. Es uno de los efectos más utilizados y eficaz al realizar fichas técnicas, ya que ayudan a certificar la calidad de las operaciones. Otras lupas se hacen directamente mostrando la operación a realizar de la prenda las cuales también dan cuenta de detalles pertinentes a la confección. Otro elemento importante son las líneas de cotas las cuales son utilizadas para incluir las medidas. Esta medida es ubicada en el centro de la cota siguiendo la misma dirección del dibujo estas se expresan en centímetros y a escala real. A continuación, se relacionan fichas con las características descritas. 

    .row.justify-content-center.align-items-stretch.my-5
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/ilustraciones/img101.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Illustrator - Lupas, cotas y flechas descriptivas
                  p.mb-0.text-small A continuación, le invitamos a ver el video Illustrator - Lupas, cotas y flechas descriptivas.
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=wyqBN1Xsz8g&t=31s" target="_blank")
                    span.text-white Ver mas
                    i.text-white.fas.fa-link 
    .row.justify-content-center.align-items-stretch
      .col-lg-8
        .row.justify-content-center.align-items-stretch       
          .col-lg-12.cajon.color-primario.text-just.p-5.border(data-aos="flip-down")
            p.mb-0 Observemos ahora las fichas técnicas y su estructura una vez aplicados estos cambios. 

    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-10.bg-cajon-color-1.p-4.border(data-aos="fade-right")
        .BorTit Figura #[i 60 Ficha Técnica de detalles con lupas]
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img102.svg', alt='')
        figcaption.mt-3 Nota. https://bit.ly/2VwEF7Q


    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-10.bg-cajon-color-1.p-4.border(data-aos="fade-left")
        .BorTit Figura #[i 61  Ficha Técnica de costuras]
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img103.svg', alt='')
        figcaption.mt-3 Nota. https://bit.ly/3Cnv1Fr


    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-10.bg-cajon-color-1.p-4.border(data-aos="fade-right")
        .BorTit Figura #[i 62 Ficha Técnica de cotas y medidas]
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img104.svg', alt='')
        figcaption.mt-3 Nota.  https://bit.ly/3jttvsY


</template>

<script>
export default {
  name: 'Tema5',
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
