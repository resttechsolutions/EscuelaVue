Vue.component('gato', {
    template: `<img :src="urlCompleta">`,
    data() {
        return {
            ancho: Math.floor(Math.random() * 600 ) + 100,
            alto: Math.floor(Math.random() * 600 ) + 100,
         }

    },
    computed: {
        urlCompleta() {
            return `http://placekitten.com/g/${this.ancho}/${this.alto}`
        }
    }
})

new Vue({
    el: '#app',
    data: {

    }
});

Vue.config.devtools = true;