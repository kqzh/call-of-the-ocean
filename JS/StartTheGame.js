var useForButton2=1;
function ShowTheScene_StartGame()
{
    BeginMusic.voluem = 0.5;
    BeginMusic.play();
    init();
	StartGame_Background.onload = ShowStart;
}
function ShowStart()
{
	ctx.drawImage(StartGame_Background,0,0,860,540);
	imageData=ctx.getImageData(0,0,860,540);
	canvas.onmousemove = function(e)
	{//按钮变色
		button();
        button2();
		if(e.clientX>=720&&e.clientX<=820&&e.clientY>=440&&e.clientY<=470)
		{
			useForButton =0;
		}
		else
		{
			useForButton = 1;
		}
        if(e.clientX>=720&&e.clientX<=820&&e.clientY>=480&&e.clientY<=510)
		{
			useForButton2 =0;
		}
		else
		{
			useForButton2 = 1;
		}
        button();
        button2();
		canvas.onmousedown = function(e)
		{//按钮按下
			if(e.clientX>=720&&e.clientX<=820&&e.clientY>=480&&e.clientY<=510)
			{
				ctx.clearRect(0,0,860,540);
				canvas.onmousemove = null;
                canvas.onmousedown=null;
				fade(); 
			}
            if(e.clientX>=720&&e.clientX<=820&&e.clientY>=440&&e.clientY<=470)
			{
				ctx.clearRect(0,0,860,540);
				canvas.onmousemove = null;
                canvas.onmousedown=null;
                ctx.drawImage(team,0,0,860,540);
                canvas.onmousedown = function(e){
                    ShowStart();
                }
				
			}
		}
	}
}
function button()
{//绘制按钮
		if(useForButton){
			ctx.fillStyle="black";
			ctx.fillRect(720,440,100,30);
			ctx.fillStyle="white";
			
			ctx.font = "20px segoe script";
			ctx.fillText("制作团队",730,463);
		}
		else{
			ctx.fillStyle="white";
			ctx.fillRect(720,440,100,30);
			ctx.fillStyle="black";
			
			ctx.font = "20px segoe script";
			ctx.fillText("制作团队",730,463);
		}
}
function button2()
{//绘制按钮
		if(useForButton2){
			ctx.fillStyle="black";
			ctx.fillRect(720,480,100,30);
			ctx.fillStyle="white";
			
			ctx.font = "20px segoe script";
			ctx.fillText("开始游戏",730,503);
		}
		else{
			ctx.fillStyle="white";
			ctx.fillRect(720,480,100,30);
			ctx.fillStyle="black";
			
			ctx.font = "20px segoe script";
			ctx.fillText("开始游戏",730,503);
		}
}
ShowTheScene_StartGame();