new Vue({
    el: '#app',
    data: {
        logged: true,
        mensajes: {
            in: 'Logueado como @restrella.',
            out: 'Te has desconectado.',
        },
        claseBase: 'user-info',
    },
    computed:{
        mensaje() {
            return this.logged ? this.mensajes.in : this.mensajes.out;
        },

        estilos() {
            // return {
            //     'logged-in': this.logged,
            //     'logged-out': !this.logged,
            // }

            // return this.logged ? 'logged-in' : 'logged-out';

            return `logged-${this.logged ? 'in' : 'out'}`;
        }
    }
});

Vue.config.devtools = true;