<template>
  <div id="section-navbar">
    <div class="navbar">
      <nav class="navbar navbar-expand-lg" v-bind:class="{ navbarOpen: show }">
        <div class="container">
          <router-link to="/"
            ><img :src="require('../assets/vendor/Images/mainlogo.png')" alt=""
          /></router-link>
          <button
            class="navbar-toggler"
            type="button"
            @click="toggleNav"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            v-bind:class="{ show: show }"
          >
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/browse-job">Browse a Job</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/personal-info">Post A Job</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/">Build/Upload Resume</router-link>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item spec">
                <router-link to="/">Post A Job</router-link>
              </li>
              <li v-if="getprofile" class="nav-item">
                {{getprofile.first_name}}
              </li>
              <li v-else>
                <button @click="showSignUpModal">Sign in</button>
                <!-- sign up modal -->
                <SignUpModal ref="modal"></SignUpModal>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// import signup modal component
import { Component, Vue, Watch } from "vue-property-decorator";

import SignUpModal from "./SingupModal";
import { Action, Getter } from "vuex-class";
import { namespaced } from "../store/utils";
import { NS_USER } from "../store/namespace.names";
import { GET_TOKEN, GET_PROFILE } from "../store/getter.names";

@Component({
  name: "Navbar",
  components: {
    SignUpModal,
  },
})
export default class Navbar extends Vue {
  @Getter(namespaced(NS_USER, GET_PROFILE)) getprofile;
  @Getter(namespaced(NS_USER, GET_TOKEN)) gettoken;

  show = false;
  // show login modal
  showSignUpModal() {
    this.$refs.modal.show();
  }
  toggleNav() {
    this.show = !this.show;
  }

  mounted() {
    
  }
}
</script>

<style scoped>
</style>