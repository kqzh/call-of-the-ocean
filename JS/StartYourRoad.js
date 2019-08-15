function StartYourRoad()
{
    AttackToDieMusic.pause();
    flagStar=0;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,860,540);
    ctx.drawImage(Pic_startYourRoad,0,0);
    ctx.fillText("鼠标点击继续",700,500);
    canvas.onmousedown = function(e){
        canvas.style.background = "white";
        
        
        ctx.clearRect(0,0,canvas.width,canvas.height);
        Faith=Wealth=Popular=Military=0;
        //console.log(1234);
        //canvas.style.background = "white";
        ctx.clearRect(0,0,860,540);
        ChangeFaith();
        ChangeMilitary();
        ChangePopular();
        ChangeWealth();
        ctx.drawImage(FirstSceneBackgroud,0,0,860,540);
        ctx.textAlign="center";
        ctx.textBaseline="middle";
        ctx.fillStyle="rgb(255,255,205)";
        ctx.font='20px Arial';
        ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
        canvas.onmousedown=null;
        BeginMusic.pause();
        givecard.play();
        FirstSceneMusic.voluem=0.05;
        FirstSceneMusic.play();
        outFade();
    }
}