const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

/*<<<< LOADING SCREEN >>>>*/

const loader = document.getElementById('loader');

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Get quotes from external API
let apiQuotes = [];

function newQuote() {
  showLoadingSpinner();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)] 
  // Check if quote has an author.
  if (!quote.author ){
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // Check length
  if(quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

async function getQuotes() {
  showLoadingSpinner();
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  // const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
    // throw new Error("ops")   
  } catch (error){
    alert("there was an error try again later")
    
  }
}

getQuotes();


// Load from local file
// function newQuote() {
  //   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)] 
  //   authorText.textContent = quote.author;
  //   quoteText.textContent = quote.text;
// }

// newQuote();


//Tweet quote
function tweetQuote() {
  const twitterURl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${authorText.textContent}`;
  window.open(twitterURl, '_blank');
  
}

newQuoteBtn.addEventListener("click",newQuote);
twitterBtn.addEventListener("click",tweetQuote);


