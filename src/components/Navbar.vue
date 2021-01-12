<template>
   <div id="section-navbar">
       <div class="navbar">
           <nav class="navbar navbar-expand-lg">
               <div class="container">
                    <router-link to="/"><img :src="require('../assets/vendor/Images/mainlogo.png')" alt=""></router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/">Browse a Job</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/personal-info">Post A Job</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/">Build/Upload Resume</router-link>
                            </li>
                        </ul>
                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        
                            <li class="nav-item">
                                <router-link to="/">Post A Job</router-link>
                            </li>
                            <li class="nav-item">
                                <button>Sign in</button>
                            </li>
                        </ul>
                    </div>
               </div>
            </nav>
       </div>
   </div>
</template>

<script>

export default {
    name: 'Navbar',

}
</script>

<style>

</style>