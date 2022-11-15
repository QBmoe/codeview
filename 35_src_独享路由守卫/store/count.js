export default {
    namespaced: true,
    actions: {
        add(context, n) {
            context.commit('ADD', n)
        },
        sub(context, n) {
            context.commit('SUB', n)
        },
        oddAdd(context, n) {
            if (context.state.sum % 2 != 0) {
                context.commit('ADD', n)
            }
        },
        addWait(context, n) {
            setTimeout(() => {
                context.commit('ADD', n)
            }, 1000)
        }
    },
    mutations: {
        ADD(state, n) {
            state.sum += n
        },
        SUB(state, n) {
            state.sum -= n
        }
    },
    state: {
        sum: 0,
        school: '家里蹲',
        subject: 'Vue'
    },
    getters: {
        bigsum(state) {
            return state.sum * 10
        }
    }
}