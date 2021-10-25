import '../css/Ani.css'
export default class Ani {
    constructor(params) {
            this.params = params;
            this.newArr = this.params['targets'].slice();
            this.num = 2;
            this.init();
            // this.animation(this.newArr);
        }
        // 拿到渲染的动画元素
    init() {
            var target = this.newArr.slice();
            this.animation(target);
        }
        // 渲染动画
    animation(arr) {
        var _this = this;
        if (arr.length) {
            var target = arr.shift();
            target.el.classList.add(target.animationClassName);
            var removeEvent = function() {
                target.el.classList.remove(target.animationClassName);
                target.el.removeEventListener('animationend', removeEvent);
                _this.animation(arr);
            }
            target.el.addEventListener('animationend', removeEvent);
        } else {
            this.newArr = this.params['targets'].slice().reverse();
            setTimeout(() => {
                this.init();
            }, 0);
        }
    }
}