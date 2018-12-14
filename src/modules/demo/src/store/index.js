import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'
// import state from './state'
import {demoL} from './modules'
Vue.use(Vuex)
let modules = Object.assign({}, demoL)
export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters,
    modules: modules
})
