// Assignment code
var generateBtn = document.querySelector("#generate");

var charactertype = { 
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  UpperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "`", "|", "~"],
}

// Generating  function.
function generatePassword() { 
  var userPassword = userInput();
 return userPasswor; 
}

// functing random characters 
function randomChar(array) {
    var i = Math.floor(Math.random() * array.length);
    var element = array[i];
    return element;
} 

//logics for user chioces.
function userInput () { 

    var passwordLength = parseInt(prompt ("how many characters would you like your password to contain."));
    
    var charactertpenumbers;
    var charactertypelowerCase;
    var charactertypeUppercase;
    var charactertypesymbols;

    //Additional Varaibles with empty arrays
    var userPassword = [];
    var userCharacters = [];
    var charactersInc = [];

  
    //Alerts
    if (isNaN(passwordLength) === true) {
      alert("Sorry, the password length must be provided as a number. Please try again!");
      return
      
    } 
    console.log( typeof passwordLength);
    if( typeof passwordLength === 'string') {
      alert ("password length must be provided as a number.");
      return
    }
    if (passwordLength <= 8) {
      alert ("password length must be at least 8 characters.");
      return
    }
    if (passwordLength >= 128) {
      alert ("password length must be less than 128 characters.");
      return
    }
    

     charactertypeUpperCase = confirm ("Click OK to include upper case letters in your password.");
     charactertypelowerCase = confirm ("Click OK to include lower case letters in your password.");
     charactertypenumbers = confirm ("Click OK to include numbers in your password.");
     charactertypesymbols = confirm ("Click OK to include special characters in your password.");

    //  
    if (!charactertypenumbers && !charactertypelowerCase && !charactertypeUpperCase && !charactertypesymbols) {
      alert("Please select at least one character type to generate the password.");
      return
    }

}
//write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);