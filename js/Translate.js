import Animate from '../js/Animate.js'
export default class Translate extends Animate {
    constructor() {
        super();
    }
    exec() {
        this.el.classList.add('change');
    }
    static install() {
        return Translate;
    }
}

// let animate = Animate.create().use(Translate).mount(document.querySelector('div')


// export default class Translate {
//     constructor(parse) {
//         this.parse = parse;
//     }
//     exec(el) {
//         el.classList.add('change');
//         let addevent = function() {
//             el.classList.remove('change');
//             el.removeEventListener('animationend', addevent);
//         }
//         el.addEventListener('animationend', addevent);
//     }
//     static install() {
//         return new Translate();
//     }
// }
// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animate.create().use(Translate).mount(document.querySelector('div'))

// 作业二： 
// let animate = new Animate({
//     el:document.querySelector('div'),
//     type:'translate',
// })
// animate.load();