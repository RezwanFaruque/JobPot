<template>
  <div>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <div class="container">
          <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12">
                  <LeftSideBar></LeftSideBar>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-12">
                  <slot />
              </div>

          </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Bannar from '../components/Bannar.vue';
import Footer from '../components/Footer.vue';
import LeftSideBar from '../components/LeftSideBar.vue';

export default {
    name: 'default-layout',
    components: {
        Navbar,
        Bannar,
        LeftSideBar,
        Footer
    }


}
</script>