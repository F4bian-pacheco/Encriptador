
let encriptadorRules = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
}
let desencriptadorRules = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u"
}


function encriptar() {
  let entrada = document.querySelector("textarea");
  let salida = document.getElementById("salida");
  salida.innerText = entrada.value.split("").map((letra) => {
    if (encriptadorRules[letra]) {
      return encriptadorRules[letra];
    } else {
      return letra;
    }
  }).join("");
  console.log("Encriptando...");
  let boton = document.getElementById("copy-btn");
  boton.style.visibility = "visible";
}

function desencriptar() {
  let entrada = document.querySelector("textarea");
  let salida = document.getElementById("salida");
  let textoDesencriptado = entrada.value.replace(/ai|enter|imes|ober|ufat/gi, (matched) => {
    return desencriptadorRules[matched];
  });
  salida.innerText = textoDesencriptado;
  let boton = document.getElementById("copy-btn");
  boton.style.visibility = "visible";
}

function copy() {
  let salida = document.getElementById("salida");
  let seleccion = document.createRange();
  seleccion.selectNodeContents(salida);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(seleccion);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  console.log("Copiado al portapapeles");
  let texto = document.getElementById("cpy-txt");
  texto.innerText = "Copiado al portapapeles";
  texto.style.visibility = "visible";
  setTimeout(() => {
    texto.style.visibility = "hidden";
  }, 1500);
}