const time=document.getElementById("items");
function display(){
let hour=new Date().getHours();
let minute=new Date().getMinutes();
let seconds=new Date().getSeconds();
time.innerText=hour+":"+minute+":"+seconds;
}
setInterval(display,1000);
display();





function rotate() {
    const calc = new Date();
    const hour = calc.getHours();
    const minute = calc.getMinutes();
    const seconds = calc.getSeconds();
  
    const hourRotation = (hour %12 + minute/60 ) *360/12 ;
    const minuteRotation = (minute +seconds/ 60) * 360/60;
    const secondRotation = seconds * 360/60;
  
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');

   
    hourEl.style.transform = `rotate(${hourRotation}deg)`;
    minuteEl.style.transform = `rotate(${minuteRotation}deg)`;
    secondEl.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  setInterval(rotate,1000);

  rotate();