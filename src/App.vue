<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="testePg">
          <v-list-tile-action>
            <v-icon>dns</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Teste PG</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <Home/>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Home from '@/views/Home.vue';
import { ipcRenderer as ipc } from 'electron';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Home,
  },
  props: {
    source: String,
  },
})
export default class App extends Vue {
  public drawer = null;
  public testePg() {
    ipc.send('testePg', { descricao: '%heineken%' });
    console.log('Teste PG!!');
  }
}
</script>
