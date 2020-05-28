/**
* @name VueJS vueHasErrorLaravel (vue-has-error-laravel)
* @description Permite mostrar errores de laravel
* @author Leonardo Manuel Alvarez <leonardomanuel.alv@gmail.com>
* @file v-has-error plugin definition 2020
*/

const vHasErrorLaravel = {
    bind: (el, binding) => {
        if (binding.value && Array.isArray(binding.value)) {
            if (binding.value.length) {
                el.classList.add('is-invalid')
            } else {
                if (el.classList.contains('is-invalid')) {
                    el.classList.remove('is-invalid')
                }
            }
        } else {
            if (el.classList.contains('is-invalid')) {
                el.classList.remove('is-invalid')
            }
        }
    },
    inserted: (el, binding)=> {
        if (binding.value && Array.isArray(binding.value)) {
            if (binding.value.length) {
                el.insertAdjacentHTML('afterend', `<div class="invalid-feedback">${binding.value[0]}</div>`)
            }
        }
    },
    update: (el, binding)=> {
        if (binding.value && Array.isArray(binding.value)) {
            if (binding.value.length) {
                let nodes = el.nextSibling
                if (el.nextSibling) {
                    nodes.parentNode.removeChild(nodes)
                }
                el.classList.add('is-invalid')
                el.insertAdjacentHTML('afterend', `<div class="invalid-feedback">${binding.value[0]}</div>`)
            } else {
                if (el.classList.contains('is-invalid')) {
                    el.classList.remove('is-invalid')
                }
            }
        } else {
            if (el.classList.contains('is-invalid')) {
                el.classList.remove('is-invalid')
            }
        }
    }
}

export default vHasErrorLaravel;
