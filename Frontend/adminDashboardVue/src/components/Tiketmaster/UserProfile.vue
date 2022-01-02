<template>
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
</template>
<script>
export default {
  name: 'UserProfile'
}
</script>