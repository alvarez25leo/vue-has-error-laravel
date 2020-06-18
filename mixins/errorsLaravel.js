const MixinErrorsLaravel = {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    $errorsResponseFromLaravel: [],
                }
            },
        })
    },
}

export default MixinErrorsLaravel
