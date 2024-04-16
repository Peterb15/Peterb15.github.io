

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

            console.log(result[1].quote);
            displayQuote(result[0].quote);
            console.log(result[0].author);
            author = result[0].author;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            displayQuote("Not a category");
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


/* I decided to extend by quote machine by having the use input a category of quote they are interested in recieving. This input is used in the obtaining of the quote via the API. It will then display the quote to the user, the user can then ask the interface to show you the author if they wish. It can also obtain a new quote in the same category or a different category if you so choose. Listed below are all the options for categories, if you do not enter one of these keywords no quote will display.


age
alone
amazing
anger
architecture
art
attitude
beauty
best
birthday
business
car
change
communication
computers
cool
courage
dad
dating
death
design
dreams
education
environmental
equality
experience
failure
faith
family
famous
fear
fitness
food
forgiveness
freedom
friendship
funny
future
god
good
government
graduation
great
happiness
health
history
home
hope
humor
imagination
inspirational
intelligence
jealousy
knowledge
leadership
learning
legal
life
love
marriage
medical
men
mom
money
morning
movies
success

*/