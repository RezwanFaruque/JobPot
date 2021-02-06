<template>
  <div id="upload_resume">
    <div class="upload-resume-card">
      <div class="title">Upload Resume</div>
      <hr />
      <div class="upload-resume-body">
        <div class="title">
          In this section you can upload your resume. Here you can take help
          from the video attached in the right corner of CV attachment bar. Also
          you can get help from instructions given below.
        </div>
        <div class="upload-section">
          <b-form>
            <div class="image-section">
              <img
                class="upload-image-icon"
                src="../assets/vendor/Images/upload-icon-resume.png"
                alt=""
                srcset=""
              />
              <div class="empty">
                  You didn't upload any Cv/Resume Yet
              </div>
            </div>
            <div class="buttons-upload">
              <input type="file" ref="file" style="display: none" />
              <button @click.prevent="$refs.file.click()" class="browse">Browse</button>
              <button class="upload">Upload</button>
            </div>
          </b-form>
        </div>
        <div class="upload-rulls">
          <div class="rulls-title">Standard file uploading guideline.</div>
          <div class="rulls">- File must be less than 500 KB.</div>
          <div class="rulls">- File format should be .pdf, .doc or .docx.</div>
        </div>

        <div class="upload-resume-footer">
          CV attachment is the best way to stand out from the other candidates.
          Show your skills on your own way.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadResume",
};
</script>
