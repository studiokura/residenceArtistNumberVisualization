var stats;
var Artists=[];
var year=[];
function preload(){
  stats=loadTable("https://www.studiokura.com/p5/residenceArtistNumbers.csv");
}

function setup(){
  createCanvas(480,120);
  var rowCount = stats.getRowCount();
  Artists=[];
  year=[];
  textAlign(CENTER);
  for(var i=0; i<rowCount;i+=1){
    Artists[i]=stats.getNum(i,1);
    year[i]=stats.getNum(i,0);
  }
}

function draw(){
  background(204);
  stroke(153);
  line(20,100,20,20);
  line(20,100,460,100);
  for(var i=0; i<Artists.length;i++){
    var x=map(i,0,Artists.length-1,20,460);
    text(year[i],x,115);
    line(x,20,x,100);
  }
    noFill();
    stroke(0);
    beginShape();
    for(var i=0; i< Artists.length;i++){
      var x=map(i,0,Artists.length-1,20,460);
      var y=map(Artists[i],0,50,100,20);
      vertex(x,y);
    }
    endShape();
  }
