export default class Animate {
    constructor() {
        this.el = Animate.el
    }

    static create() {
        return new Animate();
    }
    static model;

    use(instance) {
        try {
            Animate.model = instance.install;
        } catch (error) {
            Animate.model = instance
        }
        return this;
    }

    mount(el) {
        Animate.el = el
        Animate.model().exec();
    }
    static el
}