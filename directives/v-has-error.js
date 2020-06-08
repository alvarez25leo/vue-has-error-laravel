/**
 * @name VueJS vueHasErrorLaravel (vue-has-error-laravel)
 * @description Permite mostrar errores de laravel
 * @author Leonardo Manuel Alvarez <leonardomanuel.alv@gmail.com>
 * @file v-has-error plugin definition
 */

const vOptionsDirective = (options) => {
    const className = (options.className) ? options.className :'is-invalid'
    const tagName = (options.tagName) ? options.tagName : 'div'
    const tagClassName =  (options.tagClassName) ? options.tagClassName : 'invalid-feedback'
    return {className, tagName, tagClassName}
}

const vHasErrorLaravel = {
    bind: (el, binding, vnode) => {
        const { className } = vOptionsDirective(vnode.context.$vueHasErrorLaravelOptions)
        if (binding.value && Array.isArray(binding.value) && binding.value.length) {
            el.classList.add(className)
        } else {
            el.classList.remove(className)
        }
    },
    inserted: (el, binding, vnode) => {
        const { tagName, tagClassName } = vOptionsDirective(vnode.context.$vueHasErrorLaravelOptions)
        if (!(binding.value && Array.isArray(binding.value) && binding.value.length)) {
            return;
        }
        el.insertAdjacentHTML('afterend', `<${ tagName } class="${ tagClassName }">${ binding.value[0] }</${ tagName }>`)
    },
    update: (el, binding, vnode) => {
        const { className, tagClassName, tagName } = vOptionsDirective(vnode.context.$vueHasErrorLaravelOptions)
        if (binding.value && Array.isArray(binding.value) && binding.value.length) {
            let nodes = el.nextSibling
            if (el.nextSibling) {
                nodes.parentNode.removeChild(nodes)
            }
            el.classList.add(className)
            el.insertAdjacentHTML('afterend', `<${ tagName } class="${ tagClassName }">${ binding.value[0] }</${ tagName }>`)
        } else {
            el.classList.remove(className)
        }
    }
}

export default vHasErrorLaravel