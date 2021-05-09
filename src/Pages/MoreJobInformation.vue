<template>
  <div id="more-job-information">
    <div class="title">More Job Information</div>
    <hr />
    <div class="form-section">
      <ValidationObserver v-slot="{ invalid }">
        <form>
          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Job Level</label>

              <div class="input">
                <button>Student</button>
                <button>Entry</button>
                <button>Mid</button>
                <button>Senior</button>
                <button>Director</button>
                <button>Others</button>
              </div>

              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Job Overview</label>

              <textarea placeholder="Job Overview" v-model="formData.joboverview"></textarea>

              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Job Responsibility</label>

              <textarea placeholder="Job responsibilities" v-model="formData.jobresponsibilities"></textarea>

              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

           <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Job Requirements</label>

              <textarea placeholder="Job requirements" v-model="formData.jobrequirement"></textarea>

              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Work Place</label>

              <div class="input">
                <button>Work From Home</button>
                <button>Work From Office</button>
                
              </div>

              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Job Location</label>

              <div class="input">
                <button>Inside United States</button>
                <button>Outside United States</button>
                
              </div>

              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Salary Range</label>

               <input type="text" v-model="formData.minimumsalaryrange">
               to
               <input  type="text" v-model="formData.maximumsalaryrange">

              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

           <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Special Instruction</label>

              <textarea placeholder="Special Instruction" v-model="formData.specialinstruction"></textarea>

              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="submit-section">
            <button :disabled="invalid" type="submit" class="button-submit">
              continue
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";

@Component({
  name: "MoreJobInformation",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class MoreJobInformation extends Vue {
  formData = {
    joblevel: "",
    joboverview: "",
    jobresponsibilities: "",
    jobrequirement: "",
    workplace: "",
    joblocation: "",
    minimumsalaryrange: "",
    maximumsalaryrange: "",
    specialinstruction: "",
  };
}
</script>

<style>
</style>