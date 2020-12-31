const vm = new Vue({
    created() {
        let url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
        .then(response => response.json())
        .then(response => this.usuarios = response);
    },
    el: '#app',
    data: {
        usuarios: [],
    },
});
Vue.config.devtools = true;