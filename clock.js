let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();
    let date = new Date(); 
    let hh = currentTime.getHours();
    let mm = currentTime.getMinutes();
    let ss = currentTime.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hrs.innerHTML = (hh < 10) ? "0" + hh : hh;
     min.innerHTML = (mm < 10) ? "0" + mm : mm;
     sec.innerHTML = (ss < 10) ? "0" + ss : ss;
    

},1000)

