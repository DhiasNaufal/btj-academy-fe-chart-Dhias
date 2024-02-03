<template>
  <div class="grid grid-rows-12 grid-cols-1 h-full w-full bg-baseColor-grey">
    <div
      class="row-span-1 col-span-12 ml-5 text-4xl flex flex-col justify-center font-bold text-primaryColor"
    >
      <div>Statistik Kependudukan Negara Republik Indonesia</div>
      <div class="text-base text-gray-500">Periode Tahun 2023, Semester 1</div>
    </div>
    <div
      class="grid grid-rows-1 grid-cols-4 row-span-2 col-span-2 mx-2 my-2 gap-2 rounded-xl"
    >
      <div class="bg-white rounded-xl flex flex-col justify-center p-4 gap-1">
        <div class="text-xl font-semibold text-primaryColor">
          Jumlah Provinsi
        </div>
        <div class="text-2xl">
          {{ handleProvJumlah }}
        </div>
        <div class="text-gray-500">Provinsi</div>
      </div>
      <div class="bg-white rounded-xl flex flex-col justify-center p-4 gap-1">
        <div class="text-xl font-semibold text-primaryColor">
          Total Penduduk
        </div>
        <div class="text-2xl">
          {{ handleTotalPenduduk }}
        </div>
        <div class="text-gray-500">Penduduk</div>
      </div>
      <div class="bg-white rounded-xl flex flex-col justify-center p-4 gap-1">
        <div class="text-xl font-semibold text-primaryColor">Tertinggi</div>
        <div class="text-2xl">{{ findMax }}</div>
        <div class="text-gray-500">Jawa Barat</div>
      </div>
      <div class="bg-white rounded-xl flex flex-col justify-center p-4 gap-1">
        <div class="text-xl font-semibold text-primaryColor">Terendah</div>
        <div class="text-2xl">
          {{ findMin }}
        </div>
        <div class="text-gray-500">Papua Selatan</div>
      </div>
    </div>
    <div class="grid row-span-11 col-span-12 bg-white mx-2 mb-1 p-1 rounded-xl">
      <highchart :options="chartOptions" />
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
    chartOptions() {
      return {
        chart: {
          type: "column",
        },
        title: {
          text: "Data Kependudukan Indonesia",
        },
        subtitle: {
          text: "Data Jumlah Penduduk tiap Provinsi Tahun 2023, Semester 1",
        },
        yAxis: [
          {
            title: {
              text: "Jumlah Penduduk",
            },
          },
          {
            title: {
              text: "Jumlah Penduduk / km²",
            },
          },
        ],
        xAxis: {
          categories: this.handleProv,
        },

        series: [
          {
            name: "Jumlah Penduduk",
            data: this.handleJumlah,
            yAxis: 0,
          },
          {
            name: "Jumlah Penduduk / km²",
            data: this.handleJumlahKm2,
            type: "column",
            yAxis: 1,
          },
        ],
      };
    },
    //
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
      console.log(populasi);
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
        this.handlePulau2();
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
        .map((obj) => ({ name: obj.prov, y: obj.jumlah_penduduk }));
      this.pendudukSumatera = sumatera;

      // Jawa
      const pulauJawa = ["JAWA", "DKI", "BANTEN", "YOGYA"];
      const jawa = this.dataKependudukan
        .filter((obj) => pulauJawa.some((prefix) => obj.prov.includes(prefix)))
        .map((obj) => ({ name: obj.prov, y: obj.jumlah_penduduk }));
      this.pendudukJawa = jawa;

      // Kalimantan
      const pulauKalimantan = ["KALIMANTAN"];
      const kalimantan = this.dataKependudukan
        .filter((obj) =>
          pulauKalimantan.some((prefix) => obj.prov.includes(prefix))
        )
        .map((obj) => ({ name: obj.prov, y: obj.jumlah_penduduk }));
      this.pendudukKalimantan = kalimantan;

      // bali
      const pulauBali = ["BALI"];
      const bali = this.dataKependudukan
        .filter((obj) => pulauBali.some((prefix) => obj.prov.includes(prefix)))
        .map((obj) => ({ name: obj.prov, y: obj.jumlah_penduduk }));
      this.pendudukBali = bali;

      // sulawesi
      const pulauSulawesi = ["SULAWESI", "GORONTALO"];
      const sulawesi = this.dataKependudukan
        .filter((obj) =>
          pulauSulawesi.some((prefix) => obj.prov.includes(prefix))
        )
        .map((obj) => ({ name: obj.prov, y: obj.jumlah_penduduk }));
      this.pendudukSulawesi = sulawesi;

      // nusa
      const pulauNusa = ["NUSA"];
      const nusa = this.dataKependudukan
        .filter((obj) => pulauNusa.some((prefix) => obj.prov.includes(prefix)))
        .map((obj) => ({ name: obj.prov, y: obj.jumlah_penduduk }));
      this.pendudukNusa = nusa;

      // maluku
      const pulauMaluku = ["MALUKU"];
      const maluku = this.dataKependudukan
        .filter((obj) =>
          pulauMaluku.some((prefix) => obj.prov.includes(prefix))
        )
        .map((obj) => ({ name: obj.prov, y: obj.jumlah_penduduk }));
      this.pendudukMaluku = maluku;

      // papua
      const pulauPapua = ["PAPUA", "P A P U A"];
      const papua = this.dataKependudukan
        .filter((obj) => pulauPapua.some((prefix) => obj.prov.includes(prefix)))
        .map((obj) => ({ name: obj.prov, y: obj.jumlah_penduduk }));
      this.pendudukPapua = papua;
    },

    handlePulau2() {
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
    },
  },
};
</script>
