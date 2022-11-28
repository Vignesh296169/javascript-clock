

function dateTime(){
   let t=new Date();
   let hr=t.getHours();
   let min=t.getMinutes();
   let sec=t.getSeconds();
   let dy=t.getDate();
   let sess=document.querySelector(".session");
  
    if(hr>=12){
        sess.innerHTML="Pm";
    }
    else{
        sess.innerHTML="Am";
    }

   if(hr>12){
    hr=hr-12;
   }


   document.querySelector(".hour").innerHTML=hr;
   document.querySelector(".minut").innerHTML=min;
   document.querySelector(".second").innerHTML=sec;
   document.querySelector(".da").innerHTML=dy;
   
   






}
setInterval(dateTime,10);
