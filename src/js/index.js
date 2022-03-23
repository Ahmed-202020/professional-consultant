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

    if( $(".modal-register .form-group").hasClass("error") ) {
        $(".modal-register .text-error").text("المستخدم غير مسجل بالنظام") ; 
    }
    if( $(".modal-forget .form-group").hasClass("error") ) {
        $(".modal-forget .text-error").text("المستخدم غير موجود بالنظام").css({"text-align" : "center" , "margin-top" : "40px"}) ; 
    }
    if( $(".modal-new-pass .form-group").hasClass("error") ) {
        $(".modal-new-pass  .text-error").css({"text-align" : "center" , "margin-top" : "40px"}) ; 
        $(".modal-new-pass .text-error.first").text("برجاء مليء جميع البيانات") ; 
        $(".modal-new-pass .text-error.second").text("كلمات المرور غير متطابقة").css({"margin-top" : "12px"}) ; 
    }
    if( $(".otp .form-group").hasClass("error") ) {
        $(".otp .text-error").text("كلمة المرور المؤقتة غير صحيحة").css({"text-align" : "center" , "font-size" : "10pt" , "margin-top" : "10px" }) ; 
    }
    if( $(".modal-create .form-group").hasClass("error") ) {
        $(".modal-create .text-error.first").text("برجاء مليء جميع الخانات").css({"margin-top" : "10px"}) ; 
        $(".modal-create .text-error.second").text("المستخدم مسجل باللوحة").css({"margin-top" : "10px"}) ; 
        $(".modal-create .text-error.third").text("يوجد خطأ في البيانات المدخلة").css({"margin-top" : "10px"}) ;
        $(".modal-create .buttons").css({"margin-top" : "35px"}) ; 
        $(".modal-create .col-6").css({"height" : "900px"}) ; 
    }

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
    $(".submit-porpose .form-group").on("submit" , function(e){
        e.preventDefault();
        $("#submit-porpose").hide() ; 
        $("#successful-submit").modal("show") ; 
    });
    $(".write-consult .form-group").on("submit" , function(e){
        e.preventDefault();
        $("#successful-submit").modal("show") ; 
    });
    $(".data-bank .form-group").on("submit" , function(e){
        e.preventDefault();
        $("#bank-info").modal("show") ; 
    });
    $(".bank-info .form-group").on("submit" , function(e){
        e.preventDefault();
        $(".bank-info").hide() ; 
        $("#successful-submit").modal("show") ; 
    });
    $(".online-consult .button .btn").on("click" , function(e){
        e.preventDefault();
        $("#successful-submit").modal("show") ; 
    });

    $(".input-date").on("change" , function(){
        let element = $("<span class = 'day'></span>") ; 
        element.text($(".input-date").val()) ; 
        $(".available-days .days").append(element) ;
    });

    $(".input-date").on("input", function() {
        $(".input-date").attr("disabled" , "disabled").val("");
    });

    $(".add-date .btn-time").on("click" , function(e){
        e.preventDefault() ;
        if( ( $(".available-time .date input.hours").val()&& $(".available-time .date input.minuts").val()) ){
            let elementHours = $("<span class = 'decided-hour'></span>") ; 
            $(elementHours).text($(".date input.hours").val()) ; 
            let dot = $("<span class = 'dot'></span>");
            $(dot).text(":") ; 
            let elementMinuts = $("<span class = 'decided-minuts'></span>") ;
            $(elementMinuts).text($(".date input.minuts").val()) ; 
            let nightMorn = $("<span class = 'night-morn'></span>") ; 
            $(nightMorn).text($(".date select option:selected").text())
            let element = $("<div class = 'date'></div>")  ; 
            $(element).append(elementHours) ; 
            $(element).append(dot) ; 
            $(element).append(elementMinuts) ; 
            $(element).append(nightMorn) ; 
            $(".decided-date").append(element) ; 
        }
    })

    $(".online-consult .form-group").on("submit" , function(e){
        e.preventDefault() ; 
        let element = $("<div class = 'decided-day'></div>") ; 
        let titleElement = $("<span class='title'>تاريخ الاستشارة :</span>") ; 
        let dayElement = $("<span class='day'></span>")
        dayElement.text($(".available-days .days .day").text()) ; 
        let timeElement = $("<span class='time-element'></span>") ; 
        let date = $(".decided-date .date") ; 
        for(var i = 0 ; i < date.length ; i++){
            console.log(date[i]) ; 
            timeElement.append(date[i]) ; 
        }
        element.append(titleElement) ; 
        element.append(dayElement) ; 
        element.append(timeElement) ; 
        $(".available-days .days .day").text("") ; 
        $(".result").append(element).css("display" , "block") ; 
        $(this).closest(".form-group").find("input[type=text]").val("") ; 
        $(".input-date").removeAttr("disabled");
        $(".available-days .days .day").hide();
        $(".decided-date .date").hide() ;
    })
});

