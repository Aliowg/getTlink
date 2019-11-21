// 访问api，数据插入到reslut中
//jquery function
$(function(){
    $.ajax({
        //请求方式
        type : "GET",
        //修改为同步
        async: false,
        //请求的媒体类型
        contentType: "application/jsonp;charset=UTF-8",
        //请求地址
        url : 'http://www.szbnst.com:8080/api/getTlinkData/NU3W3550GLMZUE68',
        //请求成功
        success : function(result) {
            console.log(result);
            //首先将数据全部保存起来
            var dataObj = JSON.parse(result);
            // $('#user1').text('查询状态: '+dataObj.msg);
            $('#user2').text('id: '+dataObj.deviceId);
            $('#user3').text('Name: '+dataObj.deviceName);
            //定义一个switch
            $('#data1').text('deviceName: '+dataObj.sensorLastDataList[0].sensorName);
            $('#data2').text('unit: '+dataObj.sensorLastDataList[0].unit);
            $('#data3').text('time: '+dataObj.sensorLastDataList[0].updateTime);
            $('#data4').text('value: '+dataObj.sensorLastDataList[0].value);
            return dataObj.sensorLastDataList[0].value;
        },
        //请求失败，包含具体的错误信息
        error : function(e){
            console.log(e.status);
            console.log(e.responseText);
            console.log('Error');
        }
    });
})

$(function () {
    //radial progress 1
    var progObj1 = $('#indicatorContainer1').radialIndicator({
      displayNumber: true,
      initValue : 0,
      barWidth:10,
      minValue: 0,
      maxValue: 350,
      format: '#### mg/L',
      barColor: {
        0: '#008080',
        200: '#ffff00',
        300: '#FF0000',
      },
    }).data('radialIndicator');;


    var progObj2 = $('#indicatorContainer2').radialIndicator({
      displayNumber: true,
      initValue : 0,
      barWidth:10,
      minValue: 0,
      maxValue: 350,
      format: '#### mg/L',
      barColor: {
        0: '#008080',
        200: '#ffff00',
        300: '#FF0000',
      },
    }).data('radialIndicator');;

    var progObj3 = $('#indicatorContainer3').radialIndicator({
      displayNumber: true,
      initValue : 0,
      barWidth:10,
      minValue: 0,
      maxValue: 350,
      format: '#### pH',
      barColor: {
        0: '#008080',
        200: '#ffff00',
        300: '#FF0000',
      },
    }).data('radialIndicator');;


    var progObj4 = $('#indicatorContainer4').radialIndicator({
      displayNumber: true,
      initValue : 0,
      barWidth:10,
      minValue: 0,
      maxValue: 350,
      format: '#### mv',
      barColor: {
        0: '#008080',
        200: '#ffff00',
        300: '#FF0000',
      },
    }).data('radialIndicator');;

    progObj1.animate(50);
    progObj2.animate(150);
    progObj3.animate(250);
    progObj4.animate(350);

    setInterval(function () {
        radialObj9.value(new Date().getSeconds() + 1);
    }, 1000);

})
