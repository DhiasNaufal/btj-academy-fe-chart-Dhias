<template>
  <!-- <div class="grid grid-rows-12 grid-cols-1 h-full w-full bg-baseColor-grey">
    <div
      class="row-span-1 ml-5 text-4xl flex flex-col justify-center font-bold text-primaryColor"
    >
      <div>Statistik Kependudukan Berdasarkan Kepulauan</div>
      <div class="text-base text-gray-500">Periode Tahun 2023, Semester 1</div>
    </div>
    <div class="row-span-11 grid grid-cols-12">
      <div class="grid grid-rows-12 col-span-5">
        <highchart :options="pieChartOps" class="row-span-6" />
        <highchart :options="columnChartOps" class="row-span-6" />
      </div>
      <div class="grid grid-rows-12 grid-cols-12 col-span-7 mx-4">
        <highchart :options="pieSumatera" class="row-span-3 col-span-6" />
        <highchart :options="pieSumatera" class="row-span-3 col-span-6" />
        <highchart :options="pieSumatera" class="row-span-3 col-span-6" />
        <highchart :options="pieSumatera" class="row-span-3 col-span-6" />
        <highchart :options="pieSumatera" class="row-span-3 col-span-6" />
        <highchart :options="pieSumatera" class="row-span-3 col-span-6" />
        <highchart :options="pieSumatera" class="row-span-3 col-span-6" />
        <highchart :options="pieSumatera" class="row-span-3 col-span-6" />
      </div>
    </div>
  </div> -->
  <div class="flex flex-col bg-baseColor-grey">
    <div
      class="ml-5 text-4xl flex flex-col justify-center font-bold text-primaryColor"
    >
      <div>Statistik Kependudukan Berdasarkan Kepulauan</div>
      <div class="text-base text-gray-500">Periode Tahun 2023, Semester 1</div>
    </div>
    <div class="grid grid-cols-2 m-3 gap-x-3 gap-y-3">
      <highchart :options="pieChartOps" class="rounded-lg" />
      <highchart :options="columnChartOps" class="rounded-lg" />
      <highchart :options="pieSumatera" class="rounded-lg" />
      <highchart :options="pieJawa" class="rounded-lg" />
      <highchart :options="pieKalimantan" class="rounded-lg" />
      <highchart :options="pieBali" class="rounded-lg" />
      <highchart :options="pieSulawesi" class="rounded-lg" />
      <highchart :options="pieNusa" class="rounded-lg" />
      <highchart :options="pieMaluku" class="rounded-lg" />
      <highchart :options="piePapua" class="rounded-lg" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataKependudukan: [],
      pendudukPulau: [],
      pendudukSumatera: [],
      pendudukJawa: [],
      pendudukKalimantan: [],
      pendudukBali: [],
      pendudukSulawesi: [],
      pendudukNusa: [],
      pendudukMaluku: [],
      pendudukPapua: [],
    };
  },
  computed: {
    pieChartOps() {
      return {
        chart: {
          type: "pie",
        },
        title: {
          text: "Data Kependudukan Indonesia",
        },
        subtitle: {
          text: "Data Jumlah Penduduk tiap Pulau Tahun 2023, Semester 1",
        },
        series: [
          {
            data: this.pendudukPulau,
          },
        ],
      };
    },
    columnChartOps() {
      return {
        chart: {
          type: "column",
        },
        title: {
          text: "Data Kependudukan Indonesia",
        },
        subtitle: {
          text: "Data Jumlah Penduduk tiap Pulau Tahun 2023, Semester 1",
        },
        yAxis: {
          title: {
            text: "Penduduk",
          },
        },
        xAxis: {
          categories: [
            "Sumatera",
            "Jawa",
            "Kalimantan",
            "Bali",
            "Sulawesi",
            "Nusa Tenggara",
            "Maluku",
            "Papua",
          ],
        },
        series: [
          {
            name: "Jumlah Penduduk per Pulau",
            data: this.pendudukPulau,
          },
        ],
      };
    },
    pieSumatera() {
      return {
        chart: {
          type: "pie",
        },
        title: {
          text: "Data Kependudukan Sumatra",
        },

        subtitle: {
          text: "Persebaran Penduduk Pulau Sumatra",
        },

        series: [
          {
            name: "Penduduk",
            data: this.pendudukSumatera,
          },
        ],
      };
    },
    pieJawa() {
      return {
        chart: {
          type: "pie",
        },
        title: {
          text: "Data Kependudukan Jawa",
        },

        subtitle: {
          text: "Persebaran Penduduk Pulau Jawa",
        },

        series: [
          {
            name: "Penduduk",
            data: this.pendudukJawa,
          },
        ],
      };
    },
    pieKalimantan() {
      return {
        chart: {
          type: "pie",
        },
        title: {
          text: "Data Kependudukan Kalimantan",
        },

        subtitle: {
          text: "Persebaran Penduduk Pulau Kalimantan",
        },

        series: [
          {
            name: "Penduduk",
            data: this.pendudukKalimantan,
          },
        ],
      };
    },
    pieBali() {
      return {
        chart: {
          type: "pie",
        },
        title: {
          text: "Data Kependudukan Bali",
        },

        subtitle: {
          text: "Persebaran Penduduk Pulau Bali",
        },

        series: [
          {
            name: "Penduduk",
            data: this.pendudukBali,
          },
        ],
      };
    },
    pieSulawesi() {
      return {
        chart: {
          type: "pie",
        },
        title: {
          text: "Data Kependudukan Sulawesi",
        },

        subtitle: {
          text: "Persebaran Penduduk Pulau Sulawesi",
        },

        series: [
          {
            name: "Penduduk",
            data: this.pendudukSulawesi,
          },
        ],
      };
    },
    pieNusa() {
      return {
        chart: {
          type: "pie",
        },
        title: {
          text: "Data Kependudukan Nusa",
        },

        subtitle: {
          text: "Persebaran Penduduk Pulau Nusa",
        },

        series: [
          {
            name: "Penduduk",
            data: this.pendudukNusa,
          },
        ],
      };
    },
    pieMaluku() {
      return {
        chart: {
          type: "pie",
        },
        title: {
          text: "Data Kependudukan Maluku",
        },

        subtitle: {
          text: "Persebaran Penduduk Pulau Maluku",
        },

        series: [
          {
            name: "Penduduk",
            data: this.pendudukMaluku,
          },
        ],
      };
    },
    piePapua() {
      return {
        chart: {
          type: "pie",
        },
        title: {
          text: "Data Kependudukan Papua",
        },

        subtitle: {
          text: "Persebaran Penduduk Pulau Papua",
        },

        series: [
          {
            name: "Penduduk",
            data: this.pendudukPapua,
          },
        ],
      };
    },

    handleJumlah() {
      let populasi = [];
      populasi = this.dataKependudukan.map((obj) =>
        parseInt(obj.jumlah_penduduk, 10)
      );
      return populasi;
    },
    handleTotalPenduduk() {
      let populasi = this.handleJumlah;
      let sum = 0;
      let i = 0;

      while (i < populasi.length) {
        sum += populasi[i];
        i++;
      }
      return sum.toLocaleString();
    },
    handleProv() {
      let prov = [];
      prov = this.dataKependudukan.map((obj) => obj.prov);
      return prov;
    },
    handleProvJumlah() {
      let prov = [];
      prov = this.dataKependudukan.map((obj) => obj.prov);
      return prov.length;
    },
    handleJumlahKm2() {
      let populasi = [];
      populasi = this.dataKependudukan.map((obj) => ({
        name: obj.prov,
        y: parseInt(obj.jumlah_penduduk_km2, 10),
      }));
      //   console.log(populasi);
      return populasi;
    },
    findMax() {
      let max = Math.max(...this.handleJumlah);
      return max.toLocaleString();
    },
    findMin() {
      let min = Math.min(...this.handleJumlah);
      return min.toLocaleString();
    },
  },

  mounted() {
    this.fetchDataPenduduk();
  },
  methods: {
    async fetchDataPenduduk() {
      try {
        const resp = await fetch(
          "https://api-e-database.kemendagri.go.id/api/dukcapil_jumlah_penduduk_prov/51F890E2DF?tahun=2023"
        );
        const body = await resp.json();
        const dataBody = body.data;
        this.dataKependudukan = dataBody;
        this.handlePendudukPulau();
        this.handlePulau();
      } catch (e) {
        console.log("Error Fetching data:", e);
      }
    },
    handlePendudukPulau() {
      //Sumatera
      const pulauSumatera = [
        "SUMATERA",
        "ACEH",
        "RIAU",
        "JAMBI",
        "BENGKULU",
        "BELITUNG",
        "LAMPUNG",
      ];
      const sumatera = this.dataKependudukan
        .filter((obj) =>
          pulauSumatera.some((prefix) => obj.prov.includes(prefix))
        )
        .map((obj) => ({ name: obj.prov, y: parseInt(obj.jumlah_penduduk) }));
      this.pendudukSumatera = sumatera;

      // Jawa
      const pulauJawa = ["JAWA", "DKI", "BANTEN", "YOGYA"];
      const jawa = this.dataKependudukan
        .filter((obj) => pulauJawa.some((prefix) => obj.prov.includes(prefix)))
        .map((obj) => ({ name: obj.prov, y: parseInt(obj.jumlah_penduduk) }));
      this.pendudukJawa = jawa;

      // Kalimantan
      const pulauKalimantan = ["KALIMANTAN"];
      const kalimantan = this.dataKependudukan
        .filter((obj) =>
          pulauKalimantan.some((prefix) => obj.prov.includes(prefix))
        )
        .map((obj) => ({ name: obj.prov, y: parseInt(obj.jumlah_penduduk) }));
      this.pendudukKalimantan = kalimantan;

      // bali
      const pulauBali = ["BALI"];
      const bali = this.dataKependudukan
        .filter((obj) => pulauBali.some((prefix) => obj.prov.includes(prefix)))
        .map((obj) => ({ name: obj.prov, y: parseInt(obj.jumlah_penduduk) }));
      this.pendudukBali = bali;

      // sulawesi
      const pulauSulawesi = ["SULAWESI", "GORONTALO"];
      const sulawesi = this.dataKependudukan
        .filter((obj) =>
          pulauSulawesi.some((prefix) => obj.prov.includes(prefix))
        )
        .map((obj) => ({ name: obj.prov, y: parseInt(obj.jumlah_penduduk) }));
      this.pendudukSulawesi = sulawesi;

      // nusa
      const pulauNusa = ["NUSA"];
      const nusa = this.dataKependudukan
        .filter((obj) => pulauNusa.some((prefix) => obj.prov.includes(prefix)))
        .map((obj) => ({ name: obj.prov, y: parseInt(obj.jumlah_penduduk) }));
      this.pendudukNusa = nusa;

      // maluku
      const pulauMaluku = ["MALUKU"];
      const maluku = this.dataKependudukan
        .filter((obj) =>
          pulauMaluku.some((prefix) => obj.prov.includes(prefix))
        )
        .map((obj) => ({ name: obj.prov, y: parseInt(obj.jumlah_penduduk) }));
      this.pendudukMaluku = maluku;

      // papua
      const pulauPapua = ["PAPUA", "P A P U A"];
      const papua = this.dataKependudukan
        .filter((obj) => pulauPapua.some((prefix) => obj.prov.includes(prefix)))
        .map((obj) => ({ name: obj.prov, y: parseInt(obj.jumlah_penduduk) }));
      this.pendudukPapua = papua;

      console.log(papua);
    },

    handlePulau() {
      const pulauData = [
        { label: "Sumatera", data: this.pendudukSumatera },
        { label: "Jawa", data: this.pendudukJawa },
        { label: "Kalimantan", data: this.pendudukKalimantan },
        { label: "Bali", data: this.pendudukBali },
        { label: "Sulawesi", data: this.pendudukSulawesi },
        { label: "Nusa Tenggara", data: this.pendudukNusa },
        { label: "Maluku", data: this.pendudukMaluku },
        { label: "Papua", data: this.pendudukPapua },
      ];

      const result = pulauData.map(({ label, data }) => ({
        name: label,
        y: data.reduce((sum, obj) => sum + parseInt(obj.y, 10), 0),
      }));
      this.pendudukPulau = result;
      console.log(result);
    },
  },
};
</script>
