<template>
  <div class="modal">
    <v-app id="inspire" :style="{ height: '45px' }">
      <div class="text-center">
        <v-dialog v-model="modal" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Добавить
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Добавить сотрудника
            </v-card-title>

            <label class="modal__label">
              <h5 class="modal__title">Имя</h5>
              <input class="modal__input" type="text" v-model="info.name" />
              <h5 class="modal__title">Телефон</h5>
              <input class="modal__input" type="text" v-model="info.phone" />
              <h5 class="modal__title">Начальник</h5>
              <select class="modal__input" v-model="info.admin">
                <option v-for="(item, index) in users" :key="index">
                  {{ item.name }}
                </option>
              </select>
            </label>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  modal = false;
                  addUser();
                "
              >
                Добавить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "PeopleNew",
  data() {
    return {
      users: [],
      modal: false,
      info: {
        name: "",
        phone: "",
        admin: ""
      }
    };
  },
  methods: {
    addUser() {
      let result = {
        name: this.info.name,
        phone: this.info.phone,
        admin: this.info.admin
      };
      this.users.push(result);
      this.$emit("addUser", this.info);
      this.info.name = "";
      this.info.phone = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.modal__input {
  border: 2px solid #1976d2;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 15px;
}
.modal__label {
  margin-top: 30px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
}
.modal__title {
  font-size: 16px;
  margin-bottom: 5px;
}
</style>