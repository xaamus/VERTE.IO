function wide(row_elew){
    let container = document.getElementById('mediaEleCont')
    let row_ele = document.querySelectorAll('.mediaEle');
    for (i=0;i<row_ele.length;i++){
        row_ele[i].style.width = row_elew + 'px';
    }
    var x = document.body.clientWidth;
    x = x - 0.05 * x;
    container.style.width = x + 'px';
    var y = x;
    let eleCount = 0;
    while (x >= row_elew){
        x = x - row_elew;
        eleCount++;
        if (x >= row_elew){
            x = x - 20;
        }
    }
    let gap = (y - (row_elew * eleCount)) / (eleCount-1);
    container.style.columnGap = gap + 'px';
}

setInterval(wide,1,250)