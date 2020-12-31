const vm = new Vue({
    el: '#app',
    data: {
        password: null,
        estado: "Introduce nueva contraseña...",
        novalidos: [
            "admin",
            "12345",
            "password"
        ],
    },
    watch: {
        password(nuevo, antiguo){
            if (this.novalidos.includes(nuevo)) {

                this.estado = "Contraseña no valida";

                return false;
            }

            
            if (nuevo.length < 5) {

                this.estado = "La cnotraseña debe contener al menos 5 caracteres";

                return false;
            }

            this.estado = "Contraseña correcta"
        }
    }
});

Vue.config.devtools = true;