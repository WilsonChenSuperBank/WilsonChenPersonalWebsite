function check() {
   console.log(this);
}
// check();

var data = {
   checkNum: function () {
      console.log(this);
   }
}

data.checkNum();

var colorArray = ["red","yellow","blue","black","pink"];

//刪除位置為2的資料 1筆 ps.從零開始，所以是刪除第三個
colorArray.splice(2,1);
console.log(colorArray);

//找black是第幾個 ps.從零開始
console.log(colorArray.indexOf("black"));

//刪除pink
colorArray.splice(colorArray.indexOf("pink"));
console.log(colorArray);
