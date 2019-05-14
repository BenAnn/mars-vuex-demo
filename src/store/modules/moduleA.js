// initial state
const state = {
    count: 0
}

// getters
const getters = {}

// actions
const actions = {
    addOne({ dispatch, commit, state }, payload) {
        commit('addOne', payload);
    }
}

// mutations
const mutations = {
    addOne(state, products) {
        state.count += products
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}