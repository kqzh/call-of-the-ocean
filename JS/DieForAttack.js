function ReadyToDie()
{
    ctx.save();
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    ctx.fillText("治理国家本就不易...",canvas.width/2,canvas.height/2-50);
    ctx.fillText("前行路上布满荆棘...",canvas.width/2,canvas.height/2);
    ctx.fillText("点击任意位置继续...",canvas.width/2,canvas.height/2+50);
    ctx.restore();
    canvas.onmousedown=function()
    {
        canvas.onmousedown=null;
        outFade5();
    }
}

function outFade5()     //淡出
{
    ctx.clearRect(0,0,860,540);
    ctx.drawImage(DieForAttackImage,0,0,canvas.width,canvas.height);
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha -=0.015;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha>=0.03)
        requestNextAnimationFrame(outFade5);
    else
        MainDieForAttack();
}


function outFade4()     //淡入黑色
{
    ctx.putImageData(imageData,0,0);
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha +=0.015;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha<=0.9)
        requestNextAnimationFrame(outFade4);
    else
        ReadyToDie();
}

function DieForAttack()
{
    TheThirdMusic.pause();
    AttackToDieMusic.play();
    maskCtx.globalAlpha=0;
    maskCtx.fillStyle="black";
    imageData=ctx.getImageData(0,0,canvas.width,canvas.height);
    outFade4();
}

function MainDieForAttack()
{
    ctx.drawImage(DieForAttackImage,0,0,canvas.width,canvas.height);
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
               
                StartYourRoad();
            }
        }
    }

}
