import Vuex from "vuex";

import Vue from "vue";


import countOptions from "@/store/count";

import personOptions from "@/store/person";

Vue.use(Vuex)



export default new Vuex.Store(
    {
        modules: {
            countAbout: countOptions,
            personAbout: personOptions
        }
    }
)
