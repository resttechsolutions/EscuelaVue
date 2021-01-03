
Vue.component('post', {
    props: ['post'],
    template: `<article class="post">
    <h2 class="post__titulo">{{post.titulo}}</h2>
    <p class="post_contenido">{{post.contenido}}</p>
</article>`,
})

new Vue({
    el: '#app',
    data: {
        posts: [
            {
                titulo: 'Esto es un titulo e post',
                contenido: 'Lorem ipsin dolor sit amet, consectetur adipiscing elit. E'
            },
            {
                titulo: 'Esto es un titulo e post',
                contenido: 'Lorem ipsin dolor sit amet, consectetur adipiscing elit. E'
            },
            {
                titulo: 'Esto es un titulo e post',
                contenido: 'Lorem ipsin dolor sit amet, consectetur adipiscing elit. E'
            },
        ],
    }
});

Vue.config.devtools = true;