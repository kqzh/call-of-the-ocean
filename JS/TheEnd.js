function outFade19()     //淡入
{
    ctx.clearRect(0,0,860,540);
    if(flagStar){
        ctx.drawImage(win1,0,0,860,540);
    }
    else{
        ctx.drawImage(lose1,0,0,860,540);
    }
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha -=0.015;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha>=0.03)
        requestNextAnimationFrame(outFade19);
    else
        MainTheEnd();
}
function outFade20()     //淡出
{
    ctx.clearRect(0,0,860,540);
    ctx.putImageData(imageDataCopy,0,0);
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha +=0.015;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha<=0.9)
        requestNextAnimationFrame(outFade20);
    else
        WinTheWar();
}

function WinTheWar()
{
    console.log(123);
    ctx.save();
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    ctx.fillText("一番激战之后，你取得了胜利...",canvas.width/2,canvas.height/2);
    ctx.fillText("点击任意位置继续...",canvas.width/2,canvas.height/2+50);
    ctx.restore();
    canvas.onmousedown=function()
    {
        canvas.onmousedown=null;
  		outFade19();
    }
}
function TheEnd()
{
	lastsong.play();
    outFade20();
}
function MainTheEnd(){
    console.log(flagStar);
    
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(">>>>>点击鼠标继续>>>>>",canvas.width/2,canvas.height-50);
    canvas.onmousedown = function(e){
        ctx.clearRect(0,0,860,540);
        if(Faith>=Wealth&&Faith>=Military&&Faith>=Popular){
            ctx.drawImage(FaithEnding,0,0,860,540);
        }
        else if(Wealth>=Faith&&Wealth>=Military&&Faith>=Popular){
            ctx.drawImage(WealthEnding,0,0,860,540);
        }
        else if(Military>=Faith&&Military>=Wealth&&Military>=Popular){
            ctx.drawImage(MilitaryEnding,0,0,860,540);
        }
        else{
            ctx.drawImage(PopularEnding,0,0,860,540);
        }
        ctx.fillStyle = "black";
        ctx.fillText("信仰："+Faith+" 民意："+Popular+" 军事："+Military+" 财富："+Wealth,300,400);
        end_button();
        canvas.onmousemove = function(e)
        {//按钮变色
            end_button();
            if(e.clientX>=730&&e.clientX<=790&&e.clientY>=450&&e.clientY<=520)
            {
                endForButton =0;
            }
            else
            {
                endForButton = 1;
            }
            canvas.onmousedown = function(e)
            {//按钮按下
                if(e.clientX>=730&&e.clientX<=790&&e.clientY>=450&&e.clientY<=520)
                {
                    ctx.clearRect(0,0,860,540);
                    canvas.onmousemove = null;
                    canvas.onmousedown=null;
                    AttackToDieMusic.pause();
                    BeginMusic.play();
                    lastsong.pause();
                    StartYourRoad();
                }
            }
        }
    }
    
}


