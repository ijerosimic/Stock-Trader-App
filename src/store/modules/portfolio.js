import Vue from 'vue';
import funds from './funds';
import stocks from './stocks';

const state = {
    portfolio: {},
    funds: funds.state
};
const mutations = {
    'ADD_STOCK_TO_PORTFOLIO': (state, payload) => {
        let ownedQty = state.portfolio[payload.stockName].quantity || 0;
        if (ownedQty > 0) {
            ownedQty += payload.quantity;
            Vue.set(state.portfolio[payload.stockName], 'quantity', ownedQty);
        } else {
            state.portfolio[payload.stockName] = Object.assign({}, state.portfolio[payload.stockName], payload);
        }
    },
    'INITIALIZE_PORTFOLIO': (state, payload) => {
        state.portfolio = Object.assign({}, state.portfolio, payload);
    },
    'UPDATE_PORTFOLIO': (state, payload) => {
        let reducedQuantity = state.portfolio[payload.name].quantity - payload.quantity;
        Vue.set(state.portfolio[payload.name], 'quantity', reducedQuantity);
    }
};
const actions = {
    getPortfolio: ({
        commit
    }) => {
        const stockPrices = stocks;
        fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json", {
                method: 'GET',
            })
            .then(res => {
                return res.json();
            })
            .then(res => commit('INITIALIZE_PORTFOLIO', res))
            .catch(error => console.log(error));
    },
    sellStocks: ({
        commit,
        state
    }, payload) => {
        const ownedQty = state.portfolio[payload.name].quantity;
        if (payload.quantity === ownedQty) {
            Vue.swal({
                    type: 'info',
                    title: 'Are you sure you want to sell all your ' + payload.name + ' stocks?',
                    showCancelButton: true,
                    confirmButtonText: "Yes, I want to crash " + payload.name + "'s stock prices!",
                    confirmButtonColor: "#dc3545",
                    cancelButtonText: "No, I changed my mind",
                    cancelButtonColor: "#3fc3ee",
                    buttons: true
                })
                .then((crashPrices) => {
                    if (crashPrices) {
                        Vue.swal({
                            title: "You have caused a reccesion!",
                            type: "success"
                        });
                        commit('UPDATE_PORTFOLIO', payload);
                        fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json", {
                                method: 'PUT',
                                body: JSON.stringify(state.portfolio),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            .catch(error => console.log(error));
                        commit('INCREASE_FUNDS', payload);
                    } else {
                        Vue.swal({
                            title: "The market lives another day!"
                        });
                    }
                });
        } else {
            commit('UPDATE_PORTFOLIO', payload);
            fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json", {
                    method: 'PUT',
                    body: JSON.stringify(state.portfolio),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .catch(error => console.log(error));
            commit('INCREASE_FUNDS', payload);
        }
    }
};
const getters = {
    getPortfolio: state => {
        return state.portfolio;
    },
    getQty: state => (stock) => {
        return state.portfolio[stock];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
};