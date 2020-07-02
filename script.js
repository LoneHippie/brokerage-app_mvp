const menu = document.getElementById('menu');
const btnOpen = document.getElementById('open');
const btnClose = document.getElementById('close');

if (menu.classList.contains('active')) menu.classList.remove('active');

btnOpen.addEventListener('click', function() {
    menu.classList.add('active');
});

btnClose.addEventListener('click', function() {
    menu.classList.toggle('active');
})
