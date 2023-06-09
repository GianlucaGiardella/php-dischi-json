const app = Vue.createApp({
  data() {
    return {
      arrSongs: [],
      activeSong: {},
    };
  },
  methods: {
    requestSongs() {
      axios
        .get("http://localhost:8888/php-dischi-json/server.php")
        .then((response) => (this.arrSongs = response.data));
    },
    showActiveSong(song) {
      this.arrSongs.includes(song) ? (this.activeSong = { ...song }) : {};
    },
    removeActiveSong() {
      this.activeSong = {};
    },
  },
  created() {
    this.requestSongs();
  },
});

app.mount("#app");
