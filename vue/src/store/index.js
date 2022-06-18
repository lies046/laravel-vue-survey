import {createStore} from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: 'test',
    slug: 'test',
    status: 'draft',
    image:
      '',
    description:
    'My name is test <br> I am web',
    created_at: '2022-06-12 15:26:00',
    updated_at: '2022-06-12 15:26:00',
    expire_date: '2022-06-30 15:26:00',
    questions: [
      {
        id: 1,
        type: 'select',
        question: 'From which country are you?',
        description: null,
        data: {
          options: [
            { uuid: "1", text: 'USA'},
            { uuid: "2", text: 'Georgia'},
            { uuid: "3", text: 'Germany'},
            { uuid: "4", text: 'India'}
          ]
        },
      },
      {
        id: 2,
        type: 'checkbox',
        question: 'test',
        description: 'test',
        data: {
          options: [
            {uuid:"5", text: 'JS'},
            {uuid: "6", text: 'PHP'},

          ]
        }
      },
      {
        id: 3,
        type: 'radio',
        question: 'test2',
        description: 'test2',
        data: {
          options: [
            {uuid:"7", text: 'Laravel 5'},
            {uuid:"8", text: 'Laravel 9'}
          ]
        }
      },
      {
        id: 4,
        type: 'text',
        question: 'test3',
        description: null,
        data: {},
      },
      {
        id: 5,
        type: 'textarea',
        question: 'test4',
        description: 'test4',
        data: {}
      }
    ],
  }
]

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
    questionTypes: ["text", "select", "radio", "checkbox", "textarea"]
  },
  getters: {},
  actions: {
    saveSurvey({ commit }, survey) {
      let response;
      if (survey.id) {
        response = axiosClient
          .put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit("updateSurvey", res.data);
            return res;
          });
      }else{
        response = axiosClient.post("/survey", survey)
          .then((res) => {
            commit("updateSurvey", res.data);
            return res;
          });
      }
      return response;
    },
    register({ commit }, user){
      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },
    login({ commit }, user){
      return axiosClient.post('/login', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },
    logout({commit}){
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout')
          return response;
        })
    },
  },
  mutations: {
    saveSurvey: (state, survey) => {
      state.surveys = [...state.surveys, survey.data];
    },
    updateSurvey: (state, survey) => {
      state.surveys = state.surveys.map((s) => {
        if (s.id === survey.data.id){
          return survey.data;
        }
        return s;
      });
    },
    logout: state => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    },
  },
  modules: {}
})

export default store;
