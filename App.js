
  const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('portfolio!')
      return {
        message
      }
    }
  }).mount('#App')