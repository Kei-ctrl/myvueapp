import { createApp } from 'vue'
import App from './App.vue'
import { TinderCard } from 'vue-tinder';

const app = createApp(App).mount('#app')


app.component('TinderCard', TinderCard);


// Vue Devtools を有効化（開発中のみ有効）
if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true;
}



app.mount('#app');


