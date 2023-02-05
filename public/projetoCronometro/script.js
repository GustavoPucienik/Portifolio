(function(){

    const iniciarBtn = document.getElementById("iniciar")
    const pararBtn = document.getElementById("parar")
    const reiniciaBtn = document.getElementById("reiniciar") 
    var min = document.getElementById("minutos").textContent
    var seg = document.getElementById("segundos").textContent
    var hh = document.getElementById("hh").textContent
    var cron;
    var format = (hh < 10 ? `0${hh}` : hh) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    document.getElementById('counter').innerText = format


    function timer() {
        seg++; //Incrementa +1 na variável ss
    
        if (seg == 60) { //Verifica se deu 59 segundos
            seg = 0; //Volta os segundos para 0
            min++; //Adiciona +1 na variável mm
    
            if (min == 60) { //Verifica se deu 59 minutos
                min = 0;//Volta os minutos para 0
                hh++;//Adiciona +1 na variável hora
            }
        }
        var format = (hh < 10 ? '0' + hh : hh) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    
    //Insere o valor tratado no elemento counter
     document.getElementById('counter').innerText = format

    //Retorna o valor tratado
    return format;
    }

    function iniciar (){
        console.log("iniciou")
        cron = setInterval( function () {
            timer()}
        ,1000)
        iniciarBtn.disabled = true
    }
    function parar (){
        console.log("parou")
        clearInterval(cron)
        iniciarBtn.disabled = false
    }
    function reinicia (){
        console.log("reiniciou")
        hh = 0
        min = 0
        seg = 0
        clearInterval(cron)
        document.getElementById('counter').innerText = format
        iniciarBtn.disabled = false
    }

    
    

    iniciarBtn.addEventListener("click",  () =>  iniciar())
    pararBtn.addEventListener("click",  () => parar())
    reiniciaBtn.addEventListener("click",  () => reinicia())



})()