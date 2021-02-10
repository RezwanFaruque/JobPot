<template>
  <div id="jobfilter_sidebar">
    <div class="section">
      <div class="section-title">Type of Employment</div>
      <hr>
      <div class="section-body">
        <b-form>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
                id="fulltimejob"
                name="fulltimejob"
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Full Time Jobs</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
                
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Part Time Jobs</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
                
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Remote job</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
               
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Internship Jobs</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
               
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Freelance Jobs</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
               
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Training Jobs</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
        </b-form>
      </div>
    </div>

  <!-- seniority level -->
    <div class="section">
      <div class="section-title">Seniority Level</div>
      <hr>
      <div class="section-body">
        <b-form>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
                id="fulltimejob"
                name="fulltimejob"
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Student Level</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
                
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Entry Level</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
                
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Mid Level</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
               
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Senior Level</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
               
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>Director Level</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
               
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>VP or above</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
        </b-form>
      </div>
    </div>

<!-- salary range -->
    <div class="section">
      <div class="section-title">Salary Range</div>
      <hr>
      <div class="section-body">
        <b-form>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
                id="fulltimejob"
                name="fulltimejob"
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>$200 - $500</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
                
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>$500 - $750</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
                
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>$750 - $1000</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
               
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>$1000 - $2000</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
               
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>$2000 - $5000</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
          <div class="check-boxes-with-number">
            <div class="check-box">
              <b-form-checkbox
               
                value="accepted"
                unchecked-value="not_accepted"
              >
                <span>$5000+</span>
              </b-form-checkbox>
            </div>
            <div class="number">20</div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobFilterSidebar",
};
</script>
