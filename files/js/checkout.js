document.addEventListener('DOMContentLoaded', function () {

   let bankTransferChecked = document.getElementById('bank-transfer-checked')
   if (bankTransferChecked) {

      bankTransferChecked.addEventListener('click', () => {
         document.getElementById("payment-number-card").value = "";
         document.getElementById("payment-expiry").value = "";
         document.getElementById("payment-cvv").value = "";
      })
   }


   const creditCardLabel = document.querySelector('.credit-card');
   const bankTransferLabel = document.querySelector('.bank-transfer');

   if (creditCardLabel && bankTransferLabel) {
      function updateActiveClass(event) {
         if (event.target.closest('.credit-card')) {
            creditCardLabel.classList.add('active');
            bankTransferLabel.classList.remove('active');
         } else if (event.target.closest('.bank-transfer')) {
            bankTransferLabel.classList.add('active');
            creditCardLabel.classList.remove('active');
         }
      }
      creditCardLabel.addEventListener('click', updateActiveClass);
      bankTransferLabel.addEventListener('click', updateActiveClass);
   }


   /*const paymentRadios = document.querySelectorAll('input[name="payment"]');
   let isFirstClick = true;
   function toggleVisibility(radio) {
      const allWrapDataElements = document.querySelectorAll('.wrap-data');
      const allTextInfoElements = document.querySelectorAll('.text-info');

      // Hide all wrap-data and text-info elements
      allWrapDataElements.forEach(element => {
         element.style.maxHeight = '0';
         //element.style.padding = '0';
         element.style.overflow = 'hidden';
      });
      allTextInfoElements.forEach(element => {
         element.style.maxHeight = '0';
         //element.style.padding = '0';
         element.style.overflow = 'hidden';
      });

      // Show the closest wrap-data and text-info elements of the checked radio button
      if (radio.checked) {
         const wrapData = radio.closest('label').querySelector('.wrap-data');
         const textInfo = radio.closest('label').querySelector('.text-info');
         if (wrapData) {
            wrapData.style.maxHeight = wrapData.scrollHeight + 'px';
            //wrapData.style.padding = '10px'; // or whatever padding you need
            wrapData.style.overflow = 'visible';
         }
         if (textInfo) {
            textInfo.style.maxHeight = textInfo.scrollHeight + 'px';
            //textInfo.style.padding = '10px'; // or whatever padding you need
            textInfo.style.overflow = 'visible';
         }
      }
   }
   paymentRadios.forEach(radio => {
      radio.addEventListener('change', function () {
         if (isFirstClick) {
            isFirstClick = false;
         }
         toggleVisibility(this);
      });
   });
   // Trigger change event on page load to handle default checked state
   const checkedRadio = document.querySelector('input[name="payment"]:checked');
   if (checkedRadio) {
      toggleVisibility(checkedRadio);
   }
   */


   const billingCheckbox = document.getElementById('my-billing-checkbox');
   const additionalFields = document.getElementById('additional-fields');
   const addressAndPaymentItems = document.querySelector('.address-and-payment__items');

   if (billingCheckbox && additionalFields) {
      function toggleAdditionalFields() {
         if (billingCheckbox.checked) {
            additionalFields.classList.add('show');
            addressAndPaymentItems.classList.add('show-additional-fields');
         } else {
            additionalFields.classList.remove('show');
            addressAndPaymentItems.classList.remove('show-additional-fields');
         }
      }

      // Initial check
      toggleAdditionalFields();

      // Add event listener for changes
      billingCheckbox.addEventListener('change', toggleAdditionalFields);
   }

});