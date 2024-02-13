<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetupStore } from '@/store/counter-setup'
import CounterSetupValue from '../components/CounterSetupValue.vue';

const counterOptions = useCounterSetupStore()
const { count, squareCount } = storeToRefs(counterOptions)
const { increment, incrementBy, reset } = counterOptions

</script>

<template>
  <h1>Pinia Setup</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>

  <br>
  <button @click="increment()">+1</button>
  <button @click="incrementBy(2)">+2</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="reset">Reset</button>

  <br>
  <CounterSetupValue />
</template>

<style scoped>
button {
  margin-right: 5px;
}

</style>
