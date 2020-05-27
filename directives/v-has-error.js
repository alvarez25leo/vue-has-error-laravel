/**
* @name VueJS vueHasErrorLaravel (vue-has-error-laravel)
* @description Permite mostrar errores de laravel
* @author Leonardo Manuel Alvarez <leonardomanuel.alv@gmail.com>
* @file vue-chat-scroll plugin definition
*/

const vHasErrorLaravel = {
    bind: (el, binding) => {
        if (binding.value && Array.isArray(binding.value)) {
            if (binding.value.length) {
                let nodes = el.nextSibling
                if (el.nextSibling) {
                    nodes.parentNode.removeChild(nodes)
                }
                el.classList.add('is-invalid')
                el.insertAdjacentHTML("afterend", `<div class="invalid-feedback">${binding.value[0]}</div>`);
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
};

export default vHasErrorLaravel;
