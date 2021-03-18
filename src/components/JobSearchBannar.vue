<template>
  <div id="job_search_bannar">
    <div class="bannar-layer">
      <div class="title">10,000 Job Listed Here!!!</div>
      <div class="subtitle">Your dream job is waitng</div>
    </div>
    <div class="search-bar-section">
      <b-form>
        <div class="search-bar-bannar">
          <div class="search-by keyword">
            <div class="search-icon">
              <i class="fas fa-search"></i>
            </div>
            <div class="input">
              <b-form-input
                placeholder="Search by job keyword"
                required
              ></b-form-input>
            </div>
          </div>
          <div class="search-by category">
            <b-form-select
              v-model="catselected"
              :options="categories"
            ></b-form-select>
          </div>
          <div class="search-by job-type">
            <b-form-select
              v-model="jobtypeselected"
              :options="jobtype"
            ></b-form-select>
          </div>
          <div class="search-by postal-code">
            <div class="postal-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="input">
              <b-form-input
                placeholder="City or Postal code"
                required
              ></b-form-input>
            </div>
          </div>
          <div class="submit-button">
            <button class="find-job" type="submit">Find Job</button>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobSearchBannar",
  data: function () {
    return {
      catselected: null,
      jobtypeselected: null,
      categories: [
        { value: null, text: "Categories" },
        { value: "All Creative Job", text: "All Creative Job" },
        { value: "Bank Job", text: "Bank Job" },
        { value: "Fashion", text: "Fashion" },
        { value: "Branding Job", text: "Branding Job" },
        { value: "Graphics Design Job", text: "Graphics Design Job" },
        { value: "Illustration Job", text: "Illustration Job" },
        { value: "UI/UX Design", text: "UI/UX Design" },
        { value: "Photography", text: "Photography" },
        { value: "Motion Graphics", text: "Motion Graphics" },
        { value: "Teacher", text: "Teacher" },
        { value: "Marketting", text: "Marketting" },
        { value: "Software Engineering", text: "Software Engineering" },
        { value: "Web Developer", text: "Web Developer" },
        { value: "Industrial Design", text: "Industrial Design" },
        { value: "Interaction Design", text: "Interaction Design" },
        { value: "Engineering Job", text: "Engineering Job" },
      ],
      jobtype: [
        { value: null, text: "Job Type" },
        { value: "Full Time Job", text: "Full Time Job" },
        { value: "Part Time Job", text: "Part Time Job" },
        { value: "Remote Job", text: "Remote Job" },
        { value: "Internship Job", text: "Internship Job" },
        { value: "Freelance Job", text: "Freelance Job" },
        { value: "Training Job", text: "Training Job" },
      ],
    };
  },

  
};
</script>

<style>
</style>