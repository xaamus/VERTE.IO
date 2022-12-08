let franchises = [
    'marvel','star-wars','pixar','dreamworks','disney','illumination',
    'dc-comics','x-men','fast-and-furious','transformers','harry-potter',
    'the-lord-of-the-rings','blue-sky','sony-pictures','nickelodeon','cartoon-network'
];
let mediaPicFr = document.querySelectorAll('.mediaPicFr');
let mediaPicFrOut = document.querySelectorAll('.mediaPicFrOut');

//drukuje
setInterval(function(){
    k=0;
    contentMediaFranch = '';
    if (innerWidth>1100){
        for (i=0;i<8;i++){
            contentMediaFranch += '<div class="mediaRowFr">';
            for(j=0;j<2;j++){
                contentMediaFranch += '<div class="mediaEleFr"><div class="mediaPicFrOut"><a href="/franchise/'+franchises[k]+'.html"><div class="mediaPicFr" id="picFr'+(k+1)+'"></div></a></div><a class="mediaTitFr" href="/franchise/'+franchises[k]+'.html">'+franchises[k].replaceAll('-',' ').toUpperCase()+'</a></div>';
                k=k+1;
            }
            contentMediaFranch += '</div>';
        }
    }
    else{
        for (i=0;i<16;i++){
            contentMediaFranch += '<div class="mediaRowFr">';
            contentMediaFranch += '<div class="mediaEleFr" style="width:100%"><div class="mediaPicFrOut"><a href="/franchise/'+franchises[k]+'.html"><div class="mediaPicFr" id="picFr'+(k+1)+'"></div></a></div><a class="mediaTitFr" href="/franchise/'+franchises[k]+'.html">'+franchises[k].replaceAll('-',' ').toUpperCase()+'</a></div>';
            k=k+1;
            contentMediaFranch += '</div>';
        }
    }
    if (mainCent.innerHTML != contentMediaFranch){
        mainCent.innerHTML = contentMediaFranch;
    }
},1);
//poszarza nieaktywne (hover) elementy franczyzy
/*for (i=0;i<mediaPicFrOut.length;i++){
    mediaPicFrOut[i].addEventListener('mouseover',function(){
        for (j=0;j<mediaPicFr.length;j++){
            mediaPicFr[j].style.filter = 'grayscale(.6)';
        }
    })
    mediaPicFrOut[i].addEventListener('mouseleave',function(){
        for (j=0;j<mediaPicFr.length;j++){
            mediaPicFr[j].style.filter = 'grayscale(0)';
        }
    })
}*/