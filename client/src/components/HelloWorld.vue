<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to My Page
        </h1>
        <p class="subheading font-weight-regular">
          Content coming soon...
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">How is this made and deployed</h2>

        <v-layout justify-center>
          This site was created using vue-cli3 for the frontend, Vuetify was added from the getgo in addition to separate concerns the app 
          Utilizes vue-compose which is package for writing High Order Compoents in a composable way
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">On the Back End</h2>

        <v-layout justify-center>
          We have used NodeJS communicating with mongoDB
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>
          This is a function which mutates the props then returns another value: {{customFunction()}}
        <div v-if="List && List.length">
         <h1>This is Data from mongoDB Atlas: {{ List }}</h1> 
         <h2>Currently the data only displays if running the server locally</h2>
         </div>
         <h1 v-else>Loading...</h1>
        Here will be a loading component
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['propsToPlayWith','customFunction','fetchList','List'],
    created(){
      this.fetchList();
    }
  }
</script>

<style>

</style>
