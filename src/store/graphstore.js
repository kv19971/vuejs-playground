export default {
    state: {
        datapoints: []
    },
    getters: {
        getDataPoints: state => state.datapoints
    },
    mutations: {
        addPoint: (state, no) => {
            state.datapoints.push(no);
        }         
    },
    actions: {
        addPointAsync: ({commit}, no) => commit('addPoint', parseInt(no))
    }
}