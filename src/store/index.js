import {Vue} from '@marsjs/core';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import moduleA from './modules/moduleA';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    actions,
    mutations,
    modules: {
        moduleA
    }
});

export default store;
