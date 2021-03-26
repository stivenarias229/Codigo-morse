$(document).ready(iniciar);

function iniciar(){
	$("#btn_traductor").on("click", insertar);
}

function insertar(){

	var palabra = $("#input_morse").val();
	var letra = "";
	var traduccion = "";

	if(palabra == " "){

	}else{
		var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
		"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
		"y", "z"];

		var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
 		".---", "-.-", ".-..", "--", "-.", "---", ".---.", "--.-", ".-.",
		"...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
		"..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
		"-----", "--..--", ".-.-.-", "..--.."];

		for(var i=1; i<=palabra.length; i++){
			letra = palabra.substring(i-1, i);
			for(var j=0; j<letras.length; j++){
				if(letra == letras[j]){
					traduccion = traduccion + morse[j];
					
				}
			}
		}
	}

	$("#traduc").html(traduccion);
}