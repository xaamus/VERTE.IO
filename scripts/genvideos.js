function wide(mediaElew,gapp){
    for (i=0;i<mediaEle.length;i++){
        mediaEle[i].style.width = mediaElew + 'px';
    }
    let x = document.body.clientWidth;
    x = x - 0.1 * x;
    container.style.width = x + 'px';
    let y = x;
    let eleCount = 0;
    while (x >= mediaElew){
        x = x - mediaElew;
        eleCount++;
        if (x >= mediaElew){
            x = x - gapp;
        }
    }
    let gap = (y - (mediaElew * eleCount)) / (eleCount-1);
    container.style.columnGap = gap + 'px';
}

let container = document.getElementById('mediaEleCont')
let mediaEle = document.querySelectorAll('.mediaEle');
let mediaTit = document.querySelectorAll('.mediaTit');
let mediaYear = document.querySelectorAll('.mediaYear');
let mediaPicOut = document.querySelectorAll('.mediaPicOut');
let mediaPic = document.querySelectorAll('.mediaPic');

setInterval(()=>{
    if (document.body.clientWidth < 548){
        for (i=0;i<mediaEle.length;i++){
            wide(160,0);
        }
        for (i=0;i<mediaTit.length;i++){
            mediaTit[i].style.fontSize = '15px';
            mediaYear[i].style.fontSize = '11px';
            mediaPicOut[i].style.borderRadius = '30px';
            mediaPicOut[i].style.padding = '5px';
            mediaPicOut[i].style.marginBottom = '4px';
            mediaPic[i].style.borderRadius = '25px';
            mediaEle[i].style.marginBottom = '20px';
        }
    }
    else if (document.body.clientWidth >= 548){
        for (i=0;i<mediaEle.length;i++){
            wide(250,20);
        }
        for (i=0;i<mediaTit.length;i++){
            mediaTit[i].style.fontSize = '17px';
            mediaYear[i].style.fontSize = '13px';
            mediaPicOut[i].style.borderRadius = '40px';
            mediaPicOut[i].style.padding = '6px';
            mediaPicOut[i].style.marginBottom = '14px';
            mediaPic[i].style.borderRadius = '34px';
            mediaEle[i].style.marginBottom = '40px';
        }
    }
},1)