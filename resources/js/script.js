
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: {
                text: "<h1>hello world!</h1>",
            },
            img: {
                url: "https://picsum.photos/600/400",
                alt: "random image",
                show: false
            },
            background: {
                show: false
            },
            button: {
                text: "Generate Image",
                show: true
            },
        }
    },
    methods: {
        showElement(arrayOfElements) {
            arrayOfElements.forEach(element => {
                if (typeof element === 'object' && Object.getPrototypeOf(element) === Object.prototype) {
                    element.show = !element.show ?? true;
                }
            });
        },
    }

});

app.mount('#app');