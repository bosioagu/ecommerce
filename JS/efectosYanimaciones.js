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
            $(".underConstruction").animate({
                height: "400px",
                marginLeft:"280",
                marginTop: "50"

            },{
                duration:800,
                easing:"linear"

        }).replaceWith("<img class='underConstruction2' src='../img/underConstruction.png'></img>")
    })

    
    $(".underConstruction").animate({
        
    }).fadeOut(4000).delay(1000).slideDown(1000)

})






