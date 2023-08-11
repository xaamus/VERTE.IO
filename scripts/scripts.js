let main = document.getElementById('main');
let header = document.getElementById('header');
let mainCent = document.getElementById('mainCent');
let footerCent = document.getElementById('footerCent');
let headerCent = document.getElementById('headerCent');

//przewija na górę strony
setInterval(function(){
    let goUp = document.getElementById('goUp');
    if(scrollY < (0.89 * window.innerHeight)){
        goUp.style.opacity = '40%';
        goUp.style.pointerEvents = 'none';
    }
    else{
        goUp.style.opacity = '100%';
        goUp.style.pointerEvents = 'unset';
    }
    if (innerWidth > 1100){
        goUp.style.display = 'unset';
    }
    else{
        goUp.style.display = 'none';
    }
},1);

//scroll personalizowany
setInterval(function(){
    let scroll = document.getElementById('scroll').style;
    if (innerHeight < (main.offsetHeight + 20)){
        scroll.height = ((innerHeight / main.offsetHeight) * 100) + "%";
    }
    else{
        scroll.display = 'none';
    }
    scroll.top = (scrollY / 100 + 15) + "%";
},1);

//zmniejsza margines strony
setInterval(function(){
    if (innerWidth > 1100){
        mainCent.style.width = '80%';
        headerCent.style.width = '80%';
        footerCent.style.width = '80%';
    }
    else{
        mainCent.style.width = '90%';
        headerCent.style.width = '95%';
        footerCent.style.width = '95%';
    }
},1);

//zmienia motyw
setInterval(function(){
    let linkCSS = document.getElementById('linkCSS');
    let navThemeEle = document.getElementById('navThemeEle');
    if (navThemeEle.innerHTML == 'DARK'){
        navThemeEle.addEventListener('click',function(){
            linkCSS.href = '/styles/thlite.css';
            navThemeEle.innerHTML = 'LITE';
        });
    }
    else if (navThemeEle.innerHTML == 'LITE'){
        navThemeEle.addEventListener('click',function(){
            linkCSS.href = '/styles/thdark.css';
            navThemeEle.innerHTML = 'DARK';
        });
    }
},1);

//zmnienia przezroczystość przycisku motywu
setInterval(function(){
    let navThemeEle = document.getElementById('navThemeEle');
    if (scrollY > 100){
        navThemeEle.style.pointerEvents = 'none';
        for (i=100;i>40;i--){
            navThemeEle.style.opacity = i+'%';
        }
    }
    else if (scrollY < 100){
        navThemeEle.style.pointerEvents = 'unset';
        for (i=0;i<100;i++){
            navThemeEle.style.opacity = i+'%';
        }
    }
},1);

//animacja tytułu strony
setInterval(function(){
    let navTitleEle = document.getElementById('navTitleEle');
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
        searchForm.setAttribute('action','/generate/generate.html');
    }
    else{
        let searchTitle = searchValue.replaceAll(' ','-').toLowerCase();
        searchForm.setAttribute('action','/video/' + searchTitle + '.html');
    }
}

//minimalna wysokość strony
setInterval(function(){
    main.style.minHeight = innerHeight+'px';
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