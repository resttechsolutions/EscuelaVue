new Vue({
    el: '#app',
    data: {

        nuevaTarea: '',

        tiempo: 0,

        busqueda: '',

        usuario:{
            username: 'restrella',
            role: 'admin'
        },

        tareas:[
            {nombre: 'Aprender JS moderno', tiempo: 3},
            {nombre: 'Aprender Vue', tiempo: 7},
            {nombre: 'Reparar el coche', tiempo: 22},
            {nombre: 'Viajar mas', tiempo: 16},
            {nombre: 'Comprar la cena', tiempo: 12},
            {nombre: 'Mejorar como desarrollador', tiempo: 9},
            {nombre: 'Dar un curso', tiempo: 14},
        ]
    },
    methods: {
        addTask(){
            this.tareas.unshift({
                nombre: this.nuevaTarea,
                tiempo: Math.floor(Math.random() * 100),
            })
        }
    },
    computed:{
        filteredTask(){
            return this.tareas.filter(tarea => {
                return tarea.tiempo <= this.tiempo && tarea.nombre.includes(this.busqueda);
            });
        }
    }
});

Vue.config.devtools = true;
