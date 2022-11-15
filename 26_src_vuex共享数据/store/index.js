import Vuex from "vuex";

import Vue from "vue";
Vue.use(Vuex)

const actions = {
    add(context, n) {
        context.commit('ADD', n)
    },
    sub(context, n) {
        context.commit('SUB', n)
    },
    oddAdd(context, n) {
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
    },
    ADD_PERSON(state,personObj){
       state.personList.push(personObj)
    }
}

const state = {
    sum: 0,
    school:'家里蹲',
    subject:'Vue',
    personList:[{id:'001',name:'张三'}]
}


export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
