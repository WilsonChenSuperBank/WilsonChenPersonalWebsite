var app = new Vue({
   el: ".app",
   data: {
      message: "hello",
      shopArray: [
         { shopName: "店面", apple: "100", iphone11: "30000" },
         { shopName: "路邊攤", apple: "90", iphone11: "33000" },
         { shopName: "百貨公司", apple: "110", iphone11: "35000" }
      ]
   },
   methods: {
      productPrice: function (price) {
         console.log("價錢為:" + price)
      },
      shopName: function (shop) {
         console.log("商場名稱:" + shop);
      }
   }
})