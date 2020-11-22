import Vue from 'vue';
import Vuex from 'vuex';
import store from '../../src/store';

describe("Pruebas de Vuex", () => {
    beforeAll(() => {
        Vue.use(Vuex);
        store = new Vuex.Store(store)
    });
});

describe("Pruebas en los actions", () =>{
    let p = [
        { name: 'Espejo', id: '6', price: 100.0},
        { name: 'Computadora', id: '1', price: 100.0}
    ]
    it("Probando Update Show cart", () =>{
        store.dispatch('addToCart', p[0]);
        expect(store.getters.shoppingCart.list[0].id).toBe(p[0].id);
    });
});