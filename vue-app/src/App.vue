<template>
  <ul>
    <li v-for="post in Posts" :key="post.id"> <!-- Fix: Use "Posts" instead of "posts" -->
      {{ post.title }} 
    </li>
  </ul>
  <p v-if="error">{{ error }}</p>
</template>
<script>
import service from './services'
export default {
  data() {
    return {
      Posts: [], // Fix: Capitalize "Posts"
      error: null,
    };
  },
  methods: {
    async fetchProducts() {
      try {
        await service.post.postControllerGetAllPosts().then((res)=> {
          console.log('aaaaaaaa', res?.data);
          this.Posts = res?.data; // Fix: Use "Posts" instead of "posts"
        })
      } catch (error) {
        this.error = error.message;
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

