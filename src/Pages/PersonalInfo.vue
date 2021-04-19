<template>
  <div id="personal-info">
    <div class="title">Personal Information</div>
    <hr />
    <div class="personal-info-sections">
      <div class="title">About Me</div>
      <div class="section-body without-header about-me">
        <div class="left">
          <div class="image-section">
            <img class="profile-picture" :src="imagedata" alt="" srcset="" />
            <div class="image-upload-button">
              <input
                type="file"
                ref="file"
                @change="uploadProfileImage"
                style="display: none"
              />
              <i @click.prevent="$refs.file.click()" class="fas fa-plus"></i>
            </div>
          </div>

          <div class="info-section">
            <form>
              <div class="name">
                <div v-if="editbasicinfo == true">
                  <input type="text" v-model="full_name" />
                </div>
                <div v-else>
                  <div>
                    {{ userprofile.full_name }}
                  </div>
                </div>
              </div>
              <div class="designation">
                <div v-if="editbasicinfo == true">
                  <input v-model="designation" type="text" />
                </div>
                <div v-else>Ui/Ux Designer</div>
              </div>
              <div class="loacation">
                <div v-if="editbasicinfo == true">
                  <input v-model="location" type="text" />
                </div>
                <div v-else>Choubaria Bhangura Pabna</div>
              </div>
            </form>
          </div>
        </div>
        <div class="right">
          <div v-if="editbasicinfo == true">
            <button class="edit-persoanl-info-page">Update</button>
            <button
              @click="editbasicinfo = !editbasicinfo"
              class="edit-persoanl-info-page"
            >
              Cancel
            </button>
          </div>
          <div v-else>
            <button
              @click="editbasicinfo = !editbasicinfo"
              class="edit-persoanl-info-page"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- contact information -->
    <div class="personal-info-sections">
      <div class="title">Contact Information</div>
      <div class="section-body without-header contact-information">
        <div class="left">
          <div class="info">
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="text">{{ userprofile.email }}</div>
          </div>
          <hr />

          <div class="info">
            <div class="icon">
              <i class="fas fa-phone-square-alt"></i>
            </div>
            <div class="text">{{ userprofile.phone }}</div>
          </div>
          <hr />
          <div class="info">
            <div class="icon">
              <i class="fas fa-phone-square-alt"></i>
            </div>
            <div class="text addphone">Add Phone Number 2(optional)</div>
          </div>
        </div>
        <div class="right">
          <button class="edit-persoanl-info-page">Edit</button>
        </div>
      </div>
    </div>

    <!-- education -->
    <div class="personal-info-sections">
      <div class="title">Eduaction</div>
      <div class="section-body education">
        <div class="header">
          <div class="plus-button"><i class="fas fa-plus-square"></i></div>
          <div class="text">Add Education</div>
        </div>
        <hr />
        <div class="body">
          <div class="left">
            <div class="title">
              Noakhali Science & Technology University Bachelor of Science
            </div>
            <div class="sub-title">- Information Technology</div>
            <div class="description">
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.
              Suspendisse maximus dolor quis consequat volutpat. Donec vehicula
              elit eu erat pulvinar, vel congue ex egestas. Praesent egestas
              purus dolor.
            </div>
          </div>
          <div class="right">
            <button class="edit-persoanl-info-page">Edit</button>
          </div>
        </div>
      </div>
    </div>

    <!-- work experiences -->
    <div class="personal-info-sections">
      <div class="title">Work Experiences</div>
      <div class="section-body work-experiences">
        <div class="header">
          <div class="plus-button"><i class="fas fa-plus-square"></i></div>
          <div class="text">Add Work Experiences</div>
        </div>
        <hr />
        <div class="body">
          <div class="left">
            <div class="title">ABC COMPANY</div>
            <div class="sub-title">Senior UI/UX Designer</div>
            <div class="description">
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.
              Suspendisse maximus dolor quis consequat volutpat. Donec vehicula
              elit eu erat pulvinar, vel congue ex egestas. Praesent egestas
              purus dolor.
            </div>
          </div>
          <div class="right">
            <button class="edit-persoanl-info-page">Edit</button>
          </div>
        </div>
      </div>
    </div>

    <!-- skills -->
    <div class="personal-info-sections">
      <div class="title">Skills</div>
      <div class="section-body skills">
        <div class="header">
          <div class="plus-button"><i class="fas fa-plus-square"></i></div>
          <div class="text">Add Skills</div>
        </div>
        <hr />
        <div class="body">
          <div class="left">
            <div class="skills">
              <div class="skill-name">Skill Tagname</div>
              <div class="skill-name">Skill Tagname</div>
              <div class="skill-name">Skill Tagname</div>
              <div class="skill-name">Skill Tagname</div>
            </div>
          </div>
          <div class="right">
            <button class="edit-persoanl-info-page">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { namespaced } from "../store/utils";
import { NS_USER } from "../store/namespace.names";
import { GET_PROFILE } from "../store/getter.names";
import { PROFILE_DETAILS } from "../store/action.names";

import defaultImage from "../assets/vendor/Images/personal-info-profile.png";

@Component({
  name: "PersonalInfo",
})
export default class PersonalInfo extends Vue {
  @Getter(namespaced(NS_USER, GET_PROFILE)) userprofile;
  @Action(namespaced(NS_USER, PROFILE_DETAILS)) profiledetails;

  // all data properties
  editbasicinfo = false;
  imagedata = defaultImage;
  full_name = null;
  designation = null;
  location = null;

  // file upload function
  uploadProfileImage(event) {
    const file = event.target.files[0];
    if (file != null) {
      let render = new FileReader();
      render.onload = (event) => {
        this.imagedata = event.target.result;
      };
      render.readAsDataURL(file);
    } else {
      this.imagedata = defaultImage;
    }
  }

  // Editor Update basic info section

  mounted() {
    console.log(this.profiledetails());
    if (this.userprofile != null) {
      this.full_name = this.userprofile.full_name;
      this.designation = this.userprofile.designation;
      this.location = this.userprofile.location;
    }

    if (this.userprofile.pp == null) {
      this.imagedata = defaultImage;
    } else {
      this.imagedata = this.userprofile.pp;
    }
  }
}
</script>



