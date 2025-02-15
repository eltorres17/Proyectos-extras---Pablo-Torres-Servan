document.addEventListener("DOMContentLoaded",function(){
    const boton = document.getElementById("principal__cambio__color");
    const letra = document.getElementById("color");
    const body = document.getElementById("body");

    const color = ["#ff5733","#33ffdd","#efc662","#faaf33","#9033fa","#fb096c","#dde359","#a38b46","#46a381","#7b72a7"];

    let i = 1;

    body.style.background = "#33ffdd";
    letra.innerHTML = "33ffdd";
    boton.style.background = "33ffdd";
    letra.style.color = "33ffdd";
    
    boton.addEventListener("click", function(){
        
        let random = Math.floor(Math.random()*color.length);
       
        
        body.style.background = color[i];
        letra.innerHTML = color[i];
        boton.style.background = color[i];
        letra.style.color = color[random];

        i = random;
    });

});