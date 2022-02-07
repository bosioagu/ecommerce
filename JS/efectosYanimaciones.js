let darkMode 

if(localStorage.getItem("blackMode")){
    darkMode=localStorage.getItem("blackMode")

}else{
    darkMode="light"
}

localStorage.setItem("blackMode",darkMode)

$(()=>{
    if(localStorage.getItem("blackMode")== "dark"){
        $("body").addClass("blackMode")
        $("#botonDarkMode").hide()
        $("#botonLightMode").show()
    }else{
        $("#botonLightMode").hide()
    }
    $("#botonLightMode").click(()=>{
        $("#botonLightMode").hide()
        $("#botonDarkMode").show()
        //Primer forma de cambiar estilo
        // $("body").css({
        //     "backgroud-color": "white",
        //     "color":"black"
        // })
        //Segunda Forma remuevo el estilo , ESTE ES MAS CONVIENIENTE
        $("body").removeClass("blackMode")
        //Ahora modificamos en el LocalStorage
        localStorage.setItem("blackMode",  "light")

    })

    $("#botonDarkMode").click(()=>{
        
        $("#botonLightMode").show()
        $("#botonDarkMode").hide()
        
        //Segunda Forma remuevo el estilo , ESTE ES MAS CONVIENIENTE
        $("body").addClass("blackMode")
        //Ahora modificamos en el LocalStorage
        localStorage.setItem("blackMode",  "dark")
    })

//ANIMACION
        $("#btnAnimacion").click(function(){
            $(".whatsapp").animate({
                height: "400px",
                marginLeft:"auto",
                marginRight:"auto",
                marginTop: "50"

            },{
                duration:800,
                easing:"linear"

        }).replaceWith("<img class='chatWhatsapp' src='../img/chat-whatsapp.png'></img>")
    })
    
    $(".whatsapp").animate({
        
    }).fadeOut(4000).delay(1000).slideDown(1000)
})

function blink() {
    $('.flechaCentro').fadeOut(5000);
    $('.flechaCentro').fadeIn(3000);
} setInterval(blink,2000)






