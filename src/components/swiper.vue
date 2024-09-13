<template>
  <div>
    <tinder-card
      v-for="(attraction, index) in attractions"
      :key="index"
      :attraction="attraction"
      @swiped="onSwiped"
    >
      <h3>{{ attraction.name }}</h3>
      <p>{{ attraction.description }}</p>
      <p>Location: {{ attraction.latitude }}, {{ attraction.longitude }}</p>
    </tinder-card>
  </div>
</template>

<script>
import TinderCard from 'vue-tinder-card';

export default {
  name: 'Swiper',
  components: {
    TinderCard
  },
  props: {
    attractions: Array
  },
  methods: {
    onSwiped(direction, index) {
      this.$emit('swipe', { direction, index });
    }
  }
};
</script>

<style>
/* スワイプカードのスタイルなどを追加 */
</style>
