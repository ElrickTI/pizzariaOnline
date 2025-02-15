var clicado = false;

function menuMobile(){
    var nav = document.getElementsByClassName("navCabecalho")[0];
  
    if(clicado == false) {
        nav.style.display = "block";
        clicado = true;
    } else {
        nav.style.display = "none";
        clicado = false;
    }
 

    

}