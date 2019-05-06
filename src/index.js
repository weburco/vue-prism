const Prism=require('prismjs')

const VuePrism = {

    install (Vue, options) {

        Vue.mixin({
            mounted () {
                Prism.highlightAll();
            }
        })
    }
}

module.exports=VuePrism;
