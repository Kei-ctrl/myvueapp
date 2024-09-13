// src/components/Posts.vue
<template>
  <div>
    <!-- コンポーネントのテンプレート -->
  </div>
</template>

<script>
import { getPosts, createPost } from '../api/posts';

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await getPosts();
        this.posts = response.data;
      } catch (error) {
        console.error('There was an error!', error);
      }
    },
    async addPost(newPost) {
      try {
        await createPost(newPost);
        this.fetchPosts(); // 再度ポストを取得する
      } catch (error) {
        console.error('There was an error!', error);
      }
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>
