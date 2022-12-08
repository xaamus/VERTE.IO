let videoInfo = document.getElementById('videoInfo');
let seasonList = document.getElementById('seasonList');
let videoWatch = document.getElementById('videoWatch');
let contentVideo = '';
if (innerWidth > 1100){
    contentVideo = main.innerHTML;
}
else{
    if (videoInfo.classList.contains('serie')){
        contentVideo = '';
        contentVideo += '<div id="mainCent"><div id="videoAside">';
        contentVideo += '<div id="videoWatch" style="margin-bottom:3rem;width:100%;display:none">';
        contentVideo += videoWatch.innerHTML;
        contentVideo += '</div><div id="videoInfo">';
        contentVideo += videoInfo.innerHTML;
        contentVideo += '</div><div id="seasonList">';
        contentVideo += seasonList.innerHTML;
        contentVideo += '</div></div></div><div id="scroll"></div>';
    }
    else{
        contentVideo = '';
        contentVideo += '<div id="mainCent"><div id="videoAside">';
        contentVideo += '<div id="videoWatch" style="margin-bottom:3rem;width:100%">';
        contentVideo += videoWatch.innerHTML;
        contentVideo += '</div><div id="videoInfo">';
        contentVideo += videoInfo.innerHTML;
        contentVideo += '</div></div><div id="scroll"></div>';
    }
}
main.innerHTML = contentVideo;