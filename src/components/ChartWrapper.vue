<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
import Vue from 'vue'
import VueHighcharts from 'vue-highcharts';
Vue.use(VueHighcharts);

export default {
  components: {
    VueHighcharts
  },
  computed: {
    
    options () {
      let dps = this.$store.getters.getDataPoints;
      return {
        title: {
          text: 'Monthly Average Temperature',
          x: -20 //center
        },
        subtitle: {
          text: 'Source: WorldClimate.com',
          x: -20
        },
        xAxis: {
          categories: dps.map((val, i) => i)
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        tooltip: {
          valueSuffix: '°C'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: [{
          name: 'Somedata',
          data: dps
        }]
      }
    }
  }
}
</script>
