function ShowTheAnimal()
{
    canvas.onmousemove=null;
    showNum=1;
    len = 80;
    canvas.onmousedown = function(e)
    {
        ctx.save();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(showOut[showNum++],0,0,860,540);
        ctx.fillStyle = "white";
        ctx.fillText("点击进入下一事件",canvas.width/2,canvas.height-50);
        len+=80;
        ctx.fillStyle = "white";
        ctx.fillRect(180,50,480,20);
        ctx.fillStyle = "green";
        ctx.fillRect(180,50,len,20);
        ctx.restore();
        if(showNum==8)
        {
            ctx.drawImage(showOut[6],0,0,860,540);
            ctx.fillStyle = "white";
            ctx.fillText("点击进入下一事件",canvas.width/2,canvas.height-50);
            AnimalMusic.pause();
            
            canvas.onmousedown=null;
            if(card_id==55)ShowTheThirdScene();
            else ShowTheFouthScene();
        }
        else
            SSR.play();
    }
   
    showOut[7]=cardimage[11];
    SSR.play();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(showOut[showNum++],0,0,860,540);
    ctx.fillStyle = "white";
    ctx.fillText("点击进入下一事件",canvas.width/2,canvas.height-50);
    ctx.fillRect(180,50,480,20);
    ctx.fillStyle = "green";
    ctx.fillRect(180,50,len,20);
}