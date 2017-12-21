/* eslint-disable */ 
import Vuex from 'vuex'
import Vue from 'vue'
import helloWorld from './helloworld'
import graphStore from './graphstore'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
    helloWorld,
    graphStore
  }
})
