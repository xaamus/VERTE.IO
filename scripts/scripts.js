let section = document.querySelector("section");
let header = document.querySelector("header");
let footerCent = document.getElementById('footerCent');
let headerCent = document.getElementById('headerCent');
let navSearch = document.getElementById('navSearch');
let navTheme = document.getElementById('navTheme');
let navTitle = document.getElementById('navTitle');

//przewija na górę strony
let goUp = document.getElementById('goUp');
setInterval(function(){
    if(scrollY < (0.89 * window.innerHeight)){
        goUp.style.opacity = '40%';
        goUp.style.pointerEvents = 'none';
    }
    else{
        goUp.style.opacity = '100%';
        goUp.style.pointerEvents = 'unset';
    }
    if (document.body.clientWidth < 900){
        goUp.style.display = 'none';
    }
    else if (document.body.clientWidth >= 900){
        goUp.style.display = 'unset';
    }
},1);

//scroll personalizowany
let scroll = document.getElementById('scroll').style;
setInterval(function(){
    if (innerHeight < (section.offsetHeight + 20)){
        scroll.height = ((innerHeight / section.offsetHeight) * 100) + "%";
    }
    else{
        scroll.display = 'none';
    }
    scroll.top = (scrollY / 100 + 15) + "%";
},1);

//zmniejsza margines strony
setInterval(function(){
    if (document.body.clientWidth < 900){
        navSearch.style.display = 'none';
        navTheme.style.display = 'none';
        headerCent.style.justifyContent = 'center';
        footerCent.style.justifyContent = 'center';
    }
    else if (document.body.clientWidth >= 900){
        navSearch.style.display = 'unset';
        navTheme.style.display = 'unset';
        headerCent.style.justifyContent = 'space-between';
        footerCent.style.justifyContent = 'flex-start';
    }
},1);

//zmienia motyw
let linkCSS = document.getElementById('linkCSS');
let navThemeEle = document.getElementById('navThemeEle');
setInterval(function(){
    if (navThemeEle.innerHTML == 'DARK'){
        navThemeEle.addEventListener('click',function(){
            linkCSS.href = '/VERTE.IO/styles/thlite.css';
            navThemeEle.innerHTML = 'LITE';
        });
    }
    else if (navThemeEle.innerHTML == 'LITE'){
        navThemeEle.addEventListener('click',function(){
            linkCSS.href = '/VERTE.IO/styles/thdark.css';
            navThemeEle.innerHTML = 'DARK';
        });
    }
},1);

//zmnienia przezroczystość przycisku motywu
setInterval(function(){
    if (scrollY > 100){
        navThemeEle.style.pointerEvents = 'none';
        navThemeEle.style.opacity = '40%';
    }
    else if (scrollY < 100){
        navThemeEle.style.pointerEvents = 'unset';
        navThemeEle.style.opacity = '100%';
    }
},1);

//animacja tytułu strony
let navTitleEle = document.getElementById('navTitleEle');
setInterval(function(){
    if (innerWidth > 1100){
        navTitleEle.classList.add('navTitleEleHov');
    }
    else{
        navTitleEle.classList.remove('navTitleEleHov');
    }
},1);

//wyszukiwarka
let searchForm = document.getElementById('navSearchForm');
searchForm.addEventListener('submit',searchBar);
function searchBar(){
    let searchValue = document.getElementById('navSearchEle').value;
    if (searchValue == '8848'){
        searchForm.setAttribute('action','/VERTE.IO/generate/generate.html');
    }
    else{
        let searchTitle = searchValue.replaceAll(' ','-').toLowerCase();
        searchForm.setAttribute('action','/VERTE.IO/video/' + searchTitle + '.html');
    }
}

//minimalna wysokość strony
setInterval(function(){
    section.style.minHeight = innerHeight+'px';
},1);

//tymczasowa wartość scrolla
let temp1;
setInterval(function(){
    temp1 = scrollY;
},0);

//ukrywa górny pasek
setInterval(function(){
    if (scrollY > temp1){
        header.classList.add('headerHide');
        header.classList.remove('headerShow');
    }
    else if (scrollY < temp1){
        header.classList.add('headerShow');
        header.classList.remove('headerHide');
    }
    else if (scrollY == 0){
        header.classList.add('headerShow');
        header.classList.remove('headerHide');
    }
},1);