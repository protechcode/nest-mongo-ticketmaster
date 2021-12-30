











<template>
    

<form @submit="newUser">
      <div class="form-group">
        Nombre del usuario
        <input v-model="name" type="text" class="form-control-s" />
      </div>
      <div class="form-group">
        Apellido del Usuario
        <input v-model="username" type="text" class="form-control-s" />
      </div>
      <div class="form-group">
        Telefone del Usuario
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






            <form v-if="!isHidden" @submit.prevent="updateEvent">
              <div class="card">
                <div class="form-group">
                  Id
                  <input
                    :id="id"
                    v-model="evento._id"
                    type="text"
                    class="form-control-s"
                    disabled
                  />
                </div>
                <div class="form-group">
                  Nombre del evento
                  <input
                    :id="id"
                    v-model="update_name"
                    type="text"
                    class="form-control-s"
                  />
                </div>
                <div class="form-group">
                  Descripcion del Evento
                  <input
                    :id="id"
                    v-model="update_description"
                    type="text"
                    class="form-control-s"
                  />
                </div>
                <div class="form-group">
                  Imagen
                  <input
                    :id="id"
                    v-model="update_imageURL"
                    type="text"
                    class="form-control-s"
                  />
                </div>desc
                <div class="form-group">
                  Precio entradas del Evento
                  <input
                    :id="id"
                    v-model="update_price"
                    type="text"
                    class="form-control-s"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>

 </template>

<script>
     async newEvent() {
      const response = await axios.post('evento/create', {
        name: this.name,
        description: this.description,
        imageURL: this.imageURL,
        price: this.price,
      });
      alert(response);
    },
    
    async updateEvent() {
      const id = this.id;
      const response = await axios.put(`evento/update?eventoID=` + id, {
        name: this.update_name,
        description: this.update_description,
        imageURL: this.update_imageURL,
        price: this.update_price,
      });
      console.log(response);
    },
</script>