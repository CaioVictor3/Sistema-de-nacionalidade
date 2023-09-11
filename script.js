function verificar(){
    
    var país = window.document.querySelector('input#txt1').value;

    var res = window.document.querySelector('div#res')

    if(país == "Brasil" || país == "brasil"){

        res.innerHTML = (`<p>Você é brasileiro</p>`)

    } else if (país == "EUA" || país == "Estados Unidos"){

        res.innerHTML = ("<p>Você é estadunidense</p>")

    } else{

        res.innerHTML = ("<p>Você é estrageiro</p>")

    }


}