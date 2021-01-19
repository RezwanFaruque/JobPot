<template>
  <div>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <div class="contain">
          <div class="row-contain">
              <div class="col-contain">
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

export default {
    name: 'guest-layout',
    components:{
        Navbar,
        Bannar,
        Footer,
    }

       
}
</script>

<style>
.container-fluid{
    padding-left: 0;
    padding-right:0;
}
</style>
