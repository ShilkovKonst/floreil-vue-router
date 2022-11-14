<template>
  <div id="modal_login">
    <div class="modal fade" id="login_section" tabindex="-1" aria-labelledby="login_section_Label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fw-bold fs-5" id="login_section_Label">Log in</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="login_section_body">
            <!-- Form-->
            <div class="mb-3">
              <label for="email_login_form" class="form-label">Email address</label>
              <input type="email" class="form-control rounded-pill" id="email_login_form"
                placeholder="name@example.com">
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control rounded-pill" id="inputPassword">
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                <label class="form-check-label" for="autoSizingCheck">Remember me</label>
              </div>

              <div class="btn btn-link" data-bs-toggle="modal" data-bs-target="#reset_password_section">Forgot your
                password?</div>
            </div>
            <div>
              Need an account? <span class="btn btn-link pt-0" data-bs-toggle="modal"
                data-bs-target="#signup_section">Sign up!</span>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-additional fw-bold rounded-pill" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-header fw-bold text-shadow rounded-pill">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>