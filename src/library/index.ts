function sayHello() {
    console.log("Library");
}

const library = {
    sayHello
}

export default {
    install: (Vue: any) => {
        Vue.prototype.$$ = library;
    }
};