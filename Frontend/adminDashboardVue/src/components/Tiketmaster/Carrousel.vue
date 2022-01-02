

<template>
  <div :user="user" class="componentWrapper">
    <div class="main-nav">
      <div class="container">
        <div class="header-top">
          <div class="pull-right social-icons">
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-google-plus"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="localhost:3000/ticket">
            <img class="img-responsive" src="./images/logo.png" alt="logo" />
          </a>
        </div>
        <div class="collapse navbar-collapse">
          <ul v-if="!token" class="nav navbar-nav navbar-right">
            <li class="scroll active"><a href="#home">Home</a></li>
            <li class="scroll"><a href="#explore">Explore</a></li>
            <li class="scroll"><a href="#event">Event</a></li>
            <li class="no-scroll"><a href="/userlogin">Login</a></li>
            <li class="no-scroll"><a href="/register">Register</a></li>
            <li>
              <a
                class="no-scroll"
                href="https://www.ticketmaster.es/"
                target="_blank"
                >PURCHASE TICKETS</a
              >
            </li>
            <li class="scroll"><a href="#contact">Contact</a></li>
          </ul>
          
          <ul v-if="token" class="nav navbar-nav navbar-right">
            <li :name="name" class="scroll"><a href="#event">Hello, {{ name }}</a> </li>
            <li class="scroll active"><a href="#home">Home</a></li>
            <li class="scroll"><a href="#explore">Explore</a></li>
            <li class="scroll"><a href="#event">Event</a></li>
            <li>
              <a
                class="no-scroll"
                href="https://www.ticketmaster.es/"
                target="_blank"
                >PURCHASE TICKETS</a
              >
            </li>
            <li class="scroll"><a href="/ticket" @click="logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    <section id="home">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="./images/carousel/concert.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="./images/carousel/concert2.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="./images/carousel/concert3.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        <div class="carousel-caption">
          <h2>register for our next event</h2>
          <h4>full event package only @$199</h4>
          <a href="#contact"
            >GRAB YOUR TICKETS <i class="fa fa-angle-right"></i
          ></a>
        </div>
      </div>
    </section>
  </div>
</template>
 
<script>
export default {
  name: "Carrousel",
  components: {},
  data() {
    return {
      user: {},
      name : '',
      token: localStorage.getItem("token")
    };
  },
  methods: {
    getUser() {
      const token = localStorage.getItem("token");
      const name = localStorage.getItem("userName");
      const lastName = localStorage.getItem(" userLastname");
      const email = localStorage.getItem("userEmail");
      const phone = localStorage.getItem("phone");
      const id = localStorage.getItem("id");
      const authenticated = localStorage.getItem("authenticated");
      this.user = {
        token: token,
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        id: id,
        authenticated: authenticated,
      };
      this.name = name;
      
    },
    logout(){
      
      const token = localStorage.removeItem("token");
      const name = localStorage.removeItem("userName");
      const lastName = localStorage.removeItem(" userLastname");
      const email = localStorage.removeItem("userEmail");
      const phone = localStorage.removeItem("phone");
      const id = localStorage.removeItem("id");
      const authenticated = localStorage.removeItem("authenticated");
      
      
    }
  },
  created(){
    this.getUser();
  },
};
</script>
    
<style scoped>
/* @import "css/font-awesome.min.css"; */
@import "css/main.css";
@import "css/animate.css";
@import "css/responsive.css";
@import "css/bootstrap.min.css";
@import "css/font-awesome.min.css";

.asd {
  position: relative;
}
</style>
