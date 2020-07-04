const menu = document.getElementById('menu');
const btnOpenMenu = document.getElementById('open-menu');
const btnCloseMenu = document.getElementById('close-menu');

const searchMenu = document.getElementById('search-menu');
const btnOpenSearch = document.getElementById('open-search');
const btnCloseSearch = document.getElementById('close-search');

const blur = document.getElementById('blur');

const marketTimer = document.getElementById('market-timer');
const localTimer = document.getElementById('local-timer');

const suggestions = document.getElementById('query-gen');


//side menu functionality
if (menu.classList.contains('active')) menu.classList.remove('active');
if (searchMenu.classList.contains('active')) searchMenu.classList.remove('active');
if (blur.classList.contains('active')) blur.classList.remove('active');

if (suggestions.classList.contains('active')) suggestions.classList.remove('active');

btnOpenMenu.addEventListener('click', function() {
    menu.classList.add('active');
    blur.classList.add('active');
});

btnCloseMenu.addEventListener('click', function() {
    menu.classList.toggle('active');
    blur.classList.toggle('active');
});

btnOpenSearch.addEventListener('click', function() {
   searchMenu.classList.add('active');

   search.value = '';
   insert.innerHTML = '';
});

btnCloseSearch.addEventListener('click', function() {
    searchMenu.classList.toggle('active');

    suggestions.classList.remove('active');
});

blur.addEventListener('click', function() {
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

//dummy databasing

const Stock = function(nameShort, nameFull, price, value) { //value 0 = negative, 1 = positive
    this.nameShort = nameShort,
    this.nameFull = nameFull,
    this.price = price,
    this.value = value
};

const stock0 = new Stock('DIS', 'Walt Disney Company', '$112.18', 0);
const stock1 = new Stock('KO', 'Coca-Cola Co', '$44.88', 1);
const stock2 = new Stock('XOM', 'Exxon Mobile Corporation', '$44.08', 1);
const stock3 = new Stock('PEP', 'Pepsico Inc', '$123.85', 1);
const stock4 = new Stock('TM', 'Toyota Motor Corp', '$126.39', 1);
const stock5 = new Stock('ORCL', 'Oracle Corp', '$55.94', 1);
const stock6 = new Stock('NKE', 'Nike Inc', '$98.43', 1);
const stock7 = new Stock('IBM', 'International Bus Mach Corp', '$119.17', 1);
const stock8 = new Stock('V', 'Visa Inc', '$195.67', 1);
const stock9 = new Stock('JPM', 'JPMorgan Chase & Co', '$92.66', 0);
const stock10 = new Stock('INTC', 'Intel Corp', '$59.13', 1);
const stock11 = new Stock('BSX', 'Boston Scientific Corp', '$35.83', 1);
const stock12 = new Stock('SPOT', 'Spotify Technology S.A.', '$271.49', 1);
const stock13 = new Stock('SQ', 'Square Inc', '$113.39', 0);
const stock14 = new Stock('AC', 'Air Canada', '$17.21', 1);
const stock15 = new Stock('CSCO', 'Cisco Systems Inc', '$45.63', 0);
const stock16 = new Stock('DAL', 'Delta Air Lines Inc', '$27.72', 1);
const stock17 = new Stock('EA', 'Electronic Arts Inc', '$133.84', 0);
const stock18 = new Stock('GS', 'Goldman Sachs Group Inc', '$197.40', 1);
const stock19 = new Stock('HTZ', 'Hertz Global Holding Inc', '$1.50', 1);
const stock20 = new Stock('K', 'Kellogg Company', '$66.31', 1);
const stock21 = new Stock('LMT', 'Lockheed Martin Corp', '$362.00', 1);
const stock22 = new Stock('MU', 'Micron Technology Inc', '$49.83', 1);
const stock23 = new Stock('NVDA', 'Nvidia Corp', '$389.49', 1);
const stock24 = new Stock('OAS', 'Oasis Petroleum Inc', '$0.75', 0);
const stock25 = new Stock('QCOM', 'Qualcomm Inc', '$91.87', 1);

let stocks = [stock0, stock1, stock2, stock3, stock4, stock5, stock6, stock7, stock8, stock9, stock10, stock11, stock12, stock13, stock14, stock15, stock16, stock17, stock18, stock19, stock20, stock21, stock22, stock23, stock24, stock25];

console.log(stocks);

const search = document.getElementById('search-query');

const insert = document.getElementById('gen');

search.addEventListener('input', function() {

    insert.innerHTML = '';

    let query = search.value.toUpperCase();

    let queryMatch;

    query !== '' ? queryMatch = stocks.filter(el => el.nameShort.includes(query)) : queryMatch = '';

    queryMatch.length > 0 ? suggestions.classList.add('active') : suggestions.classList.remove('active');

    for (el of queryMatch) {
        let html, newhtml;

        html = '<li class="item"><span class="item--short">%SHORT%</span><br><span class="item--full">%FULL%</span></li>';

        if (queryMatch.length !== 0) {
            newhtml = html.replace('%SHORT%', el.nameShort);
            newhtml = newhtml.replace('%FULL%', el.nameFull);
        } else {
            newhtml = html.replace('%SHORT%', 'No results found');
            newhtml = newhtml.replace('%FULL%', '');
        };

        insert.insertAdjacentHTML('beforeend', newhtml);
    };
});