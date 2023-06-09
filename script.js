const app = Vue.createApp({
  data() {
    return {
      arrSongs: [],
    };
  },
  methods: {
    requestSongs() {
      axios
        .get("http://localhost:8888/php-dischi-json/server.php")
        .then((response) => (this.arrSongs = response.data));
    },
  },
  created() {
    this.requestSongs();
  },
});

app.mount("#app");
