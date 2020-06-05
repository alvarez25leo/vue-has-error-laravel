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
        const options = vOptionsDirective(vnode.context.$vueHasErrorLaravelOptions)
        if (binding.value && Array.isArray(binding.value)) {
            if (binding.value.length) {
                el.classList.add(options.className)
            } else {
                if (el.classList.contains(options.className)) {
                    el.classList.remove(options.className)
                }
            }
        } else {
            if (el.classList.contains(options.className)) {
                el.classList.remove(options.className)
            }
        }
    },
    inserted: (el, binding, vnode)=> {
        const options = vOptionsDirective(vnode.context.$vueHasErrorLaravelOptions)
        if (binding.value && Array.isArray(binding.value)) {
            if (binding.value.length) {
                el.insertAdjacentHTML('afterend', `<${options.tagName} class="${options.tagClassName}">${binding.value[0]}</${options.tagName}>`)
            }
        }
    },
    update: (el, binding, vnode)=> {
        const options = vOptionsDirective(vnode.context.$vueHasErrorLaravelOptions)
        if (binding.value && Array.isArray(binding.value)) {
            if (binding.value.length) {
                let nodes = el.nextSibling
                if (el.nextSibling) {
                    nodes.parentNode.removeChild(nodes)
                }
                el.classList.add(options.className)
                el.insertAdjacentHTML('afterend', `<${options.tagName} class="${options.tagClassName}">${binding.value[0]}</${options.tagName}>`)
            } else {
                if (el.classList.contains(options.className)) {
                    el.classList.remove(options.className)
                }
            }
        } else {
            if (el.classList.contains(options.className)) {
                el.classList.remove(options.className)
            }
        }
    }
}

export default vHasErrorLaravel
