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

    let selector = document.querySelector(".submit-porpose .custom-select") ; 
    let selectField = document.querySelector(".submit-porpose .custom-select select.form-control")
    let arrow = document.querySelector(".submit-porpose .custom-select .custom-arrow img") ; 
    selector.addEventListener("mousedown" , function(e){
        e.preventDefault() ; 
        const select = selector.children[0] ; 
        const dropdown = document.createElement("ul") ; 
        dropdown.className = "selector-option" ; 
        [...select.children].forEach(option =>{
            const dropdownOption = document.createElement("li") ; 
            dropdownOption.textContent = option.textContent ; 

            dropdownOption.addEventListener("mousedown" ,  function(e){
                e.stopPropagation() ; 
                select.value = option.value ; 
                selector.value = option.value ; 
                select.dispatchEvent(new Event("change")) ; 
                selector.dispatchEvent(new Event("change")) ; 
                arrow.setAttribute("src" , "./assets/icons/Icon ionic-md-arrow-dropdown.svg")
                dropdown.remove() ; 
            })
            dropdown.appendChild( dropdownOption) ;
        })
        if( !(selector.appendChild(dropdown))){
            $(selectField).on("mousedown" , function(){
                selector.appendChild(dropdown) ; 
            })
        }else{
            $(selectField).on("mousedown" , function(){
                dropdown.remove() ; 
            })
        }
        arrow.setAttribute("src" , "./assets/icons/Icon ionic-md-arrow-dropdown-1.svg");
        document.addEventListener("click" , function(e){
            if(!(selector.contains(e.target))){
                dropdown.remove() ; 
                arrow.setAttribute("src" , "./assets/icons/Icon ionic-md-arrow-dropdown.svg")
            }
        })
    })

    $("#notifications").modal("show") ; 
    $("#notifications .btn").on("click" , function(){
        $("#notifications").modal("hide") ; 
    });

});