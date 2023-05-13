function crearElemento(elemento){
    return document.createElement(elemento)
    
}

function crearElementoConTexto(nombreTag, textoTag){
    var Elemento = crearElemento(nombreTag);
    var ElementoTexto = document.createTextNode(textoTag);
    Elemento.appendChild(ElementoTexto);
    return Elemento;

   
}

function adicionarHijo(padre, hijo){
    padre.appendChild(hijo);
}

function adicionarBody(Elemento){
    document.body.appendChild(Elemento);
}

function crearImagen(urlImagen){
    var img = crearElemento("img");
    img.src = urlImagen;
    return img;
}

function adicionarHijo(padre, hijo){
    padre.appendChild(hijo);
}





   
