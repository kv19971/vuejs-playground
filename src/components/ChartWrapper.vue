<template>
  <div>
    <highcharts :options="options" ref="highcharts"></highcharts>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import VueHighcharts from 'vue-highcharts';
Vue.use(VueHighcharts);

export default {
  data () {
    return {
      datalimit: 20,
      options : {
        type: 'spline',
        marginRight: 10,
        title: {
          text: 'Random data',
          x: -20 //center
        },
        legend: {
          enabled: false
        },
        exporting: {
            enabled: false
        },
        xAxis: {
          type: 'datetime',
          tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
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
      let shift = dps.length > this.datalimit;
      this.$refs.highcharts.chart.series[0].addPoint([(new Date()).getTime(), dps[dps.length-1]], true, shift);
    }
  }
}
</script>
