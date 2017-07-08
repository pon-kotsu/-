function weather(){
$(document).ready(function() {
  $.simpleWeather({
    //初期設定
    location: 'Tokyo, JP',
    unit: 'c',

    //正常に実行された時の処理
    success: function(weather) {
        //地名の表示
        html = '<p>'+weather.city+'</p>';

        //気象状況を表示
        html += '<p class="currently">'+weather.currently+'</pd>';

        //気温の表示
        html += '<p>'+weather.temp+'℃'+'</p>';

        //湿度の表示
        html += '<p>'+weather.humidity+"%"+'</p>';

　　　　　//風速の表示
        html += '<p>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</p>';

        for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
 
        //画面に表示
       $("#weather").html(html);
    }
  });
});

function cal(){
  let t=document.in.temp.value;
  //let v=
  //let h=
  //let A=

  console.log(t);
}
/*


function main(){
    

}
window.addEventListener("load",main);
*/
}