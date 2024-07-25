const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.querySelector("#generateButton")
let passwordOne = document.getElementById("passwordOne")
let passwordTwo = document.getElementById("passwordTwo")

/*generates and displays the random array values*/

function clear(){
    passwordOne.textContent = " "
    passwordTwo.textContent = " "
}

function select(){
    clear()
    for(i = 0; i < 16; i++){
       let randomOne = Math.floor (Math.random() * characters.length ) 
       passwordOne.textContent += characters[randomOne]
       let randomTwo = Math.floor (Math.random() * characters.length)
       passwordTwo.textContent += characters[randomTwo]
        
    }
}
        

