<template>
  <div id="primary-job-information">
    <div class="title">Primary Job Information</div>
    <hr />
    <div class="form-section">
      <ValidationObserver v-slot="{ invalid }">
        <form>
          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Job Title</label>

              <input
                :class="{
                  jobtitle: true,
                  error: errors.length > 0,
                }"
                type="text"
                name="jobtitle"
                v-model="formData.jobtitle"
              />
              <div>{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>No of Vacancies</label>

              <input
                :class="{
                  noofvacancies: true,
                  error: errors.length > 0,
                }"
                type="text"
                name="noofvacancies"
                v-model="formData.noofvacancies"
              />
              <div>{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Job Category</label>

              <select v-model="formData.jobcategory">
                <option
                  v-for="category in categories"
                  selected
                  :key="category.id"
                  :value="category.value"
                >
                  {{ category.text }}
                </option>
              </select>
              <div>{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Employee Status</label>

              <select v-model="formData.employeestatus">
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Enternship">Enternship</option>
                <option value="Freelance">Freelance</option>
                <option value="Trainning">Trainning</option>
              </select>
              <div>{{ errors[0] }}</div>
            </ValidationProvider>
          </div>
          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Application Deadline</label>
              <b-form-datepicker
                id="example-datepicker"
                v-model="formData.applicationdeadline"
                class="mb-2"
              ></b-form-datepicker>
              <div>{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Resume receiving option</label>

              <select v-model="formData.resumereviewoption">
                <option value="Online">Online</option>
                <option value="Email">Email</option>
                <option value="HardCopy">HardCopy</option>
              </select>
              <div>{{ errors[0] }}</div>
            </ValidationProvider>

            <div v-if="formData.resumereviewoption == 'Email'" class="email">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <label>Email</label>
                <input
                  :class="{
                    email: true,
                    error: errors.length > 0,
                  }"
                  type="text"
                  name="email"
                  v-model="formData.email"
                />

                <div>{{ errors[0] }}</div>
              </ValidationProvider>
            </div>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label>Job Seeker Instruction</label>

              <textarea
                :class="{
                  jobseekersinstruction: true,
                  error: errors.length > 0,
                }"
                name="noofvacancies"
                v-model="formData.jobseekersinstruction"
              />
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required">
              <label>Upload Cover Image</label>
              <input
                type="file"
                ref="coverimage"
                @change="handleCoverImageFileChange($event)"
                hidden
              />
              <button
                class="upload-button"
                @click.prevent="$refs.coverimage.click()"
              >
                Upload Cover
              </button>
              <div class="no-image" v-if="formData.coverimage == ''">
                No Image selected
              </div>
              <div class="image" v-else>
                 <img :src="formData.coverimage" alt="" srcset="">
              </div>
            </ValidationProvider>
          </div>

          <div class="input-section">
            <ValidationProvider rules="required">
              <label>Upload Cover Image</label>
              <input
                type="file"
                ref="logoimage"
                @change="handleLogoImageFileChange($event)"
                hidden
              />
              <button
                class="upload-button"
                @click.prevent="$refs.logoimage.click()"
              >
                Upload Logo
              </button>

              <div class="no-image" v-if="formData.logoimage == ''">
                No Image selected
              </div>
              <div class="image" v-else>
                 <img :src="formData.logoimage" alt="" srcset="">
              </div>
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
  name: "PrimaryJobInformation",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class PrimaryJobInformation extends Vue {
  categories = [
    { id: 1, value: null, text: "Categories" },
    { id: 2, value: "All Creative Job", text: "All Creative Job" },
    { id: 3, value: "Bank Job", text: "Bank Job" },
    { id: 4, value: "Fashion", text: "Fashion" },
    { id: 5, value: "Branding Job", text: "Branding Job" },
    { id: 6, value: "Graphics Design Job", text: "Graphics Design Job" },
    { id: 7, value: "Illustration Job", text: "Illustration Job" },
    { id: 8, value: "UI/UX Design", text: "UI/UX Design" },
    { id: 9, value: "Photography", text: "Photography" },
    { id: 10, value: "Motion Graphics", text: "Motion Graphics" },
    { id: 11, value: "Teacher", text: "Teacher" },
    { id: 12, value: "Marketting", text: "Marketting" },
    { id: 13, value: "Software Engineering", text: "Software Engineering" },
    { id: 14, value: "Web Developer", text: "Web Developer" },
    { id: 15, value: "Industrial Design", text: "Industrial Design" },
    { id: 16, value: "Interaction Design", text: "Interaction Design" },
    { id: 17, value: "Engineering Job", text: "Engineering Job" },
  ];

  formData = {
    jobtitle: "",
    noofvacancies: "",
    jobcategory: "",
    employeestatus: "",
    applicationdeadline: "",
    resumereviewoption: "",
    jobseekersinstruction: "",
    coverimage: "",
    logoimage: "",
    email: "",
  };


  handleCoverImageFileChange(event){
    let file = event.target.files[0];
    if(file != null){
      let render = new FileReader();
      render.onload = (event)=>{
        let result = event.target.result;
        this.formData.coverimage = result;
      }
      render.readAsDataURL(file);
    }else{
      this.formData.coverimage = "";
    }
  }

  handleLogoImageFileChange(event){
    let file = event.target.files[0];
    if(file != null){
      let render = new FileReader();
      render.onload = (event)=>{
        let result = event.target.result;
        this.formData.logoimage = result;
      }
      render.readAsDataURL(file);
    }else{
      this.formData.logoimage = "";
    }
  }
}
</script>

<style>
</style>