window.onload = function(){

	var posicoes_td = document.getElementsByClassName("td_marca_posicoes");
	var contador = 0;
	var cont2 = 1;
	var cont3 = 0;
	var arrayPosicoes = [];

	while(contador < posicoes_td.length){
			
			posicoes_td[contador].onclick = function(){
			if(cont2<21){
				
				this.style.background = '#ce1d24';
			
				var id_posicao_clicada  = this.getAttribute("id");
				arrayPosicoes[id_posicao_clicada] = "marcado";
				// arrayPosicoes[contador] = "marcado";
				document.getElementsByTagName("div")[cont2].style.borderColor = '#ce1d24';
				cont2++;
			}

		}
		contador++;
		

	}

	document.getElementById("but_Iniciar").onclick = function(){
		document.getElementById("list_Navios").style.display = 'none';
		document.getElementById("container").style.display = "none";
		document.getElementById("container").style.display = "none";
		document.getElementById("container_segunda_etapa").style.display = 'table';
		

		var posicoes_td_mostrar = document.getElementsByClassName("td_mostrar_posicoes");
		
		while(cont3 < posicoes_td_mostrar.length){
			
			if(arrayPosicoes[cont3] =="marcado"){
				posicoes_td_mostrar[cont3].style.background = "red";
			}

			cont3++;
		}




	}
		
		
	




}


	


