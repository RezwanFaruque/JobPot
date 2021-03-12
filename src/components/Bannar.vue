<template>

    <div id="bannar-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="left-side">
                 <div class="title">
                   The Easiest Way to Get Your New Test <span>JOB</span>
                 </div>
                 <div class="subtitle">
                    Aenean sed nibh a magna posuere tempor.
                    Nunc faucibus pellentesque nunc in aliquet.
                    Donec congue, nunc vel tempor congue,
                    enim sapien lobortis ipsum, in volutpat sem ex in ligula.
                    Nunc purus est.
                 </div>
                 <div class="search-section">
                   <form>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <button class="search-banner" type="submit">Search Job</button>
                      </div>
                   </form>
                 </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="right-side">
                <div class="bn-image">
                  <img class="bannar-vector" :src="require('../assets/vendor/Images/bannar-vector.png')" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  
</template>

<script>
export default {

  name: 'Bannar',
}
</script>

<style>

</style>