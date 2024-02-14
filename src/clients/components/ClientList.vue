<script setup lang="ts">
</script>

<template>
  <ul>
    <RouterLink :to="{
      name: 'client-id',
      params: { id: 1 }
    }">
      Client name
    </RouterLink>
  </ul>
</template>

<style scoped></style>
