<template>
  <div class="container-fluid home-content">
    <button @click="navigateTo('/profile')">Go to Dashboard</button>
    <site-title />
    <fong />
  </div>
</template>
<script setup>
useSeoMeta({ title: 'ITE | Home' })
// navigateTo('/dashboard')
</script>
