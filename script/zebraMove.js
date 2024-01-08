
//<br>&emsp;&emsp;&emsp;
//史前至夏商周
{




}


 //秦漢
{

    
    
    


}
//三国
{

}

//隋
{


}

//唐
{


}

//宋
{

 }

//元
{


}

//明
{
	markers.zebra1 = createMarker({ lat:1.1116,lng:44.0298}, 'zebra','索馬里布拉瓦',{ A:['zebra'], B:['明'],C:['朝貢'],D:['海上絲綢之路'],E:['非洲']},
    {title_cn: '描述',title_en: 'Description'  
     ,description_cn:'斑馬，在明朝時被稱為｢福鹿｣、｢福祿｣或｢花福祿｣。在明朝的歷史記錄中，斑馬是不剌哇（如今索馬里的巴拉韋）的特產之一，該國曾數次向明朝進貢這種動物。'  
     ,description_en:'In the historical records of the Ming Dynasty 明朝, the zebra was one of the specialties of Barawa in Somali. The country sent zebras as tribute to the Ming Dynasty several times.'
     ,reference:'1. 張廷玉等，《明史·列傳第二百十四》（北京：中華書局，1997），頁8449。'
     ,image:''
     ,referenceUrl:''});	


}

//清
{

 }
        

// 获取时间轴元素和标记
var timeline = document.getElementById('timeline');
var slider = document.getElementById('slider');
var zebras = [
 'zebra1'
];

for (var i = 0; i < zebras.length; i++) {
 window[zebras[i]] = markers[zebras[i]];
}


var newCoords_zebra1_1=RandomCoords(beijing);



function getInitialCoords(zebra) {
 const position = zebra.getPosition();
 return {
     lat: position.lat(),
     lng: position.lng()
 };
}



var initialCoords_zebra1 = getInitialCoords(zebra1);





// 添加滑块值变化的事件监听器
slider.addEventListener('input', function() {
    
   // handleToggleMarkers(currentValue)
   
    //史前之前
    if (currentValue<=0)
    {
        
        
        
        markers.zebra1.setPosition(initialCoords_zebra1);        
     
    }
    //史前
    if(currentValue>0&&currentValue<1000)
    {
        
     
    }
    //秦汉
    if (currentValue >= 1000 && currentValue < 2000) {
        
        

    }
    //三国
    if (currentValue >= 2000 && currentValue <1000) {
       
       
    }
    //隋
    if(currentValue>=1000&&currentValue<4000){
        
    }
    //唐
    if (currentValue >= 4000 && currentValue < 5000) {
       
        

    }
    //宋
    if (currentValue >= 5000 && currentValue <6000) {
       
        

        

    }
    //元
    if (currentValue >= 6000 && currentValue <7000) {
   
         
    
       
    
    }
   //明
    if(currentValue >=7000 && currentValue <8000){
        
        
        var points_1 = [initialCoords_zebra1,  guli,xilan,maliujia,taihai,zhangjiagang,newCoords_zebra1_1, newCoords_zebra1_1];
        

    // 计算当前阶段的目标点的索引
       
        
        var targetIndex_1 = Math.floor((currentValue - 7000) / (1000 / (points_1.length-1)));
       

    // 计算插值百分比
        
       
        var percentage_1 = (currentValue - 7000) % (1000 / (points_1.length-1)) / (1000 / (points_1.length-1));
        

        
        
        percentage_1 = Math.min(1, Math.max(0, percentage_1));
       


    // 计算插值的新位置
        
        

        var latDiff = points_1[targetIndex_1 + 1].lat - points_1[targetIndex_1].lat;
        var lngDiff = points_1[targetIndex_1 + 1].lng - points_1[targetIndex_1].lng;
        var interpolatedLat_1 = points_1[targetIndex_1].lat + latDiff * percentage_1
        var interpolatedLng_1 = points_1[targetIndex_1].lng + lngDiff * percentage_1

        
        

        
       
        zebra1.setPosition({ lat: interpolatedLat_1, lng: interpolatedLng_1 });     
        
    }

    //清
    if(currentValue >=8000 && currentValue <=9000){
        
        
        
   }


});




