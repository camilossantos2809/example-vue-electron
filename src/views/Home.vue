<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
<DataTable :rows="prods"/>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import DataTable from '@/components/DataTable.vue';
import { ipcRenderer as ipc } from 'electron';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    DataTable,
  },
})
export default class Home extends Vue {
  public prods = [];
  public mounted() {
    ipc.on('testePg', (event: any, arg: any) => {
      this.prods = arg;
    });
  }
}
</script>
