
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





const app2 = createApp({
    data() {
        return {
            title: "Simon Says",
            subtTitle: "After 15 seconds, write the numbers you rememeber in the circles",
            randomNumbers: [],
            randomNumbersTmp: [],
            gameIsRunning: false,
            isInputDisabled: true,
            checkResults: false,
        }
    },
    methods: {
        createNumbers() {
            this.gameIsRunning = true;
            this.checkResults = false;
            this.isInputDisabled = true,
                this.randomNumbers = [];
            this.randomNumbersTmp = [];
            this.isButtonDisabled = true;
            console.log(this);
            for (let i = 0; i < 5; i++) {
                this.randomNumbersTmp.push(this.getRndInteger(1, 100));
            };
            this.randomNumbers = this.randomNumbersTmp;
            this.hideAll()
        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        hideAll() {
            setTimeout(() => {
                this.randomNumbersTmp = [];
                console.log(this.randomNumbers);
                this.isButtonDisabled = false;
                this.isInputDisabled = false;
            }, 15000)
        },
        changeColor(index) {
            if (this.checkResults && this.randomNumbersTmp[index] === this.randomNumbers[index]) {
                return 'bg-success'
            } else if (this.checkResults && this.randomNumbersTmp[index] !== this.randomNumbers[index]) {
                return 'bg-danger'
            } else {
                return 'bg-light'
            }
        },
        confrontResults() {
            this.checkResults = true;
            this.isInputDisabled = true;
        }

    }
})
app2.mount('#app2');
