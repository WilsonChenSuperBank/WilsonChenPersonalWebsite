var app = new Vue({
   el: ".vueElement",
   data: {
      lifeData: "aaa",
      content: null
   },
   beforeCreate: function () {
      console.log(lifeData);
      console.log("屬性尚未載入前(beforeCreate)");
   },
   created: function () {
      console.log(this.lifeData);
      console.log("資料已取得，但el尚未建立");
   },
   befoerMount: function () {
      console.log(this.lifeData);
      console.log("尚未抓到el資料時");
   },
   mounted: function(){
      console.log(this.lifeData);
      console.log("已掛上dom，並取得el資料");
   },
   method: {
      lifeFunction: function(){
         console.log("yy");
      }
   }

});

