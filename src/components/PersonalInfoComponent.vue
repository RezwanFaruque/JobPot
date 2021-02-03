<template>
   <div id="personal_info"> 
    <div class="accordion" role="tablist">
        
        <div header-tag="header" class="p-1 title-with-toggle" role="tab">
            <div class="title">Personal Details</div>
            <div class="toggle-icon"><i block v-b-toggle.personal-information variant="info1" class="fas fa-chevron-down"></i></div>
        </div>
        <b-collapse id="personal-information" visible accordion="my-accordion1" role="tabpanel">
            <b-form>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="side-form left">
                            <b-form-group
                                id="input-group-1"
                                label="First Name*"
                                label-for="firstname"
                                >
                                <b-form-input
                                    id="firstname"
                                    type="email"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="input-group-1"
                                label="Father's Name*"
                                label-for="fathersname"
                                >
                                <b-form-input
                                    id="fathersname"
                                    type="text"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="input-group-1"
                                label="Date of Birth*"
                                label-for="dob"
                                >
                                <b-form-datepicker id="dob"></b-form-datepicker>
                            </b-form-group>
                            <b-form-group
                                id="input-group-1"
                                label="Marital Status*"
                                label-for="married"
                                >
                                <b-form-input
                                    id="married"
                                    type="text"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Nationality*"
                                label-for="nation"
                                >
                                <b-form-input
                                    id="nation"
                                    type="text"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Passport Number*"
                                label-for="p_number"
                                >
                                <b-form-input
                                    id="p_number"
                                    type="text"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Mobile Number*"
                                label-for="m_number"
                                >
                                <b-form-input
                                    id="m_number"
                                    type="text"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="side-form right">
                            <b-form-group
                                id="input-group-1"
                                label="Last Name*"
                                label-for="lastname"
                                >
                                <b-form-input
                                    id="lastname"
                                    type="text"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Mother's Name*"
                                label-for="mothername"
                                >
                                <b-form-input
                                    id="mothername"
                                    type="text"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Gender*"
                                label-for="gender"
                                >
                                <b-form-select :options="options"></b-form-select>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Religion*"
                                label-for="religion"
                                >
                                <b-form-input
                                    id="religion"
                                    type="text"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="NID NO.(if have)"
                                label-for="nid"
                                >
                                <b-form-input
                                    id="nid"
                                    type="text"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Passport Issue Date"
                                label-for="pssissuedate"
                                >
                                <b-form-datepicker id="pssissuedate"></b-form-datepicker>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Email*"
                                label-for="email"
                                >
                                <b-form-input
                                    id="email"
                                    type="email"
                                    
                                    required>
                                </b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="buttons">
                            <button type="submit">Save</button>
                            <button>Close</button>
                        </div>
                    </div>
                    
                </div>
            </b-form>
        </b-collapse>

        <div header-tag="header" class="p-1 title-with-toggle" role="tab">
            <div class="title">Address Details</div>
            <div class="toggle-icon"><i block v-b-toggle.address-details variant="info2" class="fas fa-chevron-down"></i></div>
        </div>
        <b-collapse id="address-details" visible accordion="my-accordion2" role="tabpane2">
            <b-form>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="title">
                            Present Address*
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">                      
                               
                        <b-form-select v-model="selected"  :options="d_options"></b-form-select>
                            
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <b-form-select v-model="selected"  :options="d_options"></b-form-select>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <b-form-select v-model="selected"  :options="d_options"></b-form-select>
                    </div>
                    
                    
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="title">
                            Permanant Address*
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">                      
                               
                        <b-form-select v-model="selected"  :options="d_options"></b-form-select>
                            
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <b-form-select v-model="selected"  :options="d_options"></b-form-select>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <b-form-select v-model="selected"  :options="d_options"></b-form-select>
                    </div>
     
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="buttons">
                            <button type="submit">Save</button>
                            <button>Close</button>
                        </div>
                    </div>
                </div>
            </b-form>
        </b-collapse>

        <div header-tag="header" class="p-1 title-with-toggle" role="tab">
            <div class="title">Career & Job Application</div>
            <div class="toggle-icon"><i block v-b-toggle.career-job-application variant="info3" class="fas fa-chevron-down"></i></div>
        </div>

        <b-collapse id="career-job-application" visible accordion="my-according2" role="tabpanel3">
           <b-form>
               <div class="row">
                   <div class="col-sm-12">
                       <div class="title">
                           Objective*
                       </div>
                       <b-form-textarea
                            id="textarea"
                            
                            placeholder="Write here....."
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>

                   </div>
               </div>
               <div class="row">
                   <div class="col-sm-12">
                       <div class="buttons">
                            <button type="submit">Save</button>
                            <button>Close</button>
                        </div>
                   </div>
               </div>
           </b-form>
        </b-collapse>
        
    </div>
   </div>
</template>

<script>
export default {
    name: 'PersonalInfoComponent',
    data:function(){
        return{
            selected: null,
            d_options:[
                { value: null, text: 'Select District' },
                { value: 'District one', text: 'Discritct One' },
                { value: 'District Two', text: 'Discrict Two' },
            ],

            options:[
                
                { value: 'male', text: 'Male' },
                { value: 'female', text: 'Female' },
            ]
        }
    }

}
</script>
