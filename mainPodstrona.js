var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'img/jakstworzycHTMLA.jpg') {
        myImage.setAttribute('src','img/mesytacja.jpg');
    } else {
        myImage.setAttribute('src','img/jakstworzycHTMLA.jpg');
    }
}


const articleFooter = document.querySelector('.article__footer--js');

// const box = $('.box'); w jquerry skrót zamiast całego document.querySelector
// console.log(box);
console.log(articleFooter);
console.log(articleFooter.innerHTML);// pokazuje zawartość bloku bez znaczników

articleFooter.innerHTML = 'Łukasz Szczurowski!'; // nadpisuje zawartość danego bloku


const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0]);
