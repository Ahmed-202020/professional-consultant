$(function(){
    $(".paginations .bar .bar-content").on("click" , function(){
        $(".paginations .bar").removeClass("active-page");
        $(this).parent(".bar").addClass("active-page") ; 
    })
})

function paginitions(){
    let barText =  document.getElementsByClassName("bar-text") ; 
    for(let x = 0 ; x < barText.length ; x++ ){
        barText[x].textContent = `0${ x + 1}`; 
    }
}
paginitions() ; 

