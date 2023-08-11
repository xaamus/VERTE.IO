//ustala franczyzę
let docTitle = document.title.slice(11,document.title.length);
let title = [];
let year = [];
function translateFranchise(){
    if (docTitle == "MARVEL"){
        title=titleMarvel;
        year=yearMarvel;
    }
    else if (docTitle == "PIXAR"){
        title=titlePixar;
        year=yearPixar;
    }
    else if (docTitle == "STAR WARS"){
        title=titleStarWars;
        year=yearStarWars;
    }
    else if (docTitle == "VOID"){
        title=titleVoid;
        year=yearVoid;
    }
    else if (docTitle == "HARRY POTTER"){
        title=titleHarryPotter;
        year=yearHarryPotter;
    }
    else if (docTitle == "FAST AND FURIOUS"){
        title=titleFastAndFurious;
        year=yearFastAndFurious;
    }
    else if (docTitle == "THE LORD OF THE RINGS"){
        title=titleTheLordOfTheRings;
        year=yearTheLordOfTheRings;
    }
}translateFranchise();

//ustala rok
function translateDate(){
    for (i=0;i<title.length;i++){
        if (year[i] > 0 && year[i] < 25){
            year[i] = '20' + year[i];
        }
        else if (year[i] == 0){
            year[i] = '2000';
        }
        else {
            year[i] = '19' + year[i];
        }
    }
}translateDate();

//konwertuje tytuł na duże litery
function firstUpper(){
    let arr = title[k].split(" ");
    for (let i=0;i<arr.length;i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    let str = arr.join(" ");
    str = str.replaceAll('And ','and ');
    str = str.replaceAll('The ','the ');
    str = str.replaceAll('Of ','of ');
    str = str.replaceAll('In ','in ');
    str = str.replaceAll('At ','at ');
    str = str.replaceAll('By ','by ');
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

//ustala ile i jakie okienka
function mediaWindows(wind,widt){
    for (i=0;i<2;i++){
        k=0;
        contentFranchises = '';
        contentFranchises += '<div id="mainCent">'
        for (i=0;i<(Math.floor(title.length/wind));i++){
            contentFranchises += '<div class="mediaRow">';
            for (j=0;j<wind;j++){
                contentFranchises += '<div class="mediaEle" style="width:'+widt+'%">';
                contentFranchises += '<div class="mediaPicOut"><a href="/video/'+title[k].replaceAll(' ','-')+'-'+year[k]+'.html"><img class="mediaPic" src="/media/video/'+title[k].replaceAll(' ','-')+'-'+year[k]+'.webp"></img></a></div>';
                contentFranchises += '<a href="/video/'+title[k].replaceAll(' ','-')+'-'+year[k]+'.html" class="mediaTit">'+firstUpper(title[k])+'</a><p class="mediaYear">( '+year[k]+' )</p></div>';
                k=k+1;
            }
            contentFranchises += '</div>';
        }
        if ((title.length % wind) != 0){
            contentFranchises += '<div class="mediaRow">';
            for (j=0;j<title.length%wind;j++){
                contentFranchises += '<div class="mediaEle" style="width:'+widt+'%">';
                contentFranchises += '<div class="mediaPicOut"><a href="/video/'+title[k].replaceAll(' ','-')+'-'+year[k]+'.html"><img class="mediaPic" src="/media/video/'+title[k].replaceAll(' ','-')+'-'+year[k]+'.webp"></img></a></div>';
                contentFranchises += '<a href="/video/'+title[k].replaceAll(' ','-')+'-'+year[k]+'.html" class="mediaTit">'+firstUpper(title[k])+'</a><p class="mediaYear">( '+year[k]+' )</p></div>';
                k=k+1;
            }
            for (j=0;j<(wind-(title.length%wind));j++){
                contentFranchises += '<div class="mediaEleBlank" style="width:'+widt+'%"></div>';
            }
            contentFranchises += '</div>';
        }
        contentFranchises += '</div><div id="scroll"></div>'
    }
}

//drukuje
let contentFranchises;
let temp = 0;
setInterval(function(){
    if (innerWidth > 1700){
        mediaWindows(6,14);
    }
    else if (innerWidth < 1700 && innerWidth > 1400){
        mediaWindows(5,17);
    }
    else if (innerWidth < 1400 && innerWidth > 1100){
        mediaWindows(4,21);
    }
    else if (innerWidth < 1100 && innerWidth > 800){
        mediaWindows(3,28);
    }
    else{
        mediaWindows(2,42);
    }
    if (temp != 1){
        main.innerHTML = contentFranchises;
    }
    temp = 1;
},1)