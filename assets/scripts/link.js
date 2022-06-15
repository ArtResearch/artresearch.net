// $("body").on("click", "a[data-href]", function () {
//   var href = $(this).data("href");
//   if (href) {
//     location.href = href;
//   }
// });
$("a").click(function (event) {
  if (event.button == 2) {
    return false;
  }
});

