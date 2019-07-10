$("li").on("click", function () {
   $("li").each(function () {
      $(this).removeClass("active");
   });
   $(this).addClass("active");
});

create_random_string($(".myNameTitle"));

$(".top").on("click", function () {
   $('html, body').animate({ scrollTop: 0 }, 800);
});

$(".fa-facebook, .fa-instagram, .fa-youtube").on("click", function () {
   window.open($(this).attr("openUrl"), "_blank");
});

$(".section2Link").on("click",function(){
   var ouo = $(this).data("href");
   fecthAllHtml(ouo);
})

function hashbarran(fornum) {
   var random_chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';

   //console.log(random_chars.slice(random_nums,random_nums+1));
   random_string = '';
   for (i = 0; i < fornum; i++) {
      var random_nums = Math.floor((Math.random() * random_chars.length) + 1);
      random_string += random_chars.slice(random_nums, random_nums + 1);
   }

   return random_string;
}

function create_random_string(random_dom) {

   var hashbar_a = random_dom;

   for (i = 0; i < hashbar_a.length; i++) {
      (function (i) {
         setTimeout(function () {
            var endValue = hashbar_a.eq(i).attr("endvalue");
            // console.log(endValue);//最後的值;
            var changeValue = '';

            for (j = 0; j <= endValue.length + 1; j++) {

               (function (j) {
                  setTimeout(function () {

                     changeValue = endValue.substring(0, j) + hashbarran(endValue.length - j);

                     if (j == endValue.length + 1) {
                        hashbar_a.eq(i).text(endValue);
                     }
                     else {
                        hashbar_a.eq(i).text(changeValue);
                     }

                  }, (j) * 100);

               })(j);

            }

         }, (i) * 450);

      })(i);
   }
}

function fecthAllHtml(url) {
   fetch(url, {})
      .then((response) => {
         // 這裡會得到一個 ReadableStream 的物件
         console.log(response);
         // 可以透過 blob(), json(), text() 轉成可用的資訊
         return response;
      }).then((jsonData) => {
         console.log(jsonData);
      }).catch((err) => {
         console.log('錯誤:', err);
      });
}