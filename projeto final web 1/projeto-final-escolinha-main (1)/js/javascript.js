var elementHtml = document.querySelector('html');
var elementBtnIncreaseFont = document.getElementById('btnMais');
var elementBtnDecreaseFont = document.getElementById('btnMenos');

var fontSize = 16;
var increaseDecrease = 1; 

document.getElementById("btnMais").addEventListener("click",()=>{
   
    if (fontSize <= 20 || keyM == true){
        fontSize += increaseDecrease;
        elementHtml.setAttribute("style",`font-size: ${fontSize}px`);
     } else {
         keyM = false
     }
        
})

document.getElementById("btnMenos").addEventListener('click', () => {
    
    if(fontSize >= 11 || keyMe == true) {
       fontSize -= increaseDecrease;
       elementHtml.setAttribute("style",`font-size: ${fontSize}px`);
       
    } else {
        keyMe = false
    }  
})



 
 


