export const HOST = process.env.VUE_APP_DEVHOST
  ? process.env.VUE_APP_DEVHOST
  : process.env.NODE_ENV === "development"
  ? "http://localhost:8080"
  : "";

export const API_HOST = process.env.VUE_APP_API_HOST
  ? process.env.VUE_APP_API_HOST
  : "https://jobpot.io";


  console.log(API_HOST)