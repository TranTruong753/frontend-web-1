<template>
    <div class="card border-0 shadow mb-4 p-3">
        <div class="card-body card-form">
            <div class="d-flex justify-content-between">
                <div>
                    <h3 class="fs-4 mb-1">My Jobs</h3>
                </div>
                <div style="margin-top: -10px;">
                    <a href="post-job.html" class="btn btn-primary">Post a Job</a>
                </div>

            </div>
            <div class="table-responsive">
                <table class="table ">
                    <thead class="bg-light">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Job Created</th>
                            <th scope="col">Applicants</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody class="border-0">
                        <tr class="active">
                            <td>
                                <div class="job-name fw-500">Web Developer</div>
                                <div class="info1">Fulltime . Noida</div>
                            </td>
                            <td>05 Jun, 2023</td>
                            <td>130 Applications</td>
                            <td>
                                <div class="job-status text-capitalize">active</div>
                            </td>
                            <td>
                                <div class="action-dots float-end">
                                    <a href="#" class="" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="PostJob"><i class="fa fa-eye" aria-hidden="true"></i>
                                                View</a></li>
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="PostJob"><i class="fa fa-edit" aria-hidden="true"></i>
                                                Edit</a></li>
                                        <li><a class="dropdown-item" href="#!"><i class="fa fa-trash"
                                                    aria-hidden="true"></i> Remove</a></li>
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="ListApplicants"><i class="fa-solid fa-list"
                                                    aria-hidden="true"></i> List Applicants </a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="Pending">
                            <td>
                                <div class="job-name fw-500">Web Developer</div>
                                <div class="info1">Fulltime . Noida</div>
                            </td>
                            <td>05 Jun, 2023</td>
                            <td>130 Applications</td>
                            <td>
                                <div class="job-status text-capitalize">active</div>
                            </td>
                            <td>
                                <div class="action-dots float-end">
                                    <a href="#" class="" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="PostJob"><i class="fa fa-eye" aria-hidden="true"></i>
                                                View</a></li>
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="PostJob"><i class="fa fa-edit" aria-hidden="true"></i>
                                                Edit</a></li>
                                        <li><a class="dropdown-item" href="#!"><i class="fa fa-trash"
                                                    aria-hidden="true"></i> Remove</a></li>
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="ListApplicants"><i class="fa-solid fa-list"
                                                    aria-hidden="true"></i> List Applicants </a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="Expired">
                            <td>
                                <div class="job-name fw-500">Web Developer</div>
                                <div class="info1">Fulltime . Noida</div>
                            </td>
                            <td>05 Jun, 2023</td>
                            <td>130 Applications</td>
                            <td>
                                <div class="job-status text-capitalize">pending</div>
                            </td>
                            <td>
                                <div class="action-dots float-end">
                                    <a href="#" class="" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="PostJob"><i class="fa fa-eye" aria-hidden="true"></i>
                                                View</a></li>
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="PostJob"><i class="fa fa-edit" aria-hidden="true"></i>
                                                Edit</a></li>
                                        <li><a class="dropdown-item" href="#!"><i class="fa fa-trash"
                                                    aria-hidden="true"></i> Remove</a></li>
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="ListApplicants"><i class="fa-solid fa-list"
                                                    aria-hidden="true"></i> List Applicants </a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr class="Active">
                            <td>
                                <div class="job-name fw-500">Web Developer</div>
                                <div class="info1">Fulltime . Noida</div>
                            </td>
                            <td>05 Jun, 2023</td>
                            <td>130 Applications</td>
                            <td>
                                <div class="job-status text-capitalize">expired</div>
                            </td>
                            <td>
                                <div class="action-dots float-end">
                                    <a href="#" class="" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="PostJob"><i class="fa fa-eye" aria-hidden="true"></i>
                                                View</a></li>
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="PostJob"><i class="fa fa-edit" aria-hidden="true"></i>
                                                Edit</a></li>
                                        <li><a class="dropdown-item" href="#!"><i class="fa fa-trash"
                                                    aria-hidden="true"></i> Remove</a></li>
                                        <li><a class="dropdown-item" asp-area="EndUser" asp-controller="Account"
                                                asp-action="ListApplicants"><i class="fa-solid fa-list"
                                                    aria-hidden="true"></i> List Applicants </a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</template>

