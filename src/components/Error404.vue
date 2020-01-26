<template lang="pug">
  .page-error
    p {{ $t('not-found') }}
</template>

<script>
export default {
  data(){
    return  {
    }
  }
}
</script>
<style lang="scss" >
 .page-error{
   text-align: center;
   color: rosybrown;
   font-size: 2rem;
 }
</style>

