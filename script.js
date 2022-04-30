function verMais () {
    var pontos = document.getElementById ( "pontos" );
    var maisTexto = document.getElementById ( "ver_mais" );
    var btnVermais = document.getElementById ( "btnVerMais" );

    if ( pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnVermais.innerHTML = "ver mais";
        
    } else { 
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnVermais.innerHTML = "ver menos";

    }
}