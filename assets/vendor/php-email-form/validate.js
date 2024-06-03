// (function () {
//     "use strict";
  
//     let forms = document.querySelectorAll('.php-email-form');
  
//     forms.forEach(function (e) {
//       e.addEventListener('submit', function (event) {
//         event.preventDefault();
  
//         let thisForm = this;
  
//         thisForm.querySelector('.loading').classList.add('d-block');
//         thisForm.querySelector('.error-message').classList.remove('d-block');
//         thisForm.querySelector('.sent-message').classList.remove('d-block');
  
//         // Placeholder for form submission logic
//         // You can add your form submission logic here
  
//         // Example UI update logic for successful submission
//         setTimeout(() => {
//           thisForm.querySelector('.loading').classList.remove('d-block');
//           thisForm.querySelector('.sent-message').classList.add('d-block');
//           thisForm.reset();
//         }, 2000);
  
//         // Example UI update logic for failed submission
//         // Uncomment this to simulate an error
//         /*
//         setTimeout(() => {
//           thisForm.querySelector('.loading').classList.remove('d-block');
//           displayError(thisForm, 'Form submission failed.');
//         }, 2000);
//         */
//       });
//     });
  
//     function displayError(thisForm, error) {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       thisForm.querySelector('.error-message').innerHTML = error;
//       thisForm.querySelector('.error-message').classList.add('d-block');
//     }
  
//   })();
   