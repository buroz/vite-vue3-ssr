---
title: selam
meta:
  - name: description
    content: naber
---

## {{ post?.body }}

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAsyncData } from "../../helpers";

const route = useRoute();

const post = await useAsyncData(
  "post",
  `https://jsonplaceholder.typicode.com/posts/${route.params.slug}`,
  {
    axiosConfig: {},
    awaitSetup: false,
  }
);
</script>
