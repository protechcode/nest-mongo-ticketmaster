<template>
  <div class="container">
    <h1>Usuarios</h1>
    <div class="new-User">
      <form class="align-content " @submit.prevent="newUser">
        <div class="form-group">
          Nombre del usuario
          <input v-model="name" type="text" class="form-control-s" />
        </div>
        <div class="form-group">
          Apellido del Usuario
          <input v-model="username" type="text" class="form-control-s" />
        </div>
        <div class="form-group">
          Telefono del Usuario
          <input v-model="phone" type="text" class="form-control-s" />
        </div>
        <div class="form-group">
          Email del Usuario
          <input v-model="email" type="email" class="form-control-s" />
        </div>
        <div class="form-group">
          Password del Usuario
          <input v-model="password" type="password" class="form-control-s" />
        </div>
        <div class="form-group">
          Password del Usuario
          <input v-model="password" type="text" class="form-control-s" />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="false"
            id="flexCheckDefault"
            v-model="isAdmin"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Is Admin
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <ul v-for="(usuario, id) in usuarios" :key="id">
      <li>
        <div class="card">
          <div class="w3-container w3-center">
            <p>Name: {{ usuario.name }}</p>
            <p>Surname: {{ usuario.surname }}</p>
            <p>Phone: {{ usuario.phone }}</p>
            <p>Email: {{ usuario.email }}</p>
            <p>Password: {{ usuario.password }}</p>
            <p>Id: {{ usuario._id }}</p>

            <button @click="deleteUser(usuario._id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
            <button @click="isHidden = !isHidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
            <div v-if="isHidden"> 
              <form @submit.prevent="updateUser(usuario._id)">
                <div class="form-group">
                  Nombre del usuario
                  <input v-model="name" type="text" class="form-control-s" />
                </div>
                <div class="form-group">
                  Apellido del Usuario
                  <input v-model="username" type="text" class="form-control-s" />
                </div>
                <div class="form-group">
                  Telefono del Usuario
                  <input v-model="phone" type="text" class="form-control-s" />
                </div>
                <div class="form-group">
                  Email del Usuario
                  <input v-model="email" type="email" class="form-control-s" />
                </div>
                <div class="form-group">
                  Password del Usuario
                  <input v-model="description" type="password" class="form-control-s" />
                </div>
                <div class="form-group">
                  Password del Usuario
                  <input v-model="description" type="text" class="form-control-s" />
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="false"
                    id="flexCheckDefault"
                    v-model="isAdmin"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Is Admin
                  </label>
            </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'AddNewUser',
  data() {
    return {
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        isAdmin: false,
        usuarios: {},
        id: '',
        isHidden:'',
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const response = await axios.get('/user');
      console.log(response.data);
      this.usuarios = response.data;
      const data = response.data;
      for (var i = 0; i < data.length; i++) {
        const obj = data[i];
        this.id = obj._id;
      }
    },
    async deleteUser(id) {
     alert('You deleted this event, information could be lost forever')
      
        const response = await axios.delete('user/delete?userID=' + id);
        console.log(response)      
    },
    async updateUser(id) {
      
      const response = await axios.put(`user/update?userID=` + id, {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        email: this.email,
        password: this.password,
        isAdmin: this.isAdmin
      });
      console.log(response);
    },
    async newUser () {
      const response = await axios.post('user/create', {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        email: this.email,
        password: this.password,
        isAdmin: this.isAdmin
      })
      console.log(response);
    }
  },
};
</script>
<style scoped>
form {
  display: grid;
  align-items: center;
}
.card {
  border: red solid 2px;
}
</style>>