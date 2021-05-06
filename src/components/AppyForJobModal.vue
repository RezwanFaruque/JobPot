<template>
  <b-modal id="applyforjobmodal" ref="applyforjobmodal" hide-footer hide-header>
    <div class="header">Apply for UI/UX to Company Name</div>
    <hr />
    <div class="body">
      <div class="header">
        <div class="title">Contact Info</div>
        <div class="profile-info">
          <div class="profile-image">
            <img :src="profile" alt="" srcset="" />
          </div>
          <div class="other-info">
            <div class="name">MD JANE ALAM</div>
            <div class="designation">UI/UX Designer</div>
          </div>
        </div>
      </div>
      <div class="form">
        <ValidationObserver v-slot="{ invalid }">
          <form>
            <div class="input-section">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <label>Email</label>
                <input
                  :class="{
                    email: true,
                    error: errors.length > 0,
                  }"
                  type="email"
                  name="Email"
                  v-model="formData.email"
                />
              </ValidationProvider>
            </div>

            <div class="input-section">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <label>Contact</label>

                <input
                  :class="{
                    email: true,
                    error: errors.length > 0,
                  }"
                  type="text"
                  name="contact"
                  v-model="formData.contact"
                />
              </ValidationProvider>
            </div>

            <div class="input-section">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <label>Country</label>

                <select v-model="formData.country">
                  <option selected value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Algeria">Algeria</option>
                </select>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="input-section">
              <ValidationProvider
                rules="required"
                v-slot="{ validate, errors }"
              >
                <div>
                  <label>Upload Resume</label>
                  <div class="resume">
                    <input
                      type="file"
                      ref="resume"
                      @change="handleFileChange($event) || validate($event)"
                      accept="application/pdf"
                      hidden
                    />
                    <div class="upload-section">
                      <div class="pdf-thumb-border">
                        <div
                          v-if="iconpdf"
                          style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                          "
                        >
                          <img :src="iconpdf" alt="" srcset="" />
                          <div class="filename">{{ filename }}</div>
                        </div>
                      </div>
                      <button @click.prevent="$refs.resume.click()">
                        Upload
                      </button>
                    </div>
                  </div>

                  <p id="error">{{ errors[0] }}</p>
                </div>
              </ValidationProvider>
            </div>
            <div class="input-section accept-term">
              <ValidationProvider rules="required">
                <div class="d-flex">
                  <input type="checkbox" v-model="formData.check" value="" />

                  <span class="agreed-term"
                    >I accept the terms & conditions</span
                  >
                </div>
              </ValidationProvider>
            </div>
            <button :disabled="invalid" type="submit" class="button-submit">
              ApplyNow
            </button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import pdficon from "../assets/vendor/Images/upload-icon-resume.png";
import profileimage from "../assets/vendor/Images/personal-info-profile.png";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
@Component({
  name: "ApplyForJobModal",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class ApplyForJobModel extends Vue {
  // showing the applyforjobmodal
  show() {
    this.$refs.applyforjobmodal.show();
    this.formData.iconpdf = "";
  }

  handleFileChange(event) {
    let file = event.target.files[0];

    this.formData.resume = file;
    this.filename = file.name;
    this.iconpdf = pdficon;
    if (file != null) {
      let render = new FileReader();
      render.onload = (event) => {
        this.formData.resume = event.target.result;
      };
      render.readAsDataURL(file);
    } else {
      this.formData.resume = "";
      this.formData.iconpdf = "";
    }
  }

  profile = profileimage;
  iconpdf = "";
  filename = "";

  formData = {
    email: "",
    contact: "",
    country: "",
    resume: "",
    check: "",
  };
}
</script>

<style>
</style>