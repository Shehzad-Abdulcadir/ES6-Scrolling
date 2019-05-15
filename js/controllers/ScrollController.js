export default class Scroll {
    constructor() {
        this.elements = document.querySelectorAll(".js-scroll");

        if (this.elements.length > 0) {
            import(/* webpackChunkName: "scroll" */ "../classes/Scroll").then(
                res => {
                    const Scroll = res.default;
                    this.scroll = this.createInstance(
                        Scroll,
                        this.elements
                    );
                }
            );
        }
    }

    createInstance(Scroll, elements) {
        return new Scroll(elements);
    }
}