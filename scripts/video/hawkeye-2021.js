episodeEle[0].addEventListener('click',function(){iframeId.src = ''});
episodeEle[1].addEventListener('click',function(){iframeId.src = ''});
episodeEle[2].addEventListener('click',function(){iframeId.src = ''});
episodeEle[3].addEventListener('click',function(){iframeId.src = ''});
episodeEle[4].addEventListener('click',function(){iframeId.src = ''});
episodeEle[5].addEventListener('click',function(){iframeId.src = ''});

seasonInfo[0].addEventListener('click',function(){
    seasonCol();
    episodeList[0].style.display='unset';
    seasonArr[0].innerHTML='<';
})