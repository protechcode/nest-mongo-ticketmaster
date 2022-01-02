<template>
  <div class="auth-page">
    
    <b-container>
        
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        Ticket Master
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your TicketMaster Account</h3>" customHeader>
        <p class="widget-auth-info">
            Use your email to sign in.
        </p>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" v-model="email" required type="email" name="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" v-model="password" required type="password" name="password" placeholder="Password" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">Login</b-button>
          <p class="widget-auth-info">or sign in with</p>
          
        </form>
        <p class="widget-auth-info">
          Don't have an account? Sign up now!
        </p>
        <router-link class="d-block text-center" to="register">Create an Account</router-link>
      </Widget>
    </b-container>
    
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
 import axios from 'axios'
 import Carousel from '../../components/Tiketmaster/Carrousel.vue'



export default {
  name: 'UserLogin',
  components: { Widget, Carousel},
  data() {

    return {
      email: '',
      password: '',
      token: '',
      errorMessage: null,
    };
  },
  methods: {
    async login() {
    

    const response = await axios.post('/auth/login', {
      username: this.email,
      password: this.password,
      
    });
    const data = response.data;
    const token = data.access_token; 
    const user = data.payload;
    const userName = user.name;
    const userLastname = user.surname;
    const userEmail = user.email;
    const phone = user.phone;
    const id = user._id;
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    localStorage.setItem(' userLastname',userLastname);
    localStorage.setItem('userEmail',userEmail);
    localStorage.setItem('phone', phone);
    localStorage.setItem('id', id);
    localStorage.setItem('authenticated', true);

    if (window.localStorage.getItem('authenticated') === 'true') {
      this.$router.push('/ticket');
    }
   
    },
  },
  created() {
    
  },
};
</script>
