<script>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer id="footer" class="py-0 py-sm-3">
    <nav class="navbar navbar-expand-sm pt-o">
      <div class="container-fluid bgc">
        <button class="navbar-toggler rounded-pill  m-auto w-100" type="button" data-bs-toggle="collapse"
          data-bs-target="#prefooterSupportedContent" aria-controls="prefooterSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation" id="collapse_toggler_footer">
          <div class="d-flex justify-content-center">
            <i class="fa fa-angle-down fa-lg align-self-center me-auto rotatable_z_0"></i>
            Company / Comunity
            <i class="fa fa-angle-down fa-lg align-self-center ms-auto rotatable_z_0"></i>
          </div>
        </button>
        <div class="collapse navbar-collapse" id="prefooterSupportedContent">
          <ul class="navbar-nav flex-grow-1 mt-2 my-md-auto justify-content-center gap-5 list-group-horizontal mx-auto"
            id="footer_list">
            <li class="nav-item flex-grow-1">
              <h3 class="text-center fw-bold">Company</h3>
              <nav class="nav flex-row justify-content-evenly">
                <RouterLink to="/company/#about" class="nav-link text-center" href="/about">About Us</RouterLink>
                <RouterLink to="/company/#history" class="nav-link text-center" href="/about">History</RouterLink>
              </nav>
            </li>
            <li class="nav-item flex-grow-1">
              <h3 class="text-center fw-bold">Community</h3>
              <nav class="nav flex-row justify-content-evenly">
                <RouterLink to="/community/" class="nav-link text-center" href="#contrib">Contributions</RouterLink>
                <a href="mailto:ask@floreil.com" class="nav-link text-center">Contact us</a>
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row justify-content-evenly">
        <div class="col-12">
          <nav class="nav nav-pills nav-fill">
            <a class="nav-link" href="#">Conditions g??n??rales de vente</a>
            <a class="nav-link" href="#">Vos informations personnelles</a>
            <a class="nav-link" href="#">Cookies</a>
            <a class="nav-link" href="#">Annonces bas??es sur vos centres d???int??r??t</a>
          </nav>
          <div class="text-center pb-3">?? 2022, Floreil ou ses affili??s</div>
        </div>
      </div>
    </div>
  </footer>
</template>