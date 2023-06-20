// Character declarations
// This code be improved the using character codes

var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperChar = lowChar.map(item => item.toUpperCase());

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "?"];

var arrChar = [lowChar, upperChar, numChar, specChar];

var charTypes = ["lowercase", "uppercase", "numeric", "special"];

//Global variables 
//most could be local, but left for de-Bugging 
var generateBtn = document.querySelector("#generate");
var selection = [];
var counter = 0;
var passHolder = "";
var passChar = "test";
var lenPass = 8;

//Password generations function
//iterates through the character Arrays
//Could be improved by either scrambling the end result 
function generatePassword() {

  var newArrChar = []
  lenPass = parseInt( prompt("Enter length of password. Length must be between 8 - 128 characters."))

  if (lenPass< 8 || lenPass > 129) {
    alert("Incorrect length entered. Please try again.")
    return;

  } else {
      for (i=0; i < charTypes.length; i++) {
        selection[i] = confirm("Do you want your password to contain " + charTypes[i] + " characters?")

        if (selection[i]) {
          newArrChar.push(arrChar[i])
          counter++
        }
        console.log(newArrChar)
        console.log(lenPass) // confirm deBug
        console.log(selection[i]) //selection deBug
      }
      if (counter==0) {
        alert("You must select at least one character type")
        return;
      }
        for (j=0; j < lenPass; j++) {

          passHolder = passHolder + newArrChar[j%newArrChar.length][(Math.floor(Math.random()*newArrChar[j%newArrChar.length].length))]
          
          }
        }
       return passHolder;
      }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//Code Desert
// Various things I was trying before going with my final approach

// if (selection[j] && j === charTypes.length-1) {
//   passChar[j] = randNum + 1;
// }
// else 

// function generatePassword() {
//   lenPass = parseInt( prompt("Enter length of password. Length must be between 8 - 128 characters."))

//   if (lenPass< 8 || lenPass > 129) {
//     alert("Incorrect length entered. Please try again.")
//     return;

//   } else {
//       for (i=0; i < charTypes.length; i++) {
//         selection[i] = confirm("Do you want your password to contain " + charTypes[i] + " characters?")
//         console.log(lenPass) // confirm deBug
//         console.log(selection[i]) //selection deBug
        
//         newLen = Math.floor(Math.random() * ((lenPass - 3)-newLen))
        
//         for (j=0; j < newLen; j++) {
//           if (selection[i]) {
            
//           passHolder = passHolder + arrChar[i][(Math.floor(Math.random()*arrChar[i].length))]
          
//           }
//         }
//         passChar = passChar + passHolder; 
//       }
//     }
//   }