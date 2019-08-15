var cntClick=0;
function outFade111()     //淡入
{
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    ctx.drawImage(FifthBackground,0,0,860,540);
    ctx.fillStyle="rgb(255,255,205)";
    ctx.font='20px Arial';
    ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
    ctx.drawImage(cardimage[card_id],281,192,268,297);
    ctx.drawImage(cardText[card_id],260,68);
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha -=0.005;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha>=0.01)
        requestNextAnimationFrame(outFade111);
    else
        MainFifthScene();
}

function TalkToWar()
{
    ctx.save();
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    ctx.fillText("正在赶往前线...",canvas.width/2,canvas.height/2-50);
    ctx.fillText("祝你凯旋归来...",canvas.width/2,canvas.height/2);
    ctx.fillText("点击任意位置继续...",canvas.width/2,canvas.height/2+50);
    ctx.restore();
    canvas.onmousedown=function()
    {
        canvas.onmousedown=null;
        outFade111();
    }
}

function outFade123()     //淡入黑色
{
    ctx.putImageData(fadaImageDate,0,0);
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha +=0.005;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha<=0.99)
        requestNextAnimationFrame(outFade123);
    else
        TalkToWar();
}

function ShowTheFifthScene()
{
    FouthSceneMusic.pause();
    FifthMusic.voluem=0.1;
    FifthMusic.play();
    fadaImageDate=ctx.getImageData(0,0,canvas.width,canvas.height);
    maskCtx.globalAlpha=0;
    maskCtx.fillStyle="black";
    outFade123();
}

function MainFifthScene()
{
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    ctx.drawImage(FifthBackground,0,0,860,540);
    ctx.fillStyle="rgb(255,255,205)";
    ctx.font='20px Arial';
    ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );

    imageData = ctx.getImageData(0,0,860,540);
    ctx.drawImage(cardimage[card_id],281,192,268,297);
    ctx.drawImage(cardText[card_id],260,68);
    imageDataCopy = ctx.getImageData(0,0,860,540);
    
    canvas.onmousemove = function(e)
    {
        ShowProperty(e);
    }
    canvas.onmousedown = function(e)
    {
        if(e.clientX>=281&&e.clientX<=268+281&&e.clientY>=192&&e.clientY<=192+297)
        {
            sx = e.clientX;
            sy = e.clientY;
            Dragging = 1;
            
            canvas.onmousemove = function(e)
            {
                ShowProperty(e);
                if(Dragging)
                {
                    ctx.putImageData(imageData, 0, 0);
                    ctx.drawImage(cardText[card_id],260,68);
                    ctx.save();

                    if(e.clientX>sx)
                    {
                        ctx.fillStyle="rgb(255,255,205)";
                        ctx.font='20px Arial';
                        ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
                        ctx.translate(430,270);
                        ctx.rotate(5*Math.PI/180);
                        ctx.drawImage(cardimage[card_id+2],-50,-80,268,297);
                        ctx.restore();
                    }
                    else if(e.clientX<sx)
                    {
                        ctx.fillStyle="rgb(255,255,205)";
                        ctx.font='20px Arial';
                        ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
                        ctx.translate(430,270);
                        ctx.rotate(-5*Math.PI/180);
                        ctx.drawImage(cardimage[card_id+1],-235,-80,268,297);
                        ctx.restore();
                    }
                    else
                    {
                        ctx.drawImage(cardimage[card_id],281,192,268,297);
                        ctx.fillStyle="rgb(255,255,205)";
                        ctx.font='20px Arial';
                        ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
                        ctx.restore();
                    }
                }
            }
                
            canvas.onmouseup = function(e)
            {
                if(Dragging)
                {
                    Dragging =0;
                    ctx.putImageData(imageDataCopy, 0, 0);
                    if(Math.abs(e.clientX-sx)>=canvas.width/6)
                    {
                        if(e.clientX-sx>0)//选右侧
                        {
                            right.play();
                            throw_card = card_id+2;
                            Faith+=cardFaith[card_id+2];
                            Wealth+=cardWealth[card_id+2];
                            Popular+=cardPopular[card_id+2];
                            Military+=cardMilitary[card_id+2];
                            card_id=nextCard[card_id+2];
                            angle = 5;
                            rotate_Rcard();
                        }
                        else                //选左侧
                        {
                            if(card_id==106)flagStar=1;
                            left.play();
                            throw_card = card_id+1;
                            Faith+=cardFaith[card_id+1];
                            Wealth+=cardWealth[card_id+1];
                            Popular+=cardPopular[card_id+1];
                            Military+=cardMilitary[card_id+1];
                            card_id=nextCard[card_id+1];
                            angle = -5;
                            rotate_Lcard();
                        }
                        ctx.clearRect(0,0,canvas.width,canvas.height);
                        ChangeFaith();ChangeMilitary();ChangePopular();ChangeWealth();
                        ctx.drawImage(FifthBackground,0,0,860,540);
                        ctx.drawImage(cardText[card_id],260,68);
                        ctx.save();
                        ctx.fillStyle="rgb(255,255,205)";
                        ctx.font='20px Arial';
                        ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
                        ctx.restore();
                        imageData = ctx.getImageData(0,0,860,540);
                        ctx.drawImage(cardimage[card_id],281,192,268,297);
                        imageDataCopy = ctx.getImageData(0,0,860,540);
                        
                        cardCnt++;
                        if(card_id==112)
                        {
                            Battle();
                        }
                        
                    }
                }
            }   
        }
    }
}
function Battle()
{
    canvas.onmousemove = function(e)
    {
        ShowProperty(e);
    }
    canvas.onmousedown = function(e)
    {
        //console.log(e.clientX+"  "+e.clientY);
        if(card_id==112)
        {
            var tag=0;
            if(e.clientX<=415&&e.clientX>=280&&e.clientY>=340&&e.clientY<=488)
            {
                card_id=113;tag=1;
            }
            else if(e.clientX<=415&&e.clientX>=280&&e.clientY>=192&&e.clientY<=340)
            {
                card_id=115;tag=1;
            }
            else if(e.clientX>415&&e.clientX<=549&&e.clientY>=340&&e.clientY<=488)
            {
                card_id=116;tag=1;
            }
            else if(e.clientX>415&&e.clientX<=549&&e.clientY>=192&&e.clientY<=340)
            {
                card_id=114;tag=1;
            }
            if(tag)
            {
                throw_card = 112;
                angle = 5;
                console.log(card_id+" "+throw_card);
                if(card_id!=116)
                {
                     if(Math.random()*10>5)
                        left.play();
                    else
                        right.play();
                    rotate_Rcard();
                    cntClick++;
                }
                else 
                {
                    canvas.onmousedown=null;
                    canvas.onmousemove=null;
                    DieForRun();
                }
            }
        }
        else
        {
            throw_card = card_id;
            card_id=112;
            angle = 5;
             if(Math.random()*10>5)
                left.play();
             else
                right.play();
            rotate_Rcard();
        }
        if(cntClick>=4)
        {
            canvas.onmousedown=null;
            canvas.onmousemove=null;
            
            FifthMusic.pause();
            TheEnd();
        }
    }
    
}