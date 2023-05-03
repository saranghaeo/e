import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


export const useMyStore = defineStore({
  id: 'user',
  state: () => ({
    data: null
  }),
  actions: {
    async sendDataToSupabase(payload) {
      const { data, error } = await supabase.from('users').insert(payload)
      
      if (error) {
        console.error(error)
        return
      }
      
      console.log(data)
    }
  }
})