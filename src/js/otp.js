$(function(){
    $(".form-control.one").keyup(function(e){
        if ( (e.which == 96 ) || (e.which == 97 ) || (e.which == 98 ) || (e.which == 99 ) || (e.which == 100 ) 
        || (e.which ==101 ) || (e.which == 102 ) || (e.which == 103 ) || (e.which == 104 ) || (e.which == 105 )){
            $(".form-control.two").focus();
        }else{
            e.preventDefault();
        }
    });
    $(".form-control.two").keyup(function(e){
        if ( (e.which == 96 ) || (e.which == 97 ) || (e.which == 98 ) || (e.which == 99 ) || (e.which == 100 ) 
        || (e.which ==101 ) || (e.which == 102 ) || (e.which == 103 ) || (e.which == 104 ) || (e.which == 105 )){
            $(".form-control.three").focus();
        }else{
            e.preventDefault();
        }
    });
    $(".form-control.three").keyup(function(e){
        if ( (e.which == 96 ) || (e.which == 97 ) || (e.which == 98 ) || (e.which == 99 ) || (e.which == 100 ) 
        || (e.which ==101 ) || (e.which == 102 ) || (e.which == 103 ) || (e.which == 104 ) || (e.which == 105 )){
            $(".form-control.four").focus();
        }else{
            e.preventDefault();
        }
    });
    $(".form-control").keyup(function(){
        if( $(".codes .one").val() && $(".codes .two").val() && $(".codes .three").val() && $(".codes .four").val() ){
            $(".otp .buttons .sign").css({"background-image" : "linear-gradient(#d6a22b , #b07e0a)" , "box-shadow" : "none" , "color" : "#fff"}).
            removeAttr("disabled");
        }else{
            $(".otp .buttons .sign").css({"background-image" : "none" , "box-shadow" : "0 3px 5px" , "color" : "#dcdcdc"});
        }
    })
    $(".codes .form-control").keyup (function(){
        if($(this).val() == ""){
            $(this).css({"border-color" : "#dcdcdc"}) ; 
        }else{
            $(this).css({"border-color" : "#0e0e0e"}) ; 
        }
    })
    $(".resent").on("click" , function(){
        $(".otp .buttons .sign").css({"background-image" : "none" , "box-shadow" : "0 3px 5px" , "color" : "#dcdcdc"}). 
        attr("disabled" , "disabled");
        $(".codes .form-control").val("").css({"border-color" : "#dcdcdc"}) ; 
    })
    $("#otp-pass .form-group").on("submit" , function(e){
        e.preventDefault();
        $("#otp-pass").hide() ; 
        $("#new-password").modal("show") ; 
    })
})

