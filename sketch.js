var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
  pathImg = loadAnimation ('path.png')
  boyImg = loadAnimation ('Jake1.png','Jake2.png', 'jake3.png','jake4.PNG','jake5.png')
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path =createSprite(200,360,20,20)
path.addAnimation ("path", pathImg)
path.scale=1.2;
path.velocityY = -2;

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy =createSprite (200,360,20,20)
boy.addAnimation ("boy", boyImg)
boy.scale=0.6;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
boy.x = World.mouseX;

  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
   boy.collide(leftBoundary);
   boy.collide(rightBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
