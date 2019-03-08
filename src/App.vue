<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon
        @click="drawer = !drawer"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title class="black--text">Title</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      drawer: null
    }
  }
});
</script>
