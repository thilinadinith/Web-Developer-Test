<!-- PWAPrompt.vue -->
<template>
  <div v-if="shown" class="pwa-message">
        Add app to home screen?

   <div class="pull-right">
    <b-button variant="primary" class="pwa-button" @click="installPWA">
      Install!
    </b-button>

    <b-button variant="secondary" class="pwa-button" @click="dismissPrompt">
      No, thanks
    </b-button>      
   </div>
    
  </div>
</template>
<style scoped lang="scss">
    .pwa-message{ 
        background-color: var(--black);
        color:var(--white);
        padding: 30px;
        position: fixed;
        z-index: 10000;
        width: 100%;
        bottom:0;
        .pwa-button { 
            margin: 10px;
        }
    }
</style>

<script>
export default {
  data: () => ({
    shown: false,
  }),

  beforeMount() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.installEvent = e
      this.shown = true
    })
  },

methods: {
    dismissPrompt() {
      this.shown = false
    },

    installPWA() {
      this.installEvent.prompt()
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt() // Hide the prompt once the user's clicked
        if (choice.outcome === 'accepted') {
          // Do something additional if the user chose to install
        } else {
          // Do something additional if the user declined
        }
      })
    },
  }
}
</script>