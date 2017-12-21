<template>
  <div class="product-item">
    {{helloWorldMessage}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: 
      mapGetters([
        'helloWorldMessage'
      ])
    
  }
</script>

