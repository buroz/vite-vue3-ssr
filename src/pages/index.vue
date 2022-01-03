<template>
  <!-- <h1 class="text-3xl font-bold underline">{{ t('HELLO') }}</h1> -->
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

  <div v-if="!posts">Loading...</div>
  <div v-else>
    <ul>
      <li 
        v-for="(post, i) in posts" 
        v-bind:key="i" 
      >
        <RouterLink :to="`/p/${post.id}`">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useAsyncData } from "../helpers";

interface RequestData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const posts = await useAsyncData<RequestData[]>(
  "home",
  "https://jsonplaceholder.typicode.com/posts",
  {
    axiosConfig: {},
    awaitSetup: false,
  }
);
</script>