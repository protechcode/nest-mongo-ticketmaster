

<template>
  <div class="asd">
    

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
              <!-- <span class="sr-only">Toggle navigation</span>
		                    <span class="icon-bar"></span>
		                    <span class="icon-bar"></span>
		                    <span class="icon-bar"></span> -->
            </button>
            <a class="navbar-brand" href="localhost:3000/ticket">
              <img class="img-responsive" src="./images/logo.png" alt="logo" />
            </a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="scroll active"><a href="#home">Home</a></li>
              <li class="scroll"><a href="#explore">Explore</a></li>
              <li class="scroll"><a href="#event">Event</a></li>
              <li class="scroll"><a href="#about">About</a></li>
              <li class="no-scroll"><a href="#twitter">Twitter</a></li>
              <li>
                <a class="no-scroll" href="#" target="_blank"
                  >PURCHASE TICKETS</a
                >
              </li>
              <li class="scroll"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <!-- </div> -->
      </div>
      
	  
    
    <section id="home">
      <div id="main-slider" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#main-slider" data-slide-to="0" class="active"></li>
          
        </ol>
        <div class="carousel-inner">
          <div class="item active">
            <img
              class="img-responsive"
              src="./images/slider/bg1.jpg"
              alt="slider"
            />
            <div class="carousel-caption">
              <h2>register for our next event</h2>
              <h4>full event package only @$199</h4>
              <a href="#contact"
                >GRAB YOUR TICKETS <i class="fa fa-angle-right"></i
              ></a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>
 
<script>
export default {
  name: 'Carrousel',
};
</script>
    
<style scoped>
/* @import "css/font-awesome.min.css"; */
@import 'css/main.css';
@import 'css/animate.css';
@import 'css/responsive.css';
@import 'css/bootstrap.min.css';
@import 'css/font-awesome.min.css';


.asd{
  position: relative;
  
}

</style>
