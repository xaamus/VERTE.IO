let episodeEle = document.querySelectorAll('.episodeEle');
let videoCont = document.getElementById('videoCont');
let videoInfo = document.getElementById('videoInfo');
let videoDet = document.getElementById('videoDet');
let videoAsideL = document.getElementById('videoAsideL');
let videoAsideR = document.getElementById('videoAsideR');
let iframeOut = document.getElementById('iframeOut');
let paragraph = document.querySelectorAll("p");

setInterval(()=>{
    if (document.body.clientWidth < 600){
        videoCont.style.flexDirection = 'column-reverse';
        videoInfo.style.flexDirection = 'column';
        videoInfo.style.rowGap = '15px';
        videoInfo.style.marginBottom = '15px';
        videoDet.style.padding = '0px';
        videoCont.style.width = '90%';
        videoAsideL.style.width = '100%';
        videoAsideR.style.width = '100%';
        iframeOut.style.width = '100%';
        videoInfo.style.alignItems = 'center';
        paragraph[1].style.textAlign = 'center';
        for (i=0;i<episodeEle.length;i++){
            episodeEle[i].style.fontSize = '14px';
            episodeEle[i].style.lineHeight = '34px';
            episodeEle[i].style.letterSpacing = '1px';
        }
    }
    else if (document.body.clientWidth < 1400){
        videoCont.style.flexDirection = 'row';
        videoInfo.style.flexDirection = 'column';
        videoInfo.style.rowGap = '30px';
        videoInfo.style.marginBottom = '15px';
        videoDet.style.padding = '0px';
        videoCont.style.width = '90%';
        videoAsideL.style.width = '50%';
        videoAsideR.style.width = '50%';
        iframeOut.style.width = '100%';
        videoInfo.style.alignItems = 'flex-start';
        paragraph[1].style.textAlign = 'left';
        for (i=0;i<episodeEle.length;i++){
            episodeEle[i].style.fontSize = '20px';
            episodeEle[i].style.lineHeight = '48px';
            episodeEle[i].style.letterSpacing = '2px';
        }
    }
    else if (document.body.clientWidth >= 1400){
        videoCont.style.flexDirection = 'row';
        videoInfo.style.flexDirection = 'row';
        videoInfo.style.rowGap = '0px';
        videoInfo.style.marginBottom = '50px';
        videoDet.style.padding = '20px';
        videoCont.style.width = '80%'
        videoAsideL.style.width = '50%';
        videoAsideR.style.width = '50%';
        iframeOut.style.width = '90%';
        videoInfo.style.alignItems = 'flex-start';
        paragraph[1].style.textAlign = 'left';
        for (i=0;i<episodeEle.length;i++){
            episodeEle[i].style.fontSize = '20px';
            episodeEle[i].style.lineHeight = '48px';
            episodeEle[i].style.letterSpacing = '2px';
        }
    }
},1)