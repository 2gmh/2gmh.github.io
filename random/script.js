var lista = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"];

function generarResultado() {
	var resultado = document.getElementById("resultado");
	var indice = Math.floor(Math.random() * lista.length);
	resultado.innerHTML = lista[indice];
}
