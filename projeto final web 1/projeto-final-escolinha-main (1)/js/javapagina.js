var elementHtml = document.querySelector('html');
var elementBtnIncreaseFont = document.getElementById('btnMaisInd');
var elementBtnDecreaseFont = document.getElementById('btnMenosInd');

var fontSize = 16;
var increaseDecrease = 1; 

document.getElementById("btnMaisInd").addEventListener("click",()=>{
   
    if (fontSize <= 18 ||keyM == true){
        fontSize += increaseDecrease;
        elementHtml.setAttribute("style",`font-size: ${fontSize}px`);
     } else {
        keyMe = false
     }
        
})

document.getElementById("btnMenosInd").addEventListener('click', () => {
    
    if(fontSize >= 15 || keyMe == true) {
        fontSize -= increaseDecrease;
        elementHtml.setAttribute("style",`font-size: ${fontSize}px`);
        
    } else {
        keyMe = false
    }  
})