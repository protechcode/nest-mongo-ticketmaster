<template>
    <div class="container">
        <h4>EditEvent</h4>
         <button @click="isHidden = !isHidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </button>
            <form v-if="!isHidden" @submit="updateEvent">
               <div class="card">
                    
                    <div class="form-group">
                        Nombre del evento
                        <input v-model="update_name" type="text" class="form-control-s" />
                    </div>
                    <div class="form-group">
                        Descripcion del Evento
                        <input v-model="update_description" type="text" class="form-control-s" />
                    </div>
                    <div class="form-group">
                        Imagen <input v-model="update_imageURL" type="text" class="form-control-s" />
                    </div>
                    <div class="form-group">
                        Precio entradas del Evento
                        <input v-model="update_price" type="text" class="form-control-s" />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
               </div>
            </form>
            

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'EditEvent',
    data() {
    return {
      name: "",
      description: "",
      imageURL: "",
      price: "",
      eventos: {},
      src: "",
      isHidden: false,
      update_name: "",
      update_description: "",
      update_imageURL: "",
      update_price: "",
      id:"",
    };
  },
  created() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      const response = await axios.get("evento/");
      console.log(response.data);
      this.eventos = response.data;
      const data = response.data;
      for(var i = 0; i <data.length; i++){
       const obj = data[i];
       
       this.id = obj._id
        }
      /* this.src= response.data.imageURL */
    },
    async updateEvent(){
      const id = this.id
      const response = await axios.put(`evento/update?eventoID=` + id, {

        name: this.update_name,
        description: this.update_description,
        imageURL: this.update_imageURL,
        price: this.update_price,
      })
      console.log(response)
    },
  }
}
</script>

<style scoped>
form {
  display: grid;
  align-items: center;
}
.card{
  border:red solid 2px; 
}
</style>>
