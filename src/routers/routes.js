// import all the pages form the project
import IndexPage from '../Pages/IndexPage.vue';
import PersonalInfo from '../Pages/PersonalInfo.vue';
import AppliedJob from '../Pages/AppliedJob.vue';
import OurBlog from '../Pages/OurBlog.vue';
import SaveForLater from '../Pages/SavedForLater.vue';
import BlogDetails from '../Pages/BlogDetails.vue';
import ChangePassword from '../Pages/ChangePassword.vue';
import SuggestedJob from '../Pages/SuggestedJob.vue';
import EditResume from '../Pages/EditResume.vue';
import UploadResume from '../Pages/UploadResume.vue';
import BrowseJob from '../Pages/BrowseJob.vue';
import Help from '../Pages/Help.vue';


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

    },
    {
        path: "/our-blog",
        name: "ourblog",
        meta: {
            layout: "default-layout",
        },
        component: OurBlog,

    },
    {
        path: "/save-for-later",
        name: "saveforlater",
        meta: {
            layout: "default-layout",
        },
        component: SaveForLater,

    },
    {
        path: "/blog/:id",
        name: "blog/details",
        meta: {
            layout: "default-layout",
        },
        component: BlogDetails,

    },
    {
        path: "/change-password",
        name: "changepassword",
        meta: {
            layout: "default-layout",
        },
        component: ChangePassword,

    },
    {
        path: "/suggested-job",
        name: "suggestedjob",
        meta: {
            layout: "default-layout",
        },
        component: SuggestedJob,

    },
    {
        path: "/edit-resume",
        name: "editresume",
        meta: {
            layout: "default-layout",
        },
        component: EditResume,

    },

    {
        path: "/upload-resume",
        name: "uploadresume",
        meta: {
            layout: "default-layout",
        },
        component: UploadResume,

    },

    {
        path: "/browse-job",
        name: "browsejob",
        meta: {
            layout: "job-search-layout",
        },
        component: BrowseJob,

    },

    {
        path: "/help",
        name: "help",
        meta: {
            layout: "default-layout",
        },
        component: Help,
    }
]
