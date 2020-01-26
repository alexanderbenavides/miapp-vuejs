<template lang="pug">
  div.container-header
      el-menu(
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#ffd04b")
        el-menu-item.is-active(index="1")
          router-link( :to="`/${$i18n.locale}`") {{ $t('home') }}
        el-menu-item(index="2") {{ $t('courses') }}
        el-menu-item(index="3") 
          router-link( :to="`/${$i18n.locale}/blog`") Blog
        el-menu-item.item-right(index="4")
          el-dropdown
            span.el-dropdown-link Alexander 
              i.el-icon-arrow-down.el-icon--right
            el-dropdown-menu(slot="dropdown")
              el-dropdown-item
                router-link( :to="`/${$i18n.locale}`")  {{ $t('view_profile') }}
          img( alt="not found" src="../assets/img/perfil.jpg")
        el-menu-item(index="5")
          LanguageSwitcher
             
</template>

<script>
import LanguageSwitcher from '@/components/Language-switcher.vue'

export default {
  name: 'Header',
  components: {
    LanguageSwitcher
  }
}
</script>

<style lang="scss">
.container-header{
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999999;
  .el-menu-demo{
    position: relative;
      li.item-right{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 12px;
            justify-content: center;
            align-items: center;
          img{
          width: 40px;
          height: 40px;
          border-radius: 50%;       
        }
      }
    @media screen and (min-width:640px){
        li{
        &:nth-last-of-type(1){
        position: absolute;
        right: 12px;
        }
        &:nth-last-of-type(2){
        position: absolute;
        right: 90px;
        }
        }
    }
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    color: var(--color-page) !important;
  }
}

</style>