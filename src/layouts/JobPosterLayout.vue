<template>
  <div>
      <Navbar></Navbar>
      
        <div class="body-contain">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <slot />
                    </div>

                </div>
            </div>
        </div>
      
      <Footer></Footer>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';

import Footer from '../components/Footer.vue';
import LeftSideBar from '../components/LeftSideBar.vue';

export default {
    name: 'default-layout',
    components: {
        Navbar,
        
        LeftSideBar,
        Footer
    }


}
</script>

<style>
    .body-contain{
        background: #F6F7F8;
    }
</style>

