const newQuoteBtn = document.querySelector("#js-new-quote");

var category = 'happiness';
const answerBtn = document.querySelector("#js-tweet");

const answerText = document.querySelector("#js-answer-text");
const apiEndpoint = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

let answer = '';


var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'tKmb0KHu/hF2+zG7kouFpQ==SF0IaEqDCZTdvUh5'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});