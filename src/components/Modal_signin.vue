<template>
  <div id="modal_signin">
    <div class="modal fade" id="signup_section" tabindex="-1" aria-labelledby="signup_section_Label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fw-bold fs-5" id="signup_section_Label">Sign up</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="signup_section_body">
            <!-- Form-->
            <form class="row g-3">
              <div class="col-md-4">
                <label for="validationDefault01" class="form-label">First name</label>
                <input type="text" class="form-control rounded-pill" id="validationDefault01" value="Mark" required>
              </div>
              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Last name</label>
                <input type="text" class="form-control rounded-pill" id="validationDefault02" value="Otto" required>
              </div>
              <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label rounded-pill">Username</label>
                <div class="input-group">
                  <span class="input-group-text rounded-pill" id="inputGroupPrepend2">@</span>
                  <input type="text" class="form-control rounded-pill" id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2" required>
                </div>
              </div>
              <div class="mb-3">
                <label for="email_signup_form" class="form-label">Email address</label>
                <input type="email" class="form-control rounded-pill" id="email_signup_form"
                  placeholder="name@example.com">
              </div>
              <div class="col-md-6">
                <label for="validationDefault03" class="form-label">City</label>
                <input type="text" class="form-control rounded-pill" id="validationDefault03" required>
              </div>
              <div class="col-md-3">
                <label for="validationDefault04" class="form-label">State</label>
                <select class="form-select" id="validationDefault04" required>
                  <option selected disabled value="">Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-3">
                <label for="validationDefault05" class="form-label">Zip</label>
                <input type="text" class="form-control rounded-pill" id="validationDefault05" required>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                  <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
            </form>
            <div>
              Already have an account? <span class="btn btn-link pt-0" data-bs-toggle="modal"
                data-bs-target="#login_section">Log in!</span>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-additional fw-bold rounded-pill" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-header fw-bold text-shadow rounded-pill">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>