  const vueHasErrorLaravelDirective = Vue.directive('has-error', (el, binding) => {
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
})


var vueHasErrorLaravel = {
  install: (Vue, options) => {
    vueHasErrorLaravelDirective
  }
};

export default vueHasErrorLaravel;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueHasErrorLaravel)
}