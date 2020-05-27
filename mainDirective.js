(function() {

  // if we are in node.js enviro, require vue
  try {
    var Vue = require('vue');
  } catch (e) {
    // no worries, in browser enviro Vue should already be global
  }

  var vueHasErrorLaravel = Vue.directive('has-error', (el, binding) => {
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

  // check whether we are in node.js enviro
  try {
    module.exports = vueHasErrorLaravel;
  } catch (e) {
    // no worries, our directive will just be registered in browser
  }

})();
