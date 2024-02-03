<template>
  <div>
    <highchart :options="chartOptions" />
    <highchart :options="chartMultipleAxisOptions" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Statistik Penduduk Tasikmalaya",
          align: "left",
        },
        subtitle: {
          text: "Data Penduduk Tasikmalaya Tahun 2018 - 2023",
        },
        xAxis: {
          categories: ["2018", "2019", "2020", "2021", "2022"],
          title: {
            text: "Tahun",
          },
        },
        yAxis: {
          title: {
            text: "Jumlah Penduduk",
          },
        },
        legend: {
          align: "right",
          verticalAlign: "top",
          layout: "vertical",
        },
        tooltip: {
          //   format:
          //     "Tahun {x} <br/> Jumlah Penduduk {series.name} <b>{point.y}</b>",
          //   formatter: function () {
          //     return `<b>Tahun ${this.x}</b> <br> Jumlah Penduduk ${this.series.name} adalah ${this.point.y}`;
          //   },

          //   formatter shared tooltip
          shared: true,
          formatter: function () {
            console.log(this.points);
            return [`<b>Tahun ${this.x}</b><br/>`].concat(
              this.points
                ? this.points.map((point) => {
                    return `Jumlah ${point.series.name}: ${point.y}<br/>`;
                  })
                : []
            );

            return "something";
          },
        },
        plotOptions: {
          spline: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: "Pria",
            type: "column",
            data: [70, 80, 120, 125, 122],
          },
          {
            name: "Wanita",
            type: "column",
            data: [75, 88, 130, 145, 152],
          },
          {
            name: "Rata Rata",
            type: "line",
            step: "center",
            data: [72.5, 84, 125, 135, 137],
          },
          {
            name: "Rata Rata",
            type: "pie",
            size: "120",
            center: [100, 30],
            innerSize: "30%",
            dataLabels: {
              enabled: false,
            },
            data: [
              {
                name: "pria",
                y: 512,
              },
              {
                name: "Wanita",
                y: 590,
              },
            ],
          },
        ],
      },
      chartMultipleAxisOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Statistik Penduduk Tasikmalaya",
          align: "left",
        },
        subtitle: {
          text: "Data Penduduk Tasikmalaya Tahun 2018 - 2023",
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mei",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Okt",
            "Nov",
            "Des",
          ],
          title: {
            text: "Bulan",
          },
        },
        yAxis: [
          {
            title: {
              text: "Temperatur",
            },
            labels: {
              format: "{value}°C",
            },
          },
          {
            title: {
              text: "Kelembapan Udara",
            },
            labels: {
              format: "{value}%",
            },
          },
          {
            title: {
              text: "Kecepatan Angin",
            },
            labels: {
              format: "{value}km/h",
            },
          },
        ],
        legend: {
          align: "right",
          verticalAlign: "top",
          layout: "vertical",
        },
        tooltip: {
          //   format:
          //     "Tahun {x} <br/> Jumlah Penduduk {series.name} <b>{point.y}</b>",
          //   formatter: function () {
          //     return `<b>Tahun ${this.x}</b> <br> Jumlah Penduduk ${this.series.name} adalah ${this.point.y}`;
          //   },

          //   formatter shared tooltip
          shared: true,
          formatter: function () {
            console.log(this.points);
            return [`<b>Tahun ${this.x}</b><br/>`].concat(
              this.points
                ? this.points.map((point) => {
                    return `Jumlah ${point.series.name}: ${point.y}<br/>`;
                  })
                : []
            );

            return "something";
          },
        },
        plotOptions: {
          spline: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: "Temperature",
            type: "column",
            yAxis: 0,
            tooltip: {
              valueSuffix: "C",
            },
            data: [25, 26, 25, 28, 29, 30, 31, 34, 30, 35, 31, 29],
          },

          {
            name: "Kelembapan Udara",
            yAxis: 1,
            type: "spline",
            tooltip: {
              valueSuffix: "%",
            },
            marker: {
              enabled: false,
            },
            dashStyle: "dot",
            data: [45, 46, 45, 48, 49, 50, 51, 54, 50, 55, 51, 49],
          },
          {
            name: "Kecepatan Angin",
            yAxis: 2,
            type: "spline",
            tooltip: {
              valueSuffix: "km/h",
            },
            data: [14, 18, 10, 13, 15, 20, 16, 12, 17, 11, 19, 10],
          },
        ],
      },
    };
  },
};
</script>
