function wide(mediaElew){
    for (i=0;i<mediaEle.length;i++){
        mediaEle[i].style.width = mediaElew + 'px';
    }
    var x = document.body.clientWidth;
    x = x - 0.05 * x;
    container.style.width = x + 'px';
    var y = x;
    let eleCount = 0;
    while (x >= mediaElew){
        x = x - mediaElew;
        eleCount++;
        if (x >= mediaElew){
            x = x - 20;
        }
    }
    let gap = (y - (mediaElew * eleCount)) / (eleCount-1);
    container.style.columnGap = gap + 'px';
}

let container = document.getElementById('mediaEleCont')
let mediaEle = document.querySelectorAll('.mediaEle');
let mediaTit = document.querySelectorAll('.mediaTit');
let mediaYear = document.querySelectorAll('.mediaYear');

setInterval(()=>{
    if (document.body.clientWidth < 548){
        for (i=0;i<mediaEle.length;i++){
            wide(160);
        }
        for (i=0;i<mediaTit.length;i++){
            mediaTit[i].style.fontSize = '.9rem'
        }
        for (i=0;i<mediaYear.length;i++){
            mediaYear[i].style.fontSize = '.7rem'
        }
    }
    else if (document.body.clientWidth >= 548){
        for (i=0;i<mediaEle.length;i++){
            wide(250);
        }
        for (i=0;i<mediaTit.length;i++){
            mediaTit[i].style.fontSize = '1rem'
        }
        for (i=0;i<mediaYear.length;i++){
            mediaYear[i].style.fontSize = '.8rem'
        }
    }
},1)