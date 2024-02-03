<template>
  Ini chart
  <div class="grid grid-cols-2">
    <highchart
      :options="chartColumnStackOptions"
      :update="['options.title', 'options.series']"
    />
    <highchart
      :options="chartPie"
      :update="['options.title', 'options.series']"
    />
  </div>
  <div class="grid grid-cols-2">
    <highchart
      :options="chartOptions"
      :update="['options.title', 'options.series']"
      :modules="['exporting', 'export-data']"
    />
  </div>
  <div class="grid grid-cols-2">
    <highchart
      :options="chartColumnOptions"
      :update="['options.title', 'options.series']"
    />
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
            data: [1101, 9322, 8390, 1293, 2012],
          },
          {
            name: "Wanita",
            data: [9101, 1322, 2390, 6293, 8129],
          },
        ],
      },
      chartColumnOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Statistik Penduduk Tasikmalaya",
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
          split: true,
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
            data: [1101, 9322, 8390, 1293, 2012],
          },
          {
            name: "Wanita",
            data: [9101, 1322, 2390, 6293, 8129],
          },
        ],
      },
      chartColumnStackOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Statistik Penduduk Tasikmalaya",
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
          //   shared: true,
          split: true,
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
          column: {
            stacking: "normal",
          },
        },
        series: [
          {
            name: "Pria",
            data: [1101, 9322, 8390, 1293, 2012],
          },
          {
            name: "Wanita",
            data: [9101, 1322, 2390, 6293, 8129],
          },
        ],
      },
      chartPie: {
        chart: {
          type: "pie",
        },
        title: {
          text: "Statistik Penduduk Tasikmalaya",
        },
        subtitle: {
          text: "Data Penduduk Tasikmalaya Tahun 2018 - 2023",
        },
        series: [
          {
            name: "Pria",
            data: [
              {
                name: "Pria",
                y: 5678,
              },
              {
                name: "Wanita",
                y: 5679,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
