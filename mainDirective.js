/**
* @name VueJS vueHasErrorLaravel (vue-has-error-laravel)
* @description Permite mostrar errores de laravel
* @author Leonardo Manuel Alvarez <leonardomanuel.alv@gmail.com>
* @file mainDirective plugin definition
*/

import vHasErrorLaravel from './directives/v-has-error.js'

var vueHasErrorLaravel = {
    install: (Vue, options) => {
        Vue.directive('has-error', vHasErrorLaravel)
    }
}

export default vueHasErrorLaravel;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueHasErrorLaravel)
}
