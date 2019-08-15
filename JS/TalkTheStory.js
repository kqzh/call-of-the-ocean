var ans=1,id1;
function showStory()
{
    for(var  i = 0;i<Math.min(ans,8);i++)
    {
        ctx.fillText(story[i],100,100+50*i);
    }
    ans++;
    if(ans>10)
    {
        ctx.font = "20px Arial";
        ctx.fillText(">>>>>点击鼠标继续>>>>>",canvas.width/2-50,canvas.height-50);
        canvas.onmousedown = function(e){
            canvas.onmousedown=null;
            StartYourRoad();
        }
        clearInterval(id1);
    } 
}

function TalkTheStory()
{
   
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(0,0,canvas.width,canvas.height);
    story[0] = "你是拥有半人类、半乔布齐尼人血统的海洋王子";
    story[1] = "从小就展现出了远超常人的各项体能";
    story[2] = "以及能在水下自由活动与呼吸";
    story[3] = "并和海洋生物沟通等异于他人的能力";
    story[4] = "你是最后的乔布齐尼血脉!海洋即将迎来一场浩劫";
    story[5] = "只有海洋中最古老的乔布齐尼族人";
    story[6] = "才能引领海洋各族抵抗这场危机";
    story[7] = "17岁的某天，巫师找到了你，故事也由此开始>>>>>";
    
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    id1 = setInterval(showStory,800);//1500
}