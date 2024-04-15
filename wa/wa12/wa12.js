const newQuoteBtn = document.querySelector("#js-new-quote");
newQuoteBtn.addEventListener('click', getQuote);


const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener('click', getAnswer);

var category = document.getElementById('customname');


const answerText = document.querySelector("#js-answer-text");
const apiEndpoint = 'https://api.api-ninjas.com/v1/quotes?category=';

let author = '';



$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'tKmb0KHu/hF2+zG7kouFpQ==SF0IaEqDCZTdvUh5'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        getQuote(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: Category does not exist', jqXHR.responseText);
    }
    
});
async function getQuote() {


    try {
        
    } catch (err) {
        alert('Failed to fetch new quote');
    }
}
function displayQuote(quote) {
    const quoteText = document.querySelector
    ("#js-quote-text");
    quoteText.textContent = quote;
}

function getAnswer() {
    answerText.textContent = author;
}
getQuote();