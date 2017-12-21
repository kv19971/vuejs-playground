<template>
    <div>
        <input type="text" v-model="number" />
        <button v-on:click="addPointAsync(number)">Add number</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "AddItem",
  data: () => {
      return {
        number: ''
      }
  },
  methods: mapActions([
      'addPointAsync'
  ])
}
</script>
