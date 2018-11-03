<template>
  <v-app v-if="auth">
    <Shortlinks/>
  </v-app>
  <v-app v-else>
    ...
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Shortlinks from './components/Shortlinks.vue'
import auth from '@/auth'
import Oidc from 'oidc-client'

export default Vue.extend({
  name: 'app',
  components: {
    Shortlinks,
  },
  data: () => ({
    auth: undefined as Oidc.User | undefined,
  }),
  async created() {
    this.auth = await auth()
  },
})
</script>
