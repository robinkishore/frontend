const quotes = [{
    quote: `"TO-DO-LIST"`,
    writer: ``
}, {
    quote: `"CALCULATOR"`,
    writer: ``
}, {
    quote: `"TEXT TO SPEECH CONVERTER"`,
    writer: ``

},]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);


    quote.innerHTML = quotes[random].quote;


    writer.innerHTML = quotes[random].writer;
})
