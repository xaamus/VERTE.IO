let franchises = [
    'marvel','star-wars','pixar','dreamworks','disney','illumination',
    'dc-comics','x-men','fast-and-furious','transformers','harry-potter',
    'the-lord-of-the-rings','blue-sky','sony-pictures','nickelodeon','cartoon-network'
];
let mediaPicFr = document.querySelectorAll('.mediaPicFr');
let mediaPicFrOut = document.querySelectorAll('.mediaPicFrOut');
let mediaEleFr = document.querySelectorAll('.mediaEleFr');

for (i=0;i<mediaPicFr.length;i++){
    mediaPicFr[i].style.backgroundImage = 'url(/VERTE.IO/media/franchise/' + franchises[i] + '.webp)'
}

setInterval(()=>{
    if (document.body.clientWidth < 1000){
        for (i=0;i<mediaEleFr.length;i++){
            mediaEleFr[i].style.width = '90%'
        }
    }
    else if (document.body.clientWidth >= 1000){
        for (i=0;i<mediaEleFr.length;i++){
            mediaEleFr[i].style.width = '900px'
        }
    }
},1)