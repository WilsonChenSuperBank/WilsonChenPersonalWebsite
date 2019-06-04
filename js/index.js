$("li").on("click",function(){
   $("li").each(function(){
      $(this).removeClass("active");
   });
   $(this).addClass("active");
});

create_random_string($(".myNameTitle"));

function hashbarran(fornum) {
   var random_chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';

   //console.log(random_chars.slice(random_nums,random_nums+1));
   random_string = '';
   for (i = 0; i < fornum; i++) {
       var random_nums = Math.floor((Math.random() * 48) + 1);
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

                       }, (j + 1) * 100);

                   })(j);

               }

           }, (i + 1) * 450);

       })(i);
   }
}