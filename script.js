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

const energy = document.getElementById('check-energy');
const tech = document.getElementById('check-tech');
const finance = document.getElementById('check-finance');


//side menu functionality

//init
if (menu.classList.contains('active')) menu.classList.remove('active');
if (searchMenu.classList.contains('active')) searchMenu.classList.remove('active');
if (blur.classList.contains('active')) blur.classList.remove('active');

if (suggestions.classList.contains('active')) suggestions.classList.remove('active');

//menu events
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

const Stock = function(nameShort, nameFull, price, value, type = undefined) { 
    this.nameShort = nameShort,
    this.nameFull = nameFull,
    this.price = price,
    this.value = value, //value 0 = negative, 1 = positive
    this.type = type //type 0 = energy stock, type 1 = tech stock, type 2 = finance/banking stock, type 3 = social media stock, type 4 = transport stock
};

const stock0 = new Stock('DIS', 'Walt Disney Company', '$112.18', 0);
const stock1 = new Stock('KO', 'Coca-Cola Co', '$44.88', 1);
const stock2 = new Stock('XOM', 'Exxon Mobile Corporation', '$44.08', 1, 0);
const stock3 = new Stock('PEP', 'Pepsico Inc', '$123.85', 1);
const stock4 = new Stock('TM', 'Toyota Motor Corp', '$126.39', 1, 4);
const stock5 = new Stock('ORCL', 'Oracle Corp', '$55.94', 1, 1);
const stock6 = new Stock('NKE', 'Nike Inc', '$98.43', 1);
const stock7 = new Stock('IBM', 'International Bus Mach Corp', '$119.17', 1, 1);
const stock8 = new Stock('V', 'Visa Inc', '$195.67', 1, 2);
const stock9 = new Stock('JPM', 'JPMorgan Chase & Co', '$92.66', 0, 2);
const stock10 = new Stock('INTC', 'Intel Corp', '$59.13', 1, 1);
const stock11 = new Stock('BSX', 'Boston Scientific Corp', '$35.83', 1, 1);
const stock12 = new Stock('SPOT', 'Spotify Technology S.A.', '$271.49', 1, 1);
const stock13 = new Stock('SQ', 'Square Inc', '$113.39', 0, 1);
const stock14 = new Stock('AC', 'Air Canada', '$17.21', 1, 4);
const stock15 = new Stock('CSCO', 'Cisco Systems Inc', '$45.63', 0, 1);
const stock16 = new Stock('DAL', 'Delta Air Lines Inc', '$27.72', 1, 4);
const stock17 = new Stock('EA', 'Electronic Arts Inc', '$133.84', 0, 1);
const stock18 = new Stock('GS', 'Goldman Sachs Group Inc', '$197.40', 1, 2);
const stock19 = new Stock('HTZ', 'Hertz Global Holding Inc', '$1.50', 1, 4);
const stock20 = new Stock('K', 'Kellogg Company', '$66.31', 1);
const stock21 = new Stock('LMT', 'Lockheed Martin Corp', '$362.00', 1);
const stock22 = new Stock('MU', 'Micron Technology Inc', '$49.83', 1, 1);
const stock23 = new Stock('NVDA', 'Nvidia Corp', '$389.49', 1, 1);
const stock24 = new Stock('OAS', 'Oasis Petroleum Inc', '$0.75', 0, 0);
const stock25 = new Stock('QCOM', 'Qualcomm Inc', '$91.87', 1, 1);
const stock26 = new Stock('TWTR', 'Twitter Inc', '$30.87', 1, 3);
const stock27 = new Stock('SNAP', 'Snap Inc', '$23.22', 0, 3);
const stock28 = new Stock('GE', 'General Electric Capital Corp', '$6.82', 1, 0);
const stock29 = new Stock('BP', 'British Pertroleum', '$23.44', 0, 0);
const stock30 = new Stock('PCG', 'PG&E Corporation', '$9.54', 1, 0);
const stock31 = new Stock('CVX', 'Chevron Corp', '$88.41', 1, 0);
const stock32 = new Stock('RDS', 'Royal Dutch Shell Plc', '$33.00', 0, 0);
const stock33 = new Stock('ZN', 'Zion Oil & Gas Inc', '$0.27', 0, 0);
const stock34 = new Stock('BAC', 'Bank Of America Corporation', '$23.29', 1, 2);
const stock35 = new Stock('AMD', 'Advanced Micro Devices Inc', '$52.34', 0, 1);
const stock36 = new Stock('ZNGA', 'Zynga Inc', '$9.53', 0, 1);
const stock37 = new Stock('SAVE', 'Spirit Airlines Inc', '$17.40', 0, 4);
const stock38 = new Stock('WORK', 'Slack Technologies Inc', '$30.31', 0, 1);
const stock39 = new Stock('VZ', 'Verizon Communications', '$54.79', 1, 1);
const stock40 = new Stock('X', 'United States Steel Corp', '$7.07', 1, 0);
const stock41 = new Stock('PLUG', 'Plug Power Inc', '$9.10', 1, 0);
const stock42 = new Stock('SHOP', 'Shopfiy Inc', '$1029.97', 1, 1);
const stock43 = new Stock('SWBI', 'Smith And Wesson Brands Inc', '$22.65', 1);
const stock44 = new Stock('WIX', 'Wix.com Ltd', '$272.85', 1, 1);
const stock45 = new Stock('ZM', 'Zoom Video COmmunications Inc', '$261.74', 1, 1);
const stock46 = new Stock('CALB', 'California Bancorp', '$14.43', 0, 2);
const stock47 = new Stock('COHN', 'Cohen & Company Inc', '$9.70', 0, 2);
const stock48 = new Stock('DB', 'Deutsche Bank AG', '$9.53', 1, 2);
const stock49 = new Stock('ELVT', 'Elevate Credit Inc', '$1.55', 1, 2);
const stock50 = new Stock('EPR', 'EPR Properties', '$32.97', 0, 2);
const stock51 = new Stock('EQBK', 'Equity Bankshares Inc', '$15.90', 1, 2);
const stock52 = new Stock('EQIX', 'Equinix Inc', '$718.41', 0, 2);
const stock53 = new Stock('EXCPU', 'Experience Investiments Corp', '$10.50', 1, 2);
const stock54 = new Stock('EZPW', 'EZCorp Inc', '$5.92', 0, 2); 

let stocks = [stock0, stock1, stock2, stock3, stock4, stock5, stock6, stock7, stock8, stock9, stock10, stock11, stock12, stock13, stock14, stock15, stock16, stock17, stock18, stock19, stock20, stock21, stock22, stock23, stock24, stock25, stock26, stock27, stock28, stock29, stock30, stock31, stock32, stock33, stock34, stock35, stock36, stock37, stock38, stock39, stock40, stock41, stock42, stock43, stock44, stock45, stock46, stock47, stock48, stock49, stock50, stock51, stock52, stock53, stock54];

let stocksEnergy = stocks.filter(el => el.type === 0);
let stocksTech = stocks.filter(el => el.type === 1);
let stocksFinance = stocks.filter(el => el.type === 2);
let stocksSocial = stocks.filter(el => el.type === 3);
let stocksTransit = stocks.filter(el => el.type === 4);

// console.log(stocks);
console.log(stocksEnergy);
console.log(stocksTech);
console.log(stocksFinance);
// console.log(stocksSocial);
// console.log(stocksTransit);

//stock search functionality

const search = document.getElementById('search-query');

const insert = document.getElementById('gen');

//function that triggers on text input update

/*
setInterval(() => { //will determine what to display from query matching based on checkbox combos
    if (tech.checked === true) {
        list = stocksTech;
        if (energy.checked === true) {
            list = list.concat(stocksEnergy);
            if (finance.checked === true) {
                list = list.concat(stocksFinance);
            }
        } else if (finance.checked === true) {
            list = list.concat(stocksFinance);
            if (energy.checked === true) {
                list = list.concat(stocksEnergy);
            }
        }
    } else if (energy.checked === true) {
        list = stocksEnergy;
        if (tech.checked === true) {
            list = list.concat(stocksTech);
            if (finance.checked === true) {
                list = list.concat(stocksFinance);
            }
        } else if (finance.checked === true) {
            list = list.concat(stocksFinance);
            if (tech.checked === true) {
                list = list.concat(stocksTech);
            }
        }
    } else if (finance.checked === true) {
        list = stocksFinance;
        if (tech.checked === true) {
            list = list.concat(stocksTech);
            if (energy.checked === true) {
                list = list.concat(stocksEnergy);
            }
        } else if (energy.checked === true) {
            list = list.concat(stocksEnergy);
            if (tech.checked === true) {
                list = list.concat(stocksTech);
            }
        }
    } else {
        list = stocks;
    }
}, 1000);
*/

document.addEventListener('click', function(event) { //clears list on checkbox event
    if (event.target.id === 'check-energy' || event.target.id === 'check-tech' || event.target.id === 'check-finance') {
        search.value = '';
        insert.innerHTML = '';
    }
})

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