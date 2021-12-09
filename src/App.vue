<template>
  <div id="app">
    <users-list @addUser="saveUser($event)"></users-list>
    <users-modal :users="users"></users-modal>
  </div>
</template>

<script>
import UsersList from "./components/UsersList.vue";
import UsersModal from "./components/UsersModal.vue";

export default {
  name: "App",

  data() {
    return {
      users: []
    };
  },

  components: {
    UsersModal,
    UsersList
  },
  methods: {
    saveUser(data) {
      let result = {
        name: data.name,
        phone: data.phone
      };

      data.name && data.phone ? this.users.push(result) : "";

      if (data.admin) {
        data.name && data.phone
          ? this.users
              .find(user => user.name === data.admin)
              ._children.push(result) && this.users.pop()
          : "";
      }

      localStorage.setItem("users", JSON.stringify(this.users));
    },
    getList() {
      this.users = JSON.parse(localStorage.getItem("users")) || [];
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 440px;
  margin: 60px auto 0;
  padding: 0 20px;
}
.v-application--wrap {
  min-height: 0vh !important;
}
</style>
