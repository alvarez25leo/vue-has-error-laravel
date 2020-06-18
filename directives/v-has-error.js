/**
 * @name VueJS vueHasErrorLaravel (vue-has-error-laravel)
 * @description Permite mostrar errores de laravel
 * @author Leonardo Manuel Alvarez <leonardomanuel.alv@gmail.com>
 * @file v-has-error plugin definition
 */

const vOptionsDirective = (options) => {
    const className = options.hasOwnProperty('className') ? options.className : 'is-invalid'
    const tagName = options.hasOwnProperty('tagName') ? options.tagName : 'div'
    const tagClassName = options.hasOwnProperty('tagClassName') ? options.tagClassName : 'invalid-feedback'
    const showErrorMessage = options.hasOwnProperty('showErrorMessage') ? options.showErrorMessage : true
    return { className, tagName, tagClassName, showErrorMessage }
}

const vHasErrorLaravel = {
    bind: (el, binding, vnode) => {
        const errors = vnode.context.$data.$errorsResponseFromLaravel
        const property = binding.value
        const { className } = vOptionsDirective(vnode.context.$vueHasErrorLaravelOptions)
        if (errors && errors[property] && Array.isArray(errors[property]) && errors[property].length) {
            el.classList.add(className)
        } else {
            el.classList.remove(className)
        }
    },
    inserted: (el, binding, vnode) => {
        const errors = vnode.context.$data.$errorsResponseFromLaravel
        const property = binding.value
        const { tagName, tagClassName, showErrorMessage } = vOptionsDirective(vnode.context.$vueHasErrorLaravelOptions)
        if (!(errors && errors[property] && Array.isArray(errors[property]) && errors[property].length)) {
            return
        }
        if (showErrorMessage) {
            el.insertAdjacentHTML('afterend', `<${tagName} class="${tagClassName}">${errors[property][0]}</${tagName}>`)
        }
    },
    update: (el, binding, vnode) => {
        const errors = vnode.context.$data.$errorsResponseFromLaravel
        const property = binding.value
        const { className, tagClassName, tagName, showErrorMessage } = vOptionsDirective(vnode.context.$vueHasErrorLaravelOptions)
        let nodes = el.nextSibling
        if (el.nextSibling) {
            nodes.parentNode.removeChild(nodes)
        }
        if (errors && errors[property] && Array.isArray(errors[property]) && errors[property].length) {
            el.classList.add(className)
            if (showErrorMessage) {
                el.insertAdjacentHTML('afterend', `<${tagName} class="${tagClassName}">${errors[property][0]}</${tagName}>`)
            }
        } else {
            el.classList.remove(className)
        }
    },
}

export default vHasErrorLaravel
