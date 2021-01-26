<script>
import weatherService from "@/js/weatherService"
import {Line} from "vue-chartjs"
import {kelvinToCelsius} from "@/js/converters";

export default {
  name: 'TemperatureChart',
  extends: Line,
  props: {
    cityId: Number
  },
  data() {
    return {
      currentCityId: 0,
      chart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: false,
          },
          scales: {
            xAxes: [{
              ticks: {
                callback: function (dataLabel, index) {
                  return index % 3 === 0 ? dataLabel : '';
                }
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        },
        data: {
          datasets: []
        }
      }
    }
  },
  methods: {
    async updateChartData() {
      this.currentCityId = this.cityId
      const forecast = await weatherService.getForecast(this.currentCityId)
      const temperatures = forecast.map((weather) => {
        return kelvinToCelsius(weather.main.temp)
      })
      this.chart.data.labels = forecast.map((weather) => {
        return weather.dt_txt
      })
      this.chart.data.datasets[0] = {
        fill: false,
        borderColor: "rgb(6,48,177)",
        lineTension: 0.1,
        data: temperatures
      }

      this.renderChart(this.chart.data, this.chart.options)
    }
  },
  watch: {
    cityId() {
      this.updateChartData()
    }
  },
  async mounted() {
    await this.updateChartData()
  }
}
</script>
