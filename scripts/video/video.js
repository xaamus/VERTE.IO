let seasonInfo = document.querySelectorAll('.seasonInfo');
let episodeList = document.querySelectorAll('.episodeList');
let seasonArr = document.querySelectorAll('.seasonArr');

function seasonCol(){
    for (i=0;i<seasonInfo.length;i++){
        episodeList[i].style='display:none';
        seasonArr[i].innerHTML='>';
    }
}
let videoWatchTitle = document.getElementById('videoWatchTitle');
let episodeOvr = document.querySelectorAll('.episodeOvr');
let episodeSea = document.querySelectorAll('.episodeSea');
let episodeTit = document.querySelectorAll('.episodeTit');
let episodeEle = document.querySelectorAll('.episodeEle');

for (i=0;i<episodeEle.length;i++){
    episodeEle[i].addEventListener('click',function(){
        videoWatch.style.display = 'flex';
    });
}