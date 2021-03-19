<template>
  <div id="app">
      <component :is="layout">
        <router-view></router-view>
      </component>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import './assets/css/style.css';

@Component({
  name: "App",
  components: {
  }
})
export default class App extends Vue {
  get layout(){
    return (this.$route.meta.layout);
  }  
}
</script>

