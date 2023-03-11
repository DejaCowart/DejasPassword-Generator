// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Assigning variable to the prompts to ask the user how long they would like the password and if they want to include lowercase,uppercase, numbers etc.
  var length = prompt('Enter the desired length of your password:');
  var useLowerCase = confirm('Do you want to include lowercase letters?');
  var useUpperCase = confirm('Do you want to include uppercase letters?');
  var useNumbers = confirm('Do you want to include numbers?');
  var useSpecialChars = confirm('Do you want to include special characters?');

  var chars = '';
  var password = '';
  // if the user confirms if they would like to add these criterias, it will add them to the chars variable for the function.
  if (useLowerCase) {
    chars += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (useUpperCase) {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (useNumbers) {
    chars += '0123456789';
  }

  if (useSpecialChars) {
    chars += '!@#$%^&*()_+-={}[]|\\:;"<>,.?/~`';
  }
// For loop to generate password after the user confirms what the criteria for their password.
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
