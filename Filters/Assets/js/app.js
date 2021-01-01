new Vue({

    el: '#app',
    created() {
        fetch(this.url)
        .then(response => response.json())
        .then(response => this.usuarios = response.results.map(usuario => usuario.name))
    },
    data: {
        url: 'https://randomuser.me/api/?results=50',
        usuarios: [],
    },
    computed: {
        nombreCompleto(){
            return this.usuarios.map(usuario => `Nombre: ${usuario.title}: ${usuario.first} ${usuario.last}`)
        }
    },
    filters: {
        mayusculas(datos){
            return datos.toUpperCase();
        },
        acortado(datos, cantidad){
            return datos.substring(0, cantidad) + '...';
        }
    }
});

Vue.config.devtools = true;