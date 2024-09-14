<template>
  <div>
    <TinderCard
      v-for="(attraction, index) in attractions"
      :key="index"
      :attraction="attraction"
      @swiped="onSwiped"
    >
      <h3>{{ attraction.name }}</h3>
      <p>{{ attraction.description }}</p>
      <p>Location: {{ attraction.latitude }}, {{ attraction.longitude }}</p>
i    </TinderCard>
  </div>
</template>

<script>
import TinderCard from 'vue-tinder';

export default {
  name: 'SwiperComponent',
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
