<template>
  <div>
    <Navbar></Navbar>
    <JobSearchBannar></JobSearchBannar>
    <div class="container">
      <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12">
              <JobFilterSidebar></JobFilterSidebar>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12">
              <slot />
          </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobFilterSidebar from '../components/JobFilterSideBar';
import JobSearchBannar from '../components/JobSearchBannar';
export default {
  name: "JobSearchLayout",
  components: {
      Navbar,
      Footer,
      JobFilterSidebar,
      JobSearchBannar
  }
};
</script>

