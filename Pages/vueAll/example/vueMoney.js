var app = new Vue({
   el: ".app",
   data: {
      NT: 0,
      aHeavy: 0,
      bHeavy: 0
   },
   computed: {
      JP: function () {
         return (this.NT / 0.2713);
      },
      EU: function () {
         return (this.NT / 30.111);
      },
      now: function () {
         var allValue = this.NT + 87;
         //有帶變動參數 時間才會重整 如果沒有帶NT 則時間不改變(無論有無使用到此參數)

         var d = new Date();
         return d.getSeconds();
      },

      whosFat: function(){
         if(this.aHeavy > this.bHeavy){
            return "a胖";
         }
         else if(this.aHeavy < this.bHeavy){
            return "b胖";
         }
         else{
            return "xx";
         }
      }
   }
});

