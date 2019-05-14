const actions = {
    addTwo({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('addTwo');
                resolve()
            }, 2000)
        })
    }
}

export default actions