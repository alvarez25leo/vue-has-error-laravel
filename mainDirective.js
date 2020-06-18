/**
 * @name VueJS vueHasErrorLaravel (vue-has-error-laravel)
 * @description Permite mostrar errores de laravel
 * @author Leonardo Manuel Alvarez <leonardomanuel.alv@gmail.com>
 * @file mainDirective plugin definition
 */

import vHasErrorLaravel from './directives/v-has-error.js'
import MixinErrorsLaravel from './mixins/errorsLaravel.js'

const vueHasErrorLaravel = {
    install: (Vue, options) => {
        Vue.use(MixinErrorsLaravel)
        Vue.prototype.$vueHasErrorLaravelOptions = options ? options : {}
        Vue.prototype.$setLaravelErrors = function (laravelErrorsResponse) {
            this.$data.$errorsResponseFromLaravel = []
            if (!laravelErrorsResponse) {
                return
            }

            this.$data.$errorsResponseFromLaravel = laravelErrorsResponse.hasOwnProperty('errors')
                ? laravelErrorsResponse.errors
                : laravelErrorsResponse
        }
        Vue.directive('has-error', vHasErrorLaravel)
    },
}

export default vueHasErrorLaravel

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueHasErrorLaravel)
}
