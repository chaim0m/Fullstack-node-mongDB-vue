<template>
    <v-navigation-drawer
    stateless
    value="true"
    fixed
    floating
    clipped
    app
  >
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            
          >
            <v-list-tile-title v-text="'Hello'"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="'There'"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Actions</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-title v-text="'Boo'"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="'Ya!'"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
    export default {
        
    }
</script>