<template>
  <div class="container-fluid home-content">
    <button @click="navigateTo('/profile')">Go to Dashboard</button>
    <site-title />
    <el-button type="primary" @click="ElMessage('hello')">Button</el-button>
  </div>
</template>
<script setup>
import { ElMessage } from "element-plus";

useSeoMeta({ title: "ITE | Home" });
// navigateTo('/dashboard')
</script>
