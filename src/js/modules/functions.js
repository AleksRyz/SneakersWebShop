// =====<Проверка поддержки webp, добавление класса _webp или _no-webp для HTML>=====
export function isWebp() {

   // JS-функция определения поддержки WebP
   function testWebP(callback) {

      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   // Добавление класса _webp или _no-webp для HTML
   testWebP(function (support) {

      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}
// =====</Проверка поддержки webp, добавление класса _webp или _no-webp для HTML>=====


// =====<проверка дисплея тачскрин или ПК>==========
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.querySelector('html').classList.add('_touch'); /* дисплей тачскрин*/
}
// =====</проверка дисплея тачскрин или ПК>==========

//Применение класса "ibg" для адаптива картинок. берет путь картинки и назначает его фоном родительского блока
export function ibg(){
   let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
   }
}
//===============================================================================================================