//Array of letters, numbers and special characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

//Array of only letters
const charactersLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//Declaring variables for the passwords
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")

//Function that generates two passwords (as arrays) depending on preferred password length and whether to include special characters and numbers
function generatePasswords() {
    let passwordOne = []
    let passwordTwo = []
    let passwordLength = document.getElementById("pword-length").value
    let isChecked = document.getElementById("switchValue").checked;
    
    if (isChecked === false) {
        for (let i = 0; i < passwordLength; i++) {
            let randomChar = charactersLetters[Math.floor(Math.random() * charactersLetters.length)]
            passwordOne.push(randomChar)
        }
        console.log(passwordOne)
        passwordOneEl.textContent = passwordOne.join("")
        
        for (let i = 0; i < passwordLength; i++) {
            let randomChar = charactersLetters[Math.floor(Math.random() * charactersLetters.length)]
            passwordTwo.push(randomChar)
        }
        console.log(passwordTwo)
        passwordTwoEl.textContent = passwordTwo.join("")
        
    } else if (isChecked === true) {
        for (let i = 0; i < passwordLength; i++) {
            let randomChar = characters[Math.floor(Math.random() * characters.length)]
            passwordOne.push(randomChar)
        }
        //console.log(passwordOne)
        passwordOneEl.textContent = passwordOne.join("")
        
        for (let i = 0; i < passwordLength; i++) {
            let randomChar = characters[Math.floor(Math.random() * characters.length)]
            passwordTwo.push(randomChar)
        }
        //console.log(passwordTwo)
        passwordTwoEl.textContent = passwordTwo.join("")
    }
}

// function copyPasswordOne() {
//     let copyText = document.getElementById("password-one").innerText;
//     navigator.clipboard.writeText(copyText);   
// }

