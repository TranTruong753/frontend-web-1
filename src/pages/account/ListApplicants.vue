<template>
    <div class="card border-0 shadow mb-4 p-3">
        <div class="card-body card-form">
            <div class="d-flex justify-content-between">
                <div>
                    <h3 class="fs-4 mb-1">Applicant</h3>
                </div>

            </div>
            <div class="table-responsive">
                <table class="table ">
                    <thead class="bg-light">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Title 02</th>
                            <th scope="col">Title 03</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody class="border-0">
                        <tr class="active">
                            <td>
                                <div class="job-name fw-500">Trần Quang Trường</div>
                            </td>
                            <td>....</td>
                            <td>.....</td>
                            <td>
                                <div class="job-status text-capitalize w-50">
                                    <select class="form-select" aria-label="Default select">
                                        <option selected>Chờ xác nhận</option>
                                        <option value="1">Đã liên hệ</option>
                                        <option value="2">Đã test</option>
                                        <option value="3">Đã phỏng vấn</option>
                                        <option value="4">Trúng tuyển</option>
                                        <option value="5">Không trúng tuyến</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div class="action-dots float-end">
                                    <a href="#" class="" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="#!"><i class="fa fa-eye"
                                                    aria-hidden="true"></i> View</a></li>
                                        <li><a class="dropdown-item" href="#!"><i class="fa fa-trash"
                                                    aria-hidden="true"></i> Remove</a></li>
                                        <li><a class="dropdown-item" href="#!"><i class="fa-solid fa-envelope"></i> Send
                                                Email</a></li>
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