<template>
  <div id="left-sidebar" :class="{ decreaseheight: decheight }">
    <div class="left-sidebar">
      <div class="section">
        <div class="title">
          Profile Details
          <div
            class="togglehideleftbar"
            :class="{ on: toggled }"
            @click="hideLeftBar"
          ></div>
        </div>
        <div class="links">
          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/personal-info.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link class="left-link" to="/"
                >Personal Information</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="title">Resume</div>
        <div class="links">
          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/view-resume.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/">View Resume</router-link>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/edit-resume.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/edit-resume">Edit Resume</router-link>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/personal-info.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/upload-resume">Upload Resume</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="title">My Job</div>
        <div class="links">
          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/applied-job.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/applied-job">Applied Job</router-link>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/save-for-later.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/save-for-later">Save for later</router-link>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/suggested-job.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/suggested-job">Suggested Jobs</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="title">Search Job</div>
        <div class="links">
          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/search-job.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/">Search Job</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="title">Our Blog</div>
        <div class="links">
          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/blog.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/our-blog">Blog</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="title">Account Setting</div>
        <div class="links">
          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/change-password.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/change-password">Change Password</router-link>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/help.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/help">Help</router-link>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/signout.png"
                alt=""
              />
            </div>
            <div class="links">
              <router-link to="/">Sign Out</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="title">Social Link</div>
        <div class="links">
          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/add-website.png"
                alt=""
              />
            </div>
            <div class="links special">
              <router-link to="/">Add Website</router-link>
              <div class="plus-right">+</div>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/facebook.png"
                alt=""
              />
            </div>
            <div class="links special">
              <router-link to="/">Add facebook link</router-link>
              <div class="plus-right">+</div>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/twitter.png"
                alt=""
              />
            </div>
            <div class="links special">
              <router-link to="/">Add twitter link</router-link>
              <div class="plus-right">+</div>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/twitter.png"
                alt=""
              />
            </div>
            <div class="links special">
              <router-link to="/">Add LinkedIn link</router-link>
              <div class="plus-right">+</div>
            </div>
          </div>

          <div class="link-with-logo">
            <div class="logo">
              <img
                class="logo-img"
                src="../assets/vendor/Images/google.png"
                alt=""
              />
            </div>
            <div class="links special">
              <router-link to="/">Add Google+ link</router-link>
              <div class="plus-right">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
  data: function () {
    return {
      toggled: false,
      decheight: false,
    };
  },

  methods: {
    hideLeftBar: function () {
      this.toggled = !this.toggled;
      if (this.toggled == true) {
        this.decheight = true;
      } else {
        this.decheight = false;
      }
    },
  },

  watch: {
    $route() {
      if(screen.width <= 800){

        this.decheight = true;
        this.toggled = true;
        
      }
     
    },
  },
};
</script>

<style>
</style>