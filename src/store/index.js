import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      posts: [],
      searchFor: ''
    }
  },
  mutations: {
    addPost(state, payload){
      state.posts.push(payload);
    },
    setPost(state, payload){
      state.posts = payload;
    },
    setSearchFor(state, payload){
      state.searchFor = payload;
    }
  },
  actions: {
    addPost(context, payload){
      context.commit('addPost', payload);
    },
    setPosts(context, payload){
      context.commit('setPost', payload);
    },
    setSearchFor(context, payload){
      context.commit('setSearchFor', payload);
    }
  },
  getters: {
    getPosts(state){
      return state.posts;
    },
    getSearchFor(state){
      return state.searchFor;
    }
  }
});

export default store;