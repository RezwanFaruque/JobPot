<template>
  <div id="app">
      <component :is="layout">
        <router-view></router-view>
      </component>
  </div>
</template>

<script>
import './assets/css/style.css';

export default {
  name: 'App',
  components: {
    
  },
  computed: {
    // return dynamic layout
    layout(){
      return (this.$route.meta.layout);
    }
  }
  
}
</script>

