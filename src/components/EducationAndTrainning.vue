<template>
  <div id="personal_info">
    <div class="accordion" role="tablist">
      <!-- academic -->
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
            <div class="title-with-button">
              <div class="title">Academic 01</div>
              <div class="button">
                <button
                  @click="editacademicdata = !editacademicdata"
                  class="edit-button"
                >
                  Edit
                </button>
                <button class="delete-button">Delete</button>
              </div>
            </div>

            <div v-if="editacademicdata == true" class="form-academic-edit">
              <b-form>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <b-form-group
                      id="input-group-1"
                      label="Institute *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Exam/Degree Title *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Department/Group/Major *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Level of Education *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <b-form-group
                      id="input-group-1"
                      label="Result *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Passing Year*"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Duration*"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <div class="buttons">
                      <button type="submit" class="save">save</button>
                      <button class="close">close</button>
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
            <div v-else class="academic-details">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="info">
                    <div class="title">Institute</div>
                    <div class="inf">
                      - Noakhali Science & Technology University
                    </div>
                  </div>

                  <div class="info">
                    <div class="title">Exam/Degree Title</div>
                    <div class="inf">- Bachelor of Science .BSc</div>
                  </div>

                  <div class="info">
                    <div class="title">Department/Group/Major</div>
                    <div class="inf">- Information Technology</div>
                  </div>

                  <div class="info">
                    <div class="title">Level of Education</div>
                    <div class="inf">- Bachelor / Honors</div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="info">
                    <div class="title">Result</div>
                    <div class="inf">- 3.75 out of 4.00</div>
                  </div>
                  <div class="info">
                    <div class="title">Passing Year</div>
                    <div class="inf">- 2021</div>
                  </div>
                  <div class="info">
                    <div class="title">Duration</div>
                    <div class="inf">- 4 Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="academic-input">
            <div class="title">Academic 02</div>
            <b-form>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <b-form-group
                    id="input-group-1"
                    label="Institute *"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Exam/Degree Title *"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Department/Group/Major *"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Level of Education *"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <b-form-group
                    id="input-group-1"
                    label="Result *"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Passing Year*"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Duration*"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="buttons">
                    <button type="submit" class="save">save</button>
                    <button class="close">close</button>
                  </div>
                </div>
              </div>
            </b-form>
          </div>
        </b-collapse>
      </div>

      <!-- trainning -->
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
          <div class="academic-info">
            <div class="title-with-button">
              <div class="title">Training 01</div>
              <div class="button">
                <button
                  @click="edittrainningdata = !edittrainningdata"
                  class="edit-button"
                >
                  Edit
                </button>
                <button class="delete-button">Delete</button>
              </div>
            </div>

            <div v-if="edittrainningdata == true" class="form-academic-edit">
              <b-form>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <b-form-group
                      id="input-group-1"
                      label="Institute *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Exam/Degree Title *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Department/Group/Major *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Level of Education *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <b-form-group
                      id="input-group-1"
                      label="Result *"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Passing Year*"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Duration*"
                      label-for="institue"
                    >
                      <b-form-select :options="options"></b-form-select>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <div class="buttons">
                      <button type="submit" class="save">save</button>
                      <button class="close">close</button>
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
            <div v-else class="academic-details">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="info">
                    <div class="title">Training Title</div>
                    <div class="inf">- UI/UX Design</div>
                  </div>

                  <div class="info">
                    <div class="title">Institute</div>
                    <div class="inf">- Jobpot</div>
                  </div>

                  <div class="info">
                    <div class="title">Topics Covered</div>
                    <div class="inf">
                      - Adobe XD, Adobe Photoshop, Adobe Indesign
                    </div>
                  </div>

                  <div class="info">
                    <div class="title">Location</div>
                    <div class="inf">-Dhaka, Bangladesh</div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="info">
                    <div class="title">Country</div>
                    <div class="inf">- Bangladesh</div>
                  </div>
                  <div class="info">
                    <div class="title">Training Year</div>
                    <div class="inf">- 2020</div>
                  </div>
                  <div class="info">
                    <div class="title">Duration</div>
                    <div class="inf">- 1 Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- trainning input -->
          <div class="academic-input trainning-input">
            <div class="title">Training 02</div>
            <b-form>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <b-form-group
                    id="input-group-1"
                    label="Training Title"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Institute"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Topic Coverage*"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Location*"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <b-form-group
                    id="input-group-1"
                    label="Country *"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Trainning Year*"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Duration*"
                    label-for="institue"
                  >
                    <b-form-select :options="options"></b-form-select>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="buttons">
                    <button type="submit" class="save">save</button>
                    <button class="close">close</button>
                  </div>
                </div>
              </div>
            </b-form>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationAndTrainning",
  data: function () {
    return {
      options: [
        { value: "Institute one", text: "Institute One" },
        { value: "Institute Two", text: "Institute Two" },
      ],
      editacademicdata: false,
      edittrainningdata: false,
    };
  },

  methods: {},
};
</script>

