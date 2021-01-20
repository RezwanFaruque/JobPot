<template>
    <div class="modal fade" id="SignUpModal" tabindex="-1" role="dialog" aria-labelledby="SignUpModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="SignUpModalLabel">Sign Up</div>
                    <div class="social-media-signup">
                        <div class="signup-button">
                            <button> <span class="logo">G</span> Continue with Google</button>
                        </div>
                        <div class="signup-button">
                            <button> <span class="logo">F</span> Continue with Facebook</button>
                        </div>
                        <div class="signup-button">
                            <button><span class="logo">L</span> Continue with Linkedin</button>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="or">
                        or
                    </div>
                    <div class="signup-form-with-tab">
                        <div>
                            <b-tabs pills card>
                                <b-tab title="Job Seeker" active>
                                    <b-card-text>
                                        <div>
                                            Job Seeker Form
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="Company">
                                    <b-card-text>
                                        Company Form
                                    </b-card-text>
                                </b-tab>
                            </b-tabs>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import 'jquery';
export default {
    name: 'SignUpModal',
}
</script>
