<template lang="pug">
  .main-container-certifications
    .container-view
      h4 {{ $t('certifications') }}
      .home-grid-experience(v-for="certification in $t('list_certifications')" )
          img#img_expetience(:src="require(`../assets/img/${certification.logo}`)")
          .content-certification
            h3 {{certification.tittle}}
            p {{certification.company}}
            p {{certification.date_expedition}}
            p {{certification.id_credential}}
            p 
             a(:href="certification.link_cedential" target="_blank")
               i.el-icon-files  {{certification.see_credential}}
</template>

<script>

export default {
  name: 'Certifications',
  components: {
  }
};
</script>
