document.addEventListener("DOMContentLoaded",function(){
    const frases_aleatorias = [
        "Los programadores no tienen errores, solo experiencias inesperadas.",
        "La programación es como montar en bicicleta: una vez que lo aprendes, nunca lo olvidas.",
        "En la informática, el único límite es la imaginación (y la memoria RAM).",
        "Los programadores no duermen, solo hacen pausas de ejecución.",
        "La mejor forma de resolver un problema es dividirlo en problemas más pequeños.",
        "Programar es como cocinar: a veces, una pizca de creatividad hace la diferencia.",
        "En la programación, cada punto y coma cuenta.",
        "El código es como el vino: mejora con el tiempo (y las revisiones).",
        "La resolución de problemas es la habilidad más importante en la programación.",
        "La informática es como una montaña rusa: emocionante y llena de giros inesperados.",
        "Los programadores no necesitan superpoderes, tienen lenguajes de programación.",
        "La programación es como un laberinto: a veces, tienes que retroceder para avanzar.",
        "Los buenos programadores piensan en código incluso cuando no están programando.",
        "La mejor parte de programar es el momento en que tu código finalmente funciona.",
        "La programación es como una conversación con el ordenador: tienes que hablar su idioma.",
        "Los programadores no comen errores, los depuran.",
        "La programación es como la música: cada línea de código es una nota en la sinfonía.",
        "La creatividad es la clave para resolver problemas de forma elegante en programación.",
        "En la informática, siempre hay una solución, solo necesitas encontrarla.",
        "Programar es como explorar un nuevo mundo, lleno de posibilidades infinitas."
    ];

    const boton_frase = document.getElementById("boton")
    const frase = document.getElementById("frase")

    let i = 1;
    boton.addEventListener("click", function(){
        let random = Math.floor(Math.random()*frases_aleatorias.length);
        frase.innerHTML = frases_aleatorias[random];
        i = random;
    });

});