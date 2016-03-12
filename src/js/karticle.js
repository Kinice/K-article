/**
 * Created by kinice on 15/12/9.
 */
;(function(){
    var karticle = {
        createList:function(){
            var article = document.getElementsByClassName('k-article');
            var h2 = article[0].getElementsByTagName('h2');
            var listContent = document.createElement('div');
            var ul = document.createElement('ul');
            var list = [],link = [],text = [];

            //get all h2 words
            for(var i = 0; i<h2.length; i++){
                h2[i].setAttribute('name',h2[i].innerHTML);
                h2[i].setAttribute('id',h2[i].innerHTML);
            }

            //create list
            listContent.setAttribute('class','k-article-list');
            listContent.setAttribute('id','k-article-list');
            listContent.appendChild(ul);

            //add list href into list
            for(var i = 0; i<h2.length; i++){
                list[i] = document.createElement('li');
                link[i] = document.createElement('a');
                link[i].setAttribute('href','#'+h2[i].innerHTML);
                text[i] = document.createTextNode(h2[i].innerHTML);
                link[i].appendChild(text[i]);
                list[i].appendChild(link[i]);
                ul.appendChild(list[i]);
            }

            //append list into page
            article[0].appendChild(listContent);
        },
        setPosition:function(){
            var listContent = document.getElementById('k-article-list');
            var article = document.getElementsByClassName('k-article');
            var scrTop = this.getScrolltop();

            //get left offset
            if(article[0].offsetLeft > listContent.offsetWidth){
                listContent.style.left = 0 + 'px';
            }else{

            }

            //get top scroll
            if(scrTop > article[0].offsetTop){
                listContent.style.position = 'fixed';
                listContent.style.left = article[0].offsetLeft - listContent.offsetWidth - 5 + 'px';
                listContent.style.top = 0 + 'px';
            }else{
                listContent.style.position = 'absolute';
                listContent.style.left = -(listContent.offsetWidth + 5) + 'px';
                listContent.top = 0 + 'px';
            }
        },
        getScrolltop:function(){
            var scrTop = new Number();
            if(document.body.scrollTop){
                scrTop = document.body.scrollTop;
            }else{
                scrTop = document.documentElement.scrollTop;
            }
            return scrTop;
        },
        init:function(){
            this.createList();
            this.setPosition();
        }
    }
    window.karticle = karticle;
})();
karticle.init();
window.onscroll = function(){
    karticle.setPosition();
}
