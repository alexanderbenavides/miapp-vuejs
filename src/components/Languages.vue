<template lang="pug">
  .main-container-languages
    .container-view
      h4 {{ $t('languages') }}
      .home-grid-experience(v-for="certification in $t('foreign_language')" )
          img#img_expetience(:src="require(`../assets/img/${certification.logo}`)")
          .content-languages
            h3 {{certification.tittle}}
            p {{certification.company}}
            p {{certification.date_expedition}}
            p {{certification.level_got}}
            p 
             a(:href="certification.link_cedential" target="_blank") 
               i.el-icon-files  {{certification.see_credential}}
</template>

<script>

export default {
  name: 'languages',
  components: {
  }
};
</script>
