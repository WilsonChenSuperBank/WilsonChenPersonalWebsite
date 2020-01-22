var app = new Vue({
   el:"#app",
   data:{
      message:"Hello World!",
      score:"100"
   }
});

document.getElementById("changeButton").addEventListener("click",function(){
   app.message = "QQ";
});