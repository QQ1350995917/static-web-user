<template>
  <router-view/>
</template>
<script>
  import ElHeader from '../../../node_modules/element-ui/packages/header/src/main'
  import ElContainer from '../../../node_modules/element-ui/packages/container/src/main'
  import ElMain from '../../../node_modules/element-ui/packages/main/src/main'

  export default {
    components: {
      ElMain,
      ElContainer,
      ElHeader
    },
    name: 'Typeface',
    data () {
      return {
        message: 'welcome to typeface'
      }
    }
  }
</script>
