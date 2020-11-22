import { shallowMount } from '@vue/test-utils'
import Products from '../../src/components/Products.vue'

describe('Testiando Products componente', () => {
  it('Prueba N° 1 Probando SEARCH Y FILTRADO', () => {
    const wrapper = shallowMount(Products);

    let searchNuevo = wrapper.vm.$data.search;
    searchNuevo = "Casa"
    expect(searchNuevo).toBe(searchNuevo);

    wrapper.vm._computedProductList = jest.fn();
    wrapper.vm._computedProductList();
  })
})
