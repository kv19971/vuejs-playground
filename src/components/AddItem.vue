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
  ]),
  created () {
        setInterval(() => {
            let max = 15;
            let min = 0;
            this.addPointAsync(Math.random() * (max - min) + min);        
        }, 3000)
    },
}
</script>
