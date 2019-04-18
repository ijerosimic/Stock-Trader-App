const state = {
    funds: 0
};
const mutations = {
    'INITIALIZE_FUNDS': (state, payload) => {
        state.funds = payload;
    },
    'REDUCE_FUNDS': (state, payload) => {
        state.funds = state.funds - payload;
    },
    'INCREASE_FUNDS': (state, payload) => {
        var price = payload.price;
        let value = parseInt(payload.quantity) * price;
        state.funds = parseInt(state.funds) + value;
    }
};
const actions = {
    getFundsFromApi: ({
        commit
    }) => {
        fetch("https://vue-js-http-8b6c0.firebaseio.com/funds.json")
            .then(response => {
                return response.json();
            })
            .then(funds => {
                commit('INITIALIZE_FUNDS', JSON.stringify(funds));
            })
            .catch(error => console.log(error));
    }
};
const getters = {
    getFunds: state => {
        return state.funds;
    }
};
export default {
    state,
    mutations,
    actions,
    getters
};