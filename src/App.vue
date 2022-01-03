<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "./components/partials/Header.vue";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Header />
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>