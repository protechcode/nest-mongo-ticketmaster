<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        Registration
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Register to your Admin Dashboard</h3>" customHeader>
        <p class="widget-auth-info">
            Use your email to sign in.
        </p>
        <form class="mt" @submit.prevent="register">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" v-model="name" required type="text" placeholder="Name" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" v-model="surname" required type="text" name="text" placeholder="Surname" />
          </div>
          


          <div class="form-group">
            <input class="form-control no-border" v-model="email" required type="email" placeholder="Email" />
          </div>

          <div class="form-group">
            <input class="form-control no-border" v-model="password" required type="password" name="password" placeholder="Password" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" v-model="password_confirm" required type="password" name="password" placeholder="Confirm Password" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">Register</b-button>
          <p class="widget-auth-info">or sign in with</p>
          <!-- <div class="social-buttons">
            <b-button variant="primary" class="social-button mb-2">
              <i class="social-icon social-google"></i>
              <p class="social-text">GOOGLE</p>
            </b-button>
            <b-button variant="success" class="social-button">
              <i class="social-icon social-microsoft"></i>
              <p class="social-text">MICROSOFT</p>
            </b-button>
          </div> -->
        </form>
        <p class="widget-auth-info">
          Do you have an account? Sign in now!
        </p>
        <router-link class="d-block text-center" to="login">Sign in to your account</router-link>
      </Widget>
    </b-container>
    <!-- <footer class="auth-footer">
      2019 &copy; Sing App Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com/">Flatlogic</a>
    </footer> -->
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import axios from 'axios'


export default {
  name: 'RegisterPage',
  components: { Widget },
  data() {
            return {
                name: '',
                surname: '',
                email: '',
                password: '',
                password_confirm: '',
                errorMessage: null,
            }
  },
                 
  methods: {
    
    async register() {
      await axios.post('/user/create', {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm

      })


      /* const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      if (email.length !== 0 && password.length !== 0) {
        window.localStorage.setItem('authenticated', true);
        this.$router.push('/app/dashboard');
      } */
    },
  },
  created() {
    if (window.localStorage.getItem('authenticated') === 'true') {
      this.$router.push('/app/dashboard');
    }
  },
};
</script>
