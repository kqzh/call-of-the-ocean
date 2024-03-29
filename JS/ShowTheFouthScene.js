function outFade10()     //淡入
{
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    ctx.drawImage(FouthSceneBackgroud,0,0,860,540);
    ctx.fillStyle="rgb(255,255,205)";
    ctx.font='20px Arial';
    ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
    ctx.drawImage(cardimage[card_id],281,192,268,297);
    ctx.drawImage(cardText[card_id],260,68);
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha -=0.015;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha>=0.03)
        requestNextAnimationFrame(outFade10);
    else
        MainFouthScene();
}


function ShowTheFouthScene()
{
    FouthSceneMusic.voluem=0.1;
    FouthSceneMusic.play();
    fadaImageDate=ctx.getImageData(0,0,canvas.width,canvas.height);
    maskCtx.globalAlpha=0;
    maskCtx.fillStyle="black";
    outFade7();
}

function MainFouthScene()
{
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    ctx.drawImage(FouthSceneBackgroud,0,0,860,540);
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
        console.log("财富"+Wealth);
        console.log(card_id);
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
                            if(card_id!=1000000007&&card_id!=1000000008&&card_id!=1000000011&&card_id!=109)rotate_Rcard();
                        }
                        else                //选左侧
                        {
                            if(card_id==103)flagStar=1;
                            left.play();
                            throw_card = card_id+1;
                            Faith+=cardFaith[card_id+1];
                            Wealth+=cardWealth[card_id+1];
                            Popular+=cardPopular[card_id+1];
                            Military+=cardMilitary[card_id+1];
                            card_id=nextCard[card_id+1];
                            angle = -5;
                            if(card_id!=1000000007&&card_id!=1000000008&&card_id!=1000000010&&card_id!=109)rotate_Lcard();
                        }
                        if(card_id==1000000008||card_id==1000000007)
                        {
                            canvas.onmousedown=null;
                            canvas.onmousemove=null;
                            DieForFaith();
                        }
                        else if(card_id==1000000010)
                        {
                            canvas.onmousedown=null;
                            canvas.onmousemove=null;
                            DieForBirth();
                        }
                        else if(card_id==1000000011)
                        {
                            canvas.onmousedown=null;
                            canvas.onmousemove=null;
                            DieForLose();
                        }
                        else
                        {
                            cardCnt++;
                            if(card_id==109)
                            {
                                canvas.onmousemove=null;
                                ShowTheFifthScene();
                            }
                            else
                            {
                                ctx.clearRect(0,0,canvas.width,canvas.height);
                                ChangeFaith();ChangeMilitary();ChangePopular();ChangeWealth();
                                ctx.drawImage(FouthSceneBackgroud,0,0,860,540);
                                ctx.drawImage(cardText[card_id],260,68);
                                ctx.save();
                                ctx.fillStyle="rgb(255,255,205)";
                                ctx.font='20px Arial';
                                ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
                                ctx.restore();
                                imageData = ctx.getImageData(0,0,860,540);
                                ctx.drawImage(cardimage[card_id],281,192,268,297);
                                imageDataCopy = ctx.getImageData(0,0,860,540);
                            }
                        }
                    }
                }
            }   
        }
    }
}