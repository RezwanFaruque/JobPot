<template>
	<b-modal id="loginmodal" ref="loginmodal" hide-footer hide-header>
        <div class="header">
            Login
        </div>
        <div class="body">
            <div class="main-login-form">
                <ValidationObserver v-slot="{ invalid }">
                    <form @submit.prevent="handleLogin" >
                        <div class="email">
                            <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            >
                            <input
                            :class="{
                                'email': true,
                                'error': errors.length > 0,
                            }"
                            type="email"
                            placeholder="Email"
                            name="Email"
                            v-model="formData.email"
                            
                            />
                            <span id="error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="password">
                        <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        >
                        <input
                        :class="{
                            'password': true,
                            'error': errors.length > 0,
                        }"
                        type="password"
                        placeholder="Password"
                        name="password"
                        v-model="formData.password"

                        />
                        <span id="error">{{ errors[0] }}</span>
                        <router-link class="forget-password" to="/">Forget Password</router-link>
                    </ValidationProvider>
                </div>

                <div class="login-submit">
                  <button :disabled="invalid" type="submit" class="button-submit">
                    Login
                </button>
            </div>
        </form>
    </ValidationObserver>
</div>
</div>

<div class="footer">
    <div class="footer-content">
        <div class="footer-content-text">
            Don't have an account?
        </div>
        <button @click="hideLoginForm" class="create-account-button">Create Account</button>
    </div>
</div>

</b-modal>
</template>

<script>

    import { Component, Vue, Watch } from "vue-property-decorator";
    import { Action, Getter } from "vuex-class";
    import { namespaced } from "../store/utils";
    import { NS_USER } from "../store/namespace.names";
    import { LOGIN } from "../store/action.names";
    import { GET_TOKEN,GET_PROFILE } from "../store/getter.names";
    import {
        ValidationProvider,
        ValidationObserver,
    } from "vee-validate/dist/vee-validate.full.esm";

    @Component({
        name: 'LoginModal',
        components:{
            ValidationProvider,
            ValidationObserver,
        }
    })
    export default class LoginModal extends Vue {

        @Getter(namespaced(NS_USER, GET_TOKEN)) getToken;
        @Getter(namespaced(NS_USER, GET_PROFILE)) getprofile;
        @Action(namespaced(NS_USER, LOGIN)) login;


        formData = {
          email: "",
          password: "",

      };


      // login handle

      handleLogin(){
        
        this.login(this.formData)
        .then((data)=>{

            this.$refs.loginmodal.hide();
            // this.$router.push("/personal-info");
            
        })
        .catch((e)=>{
            console.log(e);

        })
      }

        // show log in modal 
        show(){
            this.$refs.loginmodal.show();
        }

        hideLoginForm(){
            this.$refs.loginmodal.hide();
        }

    }

</script>

<style scoped>
.error {
  border: 1px solid red !important;
}
</style>