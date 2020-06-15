import { createLocalVue, mount } from '@vue/test-utils';
import { describe, expect } from "@jest/globals";

import Input from '../components/InputComponent';
import VueHasErrorLaravel from "../../mainDirective";


const localVue = createLocalVue();

localVue.use(VueHasErrorLaravel, {
  className: 'is-invalid',
  tagName: 'div',
  tagClassName: 'invalid-feedback'
});

localVue.mixin({
  data() {
    return {
      $errorsResponseFromLaravel: []
    }
  }
});

describe('input-component-tests', () => {

  test('should not throw error on empty config', () => {
    expect(() => localVue.use(VueHasErrorLaravel, {})).not.toThrow()
  })

  test('is a Vue instance', () => {
    const wrapper = mount(Input, {
      localVue
    });
    expect(wrapper.exists()).toBeTruthy();
    wrapper.destroy();
  })


  test('check if exists input tag', () => {
    const wrapper = mount(Input, {
      localVue
    });
    const inputWrapper = wrapper.find('input');
    expect(inputWrapper.exists()).toBe(true);
    wrapper.destroy();
  })

  test('check if not exists tag errors', () => {
    const wrapper = mount(Input, {
      localVue
    });
    const divWrapper = wrapper.find('div');
    expect(divWrapper.exists()).toBe(false);
    wrapper.destroy();
  });

  test('check if insert adjacent html tag with error message', async () => {
    const wrapper = mount(Input, {
      localVue
    });

    const divWrapper = wrapper.find('div');
    expect(divWrapper.exists()).toBe(false);

    await wrapper.vm.handleUpdate()

    wrapper.vm.$nextTick(() => {
      const divWrapper = wrapper.find('div');
      expect(divWrapper.exists()).toBe(true);
      expect(divWrapper.text()).toBe('title is required');
    });
    wrapper.destroy();
  });

});