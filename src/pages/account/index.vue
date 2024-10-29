<script setup>
import NavAccount from "@/components/account/navAccount.vue";
</script>

<template>

    <section class="section-5 bg-2">
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <nav aria-label="breadcrumb" class=" rounded-3 p-3 mb-4">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Account Settings</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card border-0 shadow mb-4 p-3">
                        <div class="s-body text-center mt-3">
                            <img src="/src/assets/img/avatar7.png" alt="avatar" class="rounded-circle img-fluid"
                                style="width: 150px;">
                            <h5 class="mt-3 pb-0">Mohit Singh</h5>
                            <p class="text-muted mb-1 fs-6">Full Stack Developer</p>
                            <div class="d-flex justify-content-center mb-2">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"
                                    class="btn btn-primary">Change Profile Picture</button>
                            </div>
                        </div>
                    </div>
                    <div class="card account-nav border-0 shadow mb-4 mb-lg-0">
                        <div class="card-body p-0">
                            <NavAccount :cardData="{
                                content: [
                                    {
                                        id: 1,
                                        titleNav: 'Account Settings',
                                        linkNav: '/account',
                                        isShow: true,

                                    },
                                    {
                                        titleNav: 'My Profile',
                                        linkNav: '/account/profile',
                                        isShow: true,
                                    },
                                    {
                                        titleNav: 'My Profile Employer',
                                        linkNav: '/account/profile-employer',
                                        isShow: true,
                                    },
                                    {
                                        titleNav: 'Post a Job',
                                        linkNav: '/account/post-job',
                                        isShow: true,
                                    },
                                    {
                                        titleNav: 'Post a Blog',
                                        linkNav: '/account/post-blog',
                                        isShow: true,
                                    },
                                    {
                                        titleNav: 'My Jobs',
                                        linkNav: '/account/my-jobs',
                                        isShow: true,
                                    },
                                    {
                                        titleNav: 'Jobs Applied',
                                        linkNav: '/account/jobs-applied',
                                        isShow: true,
                                    },
                                    {
                                        titleNav: 'Saved Jobs',
                                        linkNav: '/account/saved-jobs',
                                        isShow: true,
                                    },
                                ]
                            }" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <router-view></router-view>
                </div>

            </div>
        </div>
    </section>

    <!-- DEMO -->
    <!-- modal demo -->
    <div class="modal fade" id="demoModal" tabindex="-1" aria-labelledby="demoModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4 p-0" id="demoModalLabel">Demo</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="row g-3 ">
                            <div class=" col-lg-12">
                                <label for="" class="mb-2">input 1<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">input 2<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">input 3<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">Start Date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">End date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>


                            <div class=" col-lg-12">
                                <label for="" class="mb-2"> More Description <span class="text-primary">*</span></label>
                                <textarea class="form-control" placeholder="Leave a Description here" id=""
                                    style="height: 200px; resize: none;"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- modal Work experience  -->
    <div class="modal fade" id="workExperienceModal" tabindex="-1" aria-labelledby="workExperienceModalLabel"
        aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4 p-0" id="workExperienceModalLabel">Work experience</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="row g-3 ">
                            <div class=" col-lg-12">
                                <label for="" class="mb-2">Job Title/Position<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-12">
                                <label for="" class="mb-2">Company Name<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">Start Date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">End date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>


                            <div class=" col-lg-12">
                                <label for="" class="mb-2"> More Description <span class="text-primary">*</span></label>
                                <textarea class="form-control" placeholder="Leave a Description here" id=""
                                    style="height: 200px; resize: none;"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- modal Educational Information -->
    <div class="modal fade" id="educationalInformationModal" tabindex="-1"
        aria-labelledby="educationalInformationModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4 p-0" id="educationalInformationModalLabel">Educational Information</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="row g-3 ">
                            <div class=" col-lg-12">
                                <label for="" class="mb-2">Name of Degree/Certificate<span
                                        class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">Training major<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">School/Training Center<span
                                        class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">Start Date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">End date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>


                            <div class=" col-lg-12">
                                <label for="" class="mb-2"> More Description <span class="text-primary">*</span></label>
                                <textarea class="form-control" placeholder="Leave a Description here" id=""
                                    style="height: 200px; resize: none;"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- modal certificate -->
    <div class="modal fade" id="certificateModal" tabindex="-1" aria-labelledby="certificateModalLabel"
        aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4 p-0" id="certificateModalLabel">Certificate</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="row g-3 ">
                            <div class=" col-lg-12">
                                <label for="" class="mb-2">input 1<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">input 2<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">input 3<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">Start Date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">End date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>


                            <div class=" col-lg-12">
                                <label for="" class="mb-2"> More Description <span class="text-primary">*</span></label>
                                <textarea class="form-control" placeholder="Leave a Description here" id=""
                                    style="height: 200px; resize: none;"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Specialized skills -->
    <div class="modal fade" id="specializedSkillsModal" tabindex="-1" aria-labelledby="specializedSkillsModalLabel"
        aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4 p-0" id="specializedSkillsModalLabel">Specialized skills</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="row g-3 ">
                            <div class=" col-lg-12">
                                <label for="" class="mb-2">input 1<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">input 2<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">input 3<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">Start Date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">End date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>


                            <div class=" col-lg-12">
                                <label for="" class="mb-2"> More Description <span class="text-primary">*</span></label>
                                <textarea class="form-control" placeholder="Leave a Description here" id=""
                                    style="height: 200px; resize: none;"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Other skills -->
    <div class="modal fade" id="otherSkillsModal" tabindex="-1" aria-labelledby="otherSkillsModalLabel"
        aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4 p-0" id="otherSkillsModalLabel">Other skills</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="row g-3 ">
                            <div class=" col-lg-12">
                                <label for="" class="mb-2">input 1<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">input 2<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">input 3<span class="text-primary">*</span></label>
                                <input type="text" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">Start Date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>

                            <div class=" col-lg-6">
                                <label for="" class="mb-2">End date<span class="text-primary">*</span></label>
                                <input type="date" placeholder="not updated" class="form-control">
                            </div>


                            <div class=" col-lg-12">
                                <label for="" class="mb-2"> More Description <span class="text-primary">*</span></label>
                                <textarea class="form-control" placeholder="Leave a Description here" id=""
                                    style="height: 200px; resize: none;"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- CHange logo -->
    <div class="modal fade" id="changeLogo" tabindex="-1" aria-labelledby="changeLogoLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title pb-0" id="changeLogoLabel">Change Logo Picture</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Logo Image</label>
                            <input type="file" class="form-control" id="image" name="image">
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary mx-3">Update</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
</script>