var interruptor = document.querySelector(".interruptor");
//var encendido = false;

interruptor.addEventListener("click", () => {

    interruptor.classList.toggle("encendido");

    /*
    interruptor.className = `interruptor ${ !encendido ? "encendido" : "" }`;
    encendido = !encendido;
    */
    /*
    if(interruptor.classList.contains("encendido")){
        //interruptor.className = "interruptor";
        interruptor.classList.remove("encendido")
    }else{
        //interruptor.className = "interruptor encendido";
        interruptor.classList.add("encendido")
    }
    //encendido = !encendido;*/
});