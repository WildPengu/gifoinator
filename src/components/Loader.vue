<template>
  <fa icon="spinner" class="spinner-icon" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Search extends Vue {}
</script>

<style scoped>
.spinner-icon {
  font-size: 35px;
  color: white;
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>