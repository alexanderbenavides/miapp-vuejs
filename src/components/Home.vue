<template lang="pug">
  div.main-container-home
    .container-view(style="padding: 1rem;" )
      span.button-page(@click="showResults") Mostrar
    .container-view
      h3 {{ about }}
      p {{ summary }}
    .container-view
      h4 {{ $t('experience') }}
      .home-grid-experience(v-for="experience in $t('experiences')" )
          img#img_expetience(:src="require(`../assets/img/${experience.logo}`)")
          .content-experience
            h3 {{experience.cargo}}
            p {{experience.empresa}}
            p {{experience.periodo}}
            p {{experience.ubicacion}}
            p {{experience.descripcion}}
    .container-view
      h4 {{ $t('education') }}
      .home-grid-experience(v-for="data_edu in $t('list_education')" )
          img#img_expetience(:src="require(`../assets/img/${data_edu.logo}`)")
          .content-experience
            h3 {{data_edu.studies_center}}
            p {{data_edu.description}}         
            p {{data_edu.year_start_end}}         
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      about: "Acerca de mí",
      summary: "Egresado de la carrera de Ingeniería de sistemas empresariales de la Universidad Científica del Sur. Actualmente laborando en el Centro de Innovación y Desarrollo Emprendedor de la Pontificia Universidad Católica del Perú.",

    }
  },
  methods: {
    showResults(){
      console.log("Holaa")
    }
  },
  mounted(){
    
  }
};
</script>
<style lang="scss">
</style>
