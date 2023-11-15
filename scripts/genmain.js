let franchises = [
    'marvel','star-wars','pixar','dreamworks','disney','illumination',
    'dc-comics','x-men','fast-and-furious','transformers','harry-potter',
    'the-lord-of-the-rings','blue-sky','sony-pictures','nickelodeon','cartoon-network'
];
let mediaPicFr = document.querySelectorAll('.mediaPicFr');
let mediaPicFrOut = document.querySelectorAll('.mediaPicFrOut');
let mediaEleFr = document.querySelectorAll('.mediaEleFr');

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