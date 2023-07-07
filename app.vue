<script setup lang="ts">
import { Magic } from '@magic-sdk/admin';

const magic = new Magic('YOUR_PUBLISHABLE_KEY');
const version = 2 + 1

try {
await magic.users.getMetadataByIssuer('14sdfg35');
} catch (e) {
  console.log(e);
}
</script>

<template>
  <div class="hello">
    Hello Nuxt {{ version }}!
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
