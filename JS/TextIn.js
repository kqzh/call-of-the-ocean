function TextIn()
{
    preText[1]=new Image();
    preText[1].src="Words/介绍.png";
    cardFaith[2]=0;cardPopular[2]=0;cardMilitary[2]=0;cardWealth[2]=0;
    cardFaith[3]=0;cardPopular[3]=0;cardMilitary[3]=0;cardWealth[3]=0;
    nextCard[2]=4;nextCard[3]=4;
    
    preText[4]=new Image();
    preText[4].src="Words/文字1.png";//乔布齐尼的后裔，现在海王座属于你了。
    cardFaith[5]=0;cardPopular[5]=0;cardMilitary[5]=0;cardWealth[5]=0;
    cardFaith[6]=0;cardPopular[6]=5;cardMilitary[6]=0;cardWealth[6]=0;
    nextCard[5]=10;nextCard[6]=7;
    
    preText[7]=new Image();
    preText[7].src="Words/文字2.png";//您定能带领我们走向辉煌！接下来见见您的臣子吧。
    cardFaith[8]=0;cardPopular[8]=0;cardMilitary[8]=0;cardWealth[8]=0;
    cardFaith[9]=0;cardPopular[9]=0;cardMilitary[9]=0;cardWealth[9]=0;
    nextCard[8]=13;nextCard[9]=13;
    
    preText[10]=new Image();
    preText[10].src="Words/文字3.png";//犹豫可不是一个优秀君主的品质，让我带您见见您的臣子。
    cardFaith[11]=0;cardPopular[11]=0;cardMilitary[11]=0;cardWealth[11]=0;
    cardFaith[12]=0;cardPopular[12]=0;cardMilitary[12]=0;cardWealth[12]=0;
    nextCard[11]=13;nextCard[12]=13;
    
    
    preText[13]=new Image();
    preText[13].src="Words/文字4.png";//这是来自珍珠蚌族的小珍，是您的财政大臣（珍珠蚌一族素有财政管理能力）
    cardFaith[14]=0;cardPopular[14]=0;cardMilitary[14]=0;cardWealth[14]=15;
    cardFaith[15]=0;cardPopular[15]=0;cardMilitary[15]=0;cardWealth[15]=20;
    nextCard[14]=16;nextCard[15]=16;
    
    preText[16]=new Image();
    preText[16].src="Words/文字5.png";//这是拜伦乔拉骑士，海王座的守护者，他会帮你治理军队
    cardFaith[17]=0;cardPopular[17]=0;cardMilitary[17]=10;cardWealth[17]=0;
    cardFaith[18]=0;cardPopular[18]=0;cardMilitary[18]=5;cardWealth[18]=0;
    nextCard[17]=19;nextCard[18]=19;
    
    
    preText[19]=new Image();
    preText[19].src="Words/文字11.png";//埃勒克章任职民意大臣，是建立民众与国王沟通的桥梁。深受民众的信任。
    cardFaith[20]=0;cardPopular[20]=20;cardMilitary[20]=0;cardWealth[20]=0;
    cardFaith[21]=0;cardPopular[21]=20;cardMilitary[21]=0;cardWealth[21]=0;
    nextCard[20]=22;nextCard[21]=22;
    
    preText[22]=new Image();
    preText[22].src="Words/文字9.png";//鲸布其搭大教主，是海神忠实的信徒。在数以万计的信徒中很有声望。
    cardFaith[23]=50;cardPopular[23]=0;cardMilitary[23]=0;cardWealth[23]=0;
    cardFaith[24]=50;cardPopular[24]=0;cardMilitary[24]=0;cardWealth[24]=0;
    nextCard[23]=25;nextCard[24]=25;
    
    preText[25]=new Image();
    preText[25].src="Words/文字6.png";//有海洋生物正在被污染迫害。他们失去了自己的栖息地，要为他们提供容身之所吗？
    cardFaith[26]=5;cardPopular[26]=10;cardMilitary[26]=5;cardWealth[26]=-5;//收留他们(加民意和军事减财富)
    cardFaith[27]=-5;cardPopular[27]=-10;cardMilitary[27]=0;cardWealth[27]=15;//不理睬（加财富减信仰和民意）
    nextCard[26]=28;nextCard[27]=28;
    
    preText[28]=new Image();
    preText[28].src="Words/文字7.png";//最近国库紧缩，大人是否批准适当增加税收？
    cardFaith[29]=0;cardPopular[29]=-10;cardMilitary[29]=10;cardWealth[29]=20;//（点头）增加税收
    cardFaith[30]=0;cardPopular[30]=10;cardMilitary[30]=-5;cardWealth[30]=0;//（摇头）不应如此
    nextCard[29]=31;nextCard[30]=31;
    
    preText[31]=new Image();
    preText[31].src="Words/文字8.png";//大人的军队兵种齐全，但数量上略显不足。建议扩充军队储量。
    cardFaith[32]=-5;cardPopular[32]=-5;cardMilitary[32]=15;cardWealth[32]=-15;//（赞同）理应如此
    cardFaith[33]=0;cardPopular[33]=10;cardMilitary[33]=0;cardWealth[33]=10;//（拒绝）这样不妥
    nextCard[32]=34;nextCard[33]=34;
    
    preText[34]=new Image();
    preText[34].src="Words/文字10.png";//许多士兵都是不信仰神的杀手，他们需要精神上的指导，请让我来
    cardFaith[35]=20;cardPopular[35]=5;cardMilitary[35]=0;cardWealth[35]=0;//点头
    cardFaith[36]=-20;cardPopular[36]=-5;cardMilitary[36]=5;cardWealth[36]=0;//摇头
    nextCard[35]=37;nextCard[36]=37;
    
    preText[37]=new Image();
    preText[37].src="Words/文字12.png";//大人，我有一位专注研究的好友。在学术方面研究颇深。您是否愿见其一面？
    cardFaith[38]=0;cardPopular[38]=5;cardMilitary[38]=0;cardWealth[38]=0;//（点头）贤才自然越多越好
    cardFaith[39]=-5;cardPopular[39]=-5;cardMilitary[39]=-5;cardWealth[39]=-5;//(摇头)不养闲人
    nextCard[38]=40;nextCard[39]=46;
    
    preText[40]=new Image();
    preText[40].src="Words/文字13.png";//如此甚好，他已等候多时，大人请随我来。
    cardFaith[41]=0;cardPopular[41]=0;cardMilitary[41]=0;cardWealth[41]=0;//（点头）跟上他
    cardFaith[42]=0;cardPopular[42]=-5;cardMilitary[42]=0;cardWealth[42]=0;//让他来见我
    nextCard[41]=43;nextCard[42]=46;
    
    preText[43]=new Image();
    preText[43].src="Words/文字14.png";//大学士——埃尼德豚。他是这片海域知识最渊博的。致力于海洋之星的研究。
    cardFaith[44]=-10;cardPopular[44]=10;cardMilitary[44]=10;cardWealth[44]=10;//与他拥抱
    cardFaith[45]=-10;cardPopular[45]=10;cardMilitary[45]=10;cardWealth[45]=10;//点头
    nextCard[44]=52;nextCard[45]=52;//都没写
    
    preText[46]=new Image();
    preText[46].src="Words/文字15.png";//此人学识不在我之下，大人还是亲自一见为好！（巫师看起来不悦的样子）
    cardFaith[47]=0;cardPopular[47]=0;cardMilitary[47]=0;cardWealth[47]=0;//（也罢）去见他
    cardFaith[48]=-5;cardPopular[48]=-5;cardMilitary[48]=-5;cardWealth[48]=-5;//让他来见我
    nextCard[47]=43;nextCard[48]=49;//都没写
    
    preText[49]=new Image();
    preText[49].src="Words/文字16.png";//巫师拿法杖的手微微颤抖，摇着头退下了。
    cardFaith[50]=0;cardPopular[50]=0;cardMilitary[50]=0;cardWealth[50]=0;//陷入沉思
    cardFaith[51]=-5;cardPopular[51]=-10;cardMilitary[51]=10;cardWealth[51]=0;//狠狠拍打桌面
    nextCard[50]=43;nextCard[51]=43;
    
    preText[52]=new Image();
    preText[52].src="Words/审视.png";//出去审视
    cardFaith[53]=0;cardPopular[53]=0;cardMilitary[53]=0;cardWealth[53]=0;//出发
    cardFaith[54]=0;cardPopular[54]=0;cardMilitary[54]=0;cardWealth[54]=0;//出发
    nextCard[54]=55;nextCard[53]=55;
    
    preText[55]=new Image();
    preText[55].src="Words/文字17.png";//流离失所的海洋生物们失去了收入来源，该如何帮助他们？
    cardFaith[56]=5;cardPopular[56]=5;cardMilitary[56]=0;cardWealth[56]=-15;//提供补贴
    cardFaith[57]=0;cardPopular[57]=5;cardMilitary[57]=5;cardWealth[57]=10;//提供工作岗位
    nextCard[56]=58;nextCard[57]=58;
    
    preText[58]=new Image();
    preText[58].src="Words/文字18.png";//    海洋污染日益严重，我们应该提前做好资金的储备。
    cardFaith[59]=5;cardPopular[59]=0;cardMilitary[59]=-5;cardWealth[59]=0;//多此一举 无须多虑
    cardFaith[60]=0;cardPopular[60]=5;cardMilitary[60]=10;cardWealth[60]=0;//（点头）照你说的做
    nextCard[59]=61;nextCard[60]=61;
    
    preText[61]=new Image();
    preText[61].src="Words/文字19.png";//    为了方便货物运输和人员流动，我们必须建造新路，整修旧路。
    cardFaith[62]=5;cardPopular[62]=0;cardMilitary[62]=0;cardWealth[62]=5;//劳民伤财
    cardFaith[63]=-5;cardPopular[63]=5;cardMilitary[63]=5;cardWealth[63]=10;//赞成
    nextCard[62]=64;nextCard[63]=64;
    
    preText[64]=new Image();
    preText[64].src="Words/文字20.png";//    我听闻大学士在做海洋之星的实验，这是只有神才能够使用的力量！我们应该阻止他！！
    cardFaith[65]=99;cardPopular[65]=0;cardMilitary[65]=-10;cardWealth[65]=0;//（神的威严不可侵犯）立刻停止实验
    cardFaith[66]=-10;cardPopular[66]=10;cardMilitary[66]=10;cardWealth[66]=10;//是我允许他这么做的
    nextCard[65]=67;nextCard[66]=73;
    
    preText[67]=new Image();
    preText[67].src="Words/审视.png";//去审视，（回来等死吧）
    cardFaith[68]=0;cardPopular[68]=0;cardMilitary[68]=0;cardWealth[68]=0;//走你
    cardFaith[69]=0;cardPopular[69]=0;cardMilitary[69]=0;cardWealth[69]=0;//走你
    nextCard[68]=70;nextCard[69]=70;
    
    preText[70]=new Image();
    preText[70].src="Words/文字21.png";//大人，民众对宗教的信仰过于狂热。对您没有好处。
    cardFaith[71]=0;cardPopular[71]=0;cardMilitary[71]=0;cardWealth[71]=0;//是时候敲打敲打他们
    cardFaith[72]=0;cardPopular[72]=0;cardMilitary[72]=0;cardWealth[72]=0;//任由发展
    nextCard[71]=1000000007;nextCard[72]=1000000008;//左边被狂热的宗教分子刺杀结束//右边任由发展被教皇赐死
    
    preText[73]=new Image();
    preText[73].src="Words/文字22.png";//海沟国助纣为虐，扩大了海洋污染。恳请出兵讨伐海沟国。
    cardFaith[74]=5;cardPopular[74]=5;cardMilitary[74]=5;cardWealth[74]=-5;//（即刻出兵）玷污海洋不可饶恕
    cardFaith[75]=0;cardPopular[75]=0;cardMilitary[75]=0;cardWealth[75]=20;//（容我三思）时候未到
    nextCard[74]=76;nextCard[75]=1000000009;//选右直接结束
    
    preText[76]=new Image();
    preText[76].src="Words/审视.png";//去审视
    cardFaith[77]=0;cardPopular[77]=0;cardMilitary[77]=0;cardWealth[77]=0;//走你
    cardFaith[78]=0;cardPopular[78]=0;cardMilitary[78]=0;cardWealth[78]=0;//走你
    nextCard[77]=79;nextCard[78]=79;
    
    preText[79]=new Image();
    preText[79].src="Words/文字23.png";//我们的军队已经前往海沟国。等待前线发回的战报。
    cardFaith[80]=0;cardPopular[80]=0;cardMilitary[80]=0;cardWealth[80]=0;//我明白了
    cardFaith[81]=0;cardPopular[81]=0;cardMilitary[81]=0;cardWealth[81]=0;//（点头）
    nextCard[80]=82;nextCard[81]=82;
    
    
    preText[82]=new Image();
    preText[82].src="Words/文字24.png";// 战争时期，民众们需要信仰。我们应修建海神的石像供群众膜拜。
    cardFaith[83]=-10;cardPopular[83]=-10;cardMilitary[83]=10;cardWealth[83]=0;//（拒绝）劳民伤财
    cardFaith[84]=15;cardPopular[84]=10;cardMilitary[84]=-10;cardWealth[84]=-10;//（点头）如你所言
    nextCard[83]=85;nextCard[84]=85;
    
    preText[85]=new Image();
    preText[85].src="Words/文字25.png";//大量的战争难民涌入我国与原住民产生冲突。我们该如何处置他们？
    cardFaith[86]=5;cardPopular[86]=10;cardMilitary[86]=-15;cardWealth[86]=-10;//出资帮助他们开辟新家园
    cardFaith[87]=0;cardPopular[87]=-15;cardMilitary[87]=0;cardWealth[87]=0;//（静观其变）放任不管
    nextCard[86]=88;nextCard[87]=88;
    
    preText[88]=new Image();
    preText[88].src="Words/文字26.png";//陛下的生日临近，我提议举办盛大的宴会。
    cardFaith[89]=0;cardPopular[89]=0;cardMilitary[89]=0;cardWealth[89]=0;//（赞同）马上去办
    cardFaith[90]=10;cardPopular[90]=10;cardMilitary[90]=10;cardWealth[90]=10;//（拒绝）战争时期一切从简
    nextCard[89]=1000000010;nextCard[90]=91;//左边当场暴毙
    
    preText[91]=new Image();
    preText[91].src="Words/文字27.png";//有前线发来的密保，大人务必查阅
    cardFaith[92]=0;cardPopular[92]=0;cardMilitary[92]=0;cardWealth[92]=0;//查阅
    cardFaith[93]=0;cardPopular[93]=0;cardMilitary[93]=0;cardWealth[93]=0;//查阅
    nextCard[92]=94;nextCard[93]=94;
    
    preText[94]=new Image();
    preText[94].src="Words/文字28.png";//臣下无能，战况不佳。军心不稳，望陛下亲临。
    cardFaith[95]=5;cardPopular[95]=5;cardMilitary[95]=5;cardWealth[95]=0;//（点头）亲自上阵
    cardFaith[96]=0;cardPopular[96]=0;cardMilitary[96]=0;cardWealth[96]=10;//（摇头）置之不理
    nextCard[95]=97;nextCard[96]=1000000011;
    
    preText[97]=new Image();
    preText[97].src="Words/文字29.png";//陛下。经我研究海沟国强大源于海洋污染导致的变异。
    cardFaith[98]=0;cardPopular[98]=0;cardMilitary[98]=0;cardWealth[98]=0;//（点头）说下去
    cardFaith[99]=0;cardPopular[99]=0;cardMilitary[99]=0;cardWealth[99]=0;//我要上阵杀敌
    nextCard[98]=100;nextCard[99]=109;
    
    preText[100]=new Image();
    preText[100].src="Words/文字30.png";//我对海洋之心的研究已有成果。海神最强大的武器被我制作出来了！！
    cardFaith[101]=0;cardPopular[101]=0;cardMilitary[101]=0;cardWealth[101]=0;//让他说下去
    cardFaith[102]=0;cardPopular[102]=0;cardMilitary[102]=0;cardWealth[102]=0;//（不理睬他）
    nextCard[101]=103;nextCard[102]=109;
    
    preText[103]=new Image();
    preText[103].src="Words/文字31.png";//此去海沟国还请陛下带上它。
    cardFaith[104]=0;cardPopular[104]=0;cardMilitary[104]=0;cardWealth[104]=0;//相信他
    cardFaith[105]=0;cardPopular[105]=0;cardMilitary[105]=0;cardWealth[105]=0;//神的武器怎么可能被研制出来（这个骗子）
    nextCard[104]=106;nextCard[105]=109;
    
    preText[106]=new Image();
    preText[106].src="Words/文字32.png";//（你获得了海洋之星）现存于世的 “希望”
    cardFaith[107]=0;cardPopular[107]=0;cardMilitary[107]=0;cardWealth[107]=0;
    cardFaith[108]=0;cardPopular[108]=0;cardMilitary[108]=0;cardWealth[108]=0;
    nextCard[107]=109;nextCard[108]=109;
    
    preText[109]=new Image();
    preText[109].src="Words/文字33.png";//请你来指挥这场战争
    cardFaith[110]=0;cardPopular[110]=0;cardMilitary[110]=0;cardWealth[110]=0;
    cardFaith[111]=0;cardPopular[111]=0;cardMilitary[111]=0;cardWealth[111]=0;
    nextCard[110]=112;nextCard[111]=112;
    
    preText[112]=new Image();
    preText[112].src="Words/文字34.png";//请你来指挥这场战争
    preText[113]=new Image();
    preText[113].src="Words/文字35.png";//请你来指挥这场战争
    preText[114]=new Image();
    preText[114].src="Words/文字35.png";//请你来指挥这场战争
    preText[115]=new Image();
    preText[115].src="Words/文字35.png";//请你来指挥这场战争
    
    for(var i=0;i<=100;i++)
    {
        showFaith[i]=0;
        showPopular[i]=0;
        showWealth[i]=0;
        showMilitary[i]=0;
    }

    showFaith[1]=25;showPopular[1]=45;showWealth[1]=20;showMilitary[1]=40;
    showFaith[2]=5;showPopular[2]=5;showWealth[2]=5;showMilitary[2]=5;
    showFaith[3]=0;showPopular[3]=0;showWealth[3]=25;showMilitary[3]=0;
    showFaith[4]=0;showPopular[4]=0;showWealth[4]=0;showMilitary[4]=50;
    showFaith[5]=25;showPopular[5]=0;showWealth[5]=0;showMilitary[5]=0;
    showFaith[6]=25;showPopular[6]=25;showWealth[6]=25;showMilitary[6]=25;
    showFaith[7]=80;showPopular[7]=0;showWealth[7]=0;showMilitary[7]=0;
    showFaith[8]=5;showPopular[8]=50;showWealth[8]=5;showMilitary[8]=50;
    showFaith[9]=0;showPopular[9]=0;showWealth[9]=0;showMilitary[9]=5;
}
