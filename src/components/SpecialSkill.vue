<template>
  <div id="special_skills">
    <div class="accordion" role="tablist">
      <!-- specialization -->
      <div class="tab-sections">
        <div header-tag="header" class="p-1 title-with-toggle" role="tab">
          <div class="title">Specializations</div>
          <div class="toggle-icon">
            <i
              block
              v-b-toggle.specialization
              variant="specialization"
              class="fas fa-chevron-down"
            ></i>
          </div>
        </div>

        <b-collapse
          class="collapse-body"
          id="specialization"
          visible
          accordion="specialization"
          role="tabpane7"
        >
          <div class="specialization-info">
            <div class="title">Add skill</div>
            <div class="title-with-button">
              <div class="title">Skill 1</div>
              <div class="button">
                <button
                  @click="editspecializationinfo = !editspecializationinfo"
                  class="edit-button"
                >
                  Edit
                </button>
                <button class="delete-button">Delete</button>
              </div>
            </div>
            <div
              v-if="editspecializationinfo == true"
              class="edit-special-skills-section"
            >
              <b-form>
                <div class="row">
                  <div class="col-sm-12">
                    <b-form-group label="Skill 1">
                      <b-form-input
                        placeholder="write your skill.."
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Skill Description *">
                      <b-form-textarea
                        id="textarea"
                        v-model="text"
                        placeholder="Describe your skill..."
                        rows="3"
                        max-rows="6"
                      ></b-form-textarea>
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
            <div v-else class="info-special-skills-section">
              <div class="skill-title">Microsoft Powerpoint</div>
              <div class="skill-description">
                <p>Phasellus finibus enim nulla, quis ornare odio facilisis eu.
                Suspendisse ornare ante sit amet arcu semper, vel eleifend
                tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo
                orci egestas diam, ac euismod massa est et turpis. Etiam auctor
                lectus vel neque convallis pharetra</p>
              </div>
            </div>

            <!-- skills input section -->
            <div class="specialization-input">
              <b-form>
                <div class="row">
                  <div class="col-sm-12">
                    <b-form-group label="Skill 2">
                      <b-form-input
                        placeholder="write your skill.."
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Skill Description *">
                      <b-form-textarea
                        id="textarea"
                        v-model="text"
                        placeholder="Describe your skill..."
                        rows="3"
                        max-rows="6"
                      ></b-form-textarea>
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
          </div>
        </b-collapse>
      </div>

      <!-- language profiency -->
      <div class="tab-sections">
        <div header-tag="header" class="p-1 title-with-toggle" role="tab">
          <div class="title">Language Proficiency</div>
          <div class="toggle-icon">
            <i
              block
              v-b-toggle.language-profiency
              variant="language-profiency"
              class="fas fa-chevron-down"
            ></i>
          </div>
        </div>
        <b-collapse
          class="collapse-body"
          id="language-profiency"
          visible
          accordion="language-profiency"
          role="tabpane8"
        >
          <div class="language-skills">
            <div class="title-with-buttons">
              <div class="title">Language 1</div>
              <div class="button">
                <button
                  @click="editlanguageinfo = !editlanguageinfo"
                  class="edit-button"
                >
                  Edit
                </button>
                <button class="delete-button">Delete</button>
              </div>
            </div>

            <!-- language edit form -->
            <div
              v-if="editlanguageinfo == true"
              class="language-info-edit-form"
            >
              <b-form>
                <div class="row">
                  <div class="col-sm-12">
                    <b-form-group label="Language">
                      <b-form-input
                        placeholder="write your Language.."
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Language Level">
                      <b-form-select :options="language_level"></b-form-select>
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

            <!-- language skills info form -->
            <div v-else class="language-info-details">
              <div class="language-name">English</div>
              <div class="language-level-withname">
                <div class="l-name">Language Level</div>
                <div class="l-level">Medium</div>
              </div>
            </div>

            <!-- langualge input form -->
            <div class="language-info-input-form">
              <b-form>
                <div class="row">
                  <div class="col-sm-12">
                    <b-form-group label="Language">
                      <b-form-input
                        placeholder="write your Language.."
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Language Level">
                      <b-form-select :options="language_level"></b-form-select>
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
          </div>
        </b-collapse>
      </div>

      <!-- references -->
      <div class="tab-sections">
        <div header-tag="header" class="p-1 title-with-toggle" role="tab">
          <div class="title">References</div>
          <div class="toggle-icon">
            <i
              block
              v-b-toggle.reference
              variant="reference"
              class="fas fa-chevron-down"
            ></i>
          </div>
        </div>
        <b-collapse
          class="collapse-body"
          id="reference"
          visible
          accordion="reference"
          role="tabpane8"
        >
          <!-- reference collapse section -->
          <div class="reference-section">
            <!-- reference info with edit section -->
            <div class="reference-info">
              <div class="title-with-button">
                <div class="title">Reference 1</div>
                <div class="button">
                  <button
                    @click="editreference = !editreference"
                    class="edit-button"
                  >
                    Edit
                  </button>
                  <button class="delete-button">Delete</button>
                </div>
              </div>

              <!-- reference edit form section -->
              <div v-if="editreference == true" class="reference-edit">
                <b-form>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <b-form-group label="Name*">
                        <b-form-input trim></b-form-input>
                      </b-form-group>
                      <b-form-group label="Company Name*">
                        <b-form-input trim></b-form-input>
                      </b-form-group>
                      <b-form-group label="Email *">
                        <b-form-input trim></b-form-input>
                      </b-form-group>
                      <b-form-group label="relations*">
                        <b-form-select
                          :options="relations_options"
                        ></b-form-select>
                      </b-form-group>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <b-form-group label="Designation *">
                        <b-form-input trim></b-form-input>
                      </b-form-group>
                      <b-form-group label="Company Address *">
                        <b-form-input trim></b-form-input>
                      </b-form-group>
                      <b-form-group label="Phone*">
                        <b-form-input trim></b-form-input>
                      </b-form-group>
                      <b-form-group label="Location*">
                        <b-form-input trim></b-form-input>
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

              <!-- reference info section -->
              <div v-else class="reference-details">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="info">
                      <div class="title">Name</div>
                      <div class="inf">- MOHAMMAD ALI</div>
                    </div>

                    <div class="info">
                      <div class="title">Company Name</div>
                      <div class="inf">- Abc Comany</div>
                    </div>

                    <div class="info">
                      <div class="title">Email</div>
                      <div class="inf">- example@gmail.com</div>
                    </div>

                    <div class="info">
                      <div class="title">Relation</div>
                      <div class="inf">- Family Member</div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="info">
                      <div class="title">Designation</div>
                      <div class="inf">- Senior UI/UX Designer</div>
                    </div>
                    <div class="info">
                      <div class="title">Company Address</div>
                      <div class="inf">- Dhaka, Bangaldesh</div>
                    </div>
                    <div class="info">
                      <div class="title">Phone</div>
                      <div class="inf">- 01234 567890</div>
                    </div>
                    <div class="info">
                      <div class="title">Address</div>
                      <div class="inf">- Noakhali 3800, Bangladesh</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- reference input section -->
            <div class="reference-input">
              <div class="title">Reference 2</div>
              <b-form>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <b-form-group label="Name*">
                      <b-form-input trim></b-form-input>
                    </b-form-group>
                    <b-form-group label="Company Name*">
                      <b-form-input trim></b-form-input>
                    </b-form-group>
                    <b-form-group label="Email *">
                      <b-form-input trim></b-form-input>
                    </b-form-group>
                    <b-form-group label="relations*">
                      <b-form-select
                        :options="relations_options"
                      ></b-form-select>
                    </b-form-group>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <b-form-group label="Designation *">
                      <b-form-input trim></b-form-input>
                    </b-form-group>
                    <b-form-group label="Company Address *">
                      <b-form-input trim></b-form-input>
                    </b-form-group>
                    <b-form-group label="Phone*">
                      <b-form-input trim></b-form-input>
                    </b-form-group>
                    <b-form-group label="Location*">
                      <b-form-input trim></b-form-input>
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
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialSkill",
  data: function () {
    return {
      editspecializationinfo: false,
      editlanguageinfo: false,
      editreference: false,
      language_level: [
        { value: "Low", text: "Low" },
        { value: "Medium", text: "Medium" },
        { value: "High", text: "High" },
      ],

      relations_options: [
        { value: "Relative", text: "Relative" },
        { value: "Family Member", text: "Family Member" },
        { value: "Academic", text: "Academic" },
        { value: "Professionals", text: "Professionals" },
        { value: "Others", text: "Others" },
      ],
    };
  },
};
</script>
