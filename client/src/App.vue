<template>
<div class="back">
  <v-app dark id="comp">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Chaim Finson's Website  </span>
        <span class="font-weight-light">Built with Vue-NodeJS-MongoDB</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <span class="mr-2">Download my CV</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Main/>
    </v-content>
  </v-app>
</div>
</template>

<script>
import Main from './components/Main/index'

export default {
  name: 'App',
  components: {
    Main
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
  #comp {
  background: none;
}
.back {
  background-image: url("./assets/opt1.jpg");
  background-size: cover;
}
</style>
