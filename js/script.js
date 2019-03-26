//Globals
var paraText;
var paraTextArray;
var wordSearch;
var noOfTimes = 0;
var foundStatus = false;

//DOM Elements
const para = document.querySelector("#paragraph");
const search = document.querySelector("#search");
const button = document.querySelector("#button");

//Table entries
const word = document.querySelector("#word");
const found = document.querySelector("#found");
const times = document.querySelector("#times");

//Add event Listener to textarea to get its content.
para.addEventListener("input", paragraph);

function paragraph() {
  //Get paragraph content
  paraText = para.value.toLowerCase();
  //Convert the content into an array
  paraTextArray = paraText.split(' ');

}

//Called when the submit button is pressed.
function findWord() {
  wordSearch = search.value.toLowerCase();
  //Call to actual find logic
  find(wordSearch, paraTextArray);
  //Display Result
  display(wordSearch, found, noOfTimes);
  //Disable search after one search. Reset button will reset the app.
  search.setAttribute("disabled","");
  button.setAttribute("disabled","");
  search.style.cursor = "not-allowed";
  button.style.cursor = "not-allowed";
}

function find(wordSearch, paraTextArray) {
  
  for( var i = 0; i < paraTextArray.length; i++) {
    
    if(wordSearch === paraTextArray[i]) {
      noOfTimes++;
      foundStatus = true;
    } 
  } 
}

function display(wordSearch, found, noOfTimes) {
  word.innerHTML = wordSearch;
  found.innerHTML = foundStatus;
  times.innerHTML = noOfTimes;
}


//Reset button 
function reset() {
  //Normalize search bar and buttons
  search.removeAttribute("disabled");
  button.removeAttribute("disabled");
  search.style.cursor = "auto";
  button.style.cursor = "auto";
  para.value="";
  search.value="";
  
  //Clear existing values
  paraText = "";
  paraTextArray.length = 0;
  wordSearch = "";
  noOfTimes = 0;
  foundStatus = false;
  
  //Make initial table values
  word.innerHTML = "-";
  found.innerHTML = "-";
  times.innerHTML = "-";
  
  para.focus();
}


