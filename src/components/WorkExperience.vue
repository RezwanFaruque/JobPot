<template>
  <div id="work_experience">
    <div class="accordion" role="tablist">
      <!--  -->
      <div class="tab-sections">
        <div header-tag="header" class="p-1 title-with-toggle" role="tab">
          <div class="title">Add workexperiences</div>
          <div class="toggle-icon">
            <i
              block
              v-b-toggle.work-experience
              variant="workexperience"
              class="fas fa-chevron-down"
            ></i>
          </div>
        </div>
        <b-collapse
          class="collapse-body"
          id="work-experience"
          visible
          accordion="workexperience"
          role="tabpane4"
        >
          <div class="workexp-info">
            <div class="title-with-button">
              <div class="title">Experience 1</div>
              <div class="button">
                <button
                  @click="editworkexperience = !editworkexperience"
                  class="edit-button"
                >
                  Edit
                </button>
                <button class="delete-button">Delete</button>
              </div>
            </div>

            <div v-if="editworkexperience == true" class="form-workexp-edit">
              <b-form>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <b-form-group  label="Company Name*">
                      <b-form-input  trim></b-form-input>
                    </b-form-group>
                    <b-form-group  label="Company Business *">
                      <b-form-input  trim></b-form-input>
                    </b-form-group>
                    <b-form-group  label="Designation *">
                      <b-form-input  trim></b-form-input>
                    </b-form-group>
                    <b-form-group  label="Department*">
                      <b-form-input  trim></b-form-input>
                    </b-form-group>

                    <b-form-group
                      
                      label="Area Of Experiences (max 3)"
                    >
                      <b-form-tags input-id="tags-basic"></b-form-tags>
                    </b-form-group>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <b-form-group  label="Responsibilities*">
                      <b-form-input  trim></b-form-input>
                    </b-form-group>
                    <b-form-group  label="Company Location*">
                      <b-form-input  trim></b-form-input>
                    </b-form-group>
                    <b-form-group  label="Period*">
                      <div class="period">
                        <b-form-datepicker
                          placeholder="From"
                          id="from-datepicker"
                        ></b-form-datepicker>
                        <b-form-datepicker
                          placeholder="To"
                          id="to-datepicker"
                        ></b-form-datepicker>
                      </div>
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
            <div v-else class="-details">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="info">
                    <div class="title">Company Name</div>
                    <div class="inf">- Abc Company</div>
                  </div>

                  <div class="info">
                    <div class="title">Company Business</div>
                    <div class="inf">- IT FIRM</div>
                  </div>

                  <div class="info">
                    <div class="title">Company Location</div>
                    <div class="inf">- Dhaka,Bangladesh</div>
                  </div>

                  <div class="info">
                    <div class="title">Employment Period</div>
                    <div class="inf">- 01/01/2019 to Continue</div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="info">
                    <div class="title">Responsibilities</div>
                    <div class="inf">- UI/UX Expert</div>
                  </div>
                  <div class="info">
                    <div class="title">Designation</div>
                    <div class="inf">-Senior UI/UX Designer</div>
                  </div>
                  <div class="info">
                    <div class="title">Department</div>
                    <div class="inf">- Technical</div>
                  </div>
                  <div class="info">
                    <div class="title">Area of s</div>
                    <div class="inf"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="workexp-input">
            <div class="title">Experience 02</div>
            <b-form>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <b-form-group  label="Company Name*">
                    <b-form-input  trim></b-form-input>
                  </b-form-group>
                  <b-form-group  label="Company Business *">
                    <b-form-input  trim></b-form-input>
                  </b-form-group>
                  <b-form-group  label="Designation *">
                    <b-form-input  trim></b-form-input>
                  </b-form-group>
                  <b-form-group  label="Department*">
                    <b-form-input  trim></b-form-input>
                  </b-form-group>

                  <b-form-group
                    
                    label="Area Of Experiences (max 3)"
                  >
                    <b-form-tags input-id="tags-basic"></b-form-tags>
                  </b-form-group>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <b-form-group  label="Responsibilities*">
                    <b-form-input  trim></b-form-input>
                  </b-form-group>
                  <b-form-group  label="Company Location*">
                    <b-form-input  trim></b-form-input>
                  </b-form-group>
                  <b-form-group  label="Period*">
                    <div class="period">
                      <b-form-datepicker
                        placeholder="From"
                        id="from-datepicker"
                      ></b-form-datepicker>
                      <b-form-datepicker
                        placeholder="To"
                        id="to-datepicker"
                      ></b-form-datepicker>
                    </div>
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
  name: "Work",
  data: function () {
    return {
      editworkexperience: false,
    };
  },
};
</script>
