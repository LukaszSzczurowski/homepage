const name='Łukasz';
const age=36;
console.log(`Witaj na mojej stronie. Nazywam się ${name} i 
mam ${age} lat 😎`);

//var name = prompt('Please enter your name.');
//alert('Witaj na mojej stronie ' + name);

/*
var articleHeader = document.querySelector('h1');

setTimeout(function() {
    articleHeader.innerHTML = 'Łukasz Szczurowski - Strona domowa - pozdro github'  ;
}, 12000);

setWelcomeUser();

function setWelcomeUser() {
    
    var userName = prompt('Please enter your name.');
    localStorage.setItem('username', userName);
    articleHeader.textContent = 'Welcome, ' + userName ;
    
}

const about = document.querySelector('.about__paragraf--js');
const articleFooter = document.querySelector('.article__footer--js');

// const box = $('.box'); w jquerry skrót zamiast całego document.querySelector
// console.log(box);
console.log(articleFooter.innerHTML);
console.log(about.innerHTML); // pokazuje zawartość bloku bez znaczników
about.innerHTML = 'Pozdro <h1>JS</h1>!'; // nadpisuje zawartość danego bloku


const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0]);
*/

const button = document.querySelector('.header__buton--js');
console.log(button);

function handleClick(){
    console.log('klik');
}

/*
button.addEventListener('click', (e) => {
    const header = document.querySelector('.header__title--js');
    header.innerHTML = 'KLIK KLIK';
    header.classList.toggle('header__title--red');  // podajemy klase bez kropki
    
});
*/

const navigationSwitcher = document.querySelector('.navigation__switcher--js');
console.log(navigationSwitcher);
const navigationList = document.querySelector('.navigation__list--js');
console.log(navigationList);

navigationSwitcher.addEventListener('click', (e) => {
    navigationList.classList.toggle('navigation__list--visible');
    if(navigationList.classList.contains('navigation__list--visible')){
        navigationSwitcher.innerHTML = 'X';
    } else {
        navigationSwitcher.innerHTML = '&#9776';
    }

});