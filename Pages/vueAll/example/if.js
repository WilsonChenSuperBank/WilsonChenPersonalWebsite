var app = new Vue({
   el: "#app",
   data: {
      message: "Hello World!",
      messageType: false,
      messageShow: false,
      score:0,
      
   },
   // method:{
   //    changeType:function(elementId,changeData,changeString){

   //    }
   // }
});

changeType("changeType","messageType",true);
changeType("changeShow","messageShow",true);


//
function changeType(elementId,changeData,changeString){
   document.getElementById(elementId).addEventListener("click",function(){
      app[changeData] = changeString;
   });
}