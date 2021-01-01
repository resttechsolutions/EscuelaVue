new Vue({
    el: '#app',
    mounted() {
        axios.get(this.url)
        .then(response => this.tareas = response.data)
        .catch(error => console.error(error));
    },
    data: {
        nuevaTarea: '',
        url: 'https://jsonplaceholder.typicode.com/todos',
        tareas: [],
    },
    methods:{
        addTask(){
            axios.post(this.url, {
                title: this.nuevaTarea,
                userId: Math.floor(Math.random() * 10) + 1,
            })
            .then(response => {
                console.log(response);
                this.tareas.unshift({
                    title:this.nuevaTarea,
                });

                this.nuevaTarea = '';
            })
            .catch(error => console.error(error));
        }
    }
});

Vue.config.devtools = true;