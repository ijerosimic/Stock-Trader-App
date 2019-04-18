import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';

export const routes = [{
        path: '/',
        components: {
            default: Home
        }
    },
    {
        path: '/Portfolio',
        components: {
            default: Portfolio
        },
    },
    {
        path: '/Stocks',
        components: {
            default: Stocks
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];