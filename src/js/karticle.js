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
    for(var j = 1; j <= h2.length; j++){
        h2[j-1].setAttribute('name',j-1+'a');
        h2[j-1].setAttribute('id',j-1+'a');
    }
    var h2list = new Array();
    var area = new Array();
    for(var i = 0; i < h2.length; i++){
        h2list[i] = document.createElement('li');
        area[i] = document.createElement('a');
        text = document.createTextNode(h2[i].innerText);
        area[i].setAttribute('href','#'+i+'a');
        area[i].appendChild(text);
        h2list[i].appendChild(area[i]);
        list.appendChild(h2list[i]);
    }
}
function setPosition(){
    var div = document.getElementById('k-article-list');
    var kArticle = document.getElementsByClassName('k-article');
    if(document.body.scrollTop>kArticle[0].offsetTop){
        div.style.position = 'fixed';
        div.style.left = kArticle[0].offsetLeft - div.offsetWidth-10 + 'px';
        div.style.top = 0 + 'px';
    }else{
        div.style.position = 'absolute';
        div.style.left = -(div.offsetWidth+10)+'px';
        div.top = 0 + 'px';
    }
}
createList();
setPosition();
window.onscroll = function(){
    setPosition();
}
