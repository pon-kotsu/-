function weather(){
$(document).ready(function() {
  $.simpleWeather({
    //初期設定
    location: 'Tokyo, JP',
    unit: 'c',

    //正常に実行された時の処理
    success: function(weather) {
        //地名の表示
        html = '<p>'+"場所　"　+weather.city+'</p>';

        //気象状況を表示
        html += '<p class="currently">'+"天気　"+weather.currently+'</pd>';

        //気温の表示
        html += '<p>'+"気温　"+weather.temp+'℃'+'</p>';

        //湿度の表示
        html += '<p>'+"湿度　"+weather.humidity+"%"+'</p>';

        for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
        //画面に表示
       $("#weather").html(html);
    }
  });
});
}

function reset(){
location.reload();
}

let i = 0;
  function chooseImage() {
//体感温度の計算
  let t=document.forms.in.temp.value;
  let v=Math.pow(3 , 0.75);
  let h=document.forms.in.humid.value;
  let A=1.76+(1.4*v);
  let T = 37-((37-t)/(0.68-0.0014*h+1/A))-(0.29*t)*(1-h/100);

  console.log(T);
   // 性別がどちらにチェックされたか
let sex = document.forms.in.male.checked;
console.log(sex);
//年齢の入力を取得
let age=document.forms.in.age.value;
console.log(age);

    
     //性別、体感温度による画像表示の条件分岐
    if (sex) {
      if (0<age &&age<20) {
        if (T>25&&T<=35) {
           let photo = ["image/M１０代/M10代２５度.jpg","image/M１０代/M10代２５度２.jpg", "image/M１０代/M10代２５度３.jpg"];  
           return photo[i];
         }
        else if(20<T&&T<=25){
          let photo = ["image/M１０代/M10代２０度１.jpg",
           "image/M１０代/M10代２０度２.jpg",
           "image/M１０代/M10代２０度３.jpg"];  
           return photo[i];
          } 
        else if (16<T&&T<=20){
          let photo = ["image/M１０代/M10代１６度１.jpg",
           "image/M１０代/M10代１６度２.jpg",
          "image/M１０代/M10代１６度３.jpg"];  
           return photo[i];
        } 
        
        else if (12<T&&T<=16){
          let photo = ["image/M１０代/M10代１２度１.jpg",
           "image/M１０代/M10代１２度２.jpg",
           "image/M１０代/M10代１２度３.jpg"];  
           return photo[i];
          } 
        
        else if (8<T&&T<=12){
          let photo = ["image/M１０代/M10代８度１.jpg",
          "image/M１０代/M10代８度２.jpg",
           "image/M１０代/M10代８度３.jpg"];  
          return photo[i];
        }
         else if(5<T&&T<=8){
          let photo = ["image/M１０代/M10代５度１.jpg",
           "image/M１０代/M10代５度２.jpg",
           "image/M１０代/M10代５度３.jpg"];  
           return photo[i];
          }
          else if(T<0){
         return;
        }
        else if(T>35){
          return;
        }
        else{
          alert("この範囲の温度は想定されていません");
        }  
  
      }

      
else if (19<age&&age<=29) {
        if (T>25&&T<=35){
          let photo = ["image/M20代/M20代２５度１.jpg",
           "image/M20代/M20代２５度２.jpg",
           "image/M20代/M20代２５度３.jpg"];  
           return photo[i];
          } 
        
    else if (20<T&&T<=25){
          let photo = ["image/M20代/M20代２０度１.jpg",
           "image/M20代/M20代２０度２.jpg",
           "image/M20代/M20代２０度３.jpg"];  
          return photo[i];
          } 
        
    else if  (16<T&&T<=20){
         let photo = ["image/M20代/M20代１６度１.jpg",
          "image/M20代/M20代１６度２.jpg",
          "image/M20代/M20代１６度３.jpg"];  
          return photo[i];
          } 
        
    else if (12<T&&T<=16){
          let photo = ["image/M20代/M20代１２度１.jpg",
          "image/M20代/M20代１２度２.jpg",
          "image/M20代/M20代１２度３.jpg"];  
          return photo[i];
          } 
        
    else if  (8<T&&T<=12){
          let photo = ["image/M20代/M20代８度１.jpg",
          "image/M20代/M20代８度２.jpg",
          "image/M20代/M20代８度３.jpg"];  
          return photo[i];
    }
    else if(5<T&&T<=8){
         let photo = ["image/M20代/M20代５度１.jpg" ,         
          "image/M20代/M20代５度２.jpg"  ,       
          "image/M20代/M20代５度３.jpg"];  
          return photo[i];
        }
        else if(T<0){
         return;
        }
        else if(T>35){
          return;
        }
        else{
          alert("この範囲の温度は想定されていません");
        } 
}
      else if (29<age&&age<=39) {
        if (T>25&&T<=35){
          let photo = ["image/M30代/M30代２５度１.jpg",
          "image/M30代/M30代２５度２.jpg",
          "image/M30代/M30代２５度３.jpg"];  
           return photo[i];
          } 
        
    else if (20<T&&T<=25){
          let photo = ["image/M30代/M30代２０度１.jpg",
          "image/M30代/M30代２０度２.jpg",
          "image/M30代/M30代２０度３.jpg"];  
          return photo[i];
          } 
        
    else if  (16<T&&T<=20){
           let photo = ["image/M30代/M30代１６度１.jpg",
          "image/M30代/M30代１６度２.jpg",
         "image/M30代/M30代１６度３.jpg"];  
           return photo[i];
          } 
        
    else if (12<T&&T<=16){
          let photo = ["image/M30代/M30代１２度１.jpg",
          "image/M30代/M30代１２度２.jpg",
         "image/M30代/M30代１２度３.jpg"];  
          return photo[i];
          } 
        
    else if (8<T&&T<=12){
          let photo = ["image/M30代/M30代８度１.jpg",
          "image/M30代/M30代８度２.jpg",
         "image/M30代/M30代８度３.jpg"];  
          return photo[i];
          } 
        
    else if(5<T&&T<=8){
          let photo = ["image/M30代/M30代５度１.jpg" ,       
          "image/M30代/M30代５度２.jpg"  ,       
          "image/M30代/M30代５度３.jpg"];  
          return photo[i];
        }
        else if(T<0){
         return;
        }
        else if(T>35){
          return;
        }
        else{
          alert("この範囲の温度は想定されていません");
        } 

      }else{
       alert("その年齢はされて推定いません");
      }
    }
    
  
//女性版画像の表示
 else{
      if (0<age&&age<=19){
        if (T>25&&T<=35){
           let photo = ["image/L１０代/L10代２５度１.jpg",
        "image/L１０代/L２５度１０代２.jpg",
          "image/L１０代/L25度１０代１.jpg"];  
          return photo[i];
          } 
    else if (20<T&&T<=25){
          let photo = ["image/L１０代/L１０代２０度.jpg",
          "image/L１０代/L１０代２０度２.jpg",
          "image/L１０代/L１０代２０度３.jpg"];  
          return photo[i];
          } 
        
    else if (16<T&&T<=20){
       let photo = ["image/L１０代/L１０代１６度１.jpg",
          "image/L１０代/L１０代１６度２.jpg",
          "image/L１０代/L10代１６度３.jpg"];  
          return photo[i];
          } 
    
    else if (12<T&&T<=16){
          let photo = ["image/L１０代/L１０代１２度１.jpg",
          "image/L１０代/L１０代１２度２.jpg",
          "image/L１０代/L１０代１2度３.jpg"];  
          return photo[i];
          } 
        
    else if (8<T&&T<=12){
          let photo = ["image/L１０代/L１０代８度.jpg",
          "image/L１０代/L１０代８度２.jpg",
          "image/L１０代/L１０代８度３.jpg"];  
          return photo[i];
          } 
        
    else if(5<T&&T<=8){
          let photo = ["image/L１０代/L１０代５度１.jpg",
          "image/L１０代/L１０代5度2.jpg",
          "image/L１０代/L１０代5度３.jpg"];  
          return photo[i];
        } 
        else if(T<0){
         return;
        }
        else if(T>35){
          return;
        }
        else{
          alert("この範囲の温度は想定されていません");
        } 
        

      }
  else if (19<age&&age<=29) {
        if (T>25&&T<=35){
          let photo = [ "image/L20代/L20代２５度1.jpg",
          "image/L20代/L２０代２５度２.jpg",
          "image/L20代/L２０代２５度３.jpg"];  
         return photo[i];
          } 
        
    else if (20<T&&T<=25){
          let photo = ["image/L20代/L20代２０度.jpg",
          "image/L20代/L20代２０度２.jpg",
          "image/L20代/L２０代２０度３.jpg"];  
          return photo[i];
          } 
        
    else if (16<T&&T<=20){
           let photo = ["image/L20代/L２０代１６度１.jpg",
          "image/L20代/L20代１６度２.jpg",
          "image/L20代/L20代１６度３.jpg"];  
          return photo[i];
          } 
        
    else if (12<T&&T<=16){
           let photo = ["image/L20代/L２０代１２度１.jpg",
          "image/L20代/L20代１２度２.jpg",
          "image/L20代/L20代１２度３.jpg"];  
          return photo[i];
          } 
        
    else if (8<T&&T<=12){
           let photo = ["image/L20代/L20代8度１.jpg",
          "image/L20代/L20代８度２.jpg",
          "image/L20代/L２０代８度３.jpg"];  
          return photo[i];
          } 
        
    else if(5<T&&T<=8){
           let photo = ["image/L20代/L20代５度１.jpg",
          "image/L20代/L20代５度２.jpg",
          "image/L20代/L20代５度３.jpg"];  
          return photo[i];
        } 
        else if(T<0){
         return;
        }
        else if(T>35){
          return;
        }
        else{
          alert("この範囲の温度は想定されていません");
        } 
        
     } 
      else if (29<age&&age<=39) {
        if (T>25&&T<=35){
          let photo = ["image/L30代/L３０代２５度.jpg",
          "image/L30代/L３０代２５度２.jpg",
          "image/L30代/L３０代２５度３.jpg"];  
          return photo[i];
          } 
        
    else if (20<T&&T<=25){
          let photo = ["image/L30代/L30代２０度.jpg",
          "image/L30代/L３０代２０度２.jpg",
          "image/L30代/L30代２０度３.jpg"];  
          return photo[i];
          } 
        
    else if (16<T&&T<=20){
          let photo = ["image/L30代/L30代１６度１.jpg",
          "image/L30代/L30代１６度２.jpg",
          "image/L30代/L30代１６度３.jpg"];  
          return photo[i];
          } 
        
    else if (12<T&&T<=16){
          let photo = ["image/L30代/L３０代１２度１.jpg",
          "image/L30代/L30代１２度２.jpg",
          "image/L30代/L30代１２度３.jpg"];  
          return photo[i];
          } 
        
    else if (8<T&&T<=12){
          let photo = ["image/L30代/L30代８度１.jpg",
          "image/L30代/L３０代８度２.jpg",
          "image/L30代/L３０代８度３.jpg"];  
          return photo[i];
        } 
        
    else if(5<T&&T<=8){
          let photo = ["image/L30代/L30代５度１.jpg",
           "image/L30代/L30代５度２.jpg",
          "image/L30代/L30代５度３.jpg"];  
          return photo[i];
        } 
        else if(T<0){
         return;
        }
        else if(T>35){
          return;
        }
        else{
          alert("この範囲の温度は想定されていません");
        } 
        
      }
      //women４０歳以上
      else{
       alert("その年齢はされて推定いません");
      }
}
    }
    
  
  
  function showImage(){
    let elm = document.createElement("img");
     elm.src = chooseImage();
     elm.id = "img";
  document.body.appendChild(elm);
    if(i>1){
      alert("これ以上ありません/nリセットしてください");
      
    }else{
  i=i+1;
    }
}

