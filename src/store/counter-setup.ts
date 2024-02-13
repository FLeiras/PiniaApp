import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterSetupStore = defineStore('counterSetup', () => {
  const count = ref<number>(0)
  const lastChanged = ref<Date>()

  const incrementBy = (value: number) => {
    count.value += value
    lastChanged.value = new Date()
  }

  const reset = () => {
    count.value = 0
    lastChanged.value = undefined
  }

  return {
    //* State Properties
    count,
    lastChanged,

    //* Getters
    squareCount: computed(() => count.value * count.value),

    //* Actions
    incrementBy,
    increment: () => incrementBy(1),
    reset
  }
})
