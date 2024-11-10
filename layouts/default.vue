<template>
  <div>
    <Loading />
    <PageHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
<script setup>
import { useAuthStore } from '~/store/auth'
const { isLoggedIn } = useAuthenticate()
if (isLoggedIn.value) {
  await useAuthStore().getMe()
}
</script>
