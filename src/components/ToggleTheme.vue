<script setup lang='ts'>
import { toggleDark } from '~/logics'
</script>

<template>
  <span class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <div i-ri-sun-line dark:i-ri-moon-line />
  </span>
</template>
