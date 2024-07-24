function checkCookie() {
   // set the cookie name and validity period in days
   const cookieName = 'myCookie';
   const cookieDuration = 7;

   // check if a cookie with a given name exists
   const cookieValue = document.cookie.replace(
      new RegExp(
         "(?:(?:^|.*;)\\s*" +
         cookieName.replace(/[\-\.\+\*]/g, "\\$&") +
         "\\s*\\=\\s*([^;]*).*$)|^.*$"
      ),
      "$1"
   );
   const currentTime = new Date().getTime();

   if (!cookieValue) {
      // if the cookie does not exist, add classes
      document.querySelector('.block-cookie').classList.add('show');
   } else {
      // if the cookie exists, check the validity period
      const cookieTime = parseInt(cookieValue);
      const expireTime = cookieTime + cookieDuration * 24 * 60 * 60 * 1000;
      if (currentTime > expireTime) {
         // if the validity period has expired, add classes
         document.querySelector('.block-cookie').classList.add('show');
      }
   }

   // set a new cookie value
   document.cookie = `${cookieName}=${currentTime}; expires=${new Date(
      currentTime + cookieDuration * 24 * 60 * 60 * 1000
   ).toUTCString()}; path=/`;
}

// call the function when the page loads
window.addEventListener('load', checkCookie);

let closeBlockCookie = document.getElementById('close-block-cookie')
if (closeBlockCookie) {
   closeBlockCookie.addEventListener('click', () => {
      closeBlockCookie.parentNode.parentNode.classList.remove('show')
   })
}