
var altura = 0
var largura = 0
var pontucao = 0
var Nvidas = 1
var tempo = 10
var dificuldade = window.location.search


if(dificuldade == '?facil'){
    tempo = 15
} else if (dificuldade == '?normal'){
    tempo = 30
} else {
    tempo = 50
}

function tamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
    
}

tamanhoTela()


var cronometro = setInterval(function(){
    tempo--
    document.getElementById('cronometro').innerText = 'Cronometro: ' + tempo

    if(tempo<0){
        window.location.href = 'vitoria.html'
        clearInterval(cronometro)
        clearInterval(criaMosca)
      
    }
},1000 )
function posicaoMosca(){


    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()
        document.getElementById('vida'+Nvidas).style.background = 'url(imagens/coracao_vazio.png)'
        Nvidas +=1
    }

    if(Nvidas>3){
        window.alert('fim d jogo')
        window.location.href = 'gameOver.html'
    }

    var posicaoX = Math.floor(Math.random()*largura) -90
    var posicaoY = Math.floor(Math.random()*altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = 'tamanhoMosca'+tamanhoMosca() + ' ' + ladoMosca()

    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = pontos



    document.body.appendChild(mosca)

    
}

function pontos(){
    this.remove()
    pontucao += 10

    document.getElementById('pontuacao').innerText = 'pontuação: '+ pontucao
}

function tamanhoMosca(){
    var tamanhoMosca = Math.floor(Math.random()*4)
    if(tamanhoMosca == 0){
        tamanhoMosca =1
    }
    return tamanhoMosca
}

function ladoMosca(){
    var ladoMosca = Math.floor(Math.random()*2)

    switch (ladoMosca) {
        case 0:
            break;  
        default:
            return 'ladoB'
            
    }
}

