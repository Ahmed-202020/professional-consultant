$(function(){
    $(".en").on("click" , function(){
        $(".lang .text-lang").text($(this).text()) ; 
        $("html").attr("dir" , "ltr") ;
    }) ; 
    $(".ar").on("click" , function(){
        $(".lang .text-lang").text($(this).text()) ; 
        $("html").attr("dir" , "rtl") ;
    }) ; 
    $(".close-register").on("click" , function(){
        $(".modal").modal("hide") ; 
    })
    $(".eye").on("mousedown" , function(){
        $(".pass").attr("type" , "text").css("padding-right" , "25px") ; 
    })
    $(".eye").on("mouseup" , function(){
        $(".pass").attr("type" , "password").css("padding-right" , "25px") ; 
    })
    $(".eye-2").on("mousedown" , function(){
        $(".pass-2").attr("type" , "text").css("padding-right" , "25px") ; 
        $(".pass").attr("type" , "password").css("padding-right" , "25px") ; 
    })
    $(".eye-2").on("mouseup" , function(){
        $(".pass-2").attr("type" , "password").css("padding-right" , "25px") ; 
    })
    $('label[for = photo] input[type=file]').change(function(e){
        $(".ph").val($(this).val().replace(/.*(\/|\\)/, ''));
    }) ; 

    $(".modal-create .form-group").on("submit" , function(e){
        e.preventDefault();
        $(".modal-create").hide() ; 
        $("#otp-phone").modal("show") ; 
    })
    $(".modal-forget .form-group").on("submit" , function(e){
        e.preventDefault();
        $(".modal-forget").hide() ; 
        $("#otp-pass").modal("show") ; 
    });

    $("#notifications").modal("show") ; 
    $("#notifications .btn").on("click" , function(){
        $("#notifications").modal("hide") ; 
    });
});