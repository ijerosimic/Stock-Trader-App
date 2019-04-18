import Vue from 'vue';
import funds from './funds';
import portfolio from './portfolio';

const state = {
    stocks: {},
    funds: funds.state,
    portfolio: portfolio.state
};
const mutations = {
    'INITIALIZE_STOCKS': (state, payload) => {
        state.stocks = Object.assign({}, state.stocks, payload);
    }
};
const actions = {
    getStocksFromApi: ({
        commit
    }) => {
        fetch("https://vue-js-http-8b6c0.firebaseio.com/stocks.json", {
                method: 'GET',
            })
            .then(res => res.json())
            .then(res => commit('INITIALIZE_STOCKS', res))
            .catch(error => console.log(error));
    },
    buyStocks: ({
        commit,
        state
    }, payload) => {
        const spentFunds = payload.quantity * payload.price;
        if (spentFunds > state.funds.funds) {
            Vue.swal({
                type: 'warning',
                title: 'Greed is bad!'
            });
        } else {
            commit('REDUCE_FUNDS', spentFunds);
            fetch("https://vue-js-http-8b6c0.firebaseio.com/funds.json", {
                    method: 'PUT',
                    body: JSON.stringify(state.funds.funds),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .catch(error => console.log(error));
            commit('ADD_STOCK_TO_PORTFOLIO', payload);
            fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json", {
                    method: 'PUT',
                    body: JSON.stringify(state.portfolio.portfolio),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .catch(error => console.log(error));
        }
    },
    randomizeStockPrices: ({
        commit
    }, payload) => {
        for (let stock in state.stocks) {
            const newPrice = Math.floor(Math.random(1, 99) * 1000);
            state.stocks[stock].price = newPrice;
            state.portfolio.portfolio[stock].price = newPrice;
        }
        fetch("https://vue-js-http-8b6c0.firebaseio.com/stocks.json", {
                method: 'PUT',
                body: JSON.stringify(state.stocks),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(error => console.log(error));
        fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json", {
                method: 'PUT',
                body: JSON.stringify(state.portfolio.portfolio),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(error => console.log(error));
    }
};
const getters = {
    getStocks: state => {
        return state.stocks;
    },
};
export default {
    state,
    mutations,
    actions,
    getters
};