<template>
  <div id="app">
    <flashcards/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Flashcards from './components/Flashcards.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Flashcards,
  },
});
</script>
