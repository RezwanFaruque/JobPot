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
import JobDetails from '../Pages/JobDetails.vue';
import PrimaryJobInformation from '../Pages/PrimaryJobInformation.vue';


// creating routes for every page
const routes =  [
    {
        path: "/",
        name: "index",
        meta: {
            layout: "guest-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                  
                ]
            }
        },
        component: IndexPage,

    },

    {
        path: "/personal-info",
        name: "personalinfo",
        meta: {
            layout: "default-layout",
            requiresAuth : true,
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                 
                ]
            }
        },
        component: PersonalInfo,
       
    },

    {
        path: "/applied-job",
        name: "appliedjob",
        meta: {
            layout: "default-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                  
                ]
            }
        },
        component: AppliedJob,

    },
    {
        path: "/our-blog",
        name: "ourblog",
        meta: {
            layout: "default-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                 
                ]
            }
        },
        component: OurBlog,

    },
    {
        path: "/save-for-later",
        name: "saveforlater",
        meta: {
            layout: "default-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                 
                ]
            }
        },
        component: SaveForLater,

    },
    {
        path: "/blog/:id",
        name: "blog/details",
        meta: {
            layout: "default-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                  
                ]
            }
        },
        component: BlogDetails,

    },
    {
        path: "/change-password",
        name: "changepassword",
        meta: {
            layout: "default-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                  
                ]
            }
        },
        component: ChangePassword,

    },
    {
        path: "/suggested-job",
        name: "suggestedjob",
        meta: {
            layout: "default-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                  
                ]
            }
        },
        component: SuggestedJob,

    },
    {
        path: "/edit-resume",
        name: "editresume",
        meta: {
            layout: "default-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                 
                ]
            }
        },
        component: EditResume,

    },

    {
        path: "/upload-resume",
        name: "uploadresume",
        meta: {
            layout: "default-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                 
                ]
            }
        },
        component: UploadResume,

    },

    {
        path: "/browse-job",
        name: "browsejob",
        meta: {
            layout: "job-search-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                
                ]
            }
        },
        component: BrowseJob,

    },

    {
        path: "/help",
        name: "help",
        meta: {
            layout: "default-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                 
                ]
            }
        },
        component: Help,
    },

    {
        path: "/browse-job/job-details",
        name: "jobdetails",
        meta: {
            layout: "job-search-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                 
                ]
            }
        },
        component: JobDetails,
    },

    {
        path: "/post-job/primary-job-information",
        name: "primaryjobinformation",
        meta: {
            layout: "job-poster-layout",
            progress: {
                func: [
                  {call: 'color', modifier: 'temp', argument: '#085aa0'},
                 
                ]
            }
        },
        component: PrimaryJobInformation,
    }
]



export default routes;