<template>
  <div class="pane" v-show="show">
    <slot></slot>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    props: {
      name: {
        type: String
      },
      label: {
        type: String,
        default: ''
      }
    },
    data(){
      return {
        show: true
      }
    },
    methods: {
      updateNav(){
        this.$parent.updateNav();
      }
    },
    watch: {
//      label(){
//        this.updateNav();
//      }
    },
    mounted(){
        this.updateNav();
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
