// import all the pages form the project
import IndexPage from '../Pages/IndexPage.vue';


// creating routes for every page
export default [
    {
        path: "/index",
        name: "index",
        meta: {
            layout: "guest-layout",
        },
        component: IndexPage,

    }
]
