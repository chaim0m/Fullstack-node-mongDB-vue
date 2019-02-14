<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Chaim Finson's Website  </span>
        <span class="font-weight-light">Built with Vue-NodeJS-MongoDB</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
       
      >
        <span class="mr-2">Download my CV</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/index'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
