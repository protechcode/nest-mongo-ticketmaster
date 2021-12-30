<template>
  <div class="container">
    <h1>Eventos</h1>
    <form @submit="newEvent">
      <div class="form-group">
        Nombre del evento
        <input v-model="name" type="text" class="form-control-s" />
      </div>
      <div class="form-group">
        Descripcion del Evento
        <input v-model="description" type="text" class="form-control-s" />
      </div>
      <div class="form-group">
        Imagen <input v-model="imageURL" type="text" class="form-control-s" />
      </div>
      <div class="form-group">
        Precio entradas del Evento
        <input v-model="price" type="text" class="form-control-s" />
      </div>
     
      <button type="submit" class="btn btn-primary">Submit</button>
      
    </form>
    <div class="card">
      <Eventos />
    </div>


    
  </div>
</template>

<script>

import axios from "axios";
import EditEvent from "./EditEvent.vue";
import Eventos from './Eventos.vue';

export default {
  name: "AddNewEvent",
    components: { 
      EditEvent,
        Eventos
    },
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
    async newEvent() {
      const response = await axios.post("evento/create", {
        name: this.name,
        description: this.description,
        imageURL: this.imageURL,
        price: this.price,
      });
      alert(response);
    },
    async deleteEvent(){
      const id = this.id;
      const response =await axios.delete(`evento/delete?eventoID=` + id);
      /* console.log(response) */
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
    }
  },
};
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
