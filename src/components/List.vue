<template>
  <div>
    <div v-for="i in getDataPoints"><span>{{i}} </span></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "List",
  computed: mapGetters([
    'getDataPoints'
  ])
}
</script>
