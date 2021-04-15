import {} from "vuex";
import {
  GET_PROFILE,
  GET_TOKEN,
  GET_AUTH_HEADER,
  GET_COMPANY_TYPE,
} from "../getter.names";
import {
  LOGIN,
  LOGOUT,
  REGISTRATION,
  COMPANYTYPE,
  PROFILE,
  GET_TOKEN_FROM_LOCAL_STORE,
} from "../action.names";
import {
  LOGIN_ENDPOINT,
  REGISTRATION_ENDPOINT,
  COMPANYTYPE_ENDPOINT,
  PROFILE_ENDPOINT
} from "../endpoints";
import {
  SET_TOKEN,
  SET_PROFILE,
  REMOVE_TOKEN,
  REMOVE_PROFILE,
  SET_TOKEN_ERROR,
  SET_COMPANY_TYPE,
} from "../mutation.names";
import "core-js/es/array";
import axios from "axios";


export default{
  namespaced: true,
  state: {
    user: {
      profile: null,
      token: null
    },
    companytype: [],
    error: false
  },
  getters: {
    [GET_PROFILE](state){
      return state.user.profile
    },
    [GET_TOKEN](state){
      return state.user.token
    },
    [GET_AUTH_HEADER](state) {
      if (state.user.token == null) return {};
      return { Authorization: `Token ${state.user.token}` };
    },
    [GET_COMPANY_TYPE](state){
      return state.companytype
    }
  },
  actions: {

    // registration action
    async [REGISTRATION]({commit, dispatch}, payload){
      return new Promise((resolve, reject) => {
        axios
          .post(REGISTRATION_ENDPOINT, payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((e) => {
            console.log(e)
            reject(e);
          });
      })
    },

    // login action
    async [LOGIN]({commit}, payload){
      return new Promise((resolve, reject) => {
        axios
          .post(LOGIN_ENDPOINT, payload)
          .then(({ data }) => {
            commit(SET_TOKEN, data.token);
            commit(SET_PROFILE, data.user);
            resolve(data);
          })
          .catch((e) => {
            commit(SET_TOKEN_ERROR);
            console.log(e)
            reject(e);
          });
      })
    },

    // loginout action USer
    async [LOGOUT]({commit}){

      return new Promise((resolve,reject)=>{
        let token = localStorage.getItem("JOBPOT_TOKEN");
        if(token != null){
          commit(REMOVE_TOKEN);
          commit(REMOVE_PROFILE);
          resolve();
        }
      })
      
       
    },

    // getallcompanytpe action
    async [COMPANYTYPE]({commit}){
      return new Promise((resolve, reject)=>{
        axios.get(COMPANYTYPE_ENDPOINT).then(({data}) => {
          commit(SET_COMPANY_TYPE, data);
          resolve(data);
        })
        .catch((e)=>{
          commit(SET_TOKEN_ERROR);
          console.log(e);
          reject(e);
        })
      })
    },

    async [PROFILE]({commit, getters}){
      return new Promise((resolve, reject)=>{
        axios.get(PROFILE_ENDPOINT, {
          headers: {
            ...getters[GET_AUTH_HEADER],
          },
        }).then(({data}) => {
          commit(SET_PROFILE, data.user);
          resolve(data);
        })
        .catch((e)=>{
          console.log("SSSSSSSS")
          commit(SET_TOKEN_ERROR);
          console.log(e);
          reject(e);
        })
      })
    },

    async [GET_TOKEN_FROM_LOCAL_STORE]({commit, dispatch}){
      return new Promise((resolve, reject)=>{
        const localToken = localStorage.getItem("JOBPOT_TOKEN");
        if(localToken != null) {
          commit(SET_TOKEN, localToken);
          dispatch(PROFILE);
          resolve();
        } else {
          // reject();
        }
      })
    }
  },
  mutations: {
    [SET_TOKEN](state, token) {
      state.user.token = token;
      state.error = false;
      localStorage.setItem("JOBPOT_TOKEN", token);
    },

    [REMOVE_TOKEN](state){
      state.user.token = null;
      localStorage.setItem("JOBPOT_TOKEN",null);
    },

    [REMOVE_PROFILE](state){
      state.user.profile = null;
    },


    [SET_TOKEN_ERROR](state) {
      console.log("SET_TOKEN ERROR")
      state.user.token = null;
      state.user.profile = null;
      state.error = true;
      localStorage.removeItem("JOBPOT_TOKEN");
    },


    [SET_PROFILE](state, data) {
      state.user.profile = data;
    },

    // set companytype to state
    [SET_COMPANY_TYPE](state, data){
      state.companytype = data;
    },
  }
}