<template>
  <canvas ref="chart" :width="300" :height="300"></canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'vue-chart',

  props: {
    type: {
      required: true,
      type: String
    },
    data: {
      required: true,
      type: [Object, Array]
    },
    options: {
      default:function (){ return {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  }     
            }},
      type:Object}
  },

  data: () => ({
    chart: ''
  }),

  watch: {
    'data.labels' () {
      this.chart.update()
    },

    'data.datasets' () {
      this.chart.update()
    }
  },

  methods: {
    createChart () {
      this.chart = new Chart(this.$refs.chart, {
        type: this.type,
        data: this.data,
        options: this.options
      })
    }
  },

  mounted () {
    this.createChart()
  },

  beforeDestroy () {
    this.chart.destroy()
  }
}
</script>
