/**
 * Created by kinice on 15/12/9.
 */
function createList(){
    var div = document.createElement('div');
    div.setAttribute('class','k-article-list');
    div.setAttribute('id','k-article-list');
    var list = document.createElement('ul');
    div.appendChild(list);
    var text;
    var kArticle = document.getElementsByClassName('k-article');
    kArticle[0].appendChild(div);
    var h2 = kArticle[0].getElementsByTagName('h2');
    var h2list = new Array();
    for(var i = 0; i < h2.length; i++){
        h2list[i] = document.createElement('li');
        text = document.createTextNode(h2[i].innerText);
        h2list[i].appendChild(text);
        list.appendChild(h2list[i]);
    }
}
function setPosition(){
    var div = document.getElementById('k-article-list');
    div.style.left = -(div.offsetWidth+1)+'px';
    if(document.body.scrollTop>300){
        div.style.position = 'fixed';
        div.style.left = 137 + 'px';
        div.style.top = 0 + 'px';
    }
}
createList();
setPosition();