const vm = new Vue({
    mounted() {
        if (window.localStorage.getItem('form')) {
            this.form = JSON.parse(window.localStorage.getItem('form'));
        }
    },
    el: '#app',
    data: {
        form: {
            nombre: '',
            apellidos: '',
            mensaje: '',
            contacto: '',
            productos: [],
            acepta: false,
        }
    },
});

Vue.config.devtools = true;

vm.$watch('form',(nuevo, antiguo) =>{
    window.localStorage.setItem('form', JSON.stringify(nuevo));
}, {deep: true});