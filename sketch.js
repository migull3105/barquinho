var soloSprite, soloImagem;
//é aqui que cria a variável
var barco, barcoAnimacao;


//nessa função, carrega-se arquivos de mídia
function preload() {
    //é aqui que carrega a animação
    barco = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
soloImagem = loadImage("sea.png")
}


function setup() {
    createCanvas(1550, 1000);
     
soloSprite = createSprite(300,190,600,20);
    soloSprite.addImage(soloImagem)   

      //é aqui que cria as sprites
    barco = createSprite(200,600,50,50);
    barco.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",barcoAnimacao);
    barco.scale=0.2;

}  


function draw() {
    //pinta o fundo de uma cor
    background("blue");


    if(soloSprite.x < 0){
    soloSprite.x = 300
    }

    //esse código dá gravidade para o trex cair
    
    
    soloSprite.velocityX = -3
    drawSprites();
}

