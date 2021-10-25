import article1 from '../article/1.html';
import article2 from '../article/2.html';
import article3 from '../article/3.html';
import article4 from '../article/4.html';
import article5 from '../article/5.html';

function HTMLparse(str) {
    var span = document.createElement('span');
    span.innerHTML = str;
    return span.querySelector('template').innerHTML;
}
export default [{
        id: 1,
        title: '如何看待知乎上的男拳',
        article: HTMLparse(article1)
    },
    {
        id: 2,
        title: '如何看待知乎上的男拳',
        article: HTMLparse(article2)
    },
    {
        id: 3,
        title: '如何看待知乎上的男拳',
        article: HTMLparse(article3)
    },
    {
        id: 4,
        title: '如何看待知乎上的男拳',
        article: HTMLparse(article4)
    },
    {
        id: 5,
        title: '如何看待知乎上的男拳',
        article: HTMLparse(article5)
    },
]