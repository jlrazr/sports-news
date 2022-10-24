<template>
  <div id="menu" v-on:keyup.enter="isActive = !isActive">
    <div id="menu-bar" @click="isActive = !isActive" v-bind:class="{ change: isActive }">
      <div id="bar1" class="bar"></div>
      <div id="bar2" class="bar"></div>
      <div id="bar3" class="bar"></div>
    </div>
    <nav id="nav" v-bind:class="[{ change: isActive }, 'nav']">
      <li class="nav-item">
        <router-link tabindex="1" data-item="HOME" to="/">HOME</router-link>
      </li>
      <li class="nav-item" v-if="!autorized">
        <a tabindex="2" data-item="LOGIN" :href="urlLogin">LOGIN</a>
      </li>
      <li class="nav-item" v-if="autorized">
        <router-link tabindex="3" data-item="CREATEPOST" to="/create-post">CREATE POST</router-link>
      </li>
      <li class="nav-item" v-if="autorized">
        <router-link tabindex="4" data-item="PROFILE" to="/profile">PROFILE</router-link>
      </li>
    </nav>
  </div>
  <div id="menu-bg" v-bind:class="[{ 'change-bg': isActive }, 'menu-bg']"></div>
</template>

<script>

export default {
  name: "MainNav",
  data() {
    return {
      isActive: false,
      urlLogin: `${process.env.VUE_APP_LOGIN_ENDPOINT}/api/connect/auth0`,
      autorized: false
    };
  },
  watch: {
    $route() {
      this.autorized = this.$authService.loggedIn();
    }
  },
};
</script>

<!-- "scoped" attribute limits SCSS to this component only -->
<style scoped lang="scss">
// vars for media queries
$medium: 768px;

#menu {
  top: 0;
  right: 20px;
  position: absolute;
  z-index: 2;

  @media screen and (min-width: $medium) {
    position: relative;
  }
}

#menu-bar {
  width: 45px;
  height: 40px;
  margin: 30px 0 20px 20px;
  cursor: pointer;

  @media screen and (min-width: $medium) {
    display: none;
  }
}

.bar {
  height: 5px;
  width: 100%;
  background-color: #dc052d;
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
}

#bar1 {
  transform: translateY(-4px);
}

#bar3 {
  transform: translateY(4px);
}

.nav {
  transition: 0.3s ease;
  display: none;

  ul {
    padding: 0 22px;
  }

  li {
    list-style: none;
    padding: 12px 0;
  }

  li a {
    color: white;
    font-size: 20px;
    text-decoration: none;
  }

  li a:hover {
    font-weight: bold;
  }

  @media screen and (min-width: $medium) {
    background: white;
    padding: 10px;
    list-style: none;
    display: inline-flex;

    li {
      margin: 0px 10px;

      a {
        text-decoration: none;
        color: #564f4f;
        font-size: 1em;
        font-weight: 600;
        transition: all 0.5s ease-in-out;
        position: relative;
        text-transform: uppercase;
      }
    }
  }
}

.menu-bg {
  top: 0;
  right: 20px;
  position: absolute;
}

.menu-bg {
  z-index: 1;
  width: 0;
  height: 0;
  margin: 30px 0 20px 20px;
  background: radial-gradient(circle, #dc052d, #dc052d);
  border-radius: 50%;
  transition: 0.3s ease;
}

.change {
  display: block;
}

.change .bar {
  background-color: white;
}

.change #bar1 {
  transform: translateY(4px) rotateZ(-45deg);
}

.change #bar2 {
  opacity: 0;
}

.change #bar3 {
  transform: translateY(-6px) rotateZ(45deg);
}

.change-bg {
  width: 520px;
  height: 460px;
  transform: translate(50%, -30%);
}
</style>
