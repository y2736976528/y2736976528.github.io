import Animate from '../../assets/js/Animate.js'
import Translate from '../../assets/js/Translate.js'
import articles from '../article_route.js'

// 超出部分变成...
// String.prototype.ellipsis = function(num, symbol = '...') {
//     // 153
//     if (this.length > num) {
//         return this.substr(0, num) + symbol;
//     }
//     return this;
// }

var oParent = document.querySelector('.left');
var oTemp = oParent.querySelector('.template');

var fragment = document.createDocumentFragment();

articles.forEach(item => {
    var oDivNode = oTemp.content.cloneNode(true);
    oDivNode.querySelector('.article').innerHTML = item.article;
    fragment.appendChild(oDivNode);
})
oParent.appendChild(fragment);




// 作业:封装Ellipsis类
/**
 * @description 截取字符串,超出...
 * @param text: 文本
 * @param textCount : 字符串截取长度 number类型;
 * @param findAllText: 非必填项,默认为'查看全部'
 * @param showFindAllButton :是否显示'查看全部'按钮,默认为false
 * **/

// class Ellipsis {
//     constructor(obj) {
//         this.obj = obj;
//     }
//     description() {
//         if (this.obj.text.length > 110) {
//             this.
//         }
//     }
// }

// var ell = new Ellipsis({
//     text: `渔夫的誓言 　　古时候有一渔夫，是出海打鱼的好手。他有一个习惯，每次打鱼的时候都要立下誓言。
//     有一年春天，听说市场上的墨鱼价格最高，于是立下誓言，这次出海只捕捞墨鱼，好好赚它一笔。
//     但是这次鱼讯所遇到的全都是螃蟹，他非常懊恼地空手而归。等他上了岸才得知市场上螃蟹的价格比墨鱼还要贵。
//     他后悔不已，发誓下一次出海一定要打捞螃蟹。 　　启示：一个人在确立自己的人生目标、人生理想的时候，不仅仅要符合自身实际，也要符合社会需要的实际。
//     而社会需要的实际总是在不断地变化发展着，因此我们要根据不断变`,
//     textCount: 110,
//     findAllText: '',
//     showFindAllButton: true
// })

// ell.description();