var contador = 0;
var corMarcacao = "#e67e22";
var tds_inimigo = document.getElementsByClassName("td_mostrar_posicoes_inimigo"); 

function carregar_posicoes_aleatorias(){

	var numeroDaFuncao = Math.floor((Math.random()*2));
	
	if(numeroDaFuncao==1){
		primeira_montagem();
	}else{
		segunda_montagem();
	}

}


function primeira_montagem(){

	while(contador < tds_inimigo.length){
		//navio de 5 possicoes
		if(contador<5){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 5 possicoes
		if(contador>18 && contador<24){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 4 possicoes
		if(contador > 30 && contador < 35){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 3 possicoes
		if(contador>37 && contador<41){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 2 possicoes
		if(contador>90 && contador<93){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 1 possicoes
		if(contador>83 && contador<85){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		contador++;
	}
	
}


function segunda_montagem(){
	
	while(contador < tds_inimigo.length){
		//navio de 5 possicoes
		if(contador<5){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 5 possicoes
		if(contador>18 && contador<24){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 4 possicoes
		if(contador > 30 && contador < 35){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 3 possicoes
		if(contador>37 && contador<41){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 2 possicoes
		if(contador>90 && contador<93){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		//navio de 1 possicoes
		if(contador>83 && contador<85){
			tds_inimigo[contador].style.background = corMarcacao;
		}
		contador++;
	}
}