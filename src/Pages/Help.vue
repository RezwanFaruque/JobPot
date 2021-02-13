<template>
  <div id="help">
    <div class="title">Help</div>
    <hr />
    <div class="faq-card">
      <div class="title">FAQ</div>
      <div class="faq-questions">
        <div class="faq-title-with-toggle-icon">
          <div class="title" v-b-toggle.faq-1 variant="info">
            How To Create and Activate jobpot Account?
          </div>
          <div class="toggle-icon" v-b-toggle.faq-1 variant="info">
            <span class="when-open"><i class="fas fa-angle-up"></i></span>
            <span class="when-close"><i class="fas fa-angle-down"></i></span>
          </div>
        </div>

        <b-collapse id="faq-1" visible accordion="faq-1" role="tabpanel1">
          <div class="faq-body">
            The data collected directly from us via the social media presence
            will be deleted from our systems as soon as the purpose for their
            storage lapses, you ask us to delete it, you revoke your consent to
            the storage or the purpose for the data storage lapses. Stored
            cookies remain on your device until you delete them. Mandatory
            statutory provisions – in particular, retention periods – remain
            unaffected.
          </div>
        </b-collapse>
      </div>

      <div class="faq-questions">
        <div class="faq-title-with-toggle-icon">
          <div class="title" v-b-toggle.faq-2 variant="info">
            How To Edit "Personal Area"?
          </div>
          <div class="toggle-icon" v-b-toggle.faq-2 variant="info">
            <span class="when-open"><i class="fas fa-angle-up"></i></span>
            <span class="when-close"><i class="fas fa-angle-down"></i></span>
          </div>
        </div>

        <b-collapse id="faq-2" visible accordion="faq-2" role="tabpanel2">
          <div class="faq-body">
            The data collected directly from us via the social media presence
            will be deleted from our systems as soon as the purpose for their
            storage lapses, you ask us to delete it, you revoke your consent to
            the storage or the purpose for the data storage lapses. Stored
            cookies remain on your device until you delete them. Mandatory
            statutory provisions – in particular, retention periods – remain
            unaffected.
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Help",
};
</script>
