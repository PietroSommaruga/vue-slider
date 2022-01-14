new Vue({
    el: '#app',
    data: {
        currentIndex:0,
        img: [
            'https://www.leggilo.org/wp-content/uploads/2021/12/shrek-1.jpg',
            'https://upload.wikimedia.org/wikipedia/it/a/a2/Spider-Man.NoWayHome.png',
            'https://www.inter.it/binaries/content/gallery/internazionale/photos/2019/11/10/2019-11-10-10-06-12_294991.JPG/2019-11-10-10-06-12_294991.JPG/internazionale%3AcinemaApp',
            'https://images.lonelyplanetitalia.it/static/places/maldive-139.jpg?q=90&p=social&s=f57483da1976e6f7677e690ce1d4672f',
            'https://wips.plug.it/cips/buonissimo.org/cms/2011/12/lasagne-al-forno-alla-ferrarese.jpg',
        ],
    },
    
    methods:{
        nextImg: function(){
            this.currentIndex++;
            if (this.currentIndex > this.img.length - 1){
                this.currentIndex = 0;
            }
        },
        prevImg: function(){
            this.currentIndex--;
            if (this.currentIndex < 0){
                this.currentIndex = this.img.length - 1;
            }
        }
    }
})














