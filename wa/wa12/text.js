const newQuoteBtn = document.querySelector("#js-new-quote");
newQuoteBtn.addEventListener('click', getQuote);

var category = 'happiness';
const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener('click', getAnswer);

const answerText = document.querySelector("#js-answer-text");
const apiEndpoint = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

let answer = '';


$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + 'happiness',
    headers: { 'X-Api-Key': 'tKmb0KHu/hF2+zG7kouFpQ==SF0IaEqDCZTdvUh5'},
    contentType: 'application/json',
    success: getQuote(result),
    error: function ajaxError(jqXHR) {
        console.error('Error: Category does not exist', jqXHR.responseText);
    }
    
});

async function getQuote() {
    const json = await result.json();
    console.log(json['quote']);
    displayQuote(json['quote']);
    console.log(json['answer']);
    answer = json['answer'];
    answerText.textContent = '';


}
function displayQuote(quote) {
    const quoteText = document.querySelector
    ("#js-quote-text");
    quoteText.textContent = quote;
}

function getAnswer() {
    answerText.textContent = answer;
}
getQuote();