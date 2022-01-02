<template>
  <div>
    <Carrousel />
    <ApiCall />
    <About />
    <Twitter />
    <Event />
    <Contact />

    <footer id="footer">
      <div class="container">
        <div class="text-center">
          <p>
            Copyright &copy;2014<a
              target="_blank"
              href="http://shapebootstrap.net/"
            >
              Evento </a
            >Theme. All Rights Reserved. <br />
            Designed by
            <a target="_blank" href="http://shapebootstrap.net/"
              >ShapeBootstrap</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
 
<script>
import Event from "./Event.vue";
import About from "./About.vue";
import Twitter from "./Twitter.vue";
import Carrousel from "./Carrousel.vue";
import Contact from "./Contact.vue";
import ApiCall from "./ApiCall.vue";

export default {
  components: { About, Event, Twitter, Carrousel, Contact, ApiCall },
  name: "Home",
};
</script>
    
<style scoped>
/* @import "css/font-awesome.min.css"; */
@import "css/main.css";
@import "css/animate.css";
@import "css/responsive.css";
@import "css/bootstrap.min.css";
@import "css/font-awesome.min.css";
</style>
