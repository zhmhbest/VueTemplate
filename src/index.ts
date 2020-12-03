// Hello
const sayHello = () => {
    console.log('Hello');
}
sayHello();

// json5-loader
console.log(require("./config.json5").default)

// url-loader
const img = document.createElement('img');
img.src = require("./images/arrow_girl.png").default;
document.body.appendChild(img);

// css-loader
import "./style/0.css"
import "./style/1.scss"

// vue-loader
import Vue from 'vue'
const App = require('./App.vue').default;
new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
});


