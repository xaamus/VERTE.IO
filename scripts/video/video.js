let seasonInfo = document.querySelectorAll('.seasonInfo');
let episodeList = document.querySelectorAll('.episodeList');
let seasonArr = document.querySelectorAll('.seasonArr');

function seasonCol(){
    for (i=0;i<seasonInfo.length;i++){
        episodeList[i].style='display:none';
        seasonArr[i].innerHTML='>';
    }
}
if (episodeList.length > 0){
    episodeList[0].style.display = 'unset';
}