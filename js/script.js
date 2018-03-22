// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener('click', printQuote, false);

var randomBackground;
var randomQuote;
var randomInt;
var backupQuotes;
var html;
var div;

//Object literal quotations
var quotes = [
    {
      quote: 'Do not pray for an easy life, pray for the strength to endure a difficult one.',
      source: 'Bruce Lee',
      tag: 'Life'
    },

    {
      quote: "The only way to do great work is to love what you do.If you haven't found it yet, keep looking. Don't settle.",
      source: 'Steve Jobs',
      tag: 'Work'
    },

    {
      quote: 'Talk to yourself once a day, otherwise you may miss meeting an excellent person in this world.',
      source: 'Swami Vivekananda',
      tag: 'Confidence'
    },

    {
      quote: "Don't be dead serious about your life, it's just a play.",
      source: 'Sadhguru Jaggi Vasudev',
      tag: 'Enlightenment'
    },

    {
      quote: 'I think it is possible for ordinary people to choose to be extraordinary.',
      source: 'Elon Musk',
      tag: 'Motivation'
}

];

//Random number function
function getRandomQuote() {
  var randomInt = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomInt];
  return randomQuote;
}

// Function that calls on randomQuote then prints to HTML
function printQuote() {
  var randomQuote = getRandomQuote();
  html = '<p class = "quote">' + randomQuote.quote + '</p>';
  html += '<p class = "source">' + randomQuote.source;
  html += '<span class= "citation">' + [randomQuote.citation] + '</span>';
  html += '<span class= "year">' + [randomQuote.year] + '</span>';
  html += '<span class= "tags">' + [randomQuote.tags] + '</span>' + '</p>';

  //Logs printQuote function to HTML document
  document.getElementById('quote-box').innerHTML = html;
  randomBackground();
  console.log(div);
}

//Random changing background color
function randomBackground() {
  var red = Math.floor( Math.random() * 256);
  var green = Math.floor( Math.random() * 256);
  var blue = Math.floor( Math.random() * 256);
  var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.backgroundColor = randomColor;
  console.log(randomColor);

}

//changes quote every 15 seconds.
var myChange = setInterval(change, 15000)
function change() {
  randomBackground();
  printQuote();
}
//This calls change function
change();
