<template>
  <div id="personal-info">
    <div class="title">Personal Information</div>
    <hr />
    <div class="personal-info-sections">
      <div class="title">About Me</div>
      <div class="section-body without-header about-me">
        <div class="left">
          <div class="image-section">
            <img
              class="profile-picture"
              :src="imagedata"
              alt=""
              srcset=""
            />
            <div class="image-upload-button">
              <input type="file" ref="file" @change="uploadProfileImage" style="display: none" />
              <i @click.prevent="$refs.file.click()" class="fas fa-plus"></i>
            </div>
          </div>
          <div class="info-section">
            <div class="name">{{userprofile.full_name}}</div>
            <div class="designation">UI/UX Designer</div>
            <div class="loacation">Maijdi 3814, Noakhali, Bangaldesh</div>
          </div>
        </div>
        <div class="right">
          <button class="edit-persoanl-info-page">Edit</button>
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
            <div class="text">{{userprofile.email}}</div>
          </div>
          <hr />

          <div class="info">
            <div class="icon">
              <i class="fas fa-phone-square-alt"></i>
            </div>
            <div class="text">{{userprofile.phone}}</div>
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
import defaultImage from '../assets/vendor/Images/personal-info-profile.png';

@Component({
  name: "PersonalInfo",

})

export default class PersonalInfo extends Vue {

  @Getter(namespaced(NS_USER,GET_PROFILE)) userprofile;


  imagedata = defaultImage;
  // file upload function 
  uploadProfileImage(event){
    const file = event.target.files[0];
    if(file != null){
      let render = new FileReader();
      render.onload = (event)=>{
         this.imagedata = event.target.result;
      }
      render.readAsDataURL(file);
    }else{
      this.imagedata = defaultImage;
    }
    
  }
  mounted(){

    if(this.userprofile.pp == null){
      this.imagedata = defaultImage;
    }else{
      this.imagedata = this.userprofile.pp;
    }
    
  }
};
</script>



