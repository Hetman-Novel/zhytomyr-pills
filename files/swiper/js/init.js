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

const firstScreenSlider = document.querySelector('.first-screen__slider')
if (firstScreenSlider) {
   new Swiper(firstScreenSlider, {
      pagination: {
         el: '#first-screen-slider',
         clickable: true,
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 50,
      loop: true,
      speed: 800,
      effect: 'fade',
      autoplay: {
         deley: 60000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
   });
}

const numbersSlider = document.querySelector('.numbers__slider')
if (numbersSlider) {
   new Swiper(numbersSlider, {
      navigation: {
         prevEl: '#numbers-slider-swiper-button-prev',
         nextEl: '#numbers-slider-swiper-button-next',
      },
      //slidesPerView: 1.76,
      watchOverflow: true,
      spaceBetween: 20,
      //centeredSlides: true,
      loop: true,
      speed: 800,
      effect: 'slide',

      grabCursor: true,

      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            slidesPerView: 2.0,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 2.285,
            spaceBetween: 15,
         },
         721: {
            slidesPerView: 2.285,
            spaceBetween: 15,
         },
         1025: {
            slidesPerView: 2.285,
            spaceBetween: 20,
         },
         1100: {
            slidesPerView: 2.285,
         }
      }
   });
}

const eventsSlider = document.querySelector('.events__slider')
if (eventsSlider) {
   new Swiper(eventsSlider, {
      navigation: {
         prevEl: '#events-slider-swiper-button-prev',
         nextEl: '#events-slider-swiper-button-next',
      },
      //slidesPerView: 1.76,
      watchOverflow: true,
      spaceBetween: 20,
      //centeredSlides: true,
      loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            slidesPerView: 2.0,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 2.335,
            spaceBetween: 20,
         },
         721: {
            slidesPerView: 2.335,
            spaceBetween: 20,
         },
         1025: {
            slidesPerView: 2.335,
            spaceBetween: 20,
         },
         1100: {
            slidesPerView: 2.335,
         }
      }
   });
}

const instagramSlider = document.querySelector('.instagram__slider')
if (instagramSlider) {
   new Swiper(instagramSlider, {
      navigation: {
         prevEl: '#instagram-slider-swiper-button-prev',
         nextEl: '#instagram-slider-swiper-button-next',
      },
      slidesPerView: 4.76,
      watchOverflow: true,
      spaceBetween: 23,
      centeredSlides: true,
      loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            slidesPerView: 1.115,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 3.29,
            spaceBetween: 15,
         },
         721: {
            slidesPerView: 3.29,
            spaceBetween: 15,
         },
         1025: {
            slidesPerView: 3.29,
            spaceBetween: 22,
         },
         1100: {
            slidesPerView: 4.76,
         }
      }
   });
}

const restaurantSlider = document.querySelector('.page-restaurant__slider')
if (restaurantSlider) {
   new Swiper(restaurantSlider, {
      navigation: {
         prevEl: '#restaurant-slider-swiper-button-prev',
         nextEl: '#restaurant-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 50,
      //loop: true,
      speed: 800,
      effect: 'fade',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
   });
}

const kitchenSlider = document.querySelector('.kitchen__slider')
if (kitchenSlider) {
   new Swiper(kitchenSlider, {
      navigation: {
         prevEl: '#kitchen-slider-swiper-button-prev',
         nextEl: '#kitchen-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 50,
      //loop: true,
      speed: 800,
      effect: 'fade',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
   });
}

const thereIsSlider = document.querySelector('.there-is__slider')
if (thereIsSlider) {
   new Swiper(thereIsSlider, {
      navigation: {
         prevEl: '#there-is-slider-swiper-button-prev',
         nextEl: '#there-is-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 50,
      //loop: true,
      speed: 800,
      effect: 'fade',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
   });
}

const pageRooms1Slider = document.querySelector('.page-rooms1__slider')
if (pageRooms1Slider) {
   new Swiper(pageRooms1Slider, {
      navigation: {
         prevEl: '#page-rooms-1-slider-slider-swiper-button-prev',
         nextEl: '#page-rooms-1-slider-slider-swiper-button-next',
      },
      slidesPerView: "auto",
      watchOverflow: true,
      spaceBetween: 20,
      //loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            slidesPerView: "auto",
            spaceBetween: 9,
         },
         576: {
            slidesPerView: "auto",
            spaceBetween: 20,
         }
      }
   });
}

const pageRooms2Slider = document.querySelector('.page-rooms2__slider')
if (pageRooms2Slider) {
   new Swiper(pageRooms2Slider, {
      navigation: {
         prevEl: '#page-rooms-2-slider-slider-swiper-button-prev',
         nextEl: '#page-rooms-2-slider-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 20,
      //loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            spaceBetween: 9,
         },
         576: {
            spaceBetween: 20,
         }
      }
   });
}

const pageRooms3Slider = document.querySelector('.page-rooms3__slider')
if (pageRooms3Slider) {
   new Swiper(pageRooms3Slider, {
      navigation: {
         prevEl: '#page-rooms-3-slider-slider-swiper-button-prev',
         nextEl: '#page-rooms-3-slider-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 20,
      //loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            spaceBetween: 9,
         },
         576: {
            spaceBetween: 20,
         }
      }
   });
}

const pageRooms4Slider = document.querySelector('.page-rooms4__slider')
if (pageRooms4Slider) {
   new Swiper(pageRooms4Slider, {
      navigation: {
         prevEl: '#page-rooms-4-slider-slider-swiper-button-prev',
         nextEl: '#page-rooms-4-slider-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 20,
      //loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            spaceBetween: 9,
         },
         576: {
            spaceBetween: 20,
         }
      }
   });
}

const pageRooms5Slider = document.querySelector('.page-rooms5__slider')
if (pageRooms5Slider) {
   new Swiper(pageRooms5Slider, {
      navigation: {
         prevEl: '#page-rooms-5-slider-slider-swiper-button-prev',
         nextEl: '#page-rooms-5-slider-slider-swiper-button-next',
      },
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 20,
      //loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false, // Отключить предзагрузка картинок
      lazy: { // Lazy Loading (подгрузка картинок)
         loadOnTransitionStart: false, // Подгружать на старте переключения слайда
         loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
      },
      watchSlidesProgress: true, // Слежка за видимыми слайдами
      watchSlidesVisibility: true, // Добавление класса видимым слайдам
      breakpoints: {
         0: {
            spaceBetween: 9,
         },
         576: {
            spaceBetween: 20,
         }
      }
   });
}

document.addEventListener('DOMContentLoaded', function() {
   const thoughtSlider = document.querySelector('.thought__slider')
   if (thoughtSlider) {
      const swiperInstance = new Swiper(thoughtSlider, {
         slidesPerView: 'auto',
         freeMode: true,
         watchOverflow: true,
         spaceBetween: 0,
         //loop: true,
         speed: 800,
         effect: 'slide',
         preloadImages: false, // Отключить предзагрузка картинок
         lazy: { // Lazy Loading (подгрузка картинок)
            loadOnTransitionStart: false, // Подгружать на старте переключения слайда
            loadPrewNext: false, // Подгрузить предыдущую и следующую картинку
         },
         watchSlidesProgress: true, // Слежка за видимыми слайдами
         watchSlidesVisibility: true, // Добавление класса видимым слайдам
         mousewheel: {
            releaseOnEdges: true,
            sensitivity: 1,
            eventsTarget: ".thought__slider",
         },
         simulateTouch: false,
         allowTouchMove: false // Отключаем горизонтальное перетаскивание
      });

      let startY = 0;
		let currentY = 0;
		let startTime = 0;

		const accelerationFactor = 8; // Коэффициент ускорения

		thoughtSlider.addEventListener('touchstart', function(event) {
			if (event.touches.length === 1) {
				startY = event.touches[0].clientY;
				startTime = new Date().getTime(); // Запоминаем время начала свайпа
			}
		});

		thoughtSlider.addEventListener('touchmove', function(event) {
			if (event.touches.length === 1) {
				currentY = event.touches[0].clientY;
				const diffY = startY - currentY;
				const currentTime = new Date().getTime();
				const timeDiff = currentTime - startTime; // Вычисляем разницу во времени

				// Умножаем разницу в пикселях на коэффициент ускорения
				const adjustedDiffY = diffY * accelerationFactor;

				// Вычисляем скорость анимации: чем больше время свайпа, тем медленнее движение
				const swipeSpeed = Math.min(1000, Math.max(100, 500 - (Math.abs(adjustedDiffY) / timeDiff) * 500)); // Ограничиваем значения

				swiperInstance.translateTo(swiperInstance.getTranslate() - adjustedDiffY, swipeSpeed);
				startY = currentY;
				startTime = currentTime; // Обновляем время начала для следующего шага

				if (swiperInstance.isEnd || swiperInstance.isBeginning || !thoughtSlider.contains(event.target)) {
					document.body.classList.remove('lock-scroll');
				} else {
					document.body.classList.add('lock-scroll');
				}
			}
		});

		thoughtSlider.addEventListener('touchend', function(event) {
			if (swiperInstance.isEnd || swiperInstance.isBeginning || !thoughtSlider.contains(event.target)) {
				document.body.classList.remove('lock-scroll');
			} else {
				document.body.classList.add('lock-scroll');
			}
		});

		// Дополнительный обработчик для снятия lock-scroll, если свайп был за пределами слайдера
		document.addEventListener('touchmove', function(event) {
			if (!thoughtSlider.contains(event.target)) {
				document.body.classList.remove('lock-scroll');
			}
		});

		document.addEventListener('touchend', function(event) {
			if (!thoughtSlider.contains(event.target)) {
				document.body.classList.remove('lock-scroll');
			}
		});

   }
});