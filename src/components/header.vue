<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow py-3">
        <div class="container">
          <!-- Thay thế bằng router-link -->
          <router-link class="navbar-brand" to="/">CareerVibe</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="main_nav">
            <ul class="navbar-nav ms-0 ms-sm-0 me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item active">
                <router-link class="nav-link" to="/home">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/job">Find Job</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/company">Company</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/blog">Blog</router-link>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">More items</a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">Dropdown item 1 &rtrif;</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Submenu item 1</a></li>
                      <li><a class="dropdown-item" href="#">Submenu item 2</a></li>
                      <li><a class="dropdown-item" href="#">Submenu item 3</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Dropdown item 2 &rtrif;</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Another submenu 1</a></li>
                      <li><a class="dropdown-item" href="#">Another submenu 2</a></li>
                      <li><a class="dropdown-item" href="#">Another submenu 3</a></li>
                      <li><a class="dropdown-item" href="#">Another submenu 4</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Dropdown item 3 &rtrif;</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Another submenu 1</a></li>
                      <li><a class="dropdown-item" href="#">Another submenu 2</a></li>
                      <li><a class="dropdown-item" href="#">Another submenu 3</a></li>
                      <li><a class="dropdown-item" href="#">Another submenu 4</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
  
            <router-link class="btn btn-outline-primary me-2" to="/login">Login/Register</router-link>
            <router-link class="btn btn-primary" to="/register-employers">For Employers</router-link>
        
                   
            <!-- Phần này bạn có thể điều chỉnh lại theo Vue -->
            <!-- <div class="w-25 ms-sm-0 ps-xxl-5 ps-xl-3 ps-lg-1">
              <div class="dropdown d-flex align-items-center gap-3 justify-content-lg-end">
                <a href="#!" class="fs-5">
                  <i class="fa-solid fa-bell"></i>
                </a>
                <button class="p-0 btn border-0 bg-transparent dropdown-toggle d-flex align-items-center gap-2" 
                        data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="20,20">
                  <img class="object-fit-cover img-thumbnail rounded-circle" style="max-width: 40px;" src="../assets/img/avatar7.png"
                    alt="avatar7" />
                 
                </button>
  
                <ul class="dropdown-menu mt-2 end-0">
                  <li>
                    <div
                      class="dropdown-item d-flex flex-lg-column flex-xl-row align-items-xl-center align-items-lg-start gap-2 pb-2  border-bottom">
                      <img class="object-fit-cover img-thumbnail rounded-circle" style="max-width: 40px;" src="../assets/img/avatar7.png"
                        alt="avatar7" />
                      <span class="fs-6">Trần Quang Trường</span>
                    </div>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/account">Account Setting</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/blog/post">Post a Blog</router-link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Log out</a>
                  </li>
                </ul>
              </div>
            </div> -->

          </div> <!-- navbar-collapse.// -->
        </div> <!-- container-fluid.// -->
      </nav>
    </header>
  </template>
  