<script setup>

import CardProduct from '@/components/jobs/cardJob.vue';

</script>
<template>
    <section class="section-3 py-5 bg-2">
        <div class="container">
            <!-- header  -->
            <div class="row">
                <div class="col-6 col-md-10 ">
                    <h2>Find Jobs</h2>
                </div>
                <div class="col-6 col-md-2">
                    <div class="align-end">
                        <select name="sort" id="sort" class="form-control">
                            <option value="">Latest</option>
                            <option value="">Oldest</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row pt-5">
                <!-- Find jobs -->
                <div class="col-md-4 col-lg-3 sidebar mb-4">
                    <div class="card border-0 shadow p-4">
                        <div class="mb-4">
                            <h2>Keywords</h2>
                            <input type="text" placeholder="Keywords" class="form-control">
                        </div>

                        <div class="mb-4">
                            <h2>Location</h2>
                            <input type="text" placeholder="Location" class="form-control">
                        </div>

                        <div class="mb-4">
                            <h2>Category</h2>
                            <select name="category" id="category" class="form-control">
                                <option value="">Select a Category</option>
                                <option value="">Engineering</option>
                                <option value="">Accountant</option>
                                <option value="">Information Technology</option>
                                <option value="">Fashion designing</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <h2>Job Type</h2>
                            <div class="form-check mb-2">
                                <input class="form-check-input " name="job_type" type="checkbox" value="1" id="">
                                <label class="form-check-label " for="">Full Time</label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input school-section" name="job_type" type="checkbox" value="1"
                                    id="">
                                <label class="form-check-label " for="">Part Time</label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input school-section" name="job_type" type="checkbox" value="1"
                                    id="">
                                <label class="form-check-label " for="">Freelance</label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input school-section" name="job_type" type="checkbox" value="1"
                                    id="">
                                <label class="form-check-label " for="">Remote</label>
                            </div>
                        </div>

                        <div class="mb-4">
                            <h2>Experience</h2>
                            <select name="category" id="category" class="form-control">
                                <option value="">Select Experience</option>
                                <option value="">1 Year</option>
                                <option value="">2 Years</option>
                                <option value="">3 Years</option>
                                <option value="">4 Years</option>
                                <option value="">5 Years</option>
                                <option value="">6 Years</option>
                                <option value="">7 Years</option>
                                <option value="">8 Years</option>
                                <option value="">9 Years</option>
                                <option value="">10 Years</option>
                                <option value="">10+ Years</option>
                            </select>
                        </div>
                    </div>
                </div>
                <!-- list jobs -->
                <div class="col-md-8 col-lg-9 ">
                    <div class="job_listing_area">
                        <div class="job_lists">
                            <div class="row g-3">
                                <!-- card 01 -->
                                <CardProduct :cardData="{
                                    imgSrc: '/src/assets/img/edutech_logo.png',
                                    imgAlt: 'Edutech',
                                    name: 'Frontend development',
                                    nameCompany: 'Edutech',
                                    timePost: 'Posted 3 days ago',
                                    salary: 'Salary negotiable',
                                    location: 'Default Location',
                                    type: 'Default Type',
                                    skill: [
                                        { msg: 'HTML' },
                                        { msg: 'CSS' },
                                        { msg: 'JS' },
                                        { msg: 'REACT' },
                                        { msg: 'BOOSTRAP 5' },

                                    ],
                                    isShow: true,
                                    styleCss: 'card-h-100 col-12 col-lg-6'
                                }" />

                                <!-- card 02 -->
                                <CardProduct :cardData="{
                                    imgSrc: '/src/assets/img/edutech_logo.png',
                                    imgAlt: 'Edutech',
                                    name: 'Frontend development',
                                    nameCompany: 'Edutech',
                                    timePost: 'Posted 3 days ago',
                                    salary: 'Salary negotiable',
                                    location: 'Default Location',
                                    type: 'Default Type',
                                    skill: [
                                        { msg: 'HTML' },
                                        { msg: 'CSS' },
                                        { msg: 'JS' },
                                        { msg: 'REACT' },
                                        { msg: 'BOOSTRAP 5' },

                                    ],
                                    isShow: true,
                                    styleCss: 'card-h-100 col-12 col-lg-6'
                                }" />

                                <!-- card 03 -->
                                <CardProduct :cardData="{
                                    imgSrc: '/src/assets/img/edutech_logo.png',
                                    imgAlt: 'Edutech',
                                    name: 'Frontend development',
                                    nameCompany: 'Edutech',
                                    timePost: 'Posted 3 days ago',
                                    salary: 'Salary negotiable',
                                    location: 'Default Location',
                                    type: 'Default Type',
                                    skill: [
                                        { msg: 'HTML' },
                                        { msg: 'CSS' },
                                        { msg: 'JS' },
                                        { msg: 'REACT' },
                                        { msg: 'BOOSTRAP 5' },

                                    ],
                                    isShow: true,
                                    styleCss: 'card-h-100 col-12 col-lg-6'
                                }" />

                                <!-- card 04 -->
                                <CardProduct :cardData="{
                                    imgSrc: '/src/assets/img/edutech_logo.png',
                                    imgAlt: 'Edutech',
                                    name: 'Frontend development',
                                    nameCompany: 'Edutech',
                                    timePost: 'Posted 3 days ago',
                                    salary: 'Salary negotiable',
                                    location: 'Default Location',
                                    type: 'Default Type',
                                    skill: [
                                        { msg: 'HTML' },
                                        { msg: 'CSS' },
                                        { msg: 'JS' },
                                        { msg: 'REACT' },
                                        { msg: 'BOOSTRAP 5' },

                                    ],
                                    isShow: true,
                                    styleCss: 'card-h-100 col-12 col-lg-6'
                                }" />

                                <!-- card 05 -->
                                <CardProduct :cardData="{
                                    imgSrc: '/src/assets/img/edutech_logo.png',
                                    imgAlt: 'Edutech',
                                    name: 'Frontend development',
                                    nameCompany: 'Edutech',
                                    timePost: 'Posted 3 days ago',
                                    salary: 'Salary negotiable',
                                    location: 'Default Location',
                                    type: 'Default Type',
                                    skill: [
                                        { msg: 'HTML' },
                                        { msg: 'CSS' },
                                        { msg: 'JS' },
                                        { msg: 'REACT' },
                                        { msg: 'BOOSTRAP 5' },

                                    ],
                                    isShow: true,
                                    styleCss: 'card-h-100 col-12 col-lg-6'
                                }" />

                                <!-- card 06 -->
                                <CardProduct :cardData="{
                                    imgSrc: '/src/assets/img/edutech_logo.png',
                                    imgAlt: 'Edutech',
                                    name: 'Frontend development',
                                    nameCompany: 'Edutech',
                                    timePost: 'Posted 3 days ago',
                                    salary: 'Salary negotiable',
                                    location: 'Default Location',
                                    type: 'Default Type',
                                    skill: [
                                        { msg: 'HTML' },
                                        { msg: 'CSS' },
                                        { msg: 'JS' },
                                        { msg: 'REACT' },
                                        { msg: 'BOOSTRAP 5' },

                                    ],
                                    isShow: true,
                                    styleCss: 'card-h-100 col-12 col-lg-6'
                                }" />

                                <!-- card 07 -->
                                <CardProduct :cardData="{
                                    imgSrc: '/src/assets/img/edutech_logo.png',
                                    imgAlt: 'Edutech',
                                    name: 'Frontend development',
                                    nameCompany: 'Edutech',
                                    timePost: 'Posted 3 days ago',
                                    salary: 'Salary negotiable',
                                    location: 'Default Location',
                                    type: 'Default Type',
                                    skill: [
                                        { msg: 'HTML' },
                                        { msg: 'CSS' },
                                        { msg: 'JS' },
                                        { msg: 'REACT' },
                                        { msg: 'BOOSTRAP 5' },

                                    ],
                                    isShow: true,
                                    styleCss: 'card-h-100 col-12 col-lg-6'
                                }" />

                                <!-- card 08 -->
                                <CardProduct :cardData="{
                                    imgSrc: '/src/assets/img/edutech_logo.png',
                                    imgAlt: 'Edutech',
                                    name: 'Frontend development',
                                    nameCompany: 'Edutech',
                                    timePost: 'Posted 3 days ago',
                                    salary: 'Salary negotiable',
                                    location: 'Default Location',
                                    type: 'Default Type',
                                    skill: [
                                        { msg: 'HTML' },
                                        { msg: 'CSS' },
                                        { msg: 'JS' },
                                        { msg: 'REACT' },
                                        { msg: 'BOOSTRAP 5' },

                                    ],
                                    isShow: true,
                                    styleCss: 'card-h-100 col-12 col-lg-6'
                                }" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- pagination -->
            <div class="mt-3 d-flex justify-content-center">

                <nav aria-label="Page navigation ">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link h-100 d-flex align-items-center" href="#" aria-label="Previous" git="-1"
                                aria-disabled="true">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a
                                class="page-link h-100 d-flex align-items-center" href="#">1</a></li>
                        <li class="page-item"><a class="page-link h-100 d-flex align-items-center" href="#">2</a></li>
                        <li class="page-item"><a class="page-link h-100 d-flex align-items-center" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    </section>


</template>