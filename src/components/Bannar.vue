<template>
    <div id="bannar-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="left-side">
                 <div class="title">
                   The Easiest Way to Get Your New Test <span>JOB</span>
                 </div>
                 <div class="subtitle">
                    Aenean sed nibh a magna posuere tempor.
                    Nunc faucibus pellentesque nunc in aliquet.
                    Donec congue, nunc vel tempor congue,
                    enim sapien lobortis ipsum, in volutpat sem ex in ligula.
                    Nunc purus est.
                 </div>
                 <div class="search-section">
                   <form>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <button @click.prevent="showToken" class="search-banner" type="submit">Search Job</button>
                      </div>
                   </form>
                 </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="right-side">
                <div class="bn-image">
                  <img class="bannar-vector" :src="require('../assets/vendor/Images/bannar-vector.png')" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { namespaced } from "../store/utils";
import { NS_USER } from "../store/namespace.names";

import {
  LOGIN,
} from "../store/action.names";
import {
  GET_TOKEN,
} from "../store/getter.names";


@Component({
  name: "App",
  components: {
  }
})
export default class Banner extends Vue {
  @Getter(namespaced(NS_USER, GET_TOKEN)) getToken;
  @Action(namespaced(NS_USER, LOGIN)) login;

  // showToken(){
  //   console.log("---------", this.getToken);
  // }

  mounted(){
    // const payload = {
    //   email: "admin@gmail.com",
    //   password: "nstu1234"
    // }
    // this.login(payload).then((data) => {
    //   console.log(data)
    // })
  }

}
</script>

<style>

</style>