function fade(){
        var data = imageData.data;
        for(var i = 3;i<data.length;i+=4){
            data[i]-=4;
        }
        ctx.putImageData(imageData,0,0);
        
        if(data[3]>0)
            requestNextAnimationFrame(fade);
        else
            TalkTheStory();
}
function outFade()
{
    ctx.clearRect(0,0,860,540);
    showContinue();
    ctx.drawImage(mask,0,0);
    maskCtx.globalAlpha -=0.015;
    maskCtx.clearRect(0,0,860,540);
    maskCtx.fillRect(0,0,860,540);
    if(maskCtx.globalAlpha>=0.03)
        requestNextAnimationFrame(outFade);
    else
    {
        ShowTheFirstScene();
    }
        
}
function showContinue()
{
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    ctx.drawImage(FirstSceneBackgroud,0,0,860,540);
    ctx.fillStyle="rgb(255,255,205)";
    ctx.font='20px Arial';
    ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
    imageData = ctx.getImageData(0,0,860,540);
    ctx.drawImage(cardimage[1],281,192,268,297);
    ctx.drawImage(cardText[1],260,68);
}

//----------------------------开始游戏后的第一个场景
function ShowTheFirstScene()
{
    card_id=1;
    Faith=0,Popular=0,Military=0,Wealth=0;
    endForButton=1;
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    ctx.drawImage(FirstSceneBackgroud,0,0,860,540);
    ctx.fillStyle="rgb(255,255,205)";
    ctx.font='20px Arial';
    ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
    ctx.font='15px Arial';
    ctx.drawImage(explain,0,0,860,540);
    imageData = ctx.getImageData(0,0,860,540);
    ctx.drawImage(cardimage[1],281,192,268,297);
    ctx.drawImage(cardText[card_id],260,68);
    imageDataCopy = ctx.getImageData(0,0,860,540);
    
    canvas.onmousemove = function(e)
    {
        ShowProperty(e);
    }
    canvas.onmousedown = function(e)
    {
        console.log(e.clientX+"   "+e.clientY);
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
                            left.play();
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
                            right.play();
                            throw_card = card_id+1;
                            Faith+=cardFaith[card_id+1];
                            Wealth+=cardWealth[card_id+1];
                            Popular+=cardPopular[card_id+1];
                            Military+=cardMilitary[card_id+1];
                            card_id=nextCard[card_id+1];
                            angle = -5;
                            rotate_Lcard();
                        }
                        
                        cardCnt++;
                        if(card_id==25)
                        {
                            canvas.onmousemove=null;
                            //ctx.drawImage(cardimage[22],281,192,268,297);
                            ShowTheSecondScene();
                        }
                        else
                        {
                            ctx.clearRect(0,0,canvas.width,canvas.height);
                            ChangeFaith();ChangeMilitary();ChangePopular();ChangeWealth();


                            ctx.drawImage(FirstSceneBackgroud,0,0,860,540);
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

function rotate_Rcard(){
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    if(card_id<=25)ctx.drawImage(FirstSceneBackgroud,0,0,860,540);
    else if(card_id<=55)ctx.drawImage(SecondSceneBackgroud,0,0,860,540);
    else if(card_id<=80)ctx.drawImage(ThirdSceneBackgroud,0,0,860,540);
    else if(card_id<=109)ctx.drawImage(FouthSceneBackgroud,0,0,860,540);
    else ctx.drawImage(FifthBackground,0,0,860,540);
    ctx.fillStyle="rgb(255,255,205)";
    ctx.font='20px Arial';
    ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
    ctx.font='15px Arial';
    imageData = ctx.getImageData(0,0,860,540);
    ctx.drawImage(cardimage[card_id],281,192,268,297);
    ctx.drawImage(cardText[card_id],260,68);
    imageDataCopy = ctx.getImageData(0,0,860,540);
    ctx.save();
    ctx.translate(430,570);
    ctx.rotate(angle*Math.PI/180);
    ctx.drawImage(cardimage[throw_card],-60,-380,268,297);
    ctx.restore();
    var time2 = + new Date();
    if(time2-time1>1000/fps){
        angle+=10;
        time1 = time2;
    }
    if(angle<150){
        requestAnimationFrame(rotate_Rcard);
    }
    else {
        angle = 5;
    }
}
function rotate_Lcard(){
    ctx.clearRect(0,0,860,540);
    ChangeFaith();
    ChangeMilitary();
    ChangePopular();
    ChangeWealth();
    if(card_id<=25)ctx.drawImage(FirstSceneBackgroud,0,0,860,540);
    else if(card_id<=55)ctx.drawImage(SecondSceneBackgroud,0,0,860,540);
    else if(card_id<=80)ctx.drawImage(ThirdSceneBackgroud,0,0,860,540);
    else if(card_id<=109)ctx.drawImage(FouthSceneBackgroud,0,0,860,540);
    else ctx.drawImage(FifthBackground,0,0,860,540);
    ctx.fillStyle="rgb(255,255,205)";
    ctx.font='20px Arial';
    ctx.fillText("国王      乔布齐尼·哲思尼",canvas.width/2,525  );
    ctx.font='15px Arial';
    
    imageData = ctx.getImageData(0,0,860,540);
    ctx.drawImage(cardimage[card_id],281,192,268,297);
    ctx.drawImage(cardText[card_id],260,68);
    imageDataCopy = ctx.getImageData(0,0,860,540);
    ctx.save();
    ctx.translate(430,570);
    ctx.rotate(angle*Math.PI/180);
    ctx.drawImage(cardimage[throw_card],-235,-380,268,297);
    ctx.restore();
    var time2 = + new Date();
    if(time2-time1>1000/fps){
        angle-=10;
        time1 = time2;
    }
    if(angle>-150){
        requestAnimationFrame(rotate_Lcard);
    }
    else {
        angle = -5;
    }
}