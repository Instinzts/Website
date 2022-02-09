// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('dark');

const darkModeToggle = document.querySelector('.switch');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('dark', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('dark', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('dark');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

const launchDate = new Date('April 28, 2022 00:00:00').getTime();

const intvl = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //display time 
  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;

  let timeup = document.querySelector('.landing')
  let after = document.querySelector('.after')

  if(distance < 0 ) {
    clearInterval(intvl);
    timeup.style.display = 'none';
    after.style.display = 'block';
  }
}, 1000)