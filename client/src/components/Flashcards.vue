<template>
  <div>
    <div v-for="(value, key) in currentCard" v-bind:key="key">{{key }}: {{value}}</div>
    <button type="button" @click="nextCard">Next</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import sample from '../static/sample.json';
import axios from 'axios';

interface WordDefinition {
  [key: string]: string;
}

export default Vue.extend({
  methods: {
    nextCard() {
      this.current += 1;
      if (this.current >= this.response.length) {
        this.current = 0;
      }
    },
  },
  data() {
    return {
      response: sample as WordDefinition[],
      current: 0,
    };
  },
  computed: {
    currentCard(): WordDefinition {
      return this.response[this.current];
    },
  },
  mounted() {
    axios.get('/words/random/5').then((response) => {
      this.response = response.data as WordDefinition[];
    });
  },
});
</script>