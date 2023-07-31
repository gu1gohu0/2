var elementHtml = document.querySelector('html');
var elementBtnIncreaseFont = document.getElementById('btnMaisDif');
var elementBtnDecreaseFont = document.getElementById('btnMenosDif');

var fontSize = 16;
var increaseDecrease = 1; 

document.getElementById("btnMaisDif").addEventListener("click",()=>{
   
    if (fontSize <= 18 || keyM == true){
        fontSize += increaseDecrease;
        elementHtml.setAttribute("style",`font-size: ${fontSize}px`);
     } else {
        keyM = false
     }
        
})

document.getElementById("btnMenosDif").addEventListener('click', () => {
   
    if(fontSize >= 15 || keyMe == true) {
        fontSize -= increaseDecrease;
        elementHtml.setAttribute("style",`font-size: ${fontSize}px`);
        
    } else {
        keyMe = false
    }  
 })