<template>
  <b-modal  id="modal" hide-footer hide-header ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title" id="SignUpModalLabel">Sign Up</div>
          <!-- <div class="social-media-signup">
                        <div class="signup-button">
                            <button> <span class="logo">G</span> Continue with Google</button>
                        </div>
                        <div class="signup-button">
                            <button> <span class="logo">F</span> Continue with Facebook</button>
                        </div>
                        <div class="signup-button">
                            <button><span class="logo">L</span> Continue with Linkedin</button>
                        </div>
                    </div> -->
        </div>
        <div class="">
          <!-- <div class="or">
                        or
                    </div> -->
          <div class="signup-form-with-tab">
            <div>
              <b-tabs pills class="tab-section">
                <b-tab
                  class="job-seeker-tab"
                  title="Job Seeker"
                  :active="formData.role === 1"
                  @click="formData.role = 1"
                >
                  <b-card-text>
                    <div class="job-seeker-form">
                      <ValidationObserver v-slot="{ invalid }">
                        <form @submit.prevent="handleForm">
                          <div class="form-row first-row">
                            <ValidationProvider
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <input
                                :class="{
                                  'first-name': true,
                                  error: errors.length > 0,
                                }"
                                type="text"
                                placeholder="First Name"
                                name="first name"
                                v-model="formData.first_name"
                              />
                            </ValidationProvider>
                            <ValidationProvider
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <input
                                type="text"
                                placeholder="Last Name"
                                :class="{
                                  'last-name': true,
                                  error: errors.length > 0,
                                }"
                                v-model="formData.last_name"
                              />
                            </ValidationProvider>
                          </div>
                          <div class="form-row">
                            <ValidationProvider
                              rules="required|email"
                              v-slot="{ errors }"
                            >
                              <input
                                type="email"
                                placeholder="Email"
                                :class="{
                                  email: true,
                                  error: errors.length > 0,
                                }"
                                v-model="formData.email"
                              />
                            </ValidationProvider>
                          </div>
                          <div class="form-row">
                            <ValidationProvider
                              vid="password1"
                              rules="required|min:8"
                              v-slot="{ errors }"
                            >
                              <input
                                type="password"
                                placeholder="Password"
                                :class="{
                                  password: true,
                                  error: errors.length > 0,
                                }"
                                v-model="formData.password1"
                              />
                            </ValidationProvider>
                          </div>
                          <div class="form-row">
                            <ValidationProvider
                              vid="password2"
                              rules="min:8|confirmed:password1"
                              v-slot="{ errors }"
                            >
                              <input
                                type="password"
                                placeholder="Confirm Password"
                                :class="{
                                  password: true,
                                  error: errors.length > 0,
                                }"
                                v-model="formData.password2"
                              />
                            </ValidationProvider>
                          </div>

                          <div class="submit-button">
                            <button
                              type="submit"
                              class="signup"
                              :disabled="invalid"
                            >
                              Sign Up
                            </button>
                          </div>
                        </form>
                      </ValidationObserver>
                    </div>
                  </b-card-text>
                </b-tab>
                <b-tab
                  title="Company"
                  :active="formData.role === 2"
                  @click="formData.role = 2"
                >
                  <b-card-text>
                    <div class="company-form">
                      <form>
                        <div class="form-row">
                          <input
                            type="text"
                            class="company-name"
                            placeholder="Company Name"
                            name=""
                          />
                        </div>

                        <div class="form-row">
                          <select>
                            <option 
                              v-for="(cType, idx) in getCompanyType"
                              :key="'cType' + idx"
                              :value="cType.id"
                            >
                              {{ cType.name }}
                            </option>
                          </select>
                        </div>

                        <div class="form-row">
                          <input
                            type="text"
                            class="company-email"
                            placeholder="Company Email"
                            name=""
                          />
                        </div>

                        <div class="form-row">
                          <input
                            type="text"
                            class="company-password"
                            placeholder="Company Password"
                            name=""
                          />
                        </div>

                        <div class="form-row">
                          <input
                            type="text"
                            class="confirm-password"
                            placeholder="Confirm Password"
                            name=""
                          />
                        </div>
                        <div class="company-form-submit">
                          <button type="submit" class="button-submit">
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="footer-signup-modal">
            <div class="text">Already have an account?</div>
            <div class="signinlink">
              <router-link to="/">Login</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { namespaced } from "../store/utils";
import { NS_USER } from "../store/namespace.names";
import { REGISTRATION, COMPANYTYPE } from "../store/action.names";
import {GET_COMPANY_TYPE} from '../store/getter.names';
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";

@Component({
  name: "SignUpModal",
  components: {
    ValidationProvider,
    ValidationObserver,
  },

})
export default class Banner extends Vue {
  @Action(namespaced(NS_USER, REGISTRATION)) registration;
  @Action(namespaced(NS_USER, COMPANYTYPE)) companyType;
  @Getter(namespaced(NS_USER, GET_COMPANY_TYPE)) getCompanyType;

  formData = {
    first_name: "",
    last_name: "",
    email: "",
    role: 1,
    password1: "",
    password2: "",
    company: {
      name: "",
      type: "",
    },
  };
  
  show() {
    this.$refs.modal.show();
  }

  handleForm() {
    this.formData.password = this.formData.password1;
    delete this.formData.password1;
    delete this.formData.password2;
    if (this.formData.role == 1) {
      delete this.formData.company;
    } else if (this.formData.role == 2) {
      delete this.formData.first_name;
      delete this.formData.last_name;
    }
    this.registration(this.formData)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted(){
    this.companyType();
  }
}
</script>

<style scoped>
  .error {
    border: 1px solid red !important;
  }

  .modal.show .modal-dialog {
    margin: 0rem auto !important;
    border: none;
  }
</style>