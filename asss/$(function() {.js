 type = "text/javascript"
 window.onload = function() {
     var timer = null;
     var show = document.getElementById("show");

     function show_date_time() {
         var target = new Date("2021/12/15 00:00:00");
         var today = new Date();
         var timeold = (target.getTime() - today.getTime());
         var sectimeold = timeold / 1000
         var secondsold = Math.floor(sectimeold);
         var msPerDay = 24 * 60 * 60 * 1000
         var e_daysold = timeold / msPerDay
         var daysold = Math.floor(e_daysold);
         var e_hrsold = (e_daysold - daysold) * 24;
         var hrsold = Math.floor(e_hrsold);
         var e_minsold = (e_hrsold - hrsold) * 60;
         var minsold = Math.floor((e_hrsold - hrsold) * 60);
         var seconds = Math.floor((e_minsold - minsold) * 60);
         if (daysold < 0) {
             window.location.href = "https://jackyhoi.github.io/fsfdf.github.io/shjdfkhsd/ppp.html";
             clearInterval(timer);
         } else {
             if (daysold < 10) {
                 daysold = "0" + daysold
             }
             if (hrsold < 10) {
                 hrsold = "0" + hrsold
             }
             if (minsold < 10) {
                 minsold = "0" + minsold
             }
             if (seconds < 10) {
                 seconds = "0" + seconds
             }
             show.innerHTML = "距離結束時間還有:" + daysold + "天" + hrsold + "小時" + minsold + "分" + seconds + "秒";
         }
     }
     timer = setInterval(show_date_time, 1000);
 }

 //使用匿名函数方法
 function countDown() {

     var time = document.getElementById("Time");
     //alert(time.innerHTML);
     //获取到id为time标签中的内容，现进行判断
     if (time.innerHTML == 0) {
         //等于0时清除计时
         window.location.href = "https://jackyhoi.github.io/hfie.com/asss/Untitled-1.html";
     } else {
         time.innerHTML = time.innerHTML - 1;
     }
 }
 //1000毫秒调用一次
 setInterval(countDown, 1000);