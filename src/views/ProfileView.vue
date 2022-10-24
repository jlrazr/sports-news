<template>
  <h1>Your Profile</h1>
  <div class="card">
    <img :src="userData.picture" :alt="userData.nickname" style="width:100%">
    <h2>{{ userData.nickname }}</h2>
    <p class="title" data-testid=eamil>{{ userData.email }}</p>
    <p>Email Verified: {{ userData.email_verified }}</p>
    <p><button id="logout" @click="logout">LOGOUT</button></p>
  </div>
</template>

<script>

export default {
  name: "ProfileView",
  data() {
    return {
      userData: {}
    }
  },
  mounted() {
    if (this.$authService.loggedIn()) {
      this.userData = this.$authService.getProfile();
    }
  },
  async beforeCreate() {
    if (!this.$authService.loggedIn()) {
      const dataValidation = await this.$authService.validateUser(this.$route.query.access_token);
      this.userData = dataValidation.user;
      this.$authService.setProfile(this.userData);
      this.$authService.setToken(dataValidation.jwt);
    }
  },
  methods: {
    logout() {
      this.$authService.logout();
      this.$router.push('/');
    }
  }
};
</script>
<style scoped lang="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 10px auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>
