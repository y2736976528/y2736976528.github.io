// import Translate from '../js/Translate.js'
export default class Animate {
    static el;
    constructor(props) {
        // this.el = props.el;
        // this.type = props.type;
        this.el = Animate.el;
    }
    static create() {
        return new Animate();
    }
    use(Translate) {
        this.model = Translate.install();
        return this;
    }
    mount(el) {
        Animate.el = el;
        let instance = new this.model();
        instance.exec();
    }
}

// let animate = Animate.create().use(Translate).mount(document.querySelector('div')))
//作业五：
// export default class Translate extends Animate{
//     constructor(){
//         super()
//     }
//     exec(){
//         let _this = this;
//         this.el.classList.add('.one');
//         super.emit('animationstart')
//     }
// }

// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animate.create().use(Translate).mount(document.querySelector('div'))

// 作业三： 
// Animate.create({  
//     type:'translate',
// }).mount(document.querySelector('div'))