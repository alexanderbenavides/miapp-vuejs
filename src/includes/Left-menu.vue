<template lang="pug">
    .main-left {{msg}}
      el-collapse(v-model="activeNames" @change="handleChange")
          router-link( :to="`/${$i18n.locale}`")
            el-collapse-item(:title="$t('view_profile')" name="1")
          router-link( :to="`/${$i18n.locale}/proyectos`")
            el-collapse-item(title="Javascript" name="2")
          router-link( :to="`/${$i18n.locale}/logros`")            
            el-collapse-item(:title="$t('achievements')" name="3")
          router-link( :to="`/${$i18n.locale}/certificaciones`")         
            el-collapse-item(:title="$t('certifications')" name="4")
          router-link( :to="`/${$i18n.locale}/idiomas`")         
            el-collapse-item(:title="$t('languages')" name="5")
</template>

<script>
export default {
      data() {
      return {
          activeNames: [],
          language: 'es',
        }
    },
  name: 'Left-menu',
  props: {
    msg: String
  },
    methods: {
      handleChange(val) {
        if(val != ''){
            this.activeNames = [];
        }
      }
    },
    mounted(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .main-left{
    padding: 1rem;
    border: 1px solid #e6e6e6;
    background-color: var(--background-page);
    border-radius: 15px ;
  }
  .el-collapse-item__header,.el-collapse{
    border: 0 !important;
  }
</style>
