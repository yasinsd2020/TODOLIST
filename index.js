let btn =document.getElementById("butn");
let btn2 =document.getElementById("butn2");
let btn3 =document.getElementById("btn3");
let input =document.getElementById("userinput");
let ol =document.querySelector("ol");

btn.addEventListener("click",function(){
if(input.value.length>0) {
    let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value="";
}

else{

  document.getElementById("notif").style.display="block";
 }
}




  );
// click alert 
btn3.addEventListener("click" ,function(){
  
  document.getElementById("notif").style.display="none";
});


input.addEventListener("keypress",function(event){
    if(input.value.length > 0 && event.keyCode ===13)                 {
    let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value="";
    }
   

});




var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



btn2.addEventListener("click" ,function(){
       
        ol.removeChild(ol.lastElementChild);
});