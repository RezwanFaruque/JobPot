<template>
    <div class="modal fade" id="SignUpModal" tabindex="-1" role="dialog" aria-labelledby="SignUpModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="SignUpModalLabel">
                        Sign Up
                    </div>
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
                            <b-tabs  pills class="tab-section">
                                <b-tab class="job-seeker-tab" title="Job Seeker" active>
                                    <b-card-text>
                                        <div class="job-seeker-form">
                                            <form>
                                                <div class="form-row first-row">
                                                    <input class="first-name" type="text" placeholder="First Name" name="">
                                                    <input type="text" placeholder="Last Name"
                                                    class="last-name" name="">
                                                </div>
                                                <div class="form-row">
                                                    <input type="text" placeholder="Email" class="email" name="">
                                                </div>  
                                                <div class="form-row">
                                                    <input type="password" placeholder="Password"
                                                    class="password" name="">
                                                </div>
                                                <div class="form-row">
                                                     <input type="password" placeholder="Confirm Password" class="password" name="">
                                                </div>

                                                <div class="submit-button">
                                                    <button type="submit" class="signup">Sign Up</button>
                                                </div>
                                            </form>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="Company">
                                    <b-card-text>
                                        <div class="company-form">
                                            <form>
                                                <div class="form-row">
                                                    <input type="text" class="company-name" placeholder="Company Name" name="">
                                                </div>

                                                <div class="form-row">
                                                    <select>
                                                        <option>Company Type</option>
                                                        <option>Company Type One</option>
                                                        <option>Company Type Two</option>
                                                    </select>
                                                </div>

                                                 <div class="form-row">
                                                    <input type="text" class="company-email" placeholder="Company Email" name="">
                                                </div>

                                                <div class="form-row">
                                                    <input type="text" class="company-password" placeholder="Company Password" name="">
                                                </div>

                                                 <div class="form-row">
                                                    <input type="text" class="confirm-password" placeholder="Confirm Password" name="">
                                                </div>
                                                <div class="company-form-submit">
                                                    <button type="submit" class="button-submit">Sign Up</button>
                                                </div>
                                            </form>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                            </b-tabs>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="footer-signup-modal">
                        <div class="text">
                            Already have an account?
                        </div>
                        <div class="signinlink">
                            <router-link to="/">Login</router-link>
                        </div>
                    </div>
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
