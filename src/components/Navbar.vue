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
                <router-link  to="/personal-info">Post A Job</router-link>
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
                <div class="loggedin-profile-info">
                  <div class="jobs">
                    <router-link to="/">
                      <img
                        :src="
                          require('../assets/vendor/Images/applied-job.png')
                        "
                        alt=""
                        srcset=""
                      />
                    </router-link>
                  </div>
                  <div class="notification">
                    <button><i class="fas fa-bell"></i></button>
                  </div>
                  <div class="profile">
                    <div class="profile-image-section">
                      <img
                        :src="
                          require('../assets/vendor/Images/personal-info.png')
                        "
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div class="button">
                      <button @click="openDetails">Profile</button>
                      <div
                        v-if="profile_details"
                        class="button-open-section-profile"
                      >

                      <div class="section">
                          <div class="icon">
                            <img
                              :src="
                                require('../assets/vendor/Images/google.png')
                              "
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div class="link">
                            <router-link to="#">{{getprofile.email}}</router-link>
                          </div>
                        </div>


                        <div class="section">
                          <div class="icon">
                            <img
                              :src="
                                require('../assets/vendor/Images/p-info.png')
                              "
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div class="link">
                            <router-link to="/personal-info">Profile Details</router-link>
                          </div>
                        </div>
                        <div class="section">
                          <div class="icon">
                            <img
                              :src="
                                require('../assets/vendor/Images/view-resume.png')
                              "
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div class="link">
                            <router-link to="/">My Resume</router-link>
                          </div>
                        </div>
                        <div class="section">
                          <div class="icon">
                            <img
                              :src="
                                require('../assets/vendor/Images/applied-job.png')
                              "
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div class="link">
                            <router-link to="/">My Job</router-link>
                          </div>
                        </div>
                        <div class="section">
                          <div class="icon">
                            <img
                              :src="
                                require('../assets/vendor/Images/search-job.png')
                              "
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div class="link">
                            <router-link to="/">Search Job</router-link>
                          </div>
                        </div>
                        <div class="section">
                          <div class="icon">
                            <img
                              :src="
                                require('../assets/vendor/Images/personal-info.png')
                              "
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div class="link">
                            <router-link to="/">Account Setting</router-link>
                          </div>
                        </div>

                        <div class="section">
                          <div class="icon">
                            <img
                              :src="
                                require('../assets/vendor/Images/blog.png')
                              "
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div class="link">
                            <router-link to="/our-blog">Blog</router-link>
                          </div>
                        </div>
                        <div class="section">
                          <div class="icon">
                            <img
                              :src="
                                require('../assets/vendor/Images/signout.png')
                              "
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div class="link">
                            <button @click="signOut">Sign Out</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
import { LOGOUT } from "../store/action.names";

@Component({
  name: "Navbar",
  components: {
    SignUpModal,
  },
})
export default class Navbar extends Vue {
  @Getter(namespaced(NS_USER, GET_PROFILE)) getprofile;
  @Getter(namespaced(NS_USER, GET_TOKEN)) gettoken;
  @Action(namespaced(NS_USER,LOGOUT)) logout;

  show = false;
  profile_details = false;
  // show login modal
  showSignUpModal() {
    this.$refs.modal.show();
  }
  toggleNav() {
    this.show = !this.show;
  }

  // open and close profile detals
  openDetails() {
    this.profile_details = !this.profile_details;
  }

  // user signout
  signOut() {
    
    this.logout();
    this.profile_details = false;
    
  }


  mounted() {
    console.log(this.getprofile);
  }
}
</script>

<style scoped>
</style>