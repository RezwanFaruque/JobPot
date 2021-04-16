<template>
  <div id="app">
      <component :is="layout">
        <router-view></router-view>
      </component>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";
import './assets/css/style.css';

import { namespaced } from "./store/utils";
import { NS_USER } from "./store/namespace.names";
import { GET_TOKEN } from "./store/getter.names";
import { SET_TOKEN_ERROR } from "./store/mutation.names";

@Component({
  name: "App",
  components: {
  }
})
export default class App extends Vue {
  @Getter(namespaced(NS_USER, GET_TOKEN)) token;
  @Mutation(namespaced(NS_USER, SET_TOKEN_ERROR)) setTokenError;

  // @Watch("token")
  // hadleTokenChange(val, oldVal) {
  //   if (val != oldVal) {
  //     if (val == null) {
  //       this.setTokenError();
  //       this.$router.push("/");
  //     }
  //   }
  // }

  get layout(){
    return (this.$route.meta.layout);
  }  
}
</script>

