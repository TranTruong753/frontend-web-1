<template>
    <section class="section-5">
        <div class="container my-5">
            <div class="py-lg-2">&nbsp;</div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-5">
                    <div class="card shadow border-0 p-5">
                        <h1 class="h3">Register Employer</h1>
                        <form action="">
                            <div class="mb-3">
                                <label for="" class="mb-2">Name*</label>
                                <input type="text" name="name" id="name" class="form-control" placeholder="Enter Name">
                            </div>
                            <div class="mb-3">
                                <label for="" class="mb-2">Email*</label>
                                <input type="text" name="email" id="email" class="form-control"
                                    placeholder="Enter Email">
                            </div>
                            <div class="mb-3">
                                <label for="" class="mb-2">Item01*</label>
                                <input type="text" name="Item01" id="Item01" class="form-control"
                                    placeholder="Enter Email">
                            </div>
                            <div class="mb-3">
                                <label for="" class="mb-2">Item02*</label>
                                <input type="text" name="Item02" id="Item02" class="form-control"
                                    placeholder="Enter Email">
                            </div>
                            <div class="mb-3">
                                <label for="" class="mb-2">Password*</label>
                                <input type="password" name="name" id="name" class="form-control"
                                    placeholder="Enter Password">
                            </div>
                            <div class="mb-3">
                                <label for="" class="mb-2">Confirm Password*</label>
                                <input type="password" name="name" id="name" class="form-control"
                                    placeholder="Enter Password">
                            </div>
                            <button class="btn btn-primary mt-2">Register</button>
                        </form>
                    </div>
                    <div class="mt-4 text-center">
                        <p>Have an account? <router-link class="" to="/login" >Login</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>