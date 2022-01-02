<template>
  <div class="container">
    <h1>FUNCIONES EN ESPAÑA</h1>
   <section id ="explore">
      <div class="list">
      <ul v-for="(evento, id) in eventos" :key="id">
        <li>
          <div class="card" style="width: 19rem">
            <img
              class="card-img-top"
              :src="evento.images[0].url"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5><strong class="card-title>">{{ evento.name }}</strong></h5>
              <p class="card-text">
               <strong>Fecha de presentación:  {{ evento.dates.start.localDate }}</strong>
              </p>
              <p class="card-text">
                <strong>Fecha de venta: {{ evento.sales.public.startDateTime }}</strong>
                 
              </p>
              <p class="card-text">
                <strong>Precio de venta: {{ evento.priceRanges[0].max}} {{ evento.priceRanges[0].currency }} </strong>
              </p>

              

              <a :href=" evento.url " class="btn btn-primary">Go To Ticket Sales</a>
            </div>
          </div>
          <p></p>
        </li>
      </ul>
    </div>
   </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    this.getEvent();
  },
  data() {
    return {
      eventos: {},
      images: {},
    };
  },
  methods: {
    async getEvent() {
      const response = await axios.get(
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=ES&apikey=g4SXlpwnPzFWGg9yNPgW5YFFtD0ejL09&size=60"
      );
      const marioRubio = response.data._embedded.events;

      console.log(marioRubio);
      this.eventos = marioRubio;
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
  .container{
     background-image: url("./images/about-bg.jpg");
     background-repeat: repeat;
     min-width: 100%;
     padding-top: 20px;
      font-family: 'Raleway'; 
      color:rgb(255, 255, 255);
  }
  .list{
    display: grid;
    grid-template-columns: repeat(5, 200px);
    gap: 70px;
  }
  .card {
    min-height: 500px;
    /* opacity: 0.9; */
    background: #1B7B98;
  }
  .card:hover{
    box-shadow: 11px 11px 11px rgba(33,33,33,.2); 
    opacity: 0.5;
  }

</style>