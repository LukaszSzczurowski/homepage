const name='Łukasz';
const age=36;
console.log(`Witaj na mojej stronie. Nazywam się ${name} i 
mam ${age} lat 😎`);

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
