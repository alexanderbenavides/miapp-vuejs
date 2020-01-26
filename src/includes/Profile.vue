<template lang="pug">
  div.main-profile-container
      div.profile-container
       img(src="../assets/img/perfil.jpg")
       .container-info-profile
         strong Alexander Benavides Cabrera
         p
           small {{ $t('profession') }}
         p 
           i.el-icon-location-outline <small> {{ $t('city') }}</small>
         p 
           i.el-icon-message <small> alexben9602@gmail.com</small>
         p {{ $t('interests') }} :
         .input-container
           el-tag(v-for="interes in $t('jobs_interests')") {{interes.item}}
</template>

<script>

export default {
  name: 'Profile',
  data(){
    return {
    }
  },
}
</script>



<style lang="scss">
.main-profile-container{
  margin-top: 9rem;
  @media screen and (min-width: 640px){
   margin-top: 5rem;
  }
  .profile-container{
    display: flex;
    flex-direction: column;    
    background-color: var(--color-page);
    border-radius: 25px;
    background-image: url(../assets/img/portada.jpg);
    height: auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    align-items: center;
    padding: 1rem;
    @media screen and(min-width: 640px){
    display: grid;
    grid-template-columns: 120px auto;
    grid-gap: 2rem;      
      padding: 1rem 4rem;
    }
    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
    .container-info-profile{
        color: var(--background-page);
        .el-tag{
            background-color: var(--background-page);
            color: var(--color-page);
            margin: .5rem;
            border-radius: 15px;
            font-size: 16px;
        }
    }
  }
}

</style>
