<script setup>
    import { onMounted } from 'vue';
    import { initializeTinyMCE } from '@/assets/js/blog.js';

    onMounted(() => {
    initializeTinyMCE();  // Gọi hàm khởi tạo TinyMCE
    });
</script>

<template>
    <div class="card border-0 shadow mb-4 ">
        <div class="card-body card-form p-4">
            <h3 class="fs-4 mb-1">Blog</h3>
            <div class="row">
                <div class="col-md-12 mb-4">
                    <label for="" class="mb-2">Title<span class="req">*</span></label>
                    <input type="text" placeholder="Job Title" id="title" name="title" class="form-control">
                </div>
            </div>

            <div class="mb-4">
                <label for="" class="mb-2">Description<span class="req">*</span></label>
                <textarea class="form-control" name="description" id="description" cols="5" rows="5"
                    placeholder="Description"></textarea>
            </div>

        </div>
        <div class="card-footer  p-4">
            <button type="button" class="btn btn-primary">Create Blog</button>
        </div>
    </div>
</template>