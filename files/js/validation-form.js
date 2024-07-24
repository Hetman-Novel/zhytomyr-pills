"use strict"

document.addEventListener('DOMContentLoaded', function () {

   // Contact form ->
   const form = document.getElementById('checkout-form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidation(form);

      let formData = new FormData(form);
      //formData.append('contact-file', file.files[0]);

      if (error === 0) {
         form.classList.add('_sending');
         let response = await fetch('#', {
            method: 'POST',
            body: formData
         });
         if (response.ok) { // Отправлено
            //let result = await response.json();
            //alert(result.message);
            //formPreview.innerHTML = '';
            form.reset();
            form.classList.remove('_sending');
            //document.getElementById('contact-text-after-sending').classList.add('good');
            //setTimeout(() => {
               //document.getElementById('contact-text-after-sending').classList.remove('good');
            //}, 5000);
         } else { // Не отправлено
            //alert('Произошла ошибка при отправке');
            //form.classList.remove('_sending');
            //document.getElementById('contact-text-after-sending').classList.add('no-good');
            //setTimeout(() => {
               //document.getElementById('contact-text-after-sending').classList.remove('no-good');
            //}, 5000);
         }
      } else {
         //alert('Заполните обязательные поля');
      }
   }

   function formValidation(form) {

      let error = 0;
      let formReq = document.querySelectorAll('._require');

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

         if (input.classList.contains('_email')) {
            if (emailTest(input)) {
               formAddError(input);
               error++;
            }
         } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
            formAddError(input);
            error++;
         } else {
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }
   function formAddError(input) {
      input.parentElement.classList.add('no-valid');
      input.parentElement.classList.remove('valid');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('no-valid');
      input.parentElement.classList.add('valid');
   }
   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }

   // Файл
   //const file = document.getElementById('contact-file');

   // Див для выбранного файла
   //const formPreview = document.getElementById('formPreview');

   // слушает на изменение в поле файла
   /*
   file.addEventListener('change', () => {
      uploadFile(file.files[0]);
   });
   */

   //function uploadFile(file) {

      // проверяет тип файла
      /*
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
         //alert('Разрешено только изображение.');
         document.getElementById('only-allowed-in-format').classList.add('show');
         setTimeout(() => {
            document.getElementById('only-allowed-in-format').classList.remove('show');
         }, 5000);
         file.value = '';
         return;
      }
         */

      // проверка размера файла (< 2 МБ)
      /*
      if (file.size > 2 * 1024 * 1024) { // Файл должен быть менее 2 МБ.
         document.getElementById('image-weight-limit').classList.add('show');
         setTimeout(() => {
            document.getElementById('image-weight-limit').classList.remove('show');
         }, 5000);
         return;
      }
      */

      // вывести файл в качестве превью
      /*
      var reader = new FileReader();
      reader.onload = function (e) {
         formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
      };
      reader.onerror = function (e) { // Ошибка загрузки файла
         document.getElementById('error-loading-image').classList.add('show');
         setTimeout(() => {
            document.getElementById('error-loading-image').classList.remove('show');
         }, 5000);
      };
      reader.readAsDataURL(file);
      */
   //}
   
   // Получаем ссылку на поле ввода файла и элемент для вывода информации о файле
   /*const fileInput = document.getElementById('upload-file');
   const fileInfoElement = document.getElementById('work-with-us-file-name');

   // Добавляем слушателя события change к полю ввода файла
   fileInput.addEventListener('change', function() {
      if (fileInput.files.length > 0) {
            // Извлекаем информацию о выбранном файле
            const selectedFile = fileInput.files[0];
            const fileName = selectedFile.name;
            const fileFormat = fileName.split('.').pop().toLowerCase(); // Получаем формат файла и переводим в нижний регистр

            // Поддерживаемые форматы
            const supportedFormats = [".doc", ".docx", ".odt", ".rtf", ".pdf", ".ppt", ".pptx"];

            if (supportedFormats.includes(`.${fileFormat}`)) {
               // Выводим название и формат файла в элемент
               fileInfoElement.textContent = `Название: ${fileName}, Формат: ${fileFormat}`;
            } else {
               // Уведомляем пользователя о неподдерживаемом формате
               fileInfoElement.textContent = 'Только .doc, .docx, .odt, .rtf, .pdf, .ppt, .pptx поддерживаются.';
               // Очищаем поле ввода файла
               fileInput.value = '';
            }
      } else {
            fileInfoElement.textContent = ''; // Очищаем информацию, если файл не выбран
      }
   });*/
});