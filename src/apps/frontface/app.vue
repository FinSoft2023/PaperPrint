<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const links = [ {
  label: 'Home',
  to: '/',
  icon: 'i-heroicons-home'
}, {
  label: 'Template',
  to: '/paper/empty',
  icon: 'i-heroicons-document-magnifying-glass',
  badge: 'New'
}, {
  label: 'Sample',
  to: '/paper/sample',
  icon: 'i-heroicons-document',
}, {
  label: 'Sample w Data',
  to: '/paper/sampleWithData',
  icon: 'i-heroicons-document',
}];

provide('links', links);
</script>