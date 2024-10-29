const user = [
    {
        path:"/home",
        component: () => import("../layouts/user.vue"),
        children: [
            {
                path:"",
                name:"user-home",
                component: () => import("../pages/home/index.vue")
            },
            {
                path:"/job",
                name:"user-jobs",
                component: () => import("../pages/jobs/index.vue"),
            },
            {
                path:"/job/detail",
                name:"job-detail",
                component: () => import("../pages/jobs/detail.vue"),
            },
            {
                path:"/account",
                name:"user-accounts",
                component: () => import("../pages/account/index.vue"),
                children: [
                    {
                        path:"",
                        name:"account-settings",
                        component: () => import("../pages/account/setting.vue"),
                    },
                    {
                        path:"profile",
                        name:"account-profile",
                        component: () => import("../pages/account/profile.vue"),
                    },
                    {
                        path:"profile-employer",
                        name:"account-profile-employer",
                        component: () => import("../pages/account/profileEmployer.vue"),
                    },
                    {
                        path:"post-job",
                        name:"account-post-job",
                        component: () => import("../pages/account/postJobs.vue"),
                    },
                    {
                        path:"my-jobs",
                        name:"account-my-jobs",
                        component: () => import("../pages/account/myJobs.vue"),
                    },
                    {
                        path:"jobs-applied",
                        name:"account-jobs-applied",
                        component: () => import("../pages/account/jobsApplied.vue"),
                    },
                    {
                        path:"saved-jobs",
                        name:"account-saved-jobs",
                        component: () => import("../pages/account/savedJobs.vue"),
                    },
                    {
                        path:"post-blog",
                        name:"account-post-blog",
                        component: () => import("../pages/blogs/post.vue"),
                    },
                ]
            },
            {
                path:"/company",
                name:"user-companies",
                component: () => import("../pages/companies/index.vue"),
            },
            {
                path:"/company/detail",
                name:"company-detail",
                component: () => import("../pages/companies/detail.vue"),
            },
            {
                path:"/blog",
                name:"user-blogs",
                component: () => import("../pages/blogs/index.vue"),
            },
            {
                path:"/blog/detail",
                name:"blog-detail",
                component: () => import("../pages/blogs/detail.vue"),
            },
            {
                path:"/login",
                name:"user-login",
                component: () => import("../pages/login/index.vue")
            },
            {
                path:"/register",
                name:"user-register",
                component: () => import("../pages/register/index.vue")
            },
            {
                path:"/register-employers",
                name:"user-register-employers",
                component: () => import("../pages/registerEmployers/index.vue")
            },
        ]
    }
]

export default user