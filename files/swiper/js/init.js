const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Получаем все изображения с атрибутом loading="lazy"
function addLoadedClass(image) { // Функция для добавления класса к родителю изображения после его загрузки
   const parentElement = image.parentElement;
   if (image.complete) { // Проверяем, загружено ли изображение
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Добавляем событие load, чтобы добавить класс после загрузки изображения
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Перебираем все изображения и вызываем функцию addLoadedClass для каждого

/* === */

const reviewsSlider = document.querySelector('.reviews__slider')
if (reviewsSlider) {
   new Swiper(reviewsSlider, {
      navigation: {
         prevEl: '#reviews-slider-btn-prev',
         nextEl: '#reviews-slider-btn-next',
      },
      watchOverflow: true,
      spaceBetween: 10,
      loop: false,
      speed: 800,
      effect: 'slide',
      slidesPerView: 4,
      breakpoints: {
         0: {
            slidesPerView: 1.1,
         },
         576: {
            slidesPerView: 2,
         },
         801: {
            slidesPerView: 3,
         },
         1101: {
            slidesPerView: 4,
         }
      }
   });
}