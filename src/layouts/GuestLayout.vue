<template>
  <div>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12">
                  <slot />
              </div>
          </div>
      </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Bannar from '../components/Bannar.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'guest-layout',
    components:{
        Navbar,
        Bannar,
        Footer,
    }

       
}
</script>
