const menu = document.getElementById('menu');
const btnOpen = document.getElementById('open');
const btnClose = document.getElementById('close');

const blur = document.getElementById('blur');

const marketTimer = document.getElementById('market-timer');
const localTimer = document.getElementById('local-timer');


//side menu functionality
if (menu.classList.contains('active')) menu.classList.remove('active');
if (blur.classList.contains('active')) blur.classList.remove('active');

btnOpen.addEventListener('click', function() {
    menu.classList.add('active');
    blur.classList.add('active');
});

btnClose.addEventListener('click', function() {
    menu.classList.toggle('active');
    blur.classList.toggle('active');
});


//time definitions
let hourMarket = new Date().getHours() - 7;
let hourLocal = new Date().getHours();
let min = new Date().getMinutes();
min >= 30 ? min = 0.5 : min = 0;
time = hourMarket + min;

//initial load
//market schedule
time >= 9.5 && time < 16 ? marketTimer.textContent = `Market Closes in ${16 - time}hrs` : marketTimer.textContent = `Market Opens at 02:00`; 

//local timezone menu greeting
if (hourLocal >= 6 && hourLocal < 12) {
    localTimer.textContent = 'Good Morning';
} else if (hourLocal >= 12 && hourLocal <18) {
    localTimer.textContent = 'Good Afternoon';
} else {
    localTimer.textContent = 'Good Evening';
};

//per minute update - disabled due to increasing menu open speed
// setInterval(() => {
//     time >= 9.5 && time < 16 ? marketTimer.textContent = `Market Closes in ${16 - time}hrs` : marketTimer.textContent = `Market Opens at 02:00`;

//     if (hourLocal >= 6 && hourLocal < 12) {
//         localTimer.textContent = 'Good Morning';
//     } else if (hourLocal >= 12 && hourLocal <18) {
//         localTimer.textContent = 'Good Afternoon';
//     } else {
//         localTimer.textContent = 'Good Evening';
//     };

// }, 60000);