<template>
    <div id="change_password">
        <div class="title">
            Change Password
        </div>
        <hr>
        <div class="change-password-card">
            <div class="title">
                Change Password
            </div>
            <hr>
            <form>
                <div class="mb-4 row">
                    <label for="existing_password" class="col-sm-4 col-form-label">* Existing Password:</label>
                    <div class="col-sm-8">
                        <input type="password" class="form-control" placeholder="Enter Your Existing Password" id="existing_password">
                    </div>
                </div>
                <div class="mb-4 row">
                    <label for="new_password" class="col-sm-4 col-form-label">* New Password:</label>
                    <div class="col-sm-8">
                        <input type="password" class="form-control" placeholder="Enter New Password" id="new_password">
                    </div>
                </div>
                <div class="mb-4 row">
                    <label for="re_enter_password" class="col-sm-4 col-form-label">* Re-Enter New Password:</label>
                    <div class="col-sm-8">
                        <input type="password" class="form-control" placeholder="Re Enter New Password" id="re_enter_password">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-sm-4">

                    </div>
                    <div class="col-sm-8">
                        <button class="submit-change-password" type="submit">Save</button>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChangePassword'

}
</script>
