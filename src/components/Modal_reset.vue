<template>
  <div id="modal_reset">
    <div class="modal fade" id="reset_password_section" tabindex="-1" aria-labelledby="reset_password_Label"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fw-bold fs-5" id="reset_password_Label">Reset your password</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="reset_password_Label">
            <!-- Form-->
            <div class="mb-3">
              <label for="email_pass_reset_form" class="form-label">Email address</label>
              <input type="email" class="form-control rounded-pill" id="email_pass_reset_form"
                placeholder="name@example.com">
            </div>
            <div>
              <span class="btn btn-link pt-0" data-bs-toggle="modal" data-bs-target="#login_section">Return to log
                in</span>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-additional fw-bold rounded-pill" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-header fw-bold text-shadow rounded-pill">Reset password</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>