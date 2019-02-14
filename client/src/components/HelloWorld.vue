<template>
  <v-container text-xs-center>
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
 </v-layout>
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
        <h2 class="headline font-weight-bold mb-3">How this site was made and deployed</h2>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">Info</div>
          <v-card>
          <v-card-text>This site was created using vue-cli3 for the frontend, Vuetify was added from the getgo to style and expediate the development. In addtion
             addition in order to write clean code with separate concerns, where each section of the app only deals with ONE task vue-compose was used. Similar to architechture in React's recompose library vue-compose
             provides composable High Order Functions, where the logic and state is maintained there. The .vue files serve as the view and accept all data as props (with the exception of some local data needed for UI effects)
         <v-btn><span class="mr-2 move">Click to see some code</span>
      </v-btn>
         </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">On the Back End</h2>

        <v-layout justify-center>
          The App uses a NodeJS server to communicate with mongoDB
          <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">Info</div>
          <v-card>
          <v-card-text>
            MongoDB Atlas was used to store information. The NodeJS server connects to the DB and exposes information through different routes provided to the Front End. 
         <v-btn><span class="mr-2 move">Click to see some code</span></v-btn>
         </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
        </v-layout>
      </v-flex>
    <v-layout justify-center>
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
.move{
  justify-content: right
}
</style>
