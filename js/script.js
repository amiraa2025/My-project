// alert("welcome")
// للتأكد ان الجافا سكريبت يعمل
// اولا نربط مع اتش تي ام ال قبل البودي عن طريق سكريبت
let icon = document .getElementById('icon-mobile');
let ul = document .getElementById('ul-mobile');

icon.onclick = function () {ul.classList.toggle("mobile-nav1")}
// toggle
// يساعد في فتح الكلاس اذا مغلق و اغلاق الكلاس اذا مفتوح و كله بالنقر على ايقونة النافبار
// كل الكودات السابقة في الجافا سكريبت لجعل ايقونة النافبار تفتح و تغلق بالنقر فقط
// ثم ناخذ كلاس التوجل و نضع في سي اس اس و بذلك يرتبط مع سي اس اس