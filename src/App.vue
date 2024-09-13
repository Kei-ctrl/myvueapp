<template>
  <div id="app">
    <header>
      <h1>Attraction Swiper</h1>
    </header>
    <swiper :attractions="attractions" @swipe="handleSwipe" />
    <button @click="goToTop">Back to Top</button>
  </div>
</template>

<script>
import axios from 'axios';
import Swiper from './components/Swiper.vue';

export default {
  name: 'App',
  components: {
    Swiper
  },
  data() {
    return {
      attractions: []
    };
  },
  created() {
    axios.get('http://localhost:8000/api/attractions/')
      .then(response => {
        this.attractions = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    handleSwipe(result) {
      console.log(result);
      // Handle swipe result here (like sending to backend)
    },
    goToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  margin-bottom: 20px;
}
button {
  margin-top: 20px;
}
</style>
