<template>
  <div>
    <div>{{getDataPoints.length}} data points added</div>
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
