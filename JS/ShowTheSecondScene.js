function MonthsLater()
{
    ctx.save();
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    ctx.fillText("国家正处于您的治理下...",canvas.width/2,canvas.height/2);
    ctx.fillText("点击任意位置，听取大臣们的意见...",canvas.width/2,canvas.height/2+50);
    ctx.restore();
    canvas.onmousedown=function()
    {
        canvas.onmousedown=null;
         givecard.play();
        outFade3();
    }
}

function outFade3()     //淡出
{
    ctx.clearRect(0,0,860,540);
    showContinue3();
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha -=0.015;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha>=0.03)
        requestNextAnimationFrame(outFade3);
    else
        MainSecondScene();
}
function showContinue3()
{
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    ctx.drawImage(SecondSceneBackgroud,0,0,860,540);
    ctx.fillStyle="rgb(255,255,205)";
    ctx.font='20px Arial';
    ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525);
    imageData = ctx.getImageData(0,0,860,540);
    ctx.drawImage(cardimage[25],281,192,268,297);
    ctx.drawImage(cardText[25],260,68);
}


function outFade2()     //淡入黑色
{
    ctx.clearRect(0,0,860,540);
    showContinue2();
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha +=0.015;
    
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha<=0.9)
        requestNextAnimationFrame(outFade2);
    else
        MonthsLater();
}
function showContinue2()
{
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    ctx.drawImage(FirstSceneBackgroud,0,0,860,540);
    ctx.fillStyle="rgb(255,255,205)";
    ctx.font='20px Arial';
    ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525);
    //imageData = ctx.getImageData(0,0,860,540);
    ctx.drawImage(cardimage[22],281,192,268,297);
    ctx.drawImage(cardText[22],260,68);
}


function ShowTheSecondScene()
{
    canvas.onmousemove=null;
    canvas.onmousedown=null;
    maskCtx.fillStyle="black";
    maskCtx.fillRect(0,0,mask.width,mask.height);
    outFade2();
}
    

function MainSecondScene()
{
    
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    ctx.drawImage(SecondSceneBackgroud,0,0,860,540);
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
                            if(card_id!=55)rotate_Rcard();
                        }
                        else                //选左侧
                        {
                            left.play();
                            throw_card = card_id+1;
                            Faith+=cardFaith[card_id+1];
                            Wealth+=cardWealth[card_id+1];
                            Popular+=cardPopular[card_id+1];
                            Military+=cardMilitary[card_id+1];
                            card_id=nextCard[card_id+1];
                            angle = -5;
                            if(card_id!=55)rotate_Lcard();
                        }
                        
                        cardCnt++;
                        if(card_id==55)
                        {
                            canvas.onmousemove=null;
                            

                            outFade122();
                        }
                        else
                        {
                            ctx.clearRect(0,0,canvas.width,canvas.height);
                            ChangeFaith();ChangeMilitary();ChangePopular();ChangeWealth();
                            console.log(card_id);
                            ctx.drawImage(SecondSceneBackgroud,0,0,860,540);
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
function animaltip()
{
        size=0;
        showNum = 1;
    for(var i=1;i<9;i++)
    {
        console.log(showFaith[i]+" "+showWealth[i]+" "+showPopular[i]+" "+showMilitary[i]);
        if(animalVis[i]==0&&Faith>=showFaith[i]&&Wealth>=showWealth[i]&&Popular>=showPopular[i]&&Military>=showMilitary[i])
        {
            showOut[++size]=showAnimal[i];
            animalVis[i]=1;
        }
    }
    if(size<6)
    {
        for(var i=0;size<6;i++)
        {
            showOut[++size]=SixPic[i];
        }
    }
    //循环随机位交换法
    i=6;
    while(i)
    {
        var j = Math.floor(Math.random() * i--)+1;
        [showOut[j], showOut[i+1]] = [showOut[i+1], showOut[j]];
    }
    ctx.save();
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    ctx.fillText("在视察过程中，你的属性值越高，越有机会遇到新的小动物...",canvas.width/2,canvas.height/2);
    ctx.fillText("点击任意位置继续...",canvas.width/2,canvas.height/2+50);
    ctx.restore();
    canvas.onmousedown=function()
    {
         AnimalMusic.voluem=0.02;
          FirstSceneMusic.pause();
        TheThirdMusic.pause();
        AnimalMusic.play();
        canvas.onmousedown=null;
       
        //givecard.play();
        outFade121();
        
    }
}

function outFade121()     //淡入
{
    ctx.clearRect(0,0,860,540);
    ctx.drawImage(showOut[showNum],0,0,860,540);
    
    
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha -=0.015;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha>=0.03)
        requestNextAnimationFrame(outFade121);
    else
        ShowTheAnimal();
}
function outFade122()     //淡出
{
    ctx.clearRect(0,0,860,540);
    ctx.putImageData(imageDataCopy,0,0);
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha +=0.015;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha<=0.9)
        requestNextAnimationFrame(outFade122);
    else
        animaltip();
}