import Vue from 'vue'
import Vuex from 'vuex'
import city from '@/store/modules/city'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        city
    }
})