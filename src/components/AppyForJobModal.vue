<template>
  <b-modal id="applyforjobmodal" ref="applyforjobmodal" hide-footer hide-header>
    This is apply for job modal
  </b-modal>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({
  name: "ApplyForJobModal",
})
export default class ApplyForJobModel extends Vue {
    // showing the applyforjobmodal
  show() {
    this.$refs.applyforjobmodal.show();
  }
}
</script>

<style>
</style>