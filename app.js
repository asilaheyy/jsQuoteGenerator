let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let language = document.querySelector('.language');


const quotes = [{
    quote: `Hola!`,
    language: `Spanish`
},{
    quote: `Hei!`,
    language: `Finnish`
},{
    quote: `Hello!`,
    language: `English`
},{
    quote: `Привет!`,
    language: `Russian`
}];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    language.innerText = quotes[random].language;
})
