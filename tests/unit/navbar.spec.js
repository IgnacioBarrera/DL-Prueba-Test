import { shallowMount, createLocalVue } from '@vue/test-utils'

import Navbar from '../../src/components/Navbar.vue'
import Vuex from "vuex"
import myStore from './mocks/store'

import VueRouter from 'vue-router'
import myRoutes from "./mocks/routes"

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

const store = new Vuex.Store(myStore)
const router = new VueRouter(myRoutes)

describe('Navbar usuario test', () => {
  it('Usuario no registrado, buscando Login', () => {
    store.dispatch('Actualizando usuario', undefined);
    const wrapper = shallowMount(Navbar, {
      propsData: {
        title: "Mi Tienda"
      },
      localVue,
      store,
      router,
    })
    expect(wrapper.text()).toContain('Login');
  }),

  it('Usuario registrado, buscando Usuario y Login', () => {
    store.dispatch('Actualizando usuario email', { email: 'user1@mystore.com', password: 'password' });
    const wrapper = shallowMount(Navbar, {
      propsData: {
        title: "Mi Tienda"
      },
      localVue,
      store,
      router,
    });
    expect(wrapper.text()).toContain('Usuario');
    expect(wrapper.text()).not.toContain('Login');
  });
})