$ = jQuery;
$(function(){
     //글자쓰는 플러그인
     $('.typed-cursor').typed({
        strings:["\<h1>hello, Eunji World🌎\</h1>"],
        typeSpeed: 100,
        backDelay:200,
        loop:false
    });
});

const tabList = document.querySelectorAll('.nav_menu li');

Array.prototype.forEach.call(tabList, function(list) {
    list.children[0].addEventListener('click', function(e) {
        e.preventDefault();
        const tabContent = document.querySelectorAll('#content .content');
        const tabNum = this.getAttribute('data-tabnum');
        
        Array.prototype.forEach.call(tabContent, function(cont, i) {
            cont.style.display = 'none';
            tabList[i].className = 'btn';
        });
        tabContent[tabNum].style.display = 'block';
        
        if(list.className.indexOf('checked') == -1) {
            list.className = 'btn checked';
        }
    });
});

const phoneText = document.querySelector('.contact .container h3');
const phone = phoneText.querySelector('span');

phoneText.addEventListener('mouseover', function(){
    phone.classList.add('up');
});

phoneText.addEventListener('mouseleave', function(){
    phone.classList.remove('up');
});

