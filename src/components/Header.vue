<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header id="header" class="py-0">
        <div class="container position-absolute opacity-0">
            <div class="row d-none d-sm-block">
                <div class="col-12">
                    <h1 class="text-center fw-bold fst-italic">Magasin des plantes pour tous</h1>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid bgc">
                <RouterLink to="/" href="/" id="logo">
                    <img src="../assets/images/Logos/logo_floreil_main_75x240.png" alt="logo"
                        class="img-fluid d-none d-sm-block">
                    <img src="../assets/images/Logos/logo_floreil_main_50x160.png" alt="logo"
                        class="img-fluid d-block d-sm-none ">
                </RouterLink>
                <button class="navbar-toggler rounded-circle ms-auto huge" type="button" data-bs-toggle="collapse"
                    data-bs-target="#headerSupportedContent" aria-controls="headerSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation" id="collapse_toggler_header">
                    <div class="d-flex justify-content-center">
                        <i class="fa fa-bars fa-2xl align-self-center text-shadow rotatable_z_0"></i>
                    </div>
                </button>
                <!-- Collapsable part of the header-->
                <div class="collapse navbar-collapse gap-3" id="headerSupportedContent">
                    <ul class="navbar-nav mt-2 my-md-auto justify-content-end gap-4 list-group-horizontal ms-auto"
                        id="list">
                        <li class="nav-item ms-md-auto">
                            <a class="active d-flex justify-content-center align-self-center rounded-circle"
                                aria-current="page" href="#">
                                <button
                                    class="d-flex justify-content-center align-self-center btn btn-header rounded-circle flex-shrink-0 huge">
                                    <i class="fa fa-heart fa-2xl align-self-center text-shadow" aria-hidden="true"></i>
                                </button>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="active d-flex justify-content-center align-self-center rounded-circle"
                                aria-current="page" href="#">
                                <button
                                    class="d-flex justify-content-center align-self-center btn btn-header rounded-circle flex-shrink-0 huge">
                                    <i class="fa fa-cart-shopping fa-2xl align-self-center text-shadow"></i>
                                </button>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="active d-flex justify-content-center align-self-center rounded-circle"
                                aria-current="page">
                                <button
                                    class="d-flex justify-content-center align-self-center btn btn-header rounded-circle flex-shrink-0 huge"
                                    data-bs-toggle="modal" data-bs-target="#login_section">
                                    <i class="fa fa-user fa-2xl align-self-center text-shadow"></i>
                                    <!-- <a href="#" class="d-none active px-sm-0" id="link_user_space">
                  <img src="./assets/images/feey-monstera.jpg" alt="avatar" class="img-fluid">
                </a> -->
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
