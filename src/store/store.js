import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import funds from './modules/funds';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        funds,
        stocks,
        portfolio
    }
});