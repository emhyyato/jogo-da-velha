var jogada = 0;

function chkJogo(id){
	
	var adv = definir(escolha)

	var src = chkSrc(id);
	if(src == "rosa.png"){
		console.log("jogador " + jogador)
		console.log("escolha " + escolha)
		console.log("adv " + adv)
		document.getElementById(id).src = "imagens/"+ jogador +".png";
		jogada ++;
		if(chkVitoria()){
			alert('Hehe sucesso!\n Vitória do '+ jogador);
			location.reload();
			return;
		}
		if(jogada >= 9){
			alert('Affs...Jogo empatado');
			location.reload();
			return;
		}
		if(jogador == escolha){
			jogador = adv;
		} else {
			jogador = escolha;
		}
	}
	if(jogador == adv){
		chkJogo(jogadaDoComputador());
	}
}
function jogadaDoComputador(){
	var id = chkSrc('cel5');
	if(id == "rosa.png"){
		return 'cel5';
	}
	return 'cel' + Math.floor((Math.random() * 9) + 1);
}
function chkSrc(id){
	var src = document.getElementById(id).src;
	return src.substring(src.length - 8, src.length);
}
function chkVitoria(){
	if((chkSrc('cel1') == chkSrc('cel2')) && (chkSrc('cel1') == 	chkSrc('cel3')) && (chkSrc('cel1') != 'rosa.png')){
		return true;
	}
	if((chkSrc('cel4') == chkSrc('cel5')) && (chkSrc('cel4') == 	chkSrc('cel6')) && (chkSrc('cel4') != 'rosa.png')){
		return true;
	}
	if((chkSrc('cel7') == chkSrc('cel8')) && (chkSrc('cel7') == 	chkSrc('cel9')) && (chkSrc('cel7') != 'rosa.png')){
		return true;
	}
	if((chkSrc('cel1') == chkSrc('cel4')) && (chkSrc('cel1') == 	chkSrc('cel7')) && (chkSrc('cel1') != 'rosa.png')){
		return true;
	}
	if((chkSrc('cel2') == chkSrc('cel5')) && (chkSrc('cel2') == 	chkSrc('cel8')) && (chkSrc('cel2') != 'rosa.png')){
		return true;
	}
	if((chkSrc('cel3') == chkSrc('cel6')) && (chkSrc('cel3') == 	chkSrc('cel9')) && (chkSrc('cel3') != 'rosa.png')){
		return true;
	}
	if((chkSrc('cel1') == chkSrc('cel5')) && (chkSrc('cel1') == 	chkSrc('cel9')) && (chkSrc('cel1') != 'rosa.png')){
		return true;
	}
	if((chkSrc('cel3') == chkSrc('cel5')) && (chkSrc('cel3') == 	chkSrc('cel7')) && (chkSrc('cel3') != 'rosa.png')){
		return true;
	}
	return false;
}
function definir(escolha){
	if (escolha=='o'){
		var adv = 'x'
	}
	else var adv ='o'
	return adv
}
function jogar(){
	jogador = document.getElementById('select').value;
	escolha = jogador;
	console.log(jogador)
}
