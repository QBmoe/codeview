import Vuex from "vuex";
import Vue from "vue";

const actions = {
    add(context, n) {
        context.commit('ADD', n)
    },
    sub(context, n) {
        context.commit('SUB', n)
    },
    oodAdd(context, n) {
        if (state.sum % 2 != 0) {
            context.commit('ADD', n)
        }
    },
    addWait(context, n) {
        setTimeout(() => {
            context.commit('ADD', n)
        }, 1000)
    },

}
const getters={
    bigsum(state){
       return state.sum*10
    }
}

const mutations = {
    ADD(state, n) {
        state.sum += n
    },
    SUB(state, n) {
        state.sum -= n
    }
}

const state = {
    sum: 0
}

Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
