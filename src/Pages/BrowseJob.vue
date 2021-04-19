<template>
  <div id="browse_job">
    <div class="title-with-filter">
      <div class="title"><span>All Jobs</span> 780 Result</div>
      <div class="filter">
        <b-form>
          <b-form-select
            v-model="sortby"
            :options="sortbyoptions"
          ></b-form-select>
        </b-form>
      </div>
    </div>
    <div class="job-results">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="browse-job-card">
              <div class="header">
                <div class="images">
                  <img
                    src="../assets/vendor/Images/digital-marketing.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="dot-text"></div>
              </div>
              <div class="body">
                <div class="job-title">Product Designer</div>
                <div class="job-location">Washington, United State</div>
                <div class="job-description">
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in, semper gravida enim. Donec
                  ultrices varius ligula semper gravida enim. Donec ultrices….
                </div>
                <div class="job-tags">
                  <span class="tags">Full Time</span>
                  <span class="tags">Min 3 Years</span>
                  <span class="tags">Senior Level</span>
                </div>
              </div>
              <div class="footer">
                <div class="buttons">
                  <button class="apply-now-button">Apply Now</button>
                  <button class="love-jobs-button">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div>
              <PaginationComponent
                :totalPages="11"
                :total="113"
                :perPage="10"
                :currentPage="currentPage"
                @pagechanged="onPageChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import PaginationComponent from "../components/PaginationComponent";

@Component({
  name: "BrowseJob",
  components: {
    PaginationComponent,
  },
})
export default class BrowseJob extends Vue {
  currentPage = 1;

  onPageChange(page) {
    this.currentPage = page;
  }

  sortby = null;
  sortbyoptions = [
    { value: null, text: "Sort By:Newest Post" },
    { value: "Oldest", text: "Oldest" },
    { value: "Lowest Salary", text: "Lowest Salary" },
    { value: "Most Applied", text: "Most Applied" },
    { value: "Less Applied", text: "Less Applied" },
  ];
}
</script>

