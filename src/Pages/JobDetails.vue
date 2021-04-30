<template>
  <div id="job-details">
    <div class="job-details-main-section">
      <div class="main-images-section">
        <img
          class="profile-picture"
          :src="require('../assets/vendor/Images/creer-dev-three.png')"
          alt=""
          srcset=""
        />
        <div class="main-image-icon">
          <img
            class="profile-picture"
            :src="require('../assets/vendor/Images/web-designer.png')"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="header">
        <div class="left">
          <div class="title">UI/UX DESIGNER</div>
          <div class="subtitle">Company Name - Washington, United State</div>
          <div class="posting-date">Posted on: 12/03/2021</div>
        </div>
        <div class="right">
          <div class="details">
            <div class="love-job"></div>
            <div class="dot-section"></div>
          </div>
          <div class="applicants">Posted 10 days ago.</div>
          <div class="deadline">59 Applicants</div>
        </div>
      </div>
      <div class="other-detials">
        <div class="section">
          <div class="title">Experiences</div>
          <div class="info">Minimum 1 year</div>
        </div>
        <div class="section">
          <div class="title">Work Level</div>
          <div class="info">Entry Level</div>
        </div>
        <div class="section">
          <div class="title">Employee Type</div>
          <div class="info">Full Type</div>
        </div>
        <div class="section">
          <div class="title">Salay Offers</div>
          <div class="info">120000 BDT</div>
        </div>
      </div>
      <div class="main-detials">
        <div class="section">
          <div class="title">Vacancy</div>
          <div class="info">- 14</div>
        </div>

        <div class="section">
          <div class="title">Overview</div>
          <div class="info">
            Cisscom LLC is looking for a full-time UX/UX Designer. The candidate
            will work as a bridge between product and development teams in order
            to help them bring tech concepts to life through visual design, find
            a balance between aesthetics and usability, and ensure quality in
            design-to-code translation.
          </div>
        </div>

        <div class="section">
          <div class="title">Job Responsibilities:</div>
          <div class="info">
            - Conceptualize effective and efficient user workflows for solving
            problems and create documentation where required. - Create
            wireframes and/or clickable prototypes following best practices. -
            Create and grow modular design systems with long-term scalability in
            mind. - Making and managing social media content for social media
            platforms- Performing responsibilities relates to Brand and Branding
            placement - Creativity is an essential requirement to be a
            successful visualizer. Balancing the need for both functional
            requirements with a pleasant and engaging form is the cornerstone to
            your success. Having an innate artistic ability to decide how best
            to manipulate colors, contrast, typography and other visual elements
            in your work are very important.
          </div>
        </div>

        <div class="section">
          <div class="title">Job Requirements:</div>
          <div class="info">
            - A keen eye for modern and effective design. - An analytical mind
            that proactively seeks out innovation. - Accountable and
            self-driven. - A growth mindset with a knack for learning.
          </div>
        </div>

        <div class="section">
          <div class="title">Educational Requirements</div>
          <div class="info">
            - Bachelor of Science in CSE/EEE/IT/ICT/SE/Graphics - Masters of
            Science in CSE/EEE/IT/ICT/SE/Graphics
          </div>
        </div>

        <div class="section">
          <div class="title">Additional Requirements</div>
          <div class="info">
            - Age 23 to 32 years - Male & Female both can apply for this job
          </div>
        </div>

        <div class="section">
          <div class="title">Workplace</div>
          <div class="info">- Work at office</div>
        </div>

        <div class="section">
          <div class="title">Email</div>
          <div class="info">- Send your CV to yourmail@gmail.com</div>
        </div>

        <div class="section">
          <div class="title">Job Source</div>
          <div class="info">- http://www.jobpot.com</div>
        </div>

        <div class="section">
          <div class="apply-button">
            <button>apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  name: "JobDetails",
})
export default class JobDetails extends Vue {}
</script>

<style>
</style>