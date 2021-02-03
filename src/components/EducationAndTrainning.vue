<template>
  <div id="personal_info">
    <div class="accordion" role="tablist">
      <div class="tab-sections">
        <div header-tag="header" class="p-1 title-with-toggle" role="tab">
          <div class="title">Education & Trainning</div>
          <div class="toggle-icon">
            <i
              block
              v-b-toggle.edu-trainning
              variant="info4"
              class="fas fa-chevron-down"
            ></i>
          </div>
        </div>
        <b-collapse
          class="collapse-body"
          id="edu-trainning"
          visible
          accordion="my-accordion4"
          role="tabpane4"
        >
          <div class="academic-info">

          </div>
          <div class="academic-input">

          </div>
        </b-collapse>
      </div>

      <div class="tab-sections">
        <div header-tag="header" class="p-1 title-with-toggle" role="tab">
          <div class="title">Training</div>
          <div class="toggle-icon">
            <i
              block
              v-b-toggle.trainning-one
              variant="info5"
              class="fas fa-chevron-down"
            ></i>
          </div>
        </div>
        <b-collapse
          class="collapse-body"
          id="trainning-one"
          visible
          accordion="my-accordion5"
          role="tabpane5"
        >
        <div class="trainning-info">

          </div>
          <div class="trainning-input">

          </div>
         
        </b-collapse>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationAndTrainning",
};
</script>

