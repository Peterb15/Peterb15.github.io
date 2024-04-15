




const newQuoteBtn = document.querySelector("#js-new-quote");
newQuoteBtn.addEventListener('click', getQuote);
//newQuoteBtn.addEventListener('click', getCategory);

const authorBtn = document.querySelector("#js-tweet");
authorBtn.addEventListener('click', getAnswer);

const authorText = document.querySelector("#js-author-text");




var category;

let answer = '';

const words = []
async function getQuote() {
    getCategory();
    console.log(category);
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'tKmb0KHu/hF2+zG7kouFpQ==SF0IaEqDCZTdvUh5'},
        contentType: 'application/json',
        success: async function(result) 
        {

            console.log(result[0].quote);
            displayQuote(result[0].quote);
            console.log(result[0].author);
            author = result[0].author;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            displayQuote('Not a category');
        }
    });
}

function displayQuote(temp) {
    const quoteText = document.querySelector
    ("#js-quote-text");
    console.log(quoteText.textContent)
    quoteText.textContent = temp;
    console.log(quoteText.textContent)
}
function getAnswer() {
    authorText.textContent = author;
}

function getCategory(){
    temp = document.getElementById("category");
    category = temp.value;

}