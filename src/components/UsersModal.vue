<template>
  <vue-ads-table-tree :columns="columns" :rows="rows" class="tree">
    <template slot="top">
      <span></span>
    </template>
    <template slot="Name" slot-scope="props">
      <a target="_blank">{{ props.row.name }}</a>
    </template>
    <template slot="Phone" slot-scope="props">
      <a target="_blank">{{ props.row.phone }}</a>
    </template>
    <template slot="bottom">
      <span></span>
    </template>
  </vue-ads-table-tree>
</template>

<script>
import VueAdsTableTree from "vue-ads-table-tree";

export default {
  name: "UsersModal",

  components: {
    VueAdsTableTree
  },
  props: {
    users: []
  },

  data() {
    return {
      columns: [
        {
          property: "name",
          title: "Name",
          sortable: true,
          direction: null
        },
        {
          property: "phone",
          title: "Phone",
          sortable: true,
          direction: null
        }
      ],
      rows: this.users
    };
  }
};
</script>