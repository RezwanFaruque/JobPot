// import all the pages form the project
import IndexPage from '../Pages/IndexPage.vue';
import PersonalInfo from '../Pages/PersonalInfo.vue';
import AppliedJob from '../Pages/AppliedJob.vue';


// creating routes for every page
export default [
    {
        path: "/",
        name: "index",
        meta: {
            layout: "guest-layout",
        },
        component: IndexPage,

    },

    {
        path: "/personal-info",
        name: "personalinfo",
        meta: {
            layout: "default-layout",
        },
        component: PersonalInfo,

    },

    {
        path: "/applied-job",
        name: "appliedjob",
        meta: {
            layout: "default-layout",
        },
        component: AppliedJob,

    }
]
