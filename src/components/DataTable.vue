<template>

      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="rows"
        :pagination.sync="pagination"
        select-all
        item-key="name"
        class="elevation-1"
      >
        <template v-slot:headers="props">
          <tr>
            <th>
              <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                primary
                hide-details
                @click.stop="toggleAll"
              ></v-checkbox>
            </th>
            <th
              v-for="header in props.headers"
              :key="header.text"
              :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
              @click="changeSort(header.value)"
            >
              <v-icon small>arrow_upward</v-icon>
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template v-slot:items="props">
          <tr :active="props.selected" @click="props.selected = !props.selected">
            <td>
              <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
            </td>
            <td class="text-xs-right">{{ props.item.prod_codigo }}</td>
            <td class="text-xs-right">{{ props.item.prod_codbarras }}</td>
            <td>{{ props.item.prod_descricao }}</td>
          </tr>
        </template>
      </v-data-table>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DataTable extends Vue {
  @Prop({default: () => []})
  public rows: any[];
  public pagination = {
    sortBy: 'prod_codigo',
  };
  public selected = [];
  public headers = [
    { text: 'Código', value: 'prod_codigo' },
    { text: 'Descrição', value: 'prod_descricao' },
    { text: 'Cod. Barras', value: 'prod_codbarras' },
  ];
  public toggleAll() {
    if (this.selected.length) { this.selected = []; }
    else { this.selected = this.rows.slice(); }
  }
  public changeSort(column: any) {
    if (this.pagination.sortBy === column) {
      this.pagination.descending = !this.pagination.descending;
    } else {
      this.pagination.sortBy = column;
      this.pagination.descending = false;
    }
  }
}
</script>
