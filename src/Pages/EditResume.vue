<template>
   <div id="edit_resume">
       <div class="edit-resume-card">
           <div class="title">
               Edit Resume
           </div>
           <hr>
           <div class="image-upload">
               <div class="image-section">
                   <img class="personal-info-image" src="../assets/vendor/Images/personal-info.png" alt="" srcset="">
               </div>
               <div class="submit-button">
                   <button class="upload-image" type="submit">Upload</button>
               </div>
           </div>

           <!-- main tab options -->
           <div class="edit-resume-tab-options">
               <div class="resume-tabs">
                    <b-tabs pills>
                        <b-tab active>
                            <template #title>
                                <i class="fas fa-user"></i>Personal Info
                            </template>
                            <div>
                                <PersonalInfoComponent />
                            </div>
                        </b-tab>
                        <b-tab>
                            <template #title>
                                <i class="fas fa-pen-square"></i>Education & Trainning
                            </template>
                            <div>
                               <EducationAndTrainning />
                            </div>
                        </b-tab>
                        <b-tab>
                            <template #title>
                                <i class="fas fa-search"></i>Work Experiences
                            </template>
                            <div>
                               <WorkExperience />
                            </div>
                        </b-tab>
                        <b-tab>
                            <template #title>
                                <i class="fas fa-lightbulb"></i>Special Skill
                            </template>
                            <div>
                               <SpecialSkill />
                            </div>
                        </b-tab>
                    </b-tabs>
                </div>
           </div>
       </div>
   </div>
</template>

<script>
import PersonalInfoComponent from '../components/PersonalInfoComponent';
import EducationAndTrainning from '../components/EducationAndTrainning';
import WorkExperience from '../components/WorkExperience';
import SpecialSkill from '../components/SpecialSkill';
export default {
    name: 'EditResume',
    components: {
        PersonalInfoComponent,
        EducationAndTrainning,
        WorkExperience,
        SpecialSkill,
    }

}
</script>
