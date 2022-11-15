import {mixin,mixin2} from "./mixin";
export default {
    install(Vue) {
        console.log("install", Vue)
        Vue.filter('myslic', function (value) {
            return value.slice(0, 4)
        })

        Vue.directive('fbind', {
            bind(element, binding){
                element[binding.arg] = binding.value
            },
            inserted(element, binding) {
                element.focus()
            },
            update(element, binding) {
                element[binding.arg] = binding.value
            }
        })

        Vue.mixin(mixin)
        Vue.mixin(mixin2)

        Vue.prototype.hello = ()=>{alert('hello')}

    }
}
