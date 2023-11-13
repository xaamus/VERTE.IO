var generateField = document.getElementById('generateField');
var godTypeEle = document.querySelectorAll('.godTypeEle')
function getformName(){
    var formName = document.getElementById('formName').value.slice(0,-5);
    var formYear = formName.slice(-4);
}
function godTypeEleAttr(){
    for (var i=0;i<5;i++){
        godTypeEle[i].setAttribute('class','godTypeEle');
    }
}

godTypeEle[0].addEventListener('click',getVoid);
godTypeEle[1].addEventListener('click',getInfo);
godTypeEle[2].addEventListener('click',getFranchise);
godTypeEle[3].addEventListener('click',getScript);
godTypeEle[4].addEventListener('click',getEpisode);

function getVoid(){
    godTypeEleAttr();
    godTypeEle[0].setAttribute('class','godTypeEleActive godTypeEle');
    generateField.innerHTML = '<div class="mediaRowFr"><div id="mediaEleVoid"><div class="mediaPicFrOut"><a href="/VERTE.IO/franchise/void.html"><div class="mediaPicFr" id="picFr99"></div></a></div><a class="mediaTitFr" href="/VERTE.IO/franchise/void.html">VOID</a></div></div>';
}
function getInfo(){
    godTypeEleAttr();
    godTypeEle[1].setAttribute('class','godTypeEleActive godTypeEle');
    generateField.innerHTML = '<form><input type="text" id="formName" class="getName" placeholder="name"><br><input type="text" id="formDirector" class="getOther" placeholder="director"><br><input type="text" id="formStar1" class="getOther" placeholder="star 1"><br><input type="text" id="formStar2" class="getOther" placeholder="star 2"><br><input type="text" id="formStar3" class="getOther" placeholder="star 3"><br><input type="text" id="formDescription" class="getName" placeholder="description"><br><input type="reset" value="reset" class="getButton" placeholder="reset"><br><input type="submit" value="submit" class="getButton" placeholder="submit" onclick="getInfoSub()"></form>';
}
function getFranchise(){
    godTypeEleAttr();
    godTypeEle[2].setAttribute('class','godTypeEleActive godTypeEle');
    generateField.innerHTML = '<form><input type="text" id="formName" class="getName" placeholder="name"><br><input type="reset" value="reset" class="getButton" placeholder="reset"><br><input type="submit" value="submit" class="getButton" placeholder="submit" onclick="getFranchiseSub()"></form>';
}
function getScript(){
    godTypeEleAttr();
    godTypeEle[3].setAttribute('class','godTypeEleActive godTypeEle');
    generateField.innerHTML = '<form><input type="text" id="formName" class="getName" placeholder="name"><br><input type="text" id="formSeasons" class="getOther" placeholder="seasons"><br><input type="text" id="formEpisodes" class="getOther" placeholder="episodes"><br><input type="reset" value="reset" class="getButton" placeholder="reset"><br><input type="submit" value="submit" class="getButton" placeholder="submit" onclick="getScriptSub()"></form>';
}
function getEpisode(){
    godTypeEleAttr();
    godTypeEle[4].setAttribute('class','godTypeEleActive godTypeEle');
    generateField.innerHTML = '';
}

function getInfoSub(){
    var formName = document.getElementById('formName').value.slice(0,-5);
    var formYear = formName.slice(-4);
}
function getFranchiseSub(){
    var formName = document.getElementById('formName').value.toLowerCase().replaceAll(' ','-');
}
function getScriptSub(){
    var formName = document.getElementById('formName').value.toLowerCase().replaceAll(' ','-');
    var formSeasons = document.getElementById('formSeasons').value;
    var formEpisodes = document.getElementById('formEpisodes').value;
}