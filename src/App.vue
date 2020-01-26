<template lang="pug">
  div(:style="cssProps")
      Header
      Profile
      div.main-menus
        LeftMenu
        div
          router-view          
      Footer
</template>

<script>
import Header from './includes/Header.vue';
import Footer from './includes/Footer.vue';
import LeftMenu from './includes/Left-menu.vue';
import Profile from './includes/Profile.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    LeftMenu,
    Profile
  },
  data(){
    return {
      color:'red'
    }
  },
  computed: {
    cssProps(){
      return{
        '--background-page': '#ffffff',
        '--color-page': '#202020',
        '--background-components': '#6A5ACD',
        '--border-color': '#e6e6e6'

      }
    },

  },
}
</script>



<style lang="scss">
@import url("//unpkg.com/element-ui@2.12.0/lib/theme-chalk/index.css");
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);
@import   '@/assets/estyles.scss';
.main-menus{
  margin: 1rem;
  @media screen and(min-width:640px){
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-gap: 10px;
  }
}
a{
text-decoration:none;
color:#909399;      
}
</style>
