// import Ani from "../../assets/Ani.js"
import Translate from "../../assets/translate.js"
import Animate from "../../assets/Animate.js"
import Ellipsis from "../../assets/ellipsis.js"
import articles from "../artic_route"


String.prototype.ellipsis = function(num, symbol = '...') {
    if (this.length > num) {
        let str = this.substring(0, num);
        str = str + symbol;
        return str;
    }
    return this;
};
let content = document.querySelector('.content_one');
let mainContent = document.querySelector('.main_content');
content.remove();


function HTMLparse(str) {
    let div = document.createElement('div');
    div.innerHTML = str;
    return div;
}


for (let i = 0; i < 2; i++) {
    let newContent = content.cloneNode(true);
    console.log(newContent)
    let div = HTMLparse(articles[i].article);
    let text = newContent.querySelector('.content_text');
    div.querySelector('.art-title').setAttribute('data-id', articles[i].id);
    newContent.insertBefore(div.querySelector('.art-title'), text);
    text.insertBefore(div.querySelector('.art-content'), newContent.querySelector('.view'));
    text.querySelector('.art-content').innerHTML = text.querySelector('.art-content').innerHTML.ellipsis(80, '...');
    mainContent.appendChild(newContent);
}


// articles.forEach(element => {
//     let newContent = content.cloneNode(true);
//     let div = HTMLparse(element.article);
//     let text = newContent.querySelector('.content_text')
//     div.querySelector('.art-title').setAttribute('data-id', element.id)
//     newContent.insertBefore(div.querySelector('.art-title'), text);
//     text.insertBefore(div.querySelector('.art-content'), newContent.querySelector('.view'));
//     text.querySelector('.art-content').innerHTML = text.querySelector('.art-content').innerHTML.ellipsis(80, '...');
//     mainContent.appendChild(newContent);
// });


let view = document.querySelectorAll('.view');
view.forEach((view, index) => {
    view.addEventListener('click', (e) => {
        let div = HTMLparse(articles[index].article);
        e.target.parentNode.querySelector('.art-content').innerHTML = div.querySelector('.art-content').innerHTML.replace(/\n/g, '<br>');
        e.target.parentNode.querySelector('.collect').style.display = 'block';
        e.target.style.display = 'none';
    });
});
let collect = document.querySelectorAll('.collect');
collect.forEach((collect, index) => {
    collect.addEventListener('click', (e) => {
        let div = HTMLparse(articles[index].article);
        e.target.parentNode.querySelector('.art-content').innerHTML = div.querySelector('.art-content').innerHTML.ellipsis(120, '...');
        e.target.parentNode.querySelector('.view').style.display = 'block';
        e.target.style.display = 'none';
    });
});
//作业五：  
let animate = Animate.create().use(Translate).mount(document.querySelectorAll('.content_one'));

// 添加两条
let next = document.querySelector('.btn');
next.remove();
let cloneNode = next.cloneNode(true);
mainContent.appendChild(cloneNode);
document.querySelector('.btn').onclick = function() {
    let contentLength = document.querySelectorAll('.content_one').length;
    for (let i = contentLength; i < contentLength + 1; i++) {
        let newContent = content.cloneNode(true);
        let div = HTMLparse(articles[i].article);
        let text = newContent.querySelector('.content_text');
        div.querySelector('.art-title').setAttribute('data-id', articles[i].id);
        newContent.insertBefore(div.querySelector('.art-title'), text);
        text.insertBefore(div.querySelector('.art-content'), newContent.querySelector('.view'));
        text.querySelector('.art-content').innerHTML = text.querySelector('.art-content').innerHTML.ellipsis(80, '...');
        mainContent.insertBefore(newContent, document.querySelector('.btn'));
    }
    Animate.create().use(Translate).mount(document.querySelectorAll('.content_one'));
}

let ellipsis = new Ellipsis({
    el: document.querySelector('.art-content'),
    textCount: 20,
    findAllButtonText: "查看所有",
    showFindAllButton: true
})

ellipsis.exec();

let atitle = document.querySelectorAll('.art-title')
Array.from(atitle).forEach(el => {
    el.addEventListener('click', function() {
        window.location.href = `articleDetails.html?id=${this.dataset.id}`
    })
})