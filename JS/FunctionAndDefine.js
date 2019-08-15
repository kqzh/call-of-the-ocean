//------------------------变量命名
var showOut=new Array(15);

var size=0;
var showNum = 1;
var len = 80;
var i =0;
var left = document.getElementById("left");
var lastsong = document.getElementById("lastsong");
var bgm = document.getElementById("bgm");
var right = document.getElementById("right");
var givecard = document.getElementById("givecard");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
    canvas.style.backgroundColor="black";
var mask = document.getElementById("mask");
var maskCtx = mask.getContext("2d");
var offCanvas = document.getElementById("offCanvas");
var offCtx = offCanvas.getContext("2d");
var FirstSceneBackgroud =new Image();
var SecondSceneBackgroud =new Image();
var ThirdSceneBackgroud =new Image();
var FouthSceneBackgroud =new Image();
var drawedF=0,drawedP=0,drawedM=0,drawedW=0;
var card = new Image();
var alpha=0 ;
var sx,sy,ex,ey;
var imageData,
    imageDataCopy;
var story = new Array(10);
var Dragging = 0;
var card_id=1;
var Faith=0,Popular=0,Military=0,Wealth=0;
var endForButton=1;
var StartGame_Background=new Image();
var lose1 = new Image();
    lose1.src = "Pic/losegame.png";
var win1 = new Image();
    win1.src = "Pic/wingame.png";
var FaithEnding = new Image();
    FaithEnding.src = "Pic/FaithEnding.png";
var WealthEnding = new Image();
    WealthEnding.src = "Pic/WealthEnding.png";
var MilitaryEnding = new Image();
    MilitaryEnding.src = "Pic/MilitaryEnding.png";
var PopularEnding = new Image();
    PopularEnding.src = "Pic/PopularEnding.png";
var useForButton =1; 
var fadaImageDate;
var cardimage=new Array(200);
var cardFaith=new Array(200);
var cardPopular=new Array(200);
var cardMilitary=new Array(200);
var cardWealth=new Array(200);
var cardText = new Array(200);
var preText = new Array(200);
var nextCard=new Array(200);
var animalVis=new Array(205);

var showFaith=new Array(205);
var showPopular=new Array(205);
var showWealth=new Array(205);
var showMilitary=new Array(205);
var showAnimal=new Array(205);
var SixPic=new Array(10);
var team = new Image();
team.src = "Pic/team.png";
var offImageData;
var ToHeadButton =document.getElementById("returnToHead");
var Pic_startYourRoad=new Image();
var cardCnt=0;
var explain = new Image();
    explain.src= "Pic/explain.png";
var BeginMusic=document.getElementById("BeginMusic");
var FirstSceneMusic=document.getElementById("FirstSceneMusic");
var SSR=document.getElementById("SSR");
var AnimalMusic=document.getElementById("AnimalMusic");
var TheThirdMusic=document.getElementById("TheThirdMusic");
var AttackToDieMusic=document.getElementById("AttackToDieMusic");
var FouthSceneMusic=document.getElementById("FouthSceneMusic");
var DieForAttackImage=new Image();
var DieForFaithImage=new Image();
var DieForFaithBigImage=new Image();
var DieForBirthImage=new Image();
var DieForLoseImage=new Image();
var FifthBackground=new Image();
var DieForRunImage=new Image();
var FifthMusic=document.getElementById("FifthMusic");
var time1 = + new Date();
var fps  = 60;
var throw_card;
var angle = 5;
var flagStar=0;
//var backgroundMusic=document.getElementById("backgroundMusic");
//var ChoseMusicL=document.getElementById("ChoseMusicL");
//var ChoseMusicR=document.getElementById("ChoseMusicR");
//var GiveCardMusic=document.getElementById("GiveCardMusic");
//backgroundMusic.currentTime=15;
//backgroundMusic.play();
//-------------------------------------------------
//-------------------------------------------------



//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------





//-----------------------初始化图片读入
function init()
{
    flagStar=0;
    DieForRunImage.src="Pic/DieForRunImage.png";
    DieForLoseImage.src="Pic/DieForLoseImage.png";
    DieForBirthImage.src="Pic/DieForBirthImage.png";
    DieForFaithBigImage.src="Pic/DieForFaithBigImage.png";
    DieForFaithImage.src="Pic/DieForFaithImage.png";
    StartGame_Background.src="Pic/StartGameBackground.jpg";
    FirstSceneBackgroud.src = "Pic/backgroud1.png";
    SecondSceneBackgroud.src="Pic/backgroud2.png";
    ThirdSceneBackgroud.src="Pic/backgroud3.png";
    FifthBackground.src="Pic/FifthBackground.png";
    Pic_startYourRoad.src="Pic/Pic_startYourRoad.png";
    DieForAttackImage.src="Pic/DieForAttackImage.png";
    FouthSceneBackgroud.src="Pic/backgroud4.png";
    for(var i =0;i<=20;i++)animalVis[i]=0;
    FirstSceneBackgroud.onload = function(e)
    {   
        //offCtx.clearRect(0,0,860,540);
        offCtx.fillStyle = "white";
        offCtx.fillRect(0,0,860,540);
        offCtx.drawImage(FirstSceneBackgroud,0,0,860,540);
        offCtx.font='20px Arial';
        offCtx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2-200,525);
        
        offImageData = offCtx.getImageData(0,0,860,540);
        for(var i = 3;i<offImageData.data.length;i+=4){
            offImageData.data[i]=0;
        }

        offCtx.putImageData(offImageData,0,0);
        maskCtx.fillRect(0,0,860,540);
    }
    //以上初始化淡入
    
    TextIn();
    //以下初始化读入卡片和文字
    for(var i=1;i<=200;i++)
    {
        cardimage[i]=new Image();
        cardimage[i].src="ChoseCard/"+i+".png";
        showAnimal[i]=new Image();
        showAnimal[i].src="AnimalCard/"+i+"A.jpg";
        cardText[i]=preText[i];
    }
    for(var i=0;i<=10;i++)
    {
        animalVis[i]=0;
    }
    for(var i=0;i<6;i++)
    {
        SixPic[i]=new Image();
        SixPic[i].src="AnimalCard/Six"+i+".jpg";
    }
    
    
}

//------------------------改变信仰属性条
function ChangeFaith()
{
    var percentage=Faith/100;
    if(Faith>=100)percentage=1;
    var lx=275,ly=20;
    var wi=40,he=50;
    ctx.fillStyle="DarkOrange";
    ctx.fillRect(lx,ly+(1-percentage)*he,wi,he);
}

//------------------------改变名声属性条
function ChangePopular()
{
    var percentage=Popular/100;
    if(Popular>=100)percentage=1;
    var lx=360,ly=20;
    var wi=40,he=50;
    ctx.fillStyle="green";
    ctx.fillRect(lx,ly+(1-percentage)*he,wi,he);
}

//------------------------改变军事属性条
function ChangeMilitary()
{
    var percentage=Military/100;
    if(Military>=100)percentage=1;
    var lx=440,ly=20;
    var wi=40,he=50;
    ctx.fillStyle="red";
    ctx.fillRect(lx,ly+(1-percentage)*he,wi,he);
}

//------------------------改变财富属性条
function ChangeWealth()
{
    var percentage=Wealth/100;
    if(Wealth>=100)percentage=1;
    var lx=520,ly=20;
    var wi=40,he=50;
    ctx.fillStyle="gold";
    ctx.fillRect(lx,ly+(1-percentage)*he,wi,he);
}


//-------------------------显示属性名称函数
function ShowProperty(e)
{
    ctx.save();
    var nx=e.clientX,ny=e.clientY;
    if(nx>=288&&nx<=320&&ny>=26&&ny<=74&&drawedF==0)
    {
        ctx.fillStyle="white";
        ctx.font='13px Arial';
        ctx.fillText("信仰 :"+Faith,293,15);
        drawedF=1;
    }
    else if(nx>=360&&nx<=393&&ny>=26&&ny<=74&&drawedP==0)
    {
        ctx.fillStyle="white";
        ctx.font='13px Arial';
        ctx.fillText("民意 :"+Popular,375,15);
        drawedP=1;
    }
    else if(nx>=440&&nx<=473&&ny>=26&&ny<=74&&drawedM==0)
    {
        ctx.fillStyle="white";
        ctx.font='13px Arial';
        ctx.fillText("军事 :"+Military,455,15);
        drawedM=1;
    }
    else if(nx>=530&&nx<=560&&ny>=26&&ny<=74&&drawedW==0)
    {
        ctx.fillStyle="white";
        ctx.font='13px Arial';
        ctx.fillText("财富 :"+Wealth,535,15);
        drawedW=1;
    }
    else 
    {
        ctx.putImageData(imageDataCopy,0,0);
        drawedP=drawedM=drawedF=drawedW=0;
    }
    ctx.restore();
}
function end_button()
{//绘制按钮

        if(endForButton){
            ctx.fillStyle="black";
            ctx.fillRect(730,460,100,30);
            ctx.fillStyle="white";
            
            ctx.font = "20px segoe script";
            ctx.fillText("重新开始",780,480);
        }
        else{
            ctx.fillStyle="white";
            ctx.fillRect(730,460,100,30);
            ctx.fillStyle="black";
            
            ctx.font = "20px segoe script";
            ctx.fillText("重新开始",780,480);
        }
}

