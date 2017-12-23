<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import VueHighcharts from 'vue-highcharts';
Vue.use(VueHighcharts);

export default {
  data () {
    return {
      options : {
        title: {
          text: 'Monthly Average Temperature',
          x: -20 //center
        },
        subtitle: {
          text: 'Source: WorldClimate.com',
          x: -20
        },
        xAxis: {
          categories: []
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
          data: []
        }]
      }
    }
  },
  name: "ChartWrapper",
  components: {
    VueHighcharts
  },
  computed: mapGetters(['getDataPoints']),
  watch: {
    getDataPoints (dps) {
      console.log(this.$refs.highcharts.chart.series[0].addPoint);
      this.$refs.highcharts.chart.series[0].addPoint([dps.length - 1, dps[dps.length-1]]);
    }
  }
  // computed: {
    
  //   options () {
  //     console.log(this.$refs.highcharts === undefined ? undefined : this.$refs.highcharts.chart.series[0])
  //     let dps = this.$store.getters.getDataPoints;
      
  //   }
  // }
}
</script>
