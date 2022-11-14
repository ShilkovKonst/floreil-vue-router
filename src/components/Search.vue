<template>
  <section id="search_section" class="sticky-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex gap-2">
          <form class="d-flex flex-fill align-self-center gap-1" role="search" id="form">
            <input class="form-control rounded-pill border border-success align-self-center border-1" type="search"
              id="search" placeholder="Je cherche une plante..." aria-label="Search" required minlength="4">
            <button for="search" class="btn btn-additional rounded-circle  align-self-center flex-shrink-0 medium"
              type="submit">
              <div class="d-flex justify-content-center ">
                <i class="fa fa-search fa-lg align-self-center" aria-hidden="true"></i>
              </div>
            </button>
          </form>
          <div class="florei_brun_separator h-75 align-self-center"></div>
          <a href="#header" class="d-flex justify-content-center align-self-center rounded-circle">
            <button
              class="d-flex justify-content-center align-self-center btn btn-additional rounded-circle flex-shrink-0 medium"
              type="submit">
              <i class="fa fa-angle-double-up fa-lg align-self-center" aria-hidden="true"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>