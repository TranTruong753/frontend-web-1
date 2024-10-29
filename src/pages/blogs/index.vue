<script setup>
import Cardblog from '@/components/blogs/cardBlog.vue';
import Cardblog02 from '@/components/blogs/cardBlog-02.vue';
</script>
<template>
    <!-- search -->
    <section class="section-1 py-5 ">
        <div class="container">
            <div class="card border-0 shadow p-5">
                <div class="row">
                    <div class="col-md-8 mb-3 mb-sm-3 mb-lg-0">
                        <input type="text" class="form-control" name="search" id="search" placeholder="Keywords">
                    </div>

                    <div class=" col-md-3 mb-xs-3 mb-sm-3 mb-lg-0">
                        <div class="d-grid gap-2">
                            <a href="jobs.html" class="btn btn-primary btn-block">Search</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTENT -->
    <!-- slide blog-->
    <section class="section-3  py-5 py-sm-4 bg-2">
        <div class="container">
            <h2>Top blogs</h2>
            <div id="carouselExample" class="carousel slide pt-5 pt-sm-4 g-3" data-bs-ride="carousel"
                data-bs-pause="hover" data-bs-wrap="true">
                <div class="carousel-inner w-80 m-auto">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <div class="row g-3">
                            <!-- card 01 -->
                            <Cardblog :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />
                            <!-- card 02 -->
                            <Cardblog :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />
                            <!-- card 03 -->
                            <Cardblog :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <div class="row g-3">
                            <!-- card 01 -->
                            <Cardblog :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />

                            <!-- card 02 -->
                            <Cardblog :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>

    <!-- Featured BLOG -->
    <section class="section-3  py-5 py-sm-4">
        <div class="container">
            <h2>Featured blogs</h2>
            <div class="row pt-5 pt-sm-4">
                <div class="blog_listing_area">
                    <div class="blog_lists">
                        <div class="row g-3">
                            <!-- card 01 -->
                            <Cardblog02 :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />

                            <Cardblog02 :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />

                            <Cardblog02 :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Most read blog -->
    <section class="section-3 bg-2 py-5 py-sm-4">
        <div class="container">
            <h2>Most read blog</h2>
            <div class="row pt-5 pt-sm-4">
                <div class="blog_listing_area">
                    <div class="blog_lists">
                        <div class="row g-3">
                            <!-- card 01 -->
                            <Cardblog02 :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />

                            <!-- card 02 -->
                            <Cardblog02 :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />

                            <!-- card 03 -->
                            <Cardblog02 :cardData="{
                                imgSrc: '/src/assets/img/banner-1.jpg',
                                imgAlt: 'blog 01',
                                name: 'HTML CSS làm sao cho hiểu quả',
                                description: 'Để css html hiểu quả bạn cần thông qua lí thuyết kết hợp thực hành',
                                timePost: '24/10/2024',
                                isShow: true,
                                styleCss: 'col-12 col-lg-4 col-md-6'
                            }" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>